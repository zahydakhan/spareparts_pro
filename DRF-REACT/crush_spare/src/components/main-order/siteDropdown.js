import React, { useEffect, useState } from "react";
import MainOrderTable from "./MainOrderTable";
import SparepartsLoadingComponent from "../ui/SparepartsLoading";
import axiosInstance from "../../axios";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import Select from "@material-ui/core/Select";
import SiteInfo from "./siteInfo";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

function SiteDropdown(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [finalData, setFinalData] = useState([]);

  const [sitesInfo, setSitesInfo] = useState([]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  useEffect(() => {
    axiosInstance.get("parts/quary/").then((res) => {
      setSitesInfo(res.data);
    });
  }, []);

  const [siteName, setSiteName] = React.useState([]);

  const handleChange = (event) => {
    setSiteName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSiteName(value);
  };

  return (
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Sites:</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={siteName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {sitesInfo.map((site) => (
            <MenuItem key={site.id} value={site.site}>
              {site.site}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {sitesInfo
        .filter((site) => siteName.includes(site.site))
        .map((site) => (
          <SiteInfo key={site.id} site={site}></SiteInfo>
        ))}
    </React.Fragment>
  );
}
export default SiteDropdown;

import React, { useState } from "react";
import * as XLSX from "xlsx";
import axiosInstance from "../../axios";
import Button from "@material-ui/core/Button";

class RollerUpload extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      file: "",
      audToUsd: 0.0,
      jsonData: "",
      finalData: "",
    };
  }

  componentDidMount() {
    fetch(`https://api.exchangeratesapi.io/latest?base=USD`)
      .then((res) => res.json())
      .then((rec) => this.setState({ audToUsd: rec["rates"]["AUD"] }));
  }

  handleClick(e) {
    this.refs.fileUploader.click();
  }

  filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    console.log(file);
    this.setState({ file });

    console.log(this.state.file);
  }

  readFile() {
    var f = this.state.file;
    var name = f.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      // evt = on_file_select event
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      /* Update state */
      console.log("Data>>>" + data); // shows that excel data is read
      console.log(this.convertToJson(data)); // shows data in json format
      this.setState({ jsonData: JSON.parse(this.convertToJson(data)) });

      console.log(this.state.jsonData);
      const jsDa = this.state.jsonData;

      this.state.jsonData.map((fr) => {
        {
          fr.aud
            ? (fr.price = fr.aud)
            : (fr.price = parseFloat(fr.usd) * parseFloat(this.state.audToUsd));
        }
        {
          fr.aud ? (fr.aud = fr.aud) : (fr.aud = null);
          fr.usd ? (fr.usd = fr.usd) : (fr.usd = null);
        }
        axiosInstance
          .post(`/roller/admin-roller/create-roller/`, {
            description: fr.description,
            roller_diameter: fr.roller_diameter,
            wall_thickness: fr.wall_thickness,
            roller_length: fr.roller_length,
            shaft_diameter: fr.shaft_diameter,
            bearing: fr.bearing,
            aud: parseFloat(fr.aud),
            usd: parseFloat(fr.usd),
            price: parseFloat(fr.price).toFixed(2),
            vendor_name: fr.vendor_name,
          })
          .then((res) => {
            //history.push("/admin/");
          });
        return fr;
      });
    };
    reader.readAsBinaryString(f);
  }

  convertToJson(csv) {
    var lines = csv.split("\n");

    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length - 1; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }

  render() {
    const classes = this.props;
    return (
      <React.Fragment>
        <input
          type="file"
          id="file"
          ref="fileUploader"
          onChange={this.filePathset.bind(this)}
        />
        <br />
        <Button
          style={{ marginTop: "2em", backgroundColor: "#ffde00" }}
          variant="contained"
          onClick={() => {
            this.readFile();
          }}
        >
          Upload Roller Spare Parts
        </Button>
      </React.Fragment>
    );
  }
}

export default RollerUpload;

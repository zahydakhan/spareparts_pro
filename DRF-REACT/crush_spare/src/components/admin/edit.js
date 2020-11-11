import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { useHistory, useParams } from "react-router-dom";
//MaterialUI
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Create() {
  const history = useHistory();
  const { id } = useParams();
  const initialFormData = Object.freeze({
    id: "",
    title: "",
    slug: "",
    excerpt: "",
    content: "",
  });

  const [formData, updateFormData] = useState(initialFormData);

  useEffect(() => {
    axiosInstance.get("/parts/admin/edit/sparedetail/" + id).then((res) => {
      updateFormData({
        ...formData,
        ["part_number"]: res.data.part_number,
        ["description"]: res.data.description,
        ["vendor_name"]: res.data.vendor_name,
        ["vendor_status"]: res.data.vendor_status,
        ["weight_kg"]: res.data.weight_kg,
        ["machine"]: res.data.machine,
        ["model_number"]: res.data.model_number,
        ["aud"]: res.data.aud,
        ["usd"]: res.data.usd,
        ["price"]: res.data.price,
      });
      console.log(res.data);
    });
  }, [updateFormData]);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axiosInstance.put(`/parts/admin/edit/` + id + "/", {
      part_number: formData.part_number,
      description: formData.description,
      vendor_name: formData.vendor_name,
      vendor_status: formData.vendor_status,
      weight_kg: formData.weight_kg,
      machine: formData.machine,
      model_number: formData.model_number,
      aud: formData.aud,
      usd: formData.usd,
      price: formData.price,
    });
    history.push({
      pathname: "/admin/",
    });
    window.location.reload();
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Edit Post
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="part_number"
                name="part_number"
                autoComplete="part_number"
                value={formData.part_number}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                name="description"
                autoComplete="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={8}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="vendor_name"
                name="vendor_name"
                autoComplete="vendor_name"
                value={formData.vendor_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="vendor_status"
                name="vendor_status"
                autoComplete="vendor_status"
                value={formData.vendor_status}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="weight_kg"
                name="weight_kg"
                autoComplete="weight_kg"
                value={formData.weight_kg}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="machine"
                name="machine"
                autoComplete="machine"
                value={formData.machine}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="model_number"
                name="model_number"
                autoComplete="model_number"
                value={formData.model_number}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="aud"
                name="aud"
                autoComplete="aud"
                value={formData.aud}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="usd"
                name="usd"
                autoComplete="usd"
                value={formData.usd}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="price"
                name="price"
                autoComplete="price"
                value={formData.price}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Update Post
          </Button>
        </form>
      </div>
    </Container>
  );
}

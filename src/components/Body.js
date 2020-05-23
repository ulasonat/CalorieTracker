import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1];
export default function Album() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [ingredients, setIngredients] = useState("");
  const [calorie, setCalorie] = useState("");

  console.log("Idk what I am doing: " + values.amount);

  const getData = (e) => {
    console.log("Clicked one: " + ingredients + calorie);
  };
  useEffect(() => {
    const key = "w7DyjpgMFLEiaPqWTS3UVqrOnJ7zaMsm8Y39JJg0";
    fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${key}&query=${values.amount}`)
      .then(res => res.json())
      .then(response => {
        console.log('works');
        setIngredients("testing desc: " + response.foods[0].description);
        let calorieArray = response.foods[0].foodNutrients.map(el => el.unitName === "KCAL" ? el.value : 0);
        console.log('Array \n');
        console.log(Math.max(...calorieArray));
        setCalorie(Math.max(...calorieArray));
        // response.foods.foodNutrients.map(el => { el.unitName === "KCAL" ? setCalorie(el.value) : setCalorie(0) })
        // console.log("Calorie for the typed food: " + calorie);
      })
      .catch(error => console.log('doesnt work'));
  });

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={12} md={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1540420773420-3366772f4999"
                    title="Image title"
                  />
                  <br />
                  <Container maxWidth="sm">
                    <Typography
                      variant="h5"
                      align="center"
                      color="dark"
                      paragraph
                    >
                      Hey [user], here is how to track your calorie consumption:
                    </Typography>

                    <FormControl fullWidth className={classes.margin}>
                      <InputLabel htmlFor="standard-adornment-amount">
                        Enter a food name
                      </InputLabel>
                      <Input
                        id="standard-adornment-amount"
                        value={values.amount}
                        onChange={handleChange("amount")}
                        placeholder="e.g banana"
                      />
                    </FormControl>
                    <div className={classes.heroButtons}>
                      <Grid container spacing={2} justify="center">
                        <Grid item>
                          <Button onClick={getData} variant="contained" color="primary">
                            Track
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </Container>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}

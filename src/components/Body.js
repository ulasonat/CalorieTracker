import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

const cards = [1];
export default function Album() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: "",
  });
  const [name, setName] = React.useState({
    name: "",
  });
  const [foodArray, setFoodArray] = useState([]);
  let [sumOfCalories, setSumOfCalories] = useState(0);

  const [period, setPeriod] = React.useState('');
  const caloriePerTimePeriod = {
    daily: 400,
    weekly: 800,
    monthly: 1200
  }
  const handleFoodName = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleName = (prop) => (event) => {
    setName({ ...name, [prop]: event.target.value });
    setPeriod('');
    setFoodArray([]);
    setSumOfCalories(0);
  };
  const handlePeriod = (event) => {
    setPeriod(event.target.value);
    setFoodArray([]);
    setSumOfCalories(0);
  };


  const getData = async (e) => {
    e.preventDefault();

    const key = "w7DyjpgMFLEiaPqWTS3UVqrOnJ7zaMsm8Y39JJg0";

    fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${key}&query=${values.amount}`)
      .then(res => res.json())
      .then(response => {

        let desc = response.foods[0].description;
        let calorieArray = response.foods[0].foodNutrients.map(el => el.unitName === "KCAL" ? el.value : 0);
        let calorie = Math.max(...calorieArray);
        let now = new Date();
        let date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
        let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        let ingredients = response.foods[0].ingredients;
        console.log(Math.max(...calorieArray));
        foodArray.push([desc, calorie, date + ' ' + time, ingredients === undefined ? "no data" : ingredients]);
        // console.log('Size of the array is: ' + foodArray.length + " " + " decription: " + desc +
        //   "cal: " + calorie);
        setSumOfCalories(foodArray.reduce((acc, el) => acc + el[1], 0));

      })
      .catch(error => console.log(error));



  };

  return (
    <React.Fragment>
      <CssBaseline />


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
                    Hey {name.name.length === 0 ? "[user]" : name.name}, here is how to track your calorie consumption:
                    </Typography>
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">
                      your name
                      </InputLabel>
                    <Input
                      id="standard-adornment-amount"
                      value={name.name}
                      onChange={handleName("name")}
                      placeholder="name"
                    />
                  </FormControl> <br /> <br />
                  <FormControl fullWidth className={classes.margin}>
                    <InputLabel htmlFor="standard-adornment-amount">
                      food name
                      </InputLabel>
                    <Input
                      id="standard-adornment-amount"
                      value={values.amount}
                      onChange={handleFoodName("amount")}
                      placeholder="e.g banana"
                    />
                  </FormControl><br />
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">time period</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={period}
                      onChange={handlePeriod}
                    >

                      <MenuItem value={"daily"}>Daily</MenuItem>
                      <MenuItem value={"weekly"}>Weekly</MenuItem>
                      <MenuItem value={"monthly"}>Monthly</MenuItem>
                    </Select>
                  </FormControl>
                  {/* <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">calorie amount</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={period}
                      onChange={handlePeriod}
                    >

                      <MenuItem value={"daily"}>Daily</MenuItem>
                      <MenuItem value={"weekly"}>Weekly</MenuItem>
                      <MenuItem value={"monthly"}>Monthly</MenuItem>
                    </Select>
                  </FormControl> <br /> */}
                  <Typography style={{ fontSize: "100%", color: "grey" }}>
                    {period.length !== 0 ? `Limit for ${period} calorie: ${caloriePerTimePeriod[period] + " (in kcal)"}` : null}



                  </Typography>
                  <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                      <Grid item>
                        <Button onClick={getData} variant="contained" color="primary" disabled={values.amount.length === 0 || period.length === 0 || name.name.length === 0}>
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
        <br></br>
        <Typography
          variant="h5"
          align="center"
          color="dark"
          paragraph
        >

          <p style={{ display: sumOfCalories !== 0 ? "block" : "none" }}>Sum of the calories: <span style={{ color: sumOfCalories > caloriePerTimePeriod[period] ? "green" : "black" }}>{sumOfCalories}</span> (in kcal)</p>


          {sumOfCalories > caloriePerTimePeriod[period] ? `Congrats! You reached your ${period} limit ` : null}
          {sumOfCalories < caloriePerTimePeriod[period] && sumOfCalories !== 0 ? `you need ${caloriePerTimePeriod[period] - sumOfCalories} kcal to reach your goal!` : null}
        </Typography>
        {foodArray.map((el, index) => {
          return <Card key={index} className={classes.root} variant="outlined" style={{ margin: "2%" }}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Added: {el[2]}
              </Typography>
              <Typography variant="body2" component="h1">
                <h2>Description: {el[0]}</h2>
              </Typography>
              <Typography variant="body2" component="p">
                <h2>KCAL (per 100g): <span style={{ color: 'blue' }}>{el[1]}</span></h2>
              </Typography>
              <Typography variant="body2" component="p">
                <h2>Key Ingredients: </h2>{el[3]}
                <br />

              </Typography>
            </CardContent>

          </Card>

        })}

      </Container>

      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
}

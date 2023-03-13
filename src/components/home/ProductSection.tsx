import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import React from "react";
import laptop3 from "../../assets/img/data.png";
import laptop2 from "../../assets/img/stock.jpg";

const features = [
  {
    title: "Industry best practice solutions",
    desc:
      "Connected Risk provides offerings to help with vendor risk management, business continuity management, AML risk management, gifts and entertainment, and IT risk management."
  },
  {
    title: "Uniform view of risk processes",
    desc:
      "Tailor your workflows and automate monitoring capabilities to drive a consistent application of your risk assessment processes."
  },
  {
    title: "Effective workflow interaction",
    desc:
      "Manage alerts with interactive and detailed charts, updates, reviews, and approvals viewable through configurable screens."
  },
  {
    title: "Streamline data from legacy solutions",
    desc:
      "Integrate or replace with a single reference point, mapping different data sources to a common, user-defined standard."
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(10, 10),
    background: "rgb(240, 235, 230)",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(10, 2)
    }
  },
  cardImage: {
    position: "relative",
    height: 300,
    minWidth: "100%"
  },
  subTitle: {
    fontSize: 18,
    [theme.breakpoints.up("sm")]: {
      fontSize: 20
    }
  },
  superTitle: {
    fontWeight: 600,
    fontSize: "14px",
    marginBottom: theme.spacing(2),
    textTransform: "uppercase"
  }
}));

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <Box style={{ position: "relative" }} mb={10}>
            <Card style={{ height: 300, width: "85%" }}>
              <CardMedia
                component="img"
                src={laptop2}
                className={classes.cardImage}
              />
            </Card>
            <Card
              style={{ position: "absolute", height: 300, top: 50, left: 50 }}
            >
              <CardMedia
                component="img"
                src={laptop3}
                className={classes.cardImage}
              />
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid item xs={12} md={12} style={{ padding: "0px 10px 0px" }}>
            <Box mb={2}>
              <div className={classes.superTitle}>{"Product"}</div>
              <Typography variant="h4" style={{ padding: "0px 0px 20px" }}>
                <b>{"Hyperion Risk Analytics"}</b>
              </Typography>
              <div className={classes.subTitle}>
                {
                  "Connecting internal and external information from disparate sources to help inform strategic decision-making with a holistic view of the risks that matter to you."
                }
              </div>
            </Box>
          </Grid>

          <Grid container justifyContent="space-between">
            {features.map((item, i) => (
              <Grid item xs={12} md={6} style={{ padding: "0px 10px" }} key={i}>
                <Typography variant="h6">
                  <b>{item.title}</b>
                </Typography>
                <Typography paragraph variant="h6">
                  {item.desc}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Box style={{ textAlign: "right" }}>
            <Button color="primary">
              <ArrowRightIcon />
              Request details
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

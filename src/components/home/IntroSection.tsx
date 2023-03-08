import {
  Card,
  CardMedia,
  Container,
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import image1 from "../../assets/img/data.png";
import image3 from "../../assets/img/digital.jpg";
import image2 from "../../assets/img/stock.jpg";

const useStyles = makeStyles(theme => ({
  container: {
    background: "#212121",
    padding: theme.spacing(8, 0),
    color: "white"
  },
  title: {
    margin: "0 0 30px"
  },
  subTitle: {
    fontWeight: 200,
    fontSize: "20px",
    marginBottom: theme.spacing(2),
    //textAlign: "center",
    align: "center"
  },
  desc: {
    fontWeight: 200,
    fontSize: "18px",
    marginTop: theme.spacing(2),
    align: "center"
  },
  card: {
    position: "relative",
    height: 200,
    margin: 10,
    [theme.breakpoints.down("xs")]: {
      marginTop: 30
    }
  },
  cardImage: {
    position: "relative",
    height: 200,
    minWidth: "100%"
  },
  overlay: {
    position: "absolute",
    background: "rgba(0,0,0, 0.2)",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    height: "100%",
    color: "white",
    display: "flex",
    alignItems: "flex-end"
  }
}));
const items = [
  {
    title: "Analytics",
    desc:
      "Raising the bar on ‘big data’ and analytics is big business - and getting bigger - as it is key in the decision-making process. With our analytics and analytics tools, we help turn data into actionable insights.",
    image: image1
  },
  {
    title: "Risk Management",
    desc:
      "The greatest driver of innovation is freedom of access – to the best data, smart tools, and human expertise. That’s why we invest in our community-driven open platform.",
    image: image2
  },
  {
    title: "Data and technology",
    desc:
      "Access to multiple data sets integrated with high-performance products according to your needs. Our goal is to give you more information and time to test strategies and optimize performance.",
    image: image3
  }
];

export default function IntroSection() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4" align="center" className={classes.title}>
            Our <b>data</b> to drive your <b>performance</b>
          </Typography>
          <div className={classes.subTitle} >
            We refine and deploy the world's data to power and connect global
            financial communities, serving more than 40,000 institutions in
            approximately 190 countries.
          </div>
        </Grid>
        <Grid container justifyContent="center">
          {items.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card className={classes.card} elevation={0}>
                <CardMedia
                  component="img"
                  src={item.image}
                  className={classes.cardImage}
                />
                <div className={classes.overlay}>
                  <Grid>
                    <Typography variant="h6" style={{ padding: 10 }}>
                      {item.title}
                    </Typography>
                  </Grid>
                </div>
              </Card>
              <div className={classes.desc}>
                {item.desc}
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

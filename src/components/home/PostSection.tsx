/* eslint-disable array-callback-return */
import {
  Card,
  CardActionArea,
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
    background: "rgb(240, 235, 230)",
    padding: theme.spacing(8, 0)
  },
  card: {
    position: "relative",
    height: 300
  },
  cardImage: {
    position: "relative",
    height: 300,
    minWidth: "100%"
  },
  overlay: {
    position: "absolute",
    background: "rgba(0,0,0, 0.45)",
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    height: 300,
    color: "white",
    display: "flex",
    alignItems: "flex-top"
  },
  title: {
    margin: "0 0 30px"
  },
  superTitle: {
    fontWeight: 600,
    fontSize: "14px",
    marginBottom: theme.spacing(2),
    textTransform: "uppercase",
    padding: 10
  },
  superTitleCenter: {
    fontWeight: 600,
    fontSize: "14px",
    marginBottom: theme.spacing(2),
    textTransform: "uppercase",
    padding: 10,
    align: "center"
  },
  subTitle: {
    fontWeight: 400,
    fontSize: "20px",
    marginBottom: theme.spacing(2)
  },
  date: {
    fontWeight: 200,
    fontSize: "14px",
    marginBottom: theme.spacing(2),
    padding: 10
  }
}));

const items = [
  {
    category: "Data",
    title: "Commodity prices, margin debt & inflation",
    desc:
      "the surge in commodity prices and the rise in the use of margin debt to fuel the US equity rally. Many commodity prices have risen over 50% in the last year,  fueling fears about future inflation, whilst a record surge in margin debt over the last couple of months has stoked fears that the equity market may now be rising on excessive leverage.",
    image: image1,
    date: "May 3, 2021"
  },
  {
    category: "Regulation",
    title: "USD cash fallbacks: A key component of the LIBOR transition",
    desc:
      "With the most widely used tenors of USD LIBOR subject to cessation immediately following publication on 30 June 2023, how can fallback rates support a smooth transition in the cash markets?",
    image: image2,
    date: "May 4, 2021"
  },
  {
    category: "Cloud",
    title: "Transforming market data strategy with the cloud",
    desc:
      "Market data managers and their teams are beginning to recognise the extraordinary benefits of moving from on-premise ticker plants into the cloud.",
    image: image3,
    date: "May 5, 2021"
  }
];

export default function PostSection() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.superTitleCenter}>
            Insights
          </div>
          <Typography variant="h4" align="center" className={classes.title}>
            Latest <b>insights</b>
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          {items.slice(0, 2).map((item, i) => {
            if (i === 0) {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={7}
                  style={{ padding: 10 }}
                  key={i}
                >
                  <Card className={classes.card} elevation={0}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        src={item.image}
                        className={classes.cardImage}
                      />
                      <div className={classes.overlay}>
                        <Grid style={{ padding: 25 }}>
                          <div className={classes.superTitle}>
                            {item.category}
                          </div>
                          <Typography variant="h6" style={{ padding: 10 }}>
                            {item.title}
                          </Typography>
                          {/* <div className={classes.desc}>{item.desc}</div> */}
                          <div className={classes.date}>{item.date}</div>
                        </Grid>
                      </div>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            } else {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={5}
                  style={{ padding: 10 }}
                  key={i}
                >
                  <Card className={classes.card} elevation={0}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        src={item.image}
                        className={classes.cardImage}
                      />
                      <div className={classes.overlay}>
                        <Grid style={{ padding: 25 }}>
                          <div className={classes.superTitle}>
                            {item.category}
                          </div>
                          <Typography variant="h6" style={{ padding: 10 }}>
                            {item.title}
                          </Typography>
                          <div className={classes.date}>{item.date}</div>
                        </Grid>
                      </div>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            }
          })}
        </Grid>
      </Container>
    </div>
  );
}

/* eslint-disable array-callback-return */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React from "react";

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(8, 0)
  },
  root: {
    minHeight: 250
  },
  card: {
    position: "relative",
    height: 300
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
    textTransform: "uppercase"
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

export default function ContactSection() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
            <Typography variant="h4" className={classes.title}>
              <b>We're here for you</b>
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              Have questions? We're here to help. Talk to a real person and get
              the answers that matter most.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.superTitle}
                  color="textSecondary"
                  gutterBottom
                >
                  Contact
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ paddingBottom: 10 }}
                >
                  Contact us
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{ paddingBottom: 10 }}
                >
                  Monday to Friday, 9am to 6pm PST
                </Typography>
                <Typography variant="h6" component="p">
                  Call: <b>+1 431-778-7105</b>
                  <br />
                  Email: <b>support@hyperion.com</b>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.superTitle}
                  color="textSecondary"
                  gutterBottom
                >
                  Customer Support
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ paddingBottom: 10 }}
                >
                  Find FAQ, technical support and more.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  View All <ArrowForwardIcon color="primary" />
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} style={{ padding: 10 }}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.superTitle}
                  color="textSecondary"
                  gutterBottom
                >
                  Client Access
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ paddingBottom: 10 }}
                >
                  Already a Hyperion client? Find your product login.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  Product logins <ArrowForwardIcon color="primary" />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

import { Box, Container, Grid, Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AssessmentIcon from "@material-ui/icons/Assessment";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import BusinessIcon from "@material-ui/icons/Business";
import React from "react";
const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(10, 0, 8)
  },
  title: {
    padding: theme.spacing(0, 0, 2)
  },
  superTitle: {
    fontWeight: 600,
    fontSize: "14px",
    marginBottom: theme.spacing(2),
    textTransform: "uppercase"
  },
  subtitle: {
    fontSize: 12,
    [theme.breakpoints.up("sm")]: {
      fontSize: 14
    }
  },
  link: {
    fontWeight: 600,
    color: "#404040",
    fontSize: "16px",
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    align: "center",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}));

const items = [
  {
    title: "Investment banking",
    image: <AccountBalanceIcon color="primary" style={{ fontSize: 120 }} />
  },
  {
    title: "Investing & advisory",
    image: <BusinessIcon color="primary" style={{ fontSize: 120 }} />
  },
  {
    title: "Trading",
    image: <AttachMoneyIcon color="primary" style={{ fontSize: 120 }} />
  },
  {
    title: "Risk management",
    image: <AssessmentIcon color="primary" style={{ fontSize: 120 }} />
  }
];

function preventDefault(event: any) {
  event.preventDefault();
}

export default function DemoSection() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
        <div className={classes.superTitle}>{"Clients"}</div>
        <Box mt={2}>
          <Typography variant="h4" className={classes.title}>
            <b>Solutions for every financial sector</b>
          </Typography>

          <Link href="#" onClick={preventDefault} className={classes.link}>
            How Hyperion Analytics can help you{" "}
            <ArrowForwardIcon color="primary" />
          </Link>
        </Box>
        <Grid container justifyContent="space-between">
          {items.map((item, f) => (
            <Grid
              item
              xs={6}
              sm={5}
              md={3}
              style={{ padding: "0px 10px" }}
              key={f}
            >
              <Typography paragraph variant="h6">
                {item.image}
              </Typography>
              <Typography variant="h6">
                <b>{item.title}</b>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

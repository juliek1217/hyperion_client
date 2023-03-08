import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Header from "../../components/Header";
import ProductSection from "../../components/home/ProductSection";
import PricingSection from "../../components/pages/Pricing";
const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 60
  }
}));

export default function Product() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <ProductSection />
      <Container maxWidth="lg" className={classes.container}>
        <h1>- Dashboard</h1>
        <h1>- Data API</h1>
        <PricingSection />
      </Container>
    </>
  );
}

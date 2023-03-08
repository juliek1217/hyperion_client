// this component for about page
import Container from "@material-ui/core/Container";
import React, { Component } from "react";
import Header from "../../components/Header";
import Blog from "../../components/pages/Blog";
export default class Insights extends Component {
  render() {
    return (
      <>
        <Header />
        <Container maxWidth="lg" style={{ paddingTop: 120 }}>
          <Blog />
        </Container>
      </>
    );
  }
}

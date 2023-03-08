// this component for about page
import Container from "@material-ui/core/Container";
import React, { Component } from "react";
import Header from "../../components/Header";

export default class Request extends Component {
  render() {
    return (
      <>
        <Header />
        <Container maxWidth="lg" style={{ paddingTop: 60 }}>
          <h1>This is Request Page</h1>
        </Container>
      </>
    );
  }
}

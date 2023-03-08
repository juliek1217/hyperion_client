import Container from "@material-ui/core/Container";
import React, { Component } from "react";
import Header from "../../components/Header";

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <Container component="main">
          <div>
            <h1>This is About Page</h1>
          </div>
        </Container>
      </>
    );
  }
}

import React, { FC } from 'react';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 60
  }
}));

export const Protected: FC = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Container maxWidth="lg" className={classes.container}>
        <h1>This component is protected</h1>
      </Container>
    </>
  );
};

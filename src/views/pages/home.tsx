import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import LandingImg from "../../assets/img/main.jpg";
import ContactSection from "../../components/home/ContactSection";
import IntroSection from "../../components/home/IntroSection";
import PostSection from "../../components/home/PostSection";
import ProductSection from "../../components/home/ProductSection";
import SolutionSection from "../../components/home/SolutionSection";
import SubscriptionSection from "../../components/home/SubscriptionSection";
import React, { FC } from 'react';
/** Layout components **/
import Header from "../../components/Header";

const useStyles = makeStyles(theme => ({
    landing: {
        width: "100%",
        height: "620px",
        overflow: "hidden",
        padding: "0",
        position: "absolute",
        zIndex: -1
    },
    landingImg: {
        minWidth: "100%",
        top: "-400px",
        overflow: "hidden",
        padding: "0",
        position: "relative"
    },
    landingText: {
        color: "white",
        padding: theme.spacing(6, 0),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(6, 4)
        }
    },
    landingHeadline: {
        fontWeight: 200,
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(2),
        fontSize: "20px",
        [theme.breakpoints.up("md")]: {
            fontSize: "50px"
        }
    },
    dividerDarkHorizon: {
        alignSelf: "stretch",
        height: 0,
        width: "100%",
        borderLeft: "none",
        borderRight: "none",
        borderTop: "solid #444 1px",
        borderBottom: "none",
        margin: 0,
        flexShrink: 0,
        backgroundColor: "#212121"
    }
}));

const ColorButtonEmpty = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        "&:hover": {
            backgroundColor: purple[900]
        }
    }
}))(Button);


export default function Home() {
    const classes = useStyles();

    return (
        <>
            <Header />
            <main>
                <div className={classes.landing} >
                    <img className={classes.landingImg} src={LandingImg} alt="landing" />
                </div>
                <Container className={classes.landingText} >
                    <Grid item xs={11} sm={8} md={7} lg={6} >
                        <Typography className={classes.landingHeadline} paragraph >
                            <b>Hyperion Financial Technologies</b> for Analysts and Portfolio Managers
                        </Typography>
                        <Typography variant="h6" >
                            <Box style={{ textAlign: "left" }}>
                                <ColorButtonEmpty>
                                    <ArrowRightIcon />
                                    Learn more
                                </ColorButtonEmpty>
                            </Box>
                        </Typography>
                    </Grid>
                </Container>

                <SubscriptionSection />
                <hr className={classes.dividerDarkHorizon} />
                <IntroSection />
                <ProductSection />
                <SolutionSection />
                <PostSection />
                <ContactSection />
            </main>
        </>
    );
}

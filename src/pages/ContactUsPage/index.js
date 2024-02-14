import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ContactUsLayout from "../../Layouts/ContactUsLayout";
import ContactDetails from "../../sections/ContactUs/ContactDetails";
import ContactForm from "../../sections/ContactUs/ContactForm";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(16),
  },
}));

const ContactUsPage = () => {
  const classes = useStyles();
  return (
    <ContactUsLayout title="Contact Us">
      <Container className={classes.root}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <ContactDetails />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </ContactUsLayout>
  );
};

export default ContactUsPage;

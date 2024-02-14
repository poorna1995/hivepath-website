import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import PrimaryButton from "../../components/common/Buttons/PrimaryButton";
import InputField from "../../components/common/InputField";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    paddingTop: theme.spacing(2),
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  return (
    <div>
      <Paper>
        <Typography
          className={classes.title}
          variant="h3"
          component="h1"
          align="center"
          color="textSecondary"
        >
          Get In Touch with Us
        </Typography>

        <form className={classes.formContainer}>
          <InputField fullWidth label="Name" />
          <InputField fullWidth label="Contact Number" />
          <InputField fullWidth type="email" label="Work Email Address" />

          <InputField fullWidth label="Designation" placeholder="Designation" />
          <InputField
            fullWidth
            multiline
            rows={4}
            type="textarea"
            label="Message"
          />
          <PrimaryButton style={{ marginTop: "16px" }}>Submit</PrimaryButton>
        </form>
      </Paper>
    </div>
  );
};

export default ContactForm;

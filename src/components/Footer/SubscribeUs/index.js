import React from "react";
import rightImg from "../../../assets/common/backgrounds/right-bg.png";
import leftImg from "../../../assets/common/backgrounds/left-bg.png";
import { Typography, Container, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import arrow from "../../../assets/common/footer/arrow.png";
import InputField from "../../common/InputField";
import SendButton from "../../common/Buttons/SendButton";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 0,
    height: "320px",
    borderRadius: "26px",
    marginBottom: theme.spacing(4),
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "360px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "450px",
    },
  },
  title: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontWeight: "bold",
  },
  backgroundImages: {
    height: "inherit",
    width: "inherit",
    zIndex: 1,
    opacity: 0.5,
    borderRadius: "inherit",
  },
  form: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    position: "absolute",
    top: "50px",
    zIndex: 3,
    [theme.breakpoints.down("sm")]: {
      top: "10px",
    },
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    alignSelf: "center",
  },
  arrow: {
    position: "absolute",
    top: "-20px",
    left: "-50px",
    height: "200px",
    width: "250px",
    zIndex: 2,
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  background: {
    top: "0%",
    background: " #1d1d1f 0% 0% no-repeat padding-box",
    opacity: "1",
    width: "100%",
    height: "100%",
    borderRadius: "26px",
    zIndex: 1,
  },
  leftBg: {
    height: "100%",
    width: "50%",
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.3,
    zIndex: 1,
    objectFit: "cover",
  },
  rightBg: {
    height: "100%",
    position: "absolute",
    width: "50%",
    right: 0,
    top: 0,
    opacity: 0.3,
    zIndex: 1,
    objectFit: "cover",
  },
  inputContainer: {
    display: "flex",

    alignItems: "center",
  },
}));

const SubscribeUs = ({ isArrow, maxWidth, onClose }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");

  const [success, setSuccess] = useState(false);
  const [successTitle, setSuccessTitle] = useState("");
  const [error, setError] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  
  const disabledOrNot = !name || !email || !designation;
  const resetForm = () => {
    setName("");
    setEmail("");
    setDesignation("");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      mail_type: "simple_sign_in",
      designation: designation,
      emails: [email],
    };
    // console.log(formData);
    fetch(`${process.env.REACT_APP_EMAIL_API_URL}`, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
        // setSending(true);
      })
      .then((json) => {
        // console.log(json.status);
        if (json.status === "success") {
          setSuccessTitle("Sign up successful!");
          return setSuccess(true);
        } else  {
          setErrorTitle(json.message);
          return setError(true);
        }
      });
    resetForm();
  };
  return (
    <Box
      maxWidth={`${maxWidth || "70%"} `}
      minWidth="320px"
      margin="auto"
      id="subscribe"
      className={classes.root}
    >
      {isArrow && <img src={arrow} alt="" className={classes.arrow} />}
      <img src={leftImg} alt="" className={classes.leftBg} />
      <img src={rightImg} alt="" className={classes.rightBg} />
      <Container className={classes.background}></Container>

      <Container maxwidth="sm" className={classes.content}>
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          className={classes.title}
        >
          Sign up for Early Access
        </Typography>

        <Container maxWidth="sm">
          <form className={classes.form} onSubmit={handleFormSubmit}>
            <Grid
              container
              alignItems="center"
              className={classes.inputContainer}
            >
              <Grid item xs={12} md={4} sm={6}>
                <InputField
                  fullWidth
                  required
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <InputField
                  required
                  type="email"
                  fullWidth
                  label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <InputField
                  required
                  fullWidth
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  label="Designation"
                />
              </Grid>
            </Grid>
            <SendButton
              disabled={disabledOrNot}
              style={
                disabledOrNot
                  ? { opacity: 0.3, marginTop: "16px", cursor: "not-allowed" }
                  : {
                      opacity: 1,
                      marginTop: "16px",
                    }
              }
              type="submit"
              success={success}
              title="Sign up"
              successTitle={successTitle}
              error={error}
              errorTitle={`${errorTitle} error. Please Retry.`}
            />
          </form>
        </Container>
      </Container>
    </Box>
  );
};

export default SubscribeUs;

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import InputField from "../../../components/common/InputField";
import ContactUsLayout from "../../../Layouts/ContactUsLayout";
import Markdown from "../../../components/Markdown";
import { jobsData } from "../../../data/careers/jobsData";

const useStyles = makeStyles((theme) => ({
  root: {},
  titleBox: {
    paddingTop: theme.spacing(8),
    background: "#1d1d1f",
    paddingBottom: theme.spacing(8),
  },
  jobTitle: {
    fontWeight: "bold",
    marginLeft: "16px",
    marginBottom: "16px",
  },
  location: {
    fontWeight: "bold",
    marginLeft: "16px",
  },
  applyButton: {
    textTransform:'Capitalize',
    "&:hover": {
      background:
        "transparent linear-gradient(90deg, #4669b2 0%, #5985c4 100%) 0% 0%  no-repeat padding-box",
    },
  },
  jobDescription: {},
  jobDesTitle: {
    marginTop: theme.spacing(2),
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  pageSection: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
}));

const JobDescriptionPage = () => {
  const classes = useStyles();
  const [post, setPost] = useState("");

  const { fileName } = useParams();

  const [title, setTitle] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [responseMessage, setResponseMessage] = useState("");

  const [fileToUpload, setFileToUpload] = useState();
  const [disabled, setDisabled] = useState(true);
  const [fileUploadedName, setFileUploadedName] = useState("");
  

  let disableApplybutton =
    !firstName || !lastName || !email || !mobileNumber || !fileUploadedName;
 
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNumber("");
    setFileUploadedName("");
    setFileToUpload();
    setDisabled(true)
    disableApplybutton =
      !firstName || !lastName || !email || !mobileNumber || !fileUploadedName;
  };

  const [snackbarOpen, setSnackBarOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackBarOpen(false);
  };
  useEffect(() => {
    import(`../../../content/jobs/${fileName}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) =>
            // console.log(res)
            setPost(res)
          )
          .catch((err) => {
            // console.log(err)
          });
      })
      .catch((err) => {
        // console.log(err)
      });
  });

  useEffect(() => {
    const result = jobsData.filter((item) => item.fileName === fileName);
    const blogPost = result[0];
    setTitle(blogPost.title);
  }, [fileName]);

  const handleChange = (e) => {
    setFileToUpload(e.target.files[0]);
    setDisabled(false);
  };

  // function to upload file to the server
  const handleFileUpload = () => {
    const formData = new FormData();

    formData.append("file", fileToUpload);

    fetch("https://utils.hivepath.io/api/uploadFile", {
      method: "POST",

      body: formData,
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success") setFileUploadedName(json.resume_name);

        // console.log(json);
      })
      .catch((error) =>{
        //  console.log(error)
        });
  };
  // function to submit the reponse
  const handleApplicationSubmit = (e) => {
    e.preventDefault();

   
    console.log(firstName, lastName, email, mobileNumber, fileUploadedName);
    fetch("https://utils.hivepath.io/api/websiteNotification", {
      method: "POST",
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: mobileNumber,
        resume_name: fileUploadedName,
        designation: fileName,
        api_action: "resume_submission",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success") {
          setSnackBarOpen(true);
          resetForm();
          setResponseMessage(json.message);
        }
        console.log(json);
      })
      .catch((error) => console.log(error));
  };

  return (
    <ContactUsLayout title={title}>
      <div style={{ paddingTop: "64px" }}></div>
      <Box className={classes.titleBox}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={9} sm={9}>
              <Typography variant="h4" className={classes.jobTitle}>
                {title}
              </Typography>
              <Typography variant="body1" className={classes.location}>
                <FaMapMarkerAlt /> Remote Work
              </Typography>
            </Grid>
            <Grid item xs={12} md={3} sm={3}>
              <Button variant="outlined" className={classes.applyButton}>
                Apply Now
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container>
          <Grid item xs={12} md={9}>
            <Container className={classes.pageSection}>
              <Typography variant="h4" className={classes.jobDesTitle}>
                Job Description
              </Typography>
            </Container>
            <Container className={classes.pageSection}>
              <Markdown>{post}</Markdown>
            </Container>
          </Grid>
          <Grid item xs={12} md={3}>
            <Container style={{ marginTop: "32px" }}>
              <Typography>Share This job</Typography>
              <div
                style={{
                  marginTop: "16px",
                }}
              >
                {socialLinks.map((item) => {
                  const { icon: Icon } = item;
                  return (
                    <Icon
                      key={Icon}
                      style={{ marginRight: "16px", fontSize: "20px" }}
                    />
                  );
                })}
              </div>
            </Container>
          </Grid>
        </Grid>
        <Container style={{ marginTop: "32px" }}>
          <Grid item xs={12} md={9}>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", marginBottom: "16px" }}
            >
              Apply For job
            </Typography>
            <form onSubmit={handleApplicationSubmit}>
              <div style={{ display: "flex" }}>
                <InputField
                  required
                  fullWidth
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  label="First Name"
                />
                <InputField
                  required
                  fullWidth
                  value={lastName}
                  placeholder="Last Name"
                  label="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div style={{ display: "flex" }}>
                <InputField
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  placeholder="Email"
                  label="Email"
                />
                <InputField
                  required
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  fullWidth
                  placeholder="Phone Number"
                  label="Phone Number"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "16px",
                  marginTop: "16px",
                }}
              >
                <Typography style={{ marginRight: "16px" }}>Resume</Typography>
                <input
                  required
                  onChange={handleChange}
                  type="file"
                  placeholder="Attach File"
                  label="Attach File"
                />
                <Button
                  disabled={disabled}
                  onClick={handleFileUpload}
                  variant="outlined"
                  className={classes.applyButton}
                  // color="primary"
                >
                  Upload File
                </Button>
              </div>
              <Button
                type="submit"
                variant="outlined"
                className={classes.applyButton}
                disabled={disableApplybutton}
                style={{ width: "200px", textTransform: "capitalize" }}
              >
                Apply
              </Button>
            </form>
            {/* on submission of the form show a snackbar containing the response */}
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={5000}
              onClose={handleClose}
              message={responseMessage}
            />
          </Grid>
        </Container>
      </Container>
    </ContactUsLayout>
  );
};

export default JobDescriptionPage;

const socialLinks = [
  {
    icon: FaLinkedin,
  },
  {
    icon: FaInstagram,
  },
  {
    icon: FaTwitter,
  },
  {
    icon: FaFacebookF,
  },
  {
    icon: FaLink,
  },
];

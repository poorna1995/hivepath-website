import { Container, Typography } from "@material-ui/core";
import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <Container>
      <div style={{ marginTop: "32px" }}>
        <Typography
          variant="h3"
          style={{ fontWeight: "bold" }}
          color="textSecondary"
        >
          Contact Us
        </Typography>
        <Typography style={{ opacity: 0.87, marginTop: "24px" }}>
        Looking for valid answers to your questions? Don't worry!<br />
        Just drop us an email, and our team will make sure to find satisfactory solutions to all your problems instantly. 
        </Typography>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "24px" }}>
        <FaEnvelope style={{ marginRight: "12px" }} />
        <Typography
          variant="h5"
          style={{ fontWeight: "bold" }}
          color="textSecondary"
        >
          General Enquiry:
        </Typography>
      </div>
      <ul style={{ opacity: 0.87, listStyleType: "none" }}>
        <li>admin@hivepath.io</li>
      </ul>

      <div style={{ display: "flex", alignItems: "center", marginTop: "24px" }}>
        <FaPhoneAlt style={{ marginRight: "12px" }} />
        <Typography
          variant="h5"
          style={{ fontWeight: "bold" }}
          color="textSecondary"
        >
          Contact
        </Typography>
      </div>
      <ul style={{ opacity: 0.87, listStyleType: "none" }}>
        <li>+91 89854004250</li>
      </ul>
    </Container>
  );
};

export default ContactDetails;

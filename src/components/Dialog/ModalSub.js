import { Container, IconButton, Modal, makeStyles } from "@material-ui/core";
import React from "react";
import SubscribeUs from "../Footer/SubscribeUs";
import { MdClose } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20vh",
    position: "relative",
    // width:'100%',
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.down("xs")]: {
      maxWidth:'320px'
    }
  },
  closeButton: {
    position: "absolute",
    top: "0px",
    right: "20px",
    zIndex: 5,
    [theme.breakpoints.down("sm")]: {
      right: "0px",
    },

    "&:hover": {
      background: "transparent",
    },
  },
}));
const ModalSub = ({ open, handleClose }) => {
  const classes = useStyles();
  return (
    <Modal open={open} onClose={handleClose}>
      <Container maxWidth="md" className={classes.container}>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <MdClose />
        </IconButton>
        <SubscribeUs maxWidth="100%" />
      </Container>
    </Modal>
  );
};

export default ModalSub;

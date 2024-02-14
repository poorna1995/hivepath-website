import { Slide, useScrollTrigger } from "@material-ui/core";
import React from "react";

const HideNavBar = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return <Slide in={!trigger}>{children}</Slide>;
};

export default HideNavBar;

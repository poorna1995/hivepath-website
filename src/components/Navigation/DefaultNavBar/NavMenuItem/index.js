import { MenuItem } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import "./linksStyles.scss";

const NavMenuItem = ({ Component, ...props }) => {
  useEffect(() => {
    document.querySelectorAll(".link").forEach((link) => {
      link.innerHTML =
        "<div><span>" +
        link.textContent.trim().split("").join("</span><span>") +
        "</span></div>";
      link
        .querySelectorAll("span")
        .forEach(
          (s) =>
            (s.innerHTML = s.textContent === " " ? "&nbsp;" : s.textContent)
        );
    });
  });
  return (
    <MenuItem component={Component} className="link" {...props}>
      {props?.children}
    </MenuItem>
  );
};

export default NavMenuItem;

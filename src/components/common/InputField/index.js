import { TextField } from "@material-ui/core";

import React from "react";

const InputField = (props) => {
  return (
    <div style={{ padding: "8px", width: "100%" }}>
      <TextField variant="outlined" label={props.label} {...props} />
    </div>
  );
};

export default InputField;

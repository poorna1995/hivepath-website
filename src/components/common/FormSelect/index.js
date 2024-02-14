import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const CssFormSelect = withStyles({
  // MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input
  // MuiSelect-nativeInput
  // MuiFormControl-root MuiFormControl-fullWidth
  // MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-filled
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
  },
})(Select);

const FormSelect = ({
  options,
  defaultValue,
  handleChange,
  label,
  ...otherProps
}) => {
  //   if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{label}</InputLabel>

      <CssFormSelect
        label={label}
        fullWidth
        value={defaultValue}
        onChange={handleChange}
        {...otherProps}
      >
        {options?.map((option, index) => {
          const { value, name } = option;

          return (
            <MenuItem key={index} value={value}>
              {name}
            </MenuItem>
          );
        })}
      </CssFormSelect>
    </FormControl>
  );
};

export default FormSelect;

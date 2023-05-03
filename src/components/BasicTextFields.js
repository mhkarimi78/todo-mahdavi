import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({
  label,
  value,
  setValue,
  width = "25ch",
  placeholder = "",
  focused = false,
}) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: width },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        placeholder={placeholder}
        value={value}
        label={label}
        variant="outlined"
        autoFocus={focused}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
}

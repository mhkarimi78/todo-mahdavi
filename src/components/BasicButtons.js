import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons({ label, onClick }) {
  return (
    <Stack>
      <Button variant="contained" onClick={onClick}>
        {label}
      </Button>
    </Stack>
  );
}

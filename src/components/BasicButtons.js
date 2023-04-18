import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons({ label, onClick, width = "auto" }) {
  return (
    <Stack>
      <Button
        variant="contained"
        style={{
          width: { width },
        }}
        onClick={onClick}
      >
        {label}
      </Button>
    </Stack>
  );
}

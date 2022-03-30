import "../App.css";
import React, { useState } from "react";
import { Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";

const PasswordEdit = ({ label, db, onSave }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const focusOut = (e) => {
    if (onSave) onSave(db, value);
  };

  return (
    <Stack direction="column">
      <label style={{ marginBottom: "5px" }}>{label}</label>
      <Box display="flex">
        <TextField
          sx={{ width: "300px" }}
          variant="outlined"
          type={showPassword ? "text" : "password"}
          size="small"
          db=""
          onSave={onSave}
          value={value}
          onChange={onChange}
          onBlur={focusOut}
        />
        <Box my="auto" ml={1}>
          <VisibilityIcon
            style={{ color: "Silver" }}
            onMouseOver={() => setShowPassword(true)}
            onMouseLeave={() => setShowPassword(false)}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default PasswordEdit;
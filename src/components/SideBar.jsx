import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selected = "New";
const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", mid: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            color: "white",
            background: category.name === selected && "#FC1503",
          }}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;

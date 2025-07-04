import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectCategory, setSelectCategory }) => {
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
            background: category.name === selectCategory && "#FC1503",
          }}
          onClick={() => setSelectCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectCategory ? "white" : "red",
              marginRight: 4,
            }}
          >
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;

import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../components";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectCategory, setSelectCategory] = useState("New");

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectCategory}`);
  }, [selectCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 JS Media
        </Typography>
      </Box>

      <Box p={2} sx={{ flex: 2 }}>
        <Typography fontWeight="bold" sx={{ color: "white" }}>
          {selectCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
      </Box>
      <Videos />
    </Stack>
  );
};

export default Feed;

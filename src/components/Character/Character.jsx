import React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";

const Character = ({ character }) => {
  return (
    <Box
      sx={{
        padding: "15px",
      }}
    >
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        {character.name}
      </Typography>
      <Avatar
        alt="Remy Sharp"
        src={character.image}
        sx={{ width: 320, height: 320 }}
      />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        {character.species}
      </Typography>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        {character.origin.name}
      </Typography>
    </Box>
  );
};

export default Character;

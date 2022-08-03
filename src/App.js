import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "./App.css";
import CharacterList from "./components/CharacterList/CharacterList";

function App() {
  return (
    <Container>
      <Box>
        <Typography
          variant="h3"
          color="white"
          sx={{
            textAlign: "center",
            padding: "1rem",
          }}
        >
          Personajes de Rick and Morty
        </Typography>
        <CharacterList />
      </Box>
    </Container>
  );
}

export default App;

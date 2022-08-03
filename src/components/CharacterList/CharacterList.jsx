import { useEffect, useState } from "react";
import Character from "../Character/Character";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";

function Nextpage(props) {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="button" color="white" component="div">
          Página actual: {props.page}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {props.page === 1 ? (
            ""
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                props.setPage(props.page - 1);
              }}
            >
              Anterior
            </Button>
          )}

          {props.page === 42 ? (
            ""
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                props.setPage(props.page + 1);
              }}
            >
              Siguiente
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
}

const CharacterList = () => {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/?page=" + page
      );
      const data = await response.json();
      setIsLoading(false);
      setCharacter(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <Nextpage page={page} setPage={setPage} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        character.map((character) => {
          return <Character key={character.id} character={character} />;
        })
      )}
    </div>
  );
};

export default CharacterList;

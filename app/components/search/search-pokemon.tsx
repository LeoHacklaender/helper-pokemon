import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import { CardPokemon } from "../card/card-pokemon";
import { PokemonsDTO } from "../../types/pokemons.dto";
import { ThemeToggle } from "../theme-toogle/theme-toogle";

type SearchPokemonProps = {
  filtro: string;
  setFiltro: (filtro: string) => void;
  usuariosFiltrados: PokemonsDTO[];
  onClick: (nome: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

export function SearchPokemon({
  filtro,
  setFiltro,
  usuariosFiltrados,
  onClick,
  isDarkMode,
  setIsDarkMode,
}: SearchPokemonProps) {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={4}
        >
          <Typography variant="h4" gutterBottom>
            🔍 Filtro de Pokémons
          </Typography>
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </Box>

        <TextField
          label="Buscar por nome"
          variant="outlined"
          fullWidth
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          sx={{ mb: 4 }}
        />

        <Grid container spacing={2}>
          {usuariosFiltrados.map((pokemon) => (
            <Grid size={4} key={pokemon.nome}>
              <CardPokemon
                pokemon={pokemon}
                onClick={() => onClick(pokemon.nome)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

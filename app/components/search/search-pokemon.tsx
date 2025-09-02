import {
	Box,
	Container,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	type SelectChangeEvent,
	TextField,
	Typography,
} from "@mui/material";
import type { PokemonsDTO } from "../../types/pokemons.dto";
import { CardPokemon } from "../card/card-pokemon";
import { ThemeToggle } from "../theme-toogle/theme-toogle";

type SearchPokemonProps = {
	filtro: string;
	setFiltro: (filtro: string) => void;
	usuariosFiltrados: PokemonsDTO[];
	onClick: (nome: string) => void;
	isDarkMode: boolean;
	setIsDarkMode: (isDarkMode: boolean) => void;
	handleLevelChange: (event: SelectChangeEvent) => void;
	level: string;
};

export function SearchPokemon({
	filtro,
	setFiltro,
	usuariosFiltrados,
	onClick,
	isDarkMode,
	setIsDarkMode,
	handleLevelChange,
	level,
}: SearchPokemonProps) {
	return (
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

			<Box display="flex" gap={2}>
				<TextField
					label="Buscar por nome"
					variant="outlined"
					fullWidth
					value={filtro}
					onChange={(e) => setFiltro(e.target.value)}
					sx={{ mb: 4 }}
				/>

				<FormControl fullWidth>
					<InputLabel>Level</InputLabel>
					<Select value={level} label="Level" onChange={handleLevelChange}>
						<MenuItem value="">Todos</MenuItem>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={20}>20</MenuItem>
						<MenuItem value={40}>40</MenuItem>
						<MenuItem value={80}>80</MenuItem>
						<MenuItem value={100}>100</MenuItem>
					</Select>
				</FormControl>
			</Box>

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
	);
}

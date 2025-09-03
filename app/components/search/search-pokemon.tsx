import {
	Box,
	Button,
	Checkbox,
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
import { NIVEIS } from "../../utils/constantes";
import { CardPokemon } from "../card/card-pokemon";
import { Filter } from "../filter/filter";
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

			<Filter
				filtro={filtro}
				handleLevelChange={handleLevelChange}
				level={level}
				setFiltro={setFiltro}
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
	);
}

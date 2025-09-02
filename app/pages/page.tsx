"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { SearchPokemon } from "../components/search/search-pokemon";
import { useGetPokemons } from "../containers/get-pokemons";

export default function Home() {
	const {
		filtro,
		setFiltro,
		usuariosFiltrados,
		onClick,
		isDarkMode,
		setIsDarkMode,
		theme,
		handleLevelChange,
		level,
	} = useGetPokemons();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<SearchPokemon
				isDarkMode={isDarkMode}
				setIsDarkMode={setIsDarkMode}
				filtro={filtro}
				setFiltro={setFiltro}
				usuariosFiltrados={usuariosFiltrados}
				onClick={onClick}
				handleLevelChange={handleLevelChange}
				level={level}
			/>
		</ThemeProvider>
	);
}

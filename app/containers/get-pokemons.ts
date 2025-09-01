import { useEffect, useMemo, useState } from "react";
import type { PokemonsDTO } from "../types/pokemons.dto";
import { darkTheme, lightTheme } from "../utils/theme";

export function useGetPokemons() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [usuarios, setUsuarios] = useState<PokemonsDTO[]>([]);
	const [filtro, setFiltro] = useState("");

	const theme = useMemo(
		() => (isDarkMode ? darkTheme : lightTheme),
		[isDarkMode],
	);

	useEffect(() => {
		fetch("/pokemons.json")
			.then((res) => res.json())
			.then((data) => setUsuarios(data));
	}, []);

	const usuariosFiltrados = usuarios.filter((u) =>
		u.nome.toLowerCase().includes(filtro.toLowerCase()),
	);

	const onClick = (value: string) => {
		alert(`Você clicou no Pokémon: ${value}`);
	};

	return {
		filtro,
		setFiltro,
		usuariosFiltrados,
		onClick,
		isDarkMode,
		setIsDarkMode,
		theme,
	};
}

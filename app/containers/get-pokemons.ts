import type { SelectChangeEvent } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import type { PokemonsDTO } from "../types/pokemons.dto";
import { darkTheme, lightTheme } from "../utils/theme";

export function useGetPokemons() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [usuarios, setUsuarios] = useState<PokemonsDTO[]>([]);
	const [filtro, setFiltro] = useState("");
	const [level, setLevel] = useState<string>("");

	const theme = useMemo(
		() => (isDarkMode ? darkTheme : lightTheme),
		[isDarkMode],
	);

	useEffect(() => {
		fetch("/pokemons.json")
			.then((res) => res.json())
			.then((data) => setUsuarios(data));
	}, []);

	const usuariosFiltrados = usuarios.filter((u) => {
		const nomeFiltra =
			filtro === "" || u.nome?.toLowerCase().includes(filtro.toLowerCase());
		const levelFiltra = level === "" || u.level === Number(level);
		return nomeFiltra && levelFiltra;
	});

	const handleLevelChange = (event: SelectChangeEvent) => {
		setLevel(event.target.value as string);
		setFiltro(""); // Limpa o filtro de nome ao trocar o level, se desejar
	};

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
		handleLevelChange,
		level,
	};
}

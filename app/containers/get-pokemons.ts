import type { SelectChangeEvent } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import type { PokemonsDTO } from "../types/pokemons.dto";
import { darkTheme, lightTheme } from "../utils/theme";

export function useGetPokemons() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [pokemons, setPokemons] = useState<PokemonsDTO[]>([]);
  const [filtro, setFiltro] = useState("");
  const [level, setLevel] = useState<string>("Todos");
  const [tipo, setTipo] = useState<string[]>([]);
  const [dificuldade, setDificuldade] = useState<string>("Todos");

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode]
  );

  useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

  useEffect(() => {
    fetch("/pokemons.json")
      .then((res) => res.json())
      .then((data: PokemonsDTO[]) => setPokemons(data));
  }, []);

  const usuariosFiltrados = pokemons.filter((u) => {
    const nomeFiltra =
      filtro === "" || u.nome?.toLowerCase().includes(filtro.toLowerCase());
    const dificuldadeFiltra =
      dificuldade === "Todos" || u.dificuldade === dificuldade;
    const levelFiltra = level === "Todos" || u.level === Number(level);
    const tipoFiltra =
      tipo.length === 0 ||
      (u.tipos &&
        tipo.some((t) =>
          u.tipos
            .map((tp: string) => tp.toLowerCase())
            .includes(t.toLowerCase())
        ));
						
    return nomeFiltra && dificuldadeFiltra && levelFiltra && tipoFiltra;
  });

  const handleDificuldadeChange = (event: SelectChangeEvent) => {
    setDificuldade(event.target.value as string);
    setFiltro(""); // Limpa o filtro de nome ao trocar a dificuldade, se desejar
  }

  const handleLevelChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value as string);
    setFiltro(""); // Limpa o filtro de nome ao trocar o level, se desejar
  };

  const handleTipoChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setTipo(typeof value === "string" ? value.split(",") : value);
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
    tipo,
    handleTipoChange,
    dificuldade,
    handleDificuldadeChange,
  };
}

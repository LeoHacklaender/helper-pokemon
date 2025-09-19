import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { PokemonsDTO } from "../../types/pokemons.dto";

type CardPokemonProps = {
	pokemon: PokemonsDTO;
	onClick: () => void;
};

export function CardPokemon({ pokemon, onClick }: CardPokemonProps) {
	return (
		<Card
			onClick={onClick}
			sx={{ cursor: "pointer", maxWidthh: 300, margin: "auto" }}
		>
			<CardContent>
				<Box display="flex" justifyContent="space-between" marginBottom={2}>
					<Box>
						<Typography variant="h5" color="text.secondary">
							{pokemon.nome}
						</Typography>
						<Typography color="text.secondary" variant="body1">
							Level: {pokemon.level}
						</Typography>
					</Box>

					<Box
						display="flex"
						justifyContent="flex-end"
						alignItems="center"
						gap={0.5}
					>
						{pokemon.tiposImagem.map((tipo) => (
							<CardMedia
								key={tipo}
								component="img"
								sx={{
									width: "100%", // ocupa toda a largura do Card
									height: "auto", // mantém proporção
									maxHeight: 25, // limita altura máxima
									objectFit: "contain", // evita cortes
								}}
								image={tipo}
								alt={tipo}
							/>
						))}
					</Box>
				</Box>
				<Box display="flex" flexDirection="column" alignItems="center">
					<CardMedia
						component="img"
						sx={{
							width: "100%", // ocupa toda a largura do Card
							height: "auto", // mantém proporção
							maxHeight: 200, // limita altura máxima
							objectFit: "contain", // evita cortes
						}}
						image={pokemon.imagem}
						alt={pokemon.nome}
					/>
				</Box>
				<Typography color="text.secondary">Preço: {pokemon.preco}</Typography>
				<Typography color="text.secondary">
					UltraBall: {pokemon.ultraball}
				</Typography>
			</CardContent>
		</Card>
	);
}

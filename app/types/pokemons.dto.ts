export type PokemonsDTO = {
	imagem: string;
	nome: string;
	level: number;
	tipos: string[];
	preco: string;
	pokeball: number;
	greatball: number;
	superball: number;
	ultraball: number;
	tiposImagem: string[];
	dificuldade: string;
};

export type TiposPokemon = {
	tipo: string;
	imagem: string;
}
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
	medias: Media[];
};

export type Media = {
	ball: string;
	media: string;
}

export type TiposPokemon = {
	tipo: string;
	imagem: string;
}
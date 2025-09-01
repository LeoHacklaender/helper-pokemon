import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	async rewrites() {
		return [
			{
				source: "/",
				destination: "/pages", // ou qualquer outra página
			},
		];
	},
};

export default nextConfig;

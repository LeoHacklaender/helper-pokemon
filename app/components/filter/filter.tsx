import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	type SelectChangeEvent,
	TextField,
} from "@mui/material";
import { NIVEIS } from "../../utils/constantes";

type FilterProps = {
	filtro: string;
	setFiltro: (filtro: string) => void;
	handleLevelChange: (event: SelectChangeEvent) => void;
	level: string;
};

export function Filter({
	filtro,
	handleLevelChange,
	level,
	setFiltro,
}: FilterProps) {
	return (
		<Box display="flex" gap={2}>
      <FormControl sx={{ minWidth: 120 }}>
				<InputLabel>Level</InputLabel>
				<Select value={level} label="Level" onChange={handleLevelChange}>
					{NIVEIS.map((item) => (
						<MenuItem key={item.value} value={item.value}>
							{item.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<TextField
				label="Buscar por nome"
				variant="outlined"
				fullWidth
				value={filtro}
				onChange={(e) => setFiltro(e.target.value)}
				sx={{ mb: 4 }}
			/>			
		</Box>
	);
}

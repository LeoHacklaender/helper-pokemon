import {
  Box,
  CardMedia,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  TextField,
} from "@mui/material";
import { LEVELS, TIPOS_POKEMON } from "../../utils/constantes";

type FilterProps = {
  filtro: string;
  setFiltro: (filtro: string) => void;
  handleLevelChange: (event: SelectChangeEvent) => void;
  level: string;
  tipo: string[];
  handleTipoChange: (event: SelectChangeEvent<string[]>) => void;
};

export function Filter({
  filtro,
  handleLevelChange,
  level,
  setFiltro,
  tipo,
  handleTipoChange,
}: FilterProps) {
  return (
    <Box display="flex" gap={2}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Level</InputLabel>
        <Select value={level} label="Level" onChange={handleLevelChange}>
          {LEVELS.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Tipos</InputLabel>
        <Select
          multiple
          value={tipo}
          label="Tipos"
          onChange={handleTipoChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {TIPOS_POKEMON.map((item) => (
            <MenuItem key={item.tipo} value={item.tipo}>
              <Checkbox checked={tipo.indexOf(item.tipo) > -1} />
              <Box display="flex" alignItems="center" gap={1}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxHeight: 25,
                    objectFit: "contain",
                  }}
                  image={item.imagem}
                  alt={item.tipo}
                />
                {item.tipo}
              </Box>
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

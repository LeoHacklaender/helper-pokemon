// components/ThemeToggle.tsx

import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type ThemeToggleProps = {
	isDarkMode: boolean;
	setIsDarkMode: (isDarkMode: boolean) => void;
};

export function ThemeToggle({ isDarkMode, setIsDarkMode }: ThemeToggleProps) {
	return (
		<IconButton onClick={() => setIsDarkMode(!isDarkMode)} color="inherit">
			{isDarkMode ? <Brightness7 /> : <Brightness4 />}
		</IconButton>
	);
}

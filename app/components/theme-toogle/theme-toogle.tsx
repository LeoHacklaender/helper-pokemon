// components/ThemeToggle.tsx
import { IconButton } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'

type ThemeToggleProps = {
  isDarkMode: boolean
  setIsDarkMode: (isDarkMode: boolean) => void
}

export function ThemeToggle({ isDarkMode, setIsDarkMode }: ThemeToggleProps) {
  return (
    <IconButton onClick={() => setIsDarkMode(!isDarkMode)} color="inherit">
      {isDarkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  )
}

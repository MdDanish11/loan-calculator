import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useAppContext } from '../context/AppContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useAppContext();

  return (
    <Tooltip title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
      <IconButton 
        onClick={toggleTheme} 
        color="inherit"
        sx={{ 
          ml: { xs: 0, sm: 1 }, // Adjust spacing for mobile
          fontSize: { xs: '1rem', sm: '1.25rem' } // Responsive icon size
        }}
      >
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};
export default ThemeToggle;
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useAppContext } from '../context/AppContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useAppContext();
  
  return (
    <IconButton 
      onClick={toggleTheme} 
      color="inherit"
      sx={{ 
        p: 1, // Better touch target
        fontSize: { xs: '1.2rem', sm: '1.5rem' } 
      }}
    >
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};
export default ThemeToggle;
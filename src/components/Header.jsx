import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>
        
        <Box sx={{ 
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, sm: 2 } // Responsive spacing
        }}>
          <Button 
            component={Link} 
            to="/calculator" 
            color="inherit"
            sx={{ display: { xs: 'none', sm: 'block' } }} // Hide on mobile
          >
            Calculator
          </Button>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
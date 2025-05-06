import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Loan Calculator
        </Typography>

        {!isMobile ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/calculator" color="inherit">Calculator</Button>
            <Button component={Link} to="/about" color="inherit">About</Button>
            <ThemeToggle />
          </Box>
        ) : (
          mobileOpen && (
            <Box sx={{ 
              position: 'absolute',
              top: 56,
              left: 0,
              right: 0,
              backgroundColor: 'background.paper',
              zIndex: 1,
              p: 2
            }}>
              <Button fullWidth component={Link} to="/" onClick={() => setMobileOpen(false)}>Home</Button>
              <Button fullWidth component={Link} to="/calculator" onClick={() => setMobileOpen(false)}>Calculator</Button>
              <Button fullWidth component={Link} to="/about" onClick={() => setMobileOpen(false)}>About</Button>
              <ThemeToggle />
            </Box>
          )
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
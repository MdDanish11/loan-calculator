import { useAppContext } from '../context/AppContext';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Box } from '@mui/material';
import Header from './Header';
import ErrorBoundary from './ErrorBoundary';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Header />
        <Container 
          component="main"
          sx={{ 
            flex: 1,
            py: { xs: 2, sm: 4 }, // Responsive padding
            px: { xs: 1, sm: 2 } 
          }}
        >
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
};
export default Layout;
import { useAppContext } from '../context/AppContext';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Box } from '@mui/material';
import Header from './Header';
import ErrorBoundary from './ErrorBoundary';

const Layout = ({ children }) => {
  const { theme } = useAppContext(); // Get theme from context

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden'
      }}>
        <Header />
        <Container
          maxWidth="lg"
          sx={{
            flex: 1,
            py: 2,
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
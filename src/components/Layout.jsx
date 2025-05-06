import { useAppContext } from '../context/AppContext';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Box } from '@mui/material';
import Header from './Header';
import ErrorBoundary from './ErrorBoundary';

const Layout = ({ children }) => {
  const { theme } = useAppContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
          <Header />
          <Container maxWidth="lg" sx={{ py: 4 }}>
            {children}
          </Container>
        </Box>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default Layout;
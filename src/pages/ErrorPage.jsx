import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ErrorPage = () => {
  const { error } = useAppContext();

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h3" gutterBottom color="error">
        Error
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        {error || 'An unexpected error occurred'}
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Return to Home
      </Button>
    </Container>
  );
};

export default ErrorPage;
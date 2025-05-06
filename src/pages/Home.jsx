import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h2" gutterBottom>
        Loan Calculator
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
        Calculate your EMI and view amortization schedule
      </Typography>
      <Button 
        variant="contained" 
        size="large" 
        component={Link} 
        to="/calculator"
      >
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
import { Box, Typography, Link } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ p: 4 }}>
        
      <Typography variant="h4" gutterBottom>
        About This App
      </Typography>
      <Typography paragraph>
        Live demo available at: {' '}
        <Link href="https://loan-calculator11.netlify.app/" target="_blank">
        https://loan-calculator11.netlify.app/
        </Link>
      </Typography>
      <Typography paragraph>
        This Loan Calculator is a modern web application that helps users calculate
        their Equated Monthly Installments (EMI) for loans with detailed amortization
        schedules.
      </Typography>
      <Typography paragraph>
        Features include:
      </Typography>
      <ul>
        <li><Typography>EMI calculation using standard financial formulas</Typography></li>
        <li><Typography>Amortization schedule with monthly breakdown</Typography></li>
        <li><Typography>Real-time currency conversion</Typography></li>
        <li><Typography>Dark/Light mode toggle</Typography></li>
        <li><Typography>Responsive design for all devices</Typography></li>
      </ul>
      
    </Box>
  );
};

export default About;
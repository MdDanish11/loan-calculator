import { useState } from 'react';
import { 
  TextField, 
  Button, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Grid 
} from '@mui/material';
import { useAppContext } from '../context/AppContext';

const CalculatorForm = ({ 
  loanAmount,
  setLoanAmount,
  interestRate,
  setInterestRate,
  loanTerm,
  setLoanTerm,
  onCalculate,
  onReset 
}) => {
  const { currency, setCurrency } = useAppContext();

  const CURRENCIES = [
    'USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'INR'
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        
        <TextField
          label="Loan Amount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Interest Rate (%)"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Loan Term (Years)"
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(parseInt(e.target.value))}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <FormControl fullWidth>
          <InputLabel>Currency</InputLabel>
          <Select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            label="Currency"
          >
            {CURRENCIES.map((curr) => (
              <MenuItem key={curr} value={curr}>
                {curr}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="contained" onClick={onCalculate} fullWidth>
          CALCULATE
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="outlined" onClick={onReset} fullWidth>
          RESET
        </Button>
      </Grid>
    </Grid>
  );
};

// This is the crucial default export
export default CalculatorForm;
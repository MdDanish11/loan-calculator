import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CalculatorForm from '../components/CalculatorForm';  // Default import
import AmortizationTable from '../components/AmortizationTable';
import CurrencyConverter from '../components/CurrencyConverter';
import { useEMICalculator, useAmortizationSchedule } from '../hooks/useEMICalculator';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(5);
  const [emi, setEmi] = useState(0);
  const [amortizationData, setAmortizationData] = useState([]);

  const calculatedEmi = useEMICalculator(loanAmount, interestRate, loanTerm);
  const schedule = useAmortizationSchedule(loanAmount, interestRate, loanTerm, calculatedEmi);

  const handleCalculate = () => {
    setEmi(calculatedEmi);
    setAmortizationData(schedule);
  };

  const handleReset = () => {
    setLoanAmount(100000);
    setInterestRate(8.5);
    setLoanTerm(5);
    setEmi(0);
    setAmortizationData([]);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <CalculatorForm 
        loanAmount={loanAmount}
        setLoanAmount={setLoanAmount}
        interestRate={interestRate}
        setInterestRate={setInterestRate}
        loanTerm={loanTerm}
        setLoanTerm={setLoanTerm}
        onCalculate={handleCalculate}
        onReset={handleReset}
      />
      
      {emi > 0 && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Monthly EMI: {emi.toFixed(2)}
          </Typography>
          <AmortizationTable data={amortizationData} />
        </Box>
      )}

      <CurrencyConverter />
    </Box>
  );
};

export default Calculator;
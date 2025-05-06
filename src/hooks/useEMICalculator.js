import { useMemo } from 'react';

export const useEMICalculator = (principal, annualRate, years) => {
  return useMemo(() => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    
    return emi;
  }, [principal, annualRate, years]);
};

export const useAmortizationSchedule = (principal, annualRate, years, emi) => {
  return useMemo(() => {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;
    let balance = principal;
    const schedule = [];

    for (let month = 1; month <= months; month++) {
      const interest = balance * monthlyRate;
      const principalPayment = emi - interest;
      balance -= principalPayment;

      schedule.push({
        month,
        principal: principalPayment,
        interest,
        balance: balance > 0 ? balance : 0
      });

      if (balance <= 0) break;
    }

    return schedule;
  }, [principal, annualRate, years, emi]);
};
import { useState, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Typography,
  Box,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { SwapHoriz } from "@mui/icons-material";
import { useExchangeRate } from "../hooks/useExchangeRate";
import { useAppContext } from "../context/AppContext";

// Supported currencies with labels
const CURRENCIES = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "INR", name: "Indian Rupee" },
];

const CurrencyConverter = () => {
  const { currency: appCurrency } = useAppContext();
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState(appCurrency);
  const [toCurrency, setToCurrency] = useState("EUR");
  const { rate, loading, error } = useExchangeRate(fromCurrency, toCurrency);

  // Update when app currency changes
  useEffect(() => {
    setFromCurrency(appCurrency);
  }, [appCurrency]);

  // Handle conversion
  const convertedAmount = amount * (rate || 1);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Currency Converter
      </Typography>

      <Grid container spacing={2} alignItems="center">
        {/* Amount Input */}
        <Grid item xs={12} sm={5}>
          <TextField
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            fullWidth
            inputProps={{ min: 0 }}
          />
        </Grid>

        {/* From Currency */}
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel>From</InputLabel>
            <Select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              label="From"
            >
              {CURRENCIES.map((curr) => (
                <MenuItem key={curr.code} value={curr.code}>
                  {curr.code} - {curr.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Swap Button */}
        <Grid
          item
          xs={12}
          sm={1}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <IconButton onClick={swapCurrencies} sx={{ ml: 1 }}>
            <SwapHoriz />
          </IconButton>
        </Grid>

        {/* To Currency */}
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel>To</InputLabel>
            <Select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              label="To"
            >
              {CURRENCIES.map((curr) => (
                <MenuItem key={curr.code} value={curr.code}>
                  {curr.code} - {curr.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Conversion Result */}
      <Box sx={{ mt: 2, textAlign: "center" }}>
        {loading ? (
          <CircularProgress size={24} />
        ) : (
          <>
            <Typography variant="h5">
              {amount.toFixed(2)} {fromCurrency} = {convertedAmount.toFixed(2)}{" "}
              {toCurrency}
            </Typography>
            {rate && (
              <Typography variant="body2" color="text.secondary">
                1 {fromCurrency} = {rate.toFixed(6)} {toCurrency}
              </Typography>
            )}
          </>
        )}
        {error && (
          <Typography color="error" sx={{ mt: 1 }}>
            Error: {error}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default CurrencyConverter;

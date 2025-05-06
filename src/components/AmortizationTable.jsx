import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useAppContext } from "../context/AppContext";

const AmortizationTable = ({ data }) => {
  const { currency } = useAppContext();

  if (data.length === 0) return null;

  return (
    <TableContainer component={Paper} sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom sx={{ p: 2 }}>
        Amortization Schedule
      </Typography>
      <Box
        sx={{
          width: "100%",
          overflowX: "auto", // Horizontal scroll on mobile
          "-webkit-overflow-scrolling": "touch", // Smooth iOS scroll
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell align="right">Principal ({currency})</TableCell>
              <TableCell align="right">Interest ({currency})</TableCell>
              <TableCell align="right">Balance ({currency})</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.month}>
                <TableCell>{row.month}</TableCell>
                <TableCell align="right">{row.principal.toFixed(2)}</TableCell>
                <TableCell align="right">{row.interest.toFixed(2)}</TableCell>
                <TableCell align="right">{row.balance.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell align="right">Principal ({currency})</TableCell>
            <TableCell align="right">Interest ({currency})</TableCell>
            <TableCell align="right">Balance ({currency})</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.month}>
              <TableCell>{row.month}</TableCell>
              <TableCell align="right">{row.principal.toFixed(2)}</TableCell>
              <TableCell align="right">{row.interest.toFixed(2)}</TableCell>
              <TableCell align="right">{row.balance.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AmortizationTable;

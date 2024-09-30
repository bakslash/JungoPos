import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, List, ListItem, Button, Stack, TextField } from '@mui/material';
import { RootState } from '../app/store';
import { applyDiscount } from '../features/medicine/medicineSlice';

const TransactionSummary: React.FC = () => {
  const dispatch = useDispatch();
  const transaction = useSelector((state: RootState) => state.medicine.transaction);
  const [discount, setDiscount] = React.useState(0);

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount(parseFloat(e.target.value));
  };

  const handleApplyDiscount = () => {
    dispatch(applyDiscount(discount));
  };

  return (
    <Box>
      <Typography variant="h5">Transaction Summary</Typography>
      <List>
        {transaction.items.map((item, index) => (
          <ListItem key={index}>
            {item.medicine.name} - {item.quantity} x {item.medicine.pricePerUnit} = {item.medicine.pricePerUnit * item.quantity}
          </ListItem>
        ))}
      </List>
      <Stack spacing={2} sx={{ mt: 2 }}>
        <TextField
          label="Discount"
          variant="outlined"
          fullWidth
          type="number"
          value={discount}
          onChange={handleDiscountChange}
        />
        <Button variant="contained" onClick={handleApplyDiscount}>
          Apply Discount
        </Button>
        <Typography variant="h6">Total: ${transaction.total}</Typography>
      </Stack>
    </Box>
  );
};

export default TransactionSummary;

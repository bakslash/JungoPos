import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField, List, ListItem, Button, Typography, Stack, Chip } from '@mui/material';
import { RootState } from '../app/store';
import { addToTransaction } from '../features/medicine/medicineSlice';

const MedicineSearch: React.FC = () => {
  const dispatch = useDispatch();
  const inventory = useSelector((state: RootState) => state.medicine.inventory);
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (medicineId: string) => {
    const medicine = inventory.find(med => med.id === medicineId);
    if (medicine) {
      dispatch(addToTransaction({ medicine, quantity }));
    }
  };

  const filteredMedicines = inventory.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h5">Search Medicines</Typography>
      <TextField
        label="Search by name"
        variant="outlined"
        size='small'
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mb: 2 }}
      />
      <List>
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine) => (
            <ListItem key={medicine.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Stack>
                <Typography variant="body1">{medicine.name}</Typography>
                <Typography variant="body2">
                  {medicine.availableQuantity} {medicine.unit} available
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={4} sx={{ ml: 2 }}>
                <Chip
                  label={medicine.availableQuantity > 0 ? 'In Stock' : 'Out of Stock'}
                  color={medicine.availableQuantity > 0 ? 'success' : 'error'}
                  sx={{
                    fontSize: '14px',   // Adjust font size for better readability
                    padding: '8px 12px', // Add padding for more space around text
                    borderRadius: '4px', // Slightly rounder corners
                  }}
                />
                <TextField
                  type="number"
                  value={quantity}
                  size='small'
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  sx={{ width: '60px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(medicine.id)}
                  disabled={medicine.availableQuantity <= 0}
                >
                  Add
                </Button>
              </Stack>
            </ListItem>
          ))
        ) : (
          <Typography>No medicines found</Typography>
        )}
      </List>
    </Box>
  );
};

export default MedicineSearch;

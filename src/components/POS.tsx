import React from 'react';
import { Container, Grid2, Paper, Typography, Box } from '@mui/material';
import MedicineSearch from './MedicineSearch';
import TransactionSummary from './TransactionSummary';

const POS: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center', color: '#1976d2' }}>
        Pharmacy POS System
      </Typography>
      <Grid2 container spacing={4}>
        <Grid2 item xs={12} md={6} sx={{width:'550px'}}>
          <Paper elevation={4} sx={{ p: 4, borderRadius: 3, backgroundColor: '#f5f5f5' }}>
            <Box>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#424242' }}>
                Medicine Search
              </Typography>
              <MedicineSearch />
            </Box>
          </Paper>
        </Grid2>
        <Grid2 item xs={12} md={6}>
          <Paper elevation={4} sx={{ p: 4, borderRadius: 3, backgroundColor: '#f5f5f5' }}>
            <Box>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: '#424242' }}>
                Transaction Summary
              </Typography>
              <TransactionSummary />
            </Box>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default POS;

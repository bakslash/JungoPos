import React from 'react';
import PageLayout from '../layout/PageLayout';
import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store'; // Correct import for RootState
import POS from '../components/POS'; // Assuming POS component is your point-of-sale component

const Dashboard: React.FC = () => {
  const selectedPath = useSelector((state: RootState) => state.navigation.selectedPath); // Accessing selectedPath from the navigation slice

  return (
    <PageLayout>
      <Box sx={{ padding: 3, overflowX: 'hidden', width: '100%' }}> {/* Prevents horizontal scroll */}
      <Typography variant="h6">Jungopharm</Typography>

        <POS /> {/* Point-of-sale component */}
      </Box>
    </PageLayout>
  );
};

export default Dashboard;

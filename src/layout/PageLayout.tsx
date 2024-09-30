import React from 'react';
import { Box, Typography } from '@mui/material';
import SideDrawer from '../components/SideDrawer';

interface PageLayoutProps {
  children: React.ReactNode; // Define the type for children
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'row', width: '100%' }}>
      
      <SideDrawer />

      
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', width: '100%' }}>
      
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3 }}>
         
          
          {/* <SearchBar /> */}
        </Box>

        
        <Box sx={{ flexGrow: 1, mt: 2, px: 3 }}>
          {children}
        </Box>

       
        <Box sx={{ backgroundColor: '#D9D9D9', py: 2, width: '100%', textAlign: 'center' }}>
          <Typography variant="body2">© 2024 JungoPharm. All rights reserved.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PageLayout;

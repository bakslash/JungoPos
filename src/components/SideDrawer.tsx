import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
} from '@mui/material';
import { Calculate } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPath } from '../store/navigationSlice'; 
import { RootState } from '../store'; 

interface MenuItem {
  name: string;
  icon: JSX.Element;
  path: string;
}

const menuItems: MenuItem[] = [
  { name: 'POS', icon: <Calculate />, path: '/pos' },
];

const SideDrawer: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedPath = useSelector((state: RootState) => state.navigation.selectedPath);

  const handleNavigation = (path: string) => {
    dispatch(setSelectedPath(path)); 
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          background: 'linear-gradient(to bottom right, #1976d2, #4fc3f7)',
          color: '#fff',
          borderRight: 'none',
        },
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', color: '#ffffff' }}
        >
          Jungo POS Admin
        </Typography>
      </Box>

      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />

      
      <List sx={{ p: 1 }}>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={() => handleNavigation(item.path)}
            selected={selectedPath === item.path} 
            sx={{
              mb: 1,
              borderRadius: 2,
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              '& .MuiListItemIcon-root': {
                color: '#fff',
              },
              '& .MuiListItemText-primary': {
                fontWeight: 'bold',
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} primaryTypographyProps={{ fontSize: '16px' }} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
    </Drawer>
  );
};

export default SideDrawer;

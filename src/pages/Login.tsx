import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Stack, Typography, Card, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../store/authSlice'; 

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state: any) => state.auth); 

  const [userData, setUserData] = useState({ username: '', password: '' });

  useEffect(() => {
    return () => {
      setUserData({ username: '', password: '' });
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      
      console.log('Attempting login with:', userData);
      dispatch(loginSuccess()); 
      navigate('/dashboard'); 
    } catch (err) {
      console.log(err);
      dispatch(loginFailure('An error occurred')); 
    }
  };

  return (
    <Grid2
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom right, #1976d2, #4fc3f7)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          py: 2,
          bgcolor: 'rgba(0, 0, 0, 0.7)',
          textAlign: 'center',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Typography variant="h3" color="white" sx={{ fontWeight: 'bold' }}>
          Jungo POS
        </Typography>
      </Box>

      <Card
        sx={{
          p: 4,
          width: { xs: 300, sm: 400 },
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(15px)',
          borderRadius: 5,
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            textAlign: 'center',
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h4" color="white" sx={{ fontWeight: 'bold' }}>
              Login
            </Typography>
            <TextField
              variant="outlined"
              size="medium"
              label="Username"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              fullWidth
              sx={{
                backgroundColor: 'white', 
                borderRadius: 1,          
              }}
              
            />
            <TextField
              variant="outlined"
              size="medium"
              label="Password"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              fullWidth
              sx={{
                backgroundColor: 'white', 
                borderRadius: 1,          
              }}
              
            />
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                bgcolor: '#2979ff',
                color: '#fff',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#1565c0' },
                padding: '10px 20px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                borderRadius: 3,
              }}
            >
              Login
            </Button>
            {error && (
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            )}
          </Stack>
        </Box>
      </Card>
    </Grid2>
  );
};

export default Login;

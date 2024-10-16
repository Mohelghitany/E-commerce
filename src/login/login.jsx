import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import cart from './cart.jpg'

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate(); 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.email === formData.email && savedUser.password === formData.password) {
      
      localStorage.setItem('isLoggedIn', 'true');  
      navigate('/'); 
    } else {
      alert('Invalid credentials! Please try again.');
    }
  };

  return (
    <Container maxWidth="md" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
         
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <img src={cart} alt="Shopping" style={{ marginRight:'350px', maxWidth: '150%', height: '150%' }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          
          <Box padding="20px">
            <Typography variant="h5" component="h1" gutterBottom>
              Sign In
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              Enter your details below
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Email or Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

             
              <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ backgroundColor: '#f44336', color: '#fff' }}
                >
                  Sign In
                </Button>

             
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => alert('Redirect to Forgot Password')}
                >
                  Forgot Password?
                </Button>
              </Box>

              <Box mt={2}>
                <Typography variant="body2">
                  Don't have an account?{' '}
                  <Button variant="text" color="primary" onClick={() => navigate('/signup')}>
                    Sign up
                  </Button>
                </Typography>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signin;

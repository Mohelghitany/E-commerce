import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, Grid } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom'; 
import cart from '../login/cart.jpg';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(formData));

    // Redirect to sign-in page after account creation
    navigate('/signin');
  };

  return (
    <Container maxWidth="md" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <img src={cart} alt="Shopping" style={{ marginRight: '350px', maxWidth: '150%', height: '120%' }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box padding="20px">
            <Typography variant="h5" component="h1" gutterBottom>
              Create an account
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              Enter your details below
            </Typography>

            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

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

              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{ mt: 2, mb: 2, backgroundColor: '#f44336', color: '#fff' }}
              >
                Create Account
              </Button>

              <Button
                variant="outlined"
                fullWidth
                startIcon={<GoogleIcon />}
                sx={{ mb: 2 }}
              >
                Sign up with Google
              </Button>

              <Box mt={2}>
                <Typography variant="body2">
                  Already have an account?{' '}
                  <Button variant="text" color="primary" onClick={() => navigate('/signin')}>
                    Log in
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

export default Signup;

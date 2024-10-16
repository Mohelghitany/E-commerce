import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Grid, TextField, Button, Box, Table, TableBody, TableCell, TableContainer, TableRow, Paper, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const BillingPage = () => {
  
  const location = useLocation();
  const { cart, subtotal } = location.state || { cart: [], subtotal: 0 }; 

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={5}>
        
        <Grid item xs={12} md={7}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Billing Details
          </Typography>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField label="First Name" fullWidth required sx={{ mb: 2 }} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Company Name" fullWidth sx={{ mb: 2 }} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Street Address" fullWidth required sx={{ mb: 2 }} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Apartment, floor, etc. (optional)" fullWidth sx={{ mb: 2 }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Town/City" fullWidth required sx={{ mb: 2 }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField label="Phone Number" fullWidth required sx={{ mb: 2 }} />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email Address" fullWidth required sx={{ mb: 2 }} />
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <input type="checkbox" id="save-info" />
              <label htmlFor="save-info" style={{ marginLeft: '10px' }}>
                Save this information for faster check-out next time
              </label>
            </Box>
          </form>
        </Grid>

        
        <Grid item xs={12} md={5}>
          <Box sx={{ border: '1px solid #ddd', padding: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Order Summary
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  {cart.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Box display="flex" alignItems="center">
                          <img src={item.product.image} alt={item.product.title} width="50px" />
                          <Typography variant="body2" sx={{ ml: 1 }}>
                            {item.product.title}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="right">
                        ${item.product.price * item.quantity}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell>Subtotal</TableCell>
                    <TableCell align="right">${subtotal}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Shipping</TableCell>
                    <TableCell align="right">Free</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell align="right">${subtotal}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Payment Methods
              </Typography>
              <RadioGroup defaultValue="cash">
                <FormControlLabel value="cash" control={<Radio />} label="Cash on Delivery" />
                <FormControlLabel value="bank" control={<Radio />} label="Bank Transfer" />
              </RadioGroup>
            </Box>

            
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
              <TextField
                label="Coupon Code"
                fullWidth
                variant="outlined"
                size="small"
              />
              <Button
                variant="contained"
                color="error"
                sx={{ ml: 2, textTransform: 'none', height: '100%' }}
              >
                Apply Coupon
              </Button>
            </Box>

            
            <Button
              variant="contained"
              color="error"
              sx={{ mt: 2, width: '100%', textTransform: 'none' }}
            >
              Place Order
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BillingPage;

import React, { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import { CartContext } from '../CartContext';
import { Container, Typography, Grid, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem } from '@mui/material';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };
  const handleNavigateTohome = () => {
    navigate('/');
  };
  const handleProceedToCheckout = () => {
     navigate('/checkout', { state: { cart, subtotal: calculateSubtotal() } }); 
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Cart
      </Typography>

      
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <img src={item.product.image} alt={item.product.title} width="80px" style={{ marginRight: '10px' }} />
                    <Typography>{item.product.title}</Typography>
                  </Box>
                </TableCell>
                <TableCell>${item.product.price}</TableCell>
                <TableCell>
                  <Select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.product.id, e.target.value)}
                    size="small"
                  >
                    {[1, 2, 3, 4, 5].map(qty => (
                      <MenuItem key={qty} value={qty}>{qty}</MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell>${item.product.price * item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Button variant="outlined" color="primary" sx={{ textTransform: 'none' }} onClick={handleNavigateTohome}>
          Return to Shop
          
        </Button>

        <Box display="flex" alignItems="center">
          <Button variant="contained" color="primary" sx={{ textTransform: 'none' }}>
            Apply Coupon
          </Button>
        </Box>

        <Button variant="contained" color="primary" sx={{ textTransform: 'none' }} onClick={clearCart}>
          Clear Cart
        </Button>
      </Box>

      
      <Box sx={{ border: '1px solid #ddd', padding: 3, maxWidth: '300px', ml: 'auto' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Cart Total
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>Subtotal:</Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Typography>${calculateSubtotal()}</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Shipping:</Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Typography>Free</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography>Total:</Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Typography>${calculateSubtotal()}</Typography>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="error"
          sx={{ mt: 2, width: '100%', textTransform: 'none' }}
          onClick={handleProceedToCheckout}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Container>
  );
};

export default CartPage;

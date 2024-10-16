import React, { useContext } from 'react';
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent, CardActions, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { WishlistContext } from '../WishlistContext';
import { CartContext } from '../CartContext'; 

const FlashSales = ({ products }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext); 

  const calculateSalePrice = (originalPrice, discount = 50) => {
    return (originalPrice - (originalPrice * discount / 100)).toFixed(2);
  };

  const getThreeWords = (title) => {
    return title.split(' ').slice(0, 3).join(' ') + (title.split(' ').length > 3 ? '...' : '');
  };

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product, 1, 'defaultColor', 'defaultSize'); 
    
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Today's Flash Sales
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
        <Countdown
          date={Date.now() + 100000000}
          renderer={({ days, hours, minutes, seconds }) => (
            <Typography variant="h6">
              {days} : {hours} : {minutes} : {seconds}
            </Typography>
          )}
        />
      </Box>

      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
              >
                <Typography variant="subtitle1" gutterBottom>
                  {getThreeWords(product.title)}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6" color="error">
                    ${calculateSalePrice(product.price, product.discount)}
                  </Typography>
                  <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>
                    ${product.price}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  {product.reviews} reviews
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', p: 1 }}>
                <Button 
                  variant="contained" 
                  fullWidth 
                  onClick={() => handleAddToCart(product)} 
                >
                  Add To Cart
                </Button>

                <IconButton onClick={() => handleWishlistToggle(product)}>
                  {isInWishlist(product.id) ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton>
              </CardActions>

              <Box sx={{ p: 2 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  component={Link}
                  to={`/product/${product.id}`}
                >
                  More Details
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button variant="contained" sx={{ backgroundColor: 'red', color: 'white' }}>
          View All Products
        </Button>
      </Box>
    </Box>
  );
};

export default FlashSales;

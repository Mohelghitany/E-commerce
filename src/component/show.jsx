import React, { useEffect, useState, useContext } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { WishlistContext } from '../WishlistContext';
import { CartContext } from '../CartContext'; 

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  
  
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext); 
  
  
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const getThreeWords = (title) => {
    return title.split(' ').slice(0, 3).join(' ') + (title.split(' ').length > 3 ? '...' : '');
  };

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
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
    <Box sx={{ padding: '50px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Explore Our Products
      </Typography>

      <Grid container spacing={4}>
        {products.slice(8, 16).map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ height: '80%', position: 'relative', paddingBottom: '50px' }}>
              
              <CardMedia
                component="img"
                height="90"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: 'contain', padding: '20px' }}
              />

              <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCartIcon />}
                onClick={() => handleAddToCart(product)} 
                sx={{
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                  backgroundColor: 'blue',
                  '&:hover': { backgroundColor: 'gray' },
                }}
              >
                Add To Cart
              </Button>

              <Box sx={{ position: 'absolute', top: 10, right: 10, display: 'flex', flexDirection: 'column' }}>
                <IconButton onClick={() => handleWishlistToggle(product)}>
                  {isInWishlist(product.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                </IconButton>
                <IconButton onClick={() => handleViewDetails(product.id)}>
                  <VisibilityIcon />
                </IconButton>
              </Box>

              <CardContent sx={{ padding: '10px' }}>
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  {getThreeWords(product.title)}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  ${product.price}
                </Typography>
                <Typography variant="body2">
                  {Array(Math.round(product.rating.rate)).fill('★').join('')}
                  {` (${product.rating.count} reviews)`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={4} m={4}>
        <Button variant="contained" color="error" size="large">
          View All Products
        </Button>
      </Box>
    </Box>
  );
};

export default ProductGrid;

import React, { useContext, useState, useEffect } from 'react';
import { WishlistContext } from '../WishlistContext';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, IconButton, Box, Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

const WishlistPage = () => {
  const { wishlist, moveAllToCart, removeFromWishlist, moveToCart } = useContext(WishlistContext);
  const [justForYouProducts, setJustForYouProducts] = useState([]);
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then((response) => response.json())
      .then((data) => {
        setJustForYouProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products from API:', error);
      });
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Container sx={{ mt: 5 }}>
      
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5">Wishlist ({wishlist.length})</Typography>
        <Button variant="contained" color="primary" onClick={moveAllToCart} sx={{ textTransform: 'none' }}>
          Move All To Bag
        </Button>
      </Box>

      
      <Grid container spacing={2}>
        {wishlist.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              
              {item.discount && (
                <Badge
                  badgeContent={`-${item.discount}%`}
                  color="error"
                  sx={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    zIndex: 1,
                  }}
                />
              )}

              
              <CardMedia component="img" height="180" image={item.image} alt={item.title} sx={{ objectFit: 'contain', p: 2 }} />

              
              <CardContent>
                <Typography variant="body1" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ textDecoration: item.discount ? 'line-through' : 'none' }}>
                  ${item.originalPrice}
                </Typography>
                {item.discount && (
                  <Typography variant="body2" color="error">
                    ${item.discountedPrice}
                  </Typography>
                )}

               
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Button startIcon={<AddShoppingCartIcon />} onClick={() => moveToCart(item.id)} variant="contained" color="primary" sx={{ textTransform: 'none' }}>
                    Add To Cart
                  </Button>

                 
                  <Box>
                    <IconButton onClick={() => removeFromWishlist(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => handleViewDetails(item.id)}>
                      <VisibilityIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Just For You
      </Typography>

      <Grid container spacing={2}>
        {justForYouProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Card>
              <CardMedia component="img" height="150" image={product.image} alt={product.title} sx={{ objectFit: 'contain', p: 1 }} />
              <CardContent>
                <Typography variant="body2" fontWeight="bold" noWrap>
                  {product.title}
                </Typography>
                <Typography variant="body2" color="error">
                  ${product.price}
                </Typography>
                <Box display="flex" justifyContent="space-between" mt={1}>
                  <IconButton onClick={()=>moveToCart(product.id)}>
                    <AddShoppingCartIcon  />
                  </IconButton>
                  <IconButton onClick={() => handleViewDetails(product.id)}>
                    <VisibilityIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WishlistPage;

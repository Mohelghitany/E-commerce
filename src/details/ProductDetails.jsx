import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Card, CardMedia, CardContent, CardActions, Grid, Box, IconButton, TextField, Rating } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { WishlistContext } from '../WishlistContext'; 
import { CartContext } from '../CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M'); 
  const [selectedColor, setSelectedColor] = useState('white'); 
 const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); 
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  const handleQuantityChange = (type) => {
    setQuantity(prev => type === 'increase' ? prev + 1 : prev > 1 ? prev - 1 : 1);
  };

   
  

  

  

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedColor, selectedSize); 
    navigate('/cart');
  };

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Container>
      <Grid container spacing={4}>
        
        <Grid item xs={12} sm={5}>
          <Box display="flex">
            <Box>
              
              <Grid container direction="column" spacing={2}>
                {[product.image, product.image, product.image, product.image].map((thumb, index) => (
                  <Grid item key={index}>
                    <CardMedia
                      component="img"
                      image={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      sx={{ height: 60, width: 60, cursor: 'pointer' }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box ml={2}>
              
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{ height: 400, width: '100%', objectFit: 'contain' }}
              />
            </Box>
          </Box>
        </Grid>

        
        <Grid item xs={12} sm={7}>
          <Typography variant="h4" gutterBottom>{product.title}</Typography>
          <Rating name="read-only" value={4} readOnly />
          <Typography variant="h5" color="textPrimary" gutterBottom>${product.price}</Typography>
          <Typography variant="body1" color="textSecondary" paragraph>{product.description}</Typography>
          <Typography variant="body1" color="textSecondary" paragraph>In Stock</Typography>
          
          
          <Box mb={2}>
            <Typography variant="body1" gutterBottom>Colours:</Typography>
            {['white', 'black', 'red'].map((color, index) => (
              <IconButton
                key={index}
                onClick={() => setSelectedColor(color)}
                sx={{
                  backgroundColor: color,
                  width: 30,
                  height: 30,
                  border: selectedColor === color ? '2px solid black' : 'none',
                }}
              />
            ))}
          </Box>

          
          <Box mb={2}>
            <Typography variant="body1" gutterBottom>Size:</Typography>
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? 'contained' : 'outlined'}
                onClick={() => setSelectedSize(size)}
                sx={{ mx: 1 }}
              >
                {size}
              </Button>
            ))}
          </Box>

          
          <Box mb={2} display="flex" alignItems="center">
            <Typography variant="body1" mr={2}>Quantity:</Typography>
            <IconButton onClick={() => handleQuantityChange('decrease')}><RemoveIcon /></IconButton>
            <TextField value={quantity} size="small" sx={{ width: 50, textAlign: 'center' }} />
            <IconButton onClick={() => handleQuantityChange('increase')}><AddIcon /></IconButton>
          </Box>

          
          <Box mb={2} display="flex" alignItems="center">
            <Button size="large" variant="contained" color="primary" onClick={handleBuyNow}>
      Buy Now
    </Button>
            <IconButton onClick={toggleWishlist}>
              {isInWishlist(product.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>Related Items</Typography>
        <Grid container spacing={2}>
          
          {[1, 2, 3, 4].map(item => (
            <Grid item key={item} xs={12} sm={3}>
              <Card>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt="Related item"
                  sx={{ height: 140 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">Related Product {item}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetails;

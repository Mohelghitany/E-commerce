
import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';

const Banner = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      
      <Box sx={{ width: '20%', backgroundColor: 'white', padding: '20px' }}>
        <Typography variant="h6" gutterBottom>Woman's Fashion</Typography>
        <Typography variant="h6" gutterBottom>Men's Fashion</Typography>
        <Typography variant="h6" gutterBottom>Electronics</Typography>
        <Typography variant="h6" gutterBottom>Home & Lifestyle</Typography>
        <Typography variant="h6" gutterBottom>Medicine</Typography>
        <Typography variant="h6" gutterBottom>Sports & Outdoor</Typography>
        <Typography variant="h6" gutterBottom>Baby's & Toys</Typography>
        <Typography variant="h6" gutterBottom>Groceries & Pets</Typography>
        <Typography variant="h6" gutterBottom>Health & Beauty</Typography>
      </Box>

      
      <Box
        sx={{
          width: '80%',
          backgroundColor: '#000',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          margin: '40px',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg" >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="div" gutterBottom>
                iPhone 14 Series
              </Typography>
              <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
                Up to 10% off Voucher
              </Typography>
              <Button variant="text" sx={{ color: '#fff', borderBottom: '2px solid #fff' }}>
                Shop Now
              </Button>
            </Grid>

            <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
              <img
                src="https://www.apple.com/v/iphone-16-pro/c/images/overview/product-stories/design/display__f5509jfp9nyq_xlarge.jpg"
                alt="iPhone 14"
                style={{ maxWidth: '100%' }}
              />
            </Grid>
          </Grid>

          
          <Box sx={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex' }}>
            {[...Array(5)].map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: index === 1 ? '#d32f2f' : '#888',
                  margin: '0 5px',
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;

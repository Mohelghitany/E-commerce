import React from 'react';
import { Box, Grid, Typography, Link, TextField, InputAdornment, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import googlePlay from './google.png';
import appStore from './apple.png';
import QRCode from './QR.jpeg';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '40px 0',
      }}
    >
      <Grid
        container
        justifyContent="center"   
        alignItems="center"         
        spacing={4}
        sx={{ textAlign: 'center' }}
      >
        
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Exclusive
          </Typography>

          <Link href="#" underline="hover" sx={{ color: 'white', display: 'block' }}>
            Subscribe
          </Link>
          <Link href="#" underline="hover" sx={{ color: 'white', display: 'block' }}>
            Get 10% off your first order
          </Link>

          <TextField
            variant="outlined"
            placeholder="Enter Your Email"
            fullWidth
            sx={{
              backgroundColor: 'black',
              color: 'white',
              border: '1px solid white',
              borderRadius: '4px',
              height: '56px',
              '& .MuiOutlinedInput-root': {
                height: '100%',
              },
               '& input': {
                 color: 'white', 
            },    
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="send email" sx={{color:'white'}}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Support
          </Typography>
          <Link href="#" underline="hover" sx={{ color: 'white', display: 'block' }}>
            111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.
          </Link>
          <Link href="mailto:exclusive@gmail.com" underline="hover" sx={{ color: 'white', display: 'block' }}>
            exclusive@gmail.com
          </Link>
          <Link href="tel:+88015888889999" underline="hover" sx={{ color: 'white', display: 'block' }}>
            +88015-88888-9999
          </Link>
        </Grid>

       
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Account
          </Typography>
          <Link href="#" underline="hover" sx={{ color: 'white', display: 'block' }}>
            My Account
          </Link>
          <Link href="#" underline="hover" sx={{ color: 'white', display: 'block' }}>
            Login / Register
          </Link>
          <Link href="#" underline="hover" sx={{ color: 'white', display: 'block' }}>
            Cart
          </Link>
          <Link href="#" underline="hover" sx={{ color: 'white', display: 'block' }}>
            Wishlist
          </Link>
          <Link href="#" underline="hover" sx={{ color: 'white', display: 'block' }}>
            Shop
          </Link>
        </Grid>

        
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Quick Link
          </Typography>
          <Link href="#" underline="hover" sx={{ color: 'white', display: 'block' }}>
            Privacy Policy
          </Link>
          <Link href="#" underline="hover" sx={{ color: 'white', display: 'block' }}>
            Terms Of Use
          </Link>
          <Link href="#" underline="hover" sx={{ color: 'white', display: 'block' }}>
            FAQ
          </Link>
          <Link href="#" underline="hover" sx={{ color: 'white', display: 'block' }}>
            Contact
          </Link>
        </Grid>

       
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Download App
          </Typography>
          <Typography variant="body2" gutterBottom>
            Save $3 with App New User Only
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              margin: '10px 0',
            }}
          >
            
            <Box>
              <img src={QRCode} alt="QR Code" style={{ width: '100px', height: '100px' }} />
            </Box>

            
            <Box>
              <Link href="https://play.google.com/store" target="_blank" rel="noopener">
                <img
                  src={googlePlay}
                  alt="Google Play"
                  style={{ marginRight: '10px', width: '130px' }}
                />
              </Link>
              <Link href="https://www.apple.com/app-store/" target="_blank" rel="noopener">
                <img
                  src={appStore}
                  alt="App Store"
                  style={{ width: '130px' }}
                />
              </Link>
            </Box>
          </Box>

         
          <Box sx={{ marginTop: '20px' }}>
            <Link href="https://facebook.com" target="_blank" sx={{ color: 'white', margin: '0 10px' }}>
              <Facebook fontSize="large" />
            </Link>
            <Link href="https://twitter.com" target="_blank" sx={{ color: 'white', margin: '0 10px' }}>
              <Twitter fontSize="large" />
            </Link>
            <Link href="https://instagram.com" target="_blank" sx={{ color: 'white', margin: '0 10px' }}>
              <Instagram fontSize="large" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" sx={{ color: 'white', margin: '0 10px' }}>
              <LinkedIn fontSize="large" />
            </Link>
          </Box>
        </Grid>
      </Grid>

     
      <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2">
          © Copyright Rimel {new Date().getFullYear()}. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;

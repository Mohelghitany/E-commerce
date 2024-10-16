import React from 'react';
import { Box, Grid, Typography, Button, Card, CardMedia, CardContent} from '@mui/material';

import StoreIcon from '@mui/icons-material/Store';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';

const FeaturedSection = () => {
  return (
    <Box sx={{ padding: '40px' }}>
      <Typography variant="h5" color="error" fontWeight="bold" sx={{ mb: 2 }}>
        Featured
      </Typography>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        New Arrival
      </Typography>

      
      <Grid container spacing={4}>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', position: 'relative' }}>
            <CardMedia
              component="img"
              image="https://th.bing.com/th/id/OIP.OcJRg5pD-4fDETVqIsOpeQHaE7?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="PlayStation 5"
              sx={{ height: '100%', objectFit: 'cover' }}
            />
            <CardContent sx={{ position: 'absolute', bottom: 20, left: 20 }}>
              <Typography variant="h5" color="white" fontWeight="bold">
                PlayStation 5
              </Typography>
              <Typography variant="body2" color="white">
                Black and White version of the PS5 coming out on sale.
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card sx={{ height: '100%', position: 'relative' }}>
                <CardMedia
                  component="img"
                  image="data:image/jpeg;base64,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" 
                  alt="Women's Collection"
                  sx={{ height: 160, objectFit: 'cover' }}
                />
                <CardContent sx={{ position: 'absolute', bottom: 20, left: 20 }}>
                  <Typography variant="h6" color="white" fontWeight="bold">
                    Women's Collections
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Card sx={{ height: '100%', position: 'relative' }}>
                <CardMedia
                  component="img"
                  image="https://th.bing.com/th?id=OIF.hy8KX%2bCxbtk1WGsu2QMEPw&w=247&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
                  alt="Speakers"
                  sx={{ height: 160, objectFit: 'cover' }}
                />
                <CardContent sx={{ position: 'absolute', bottom: 20, left: 20 }}>
                  <Typography variant="h6" color="white" fontWeight="bold">
                    Speakers
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card sx={{ height: '100%', position: 'relative' }}>
                <CardMedia
                  component="img"
                  image="https://th.bing.com/th/id/OIP.3zdjOCvK3gC4K7AvW9ynjQHaJ1?w=138&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
                  alt="Perfume"
                  sx={{ height: 160, objectFit: 'cover' }}
                />
                <CardContent sx={{ position: 'absolute', bottom: 20, left: 20 }}>
                  <Typography variant="h6" color="white" fontWeight="bold">
                    Perfume
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      
     <Grid container spacing={2} justifyContent="center" sx={{ mt: 5, marginBottom: '50px' }}>
        <Grid item xs={12} sm={4} md={3}>
            <Box
              sx={{
                display: 'inline-block',
                p: 2,
                borderRadius: '50%',
                bgcolor: 'rgba(0, 0, 0, 0.1)',
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: '50%',
                  bgcolor: 'black',
                }}
              >
                <StoreIcon fontSize="large" color="primary" />
              </Box>
            </Box>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Free and Fast Delivery
            </Typography>
            <Typography variant="body2">Free delivery for orders over $140</Typography>
          
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          
            <Box
              sx={{
                display: 'inline-block',
                p: 2,
                borderRadius: '50%',
                bgcolor: 'rgba(0, 0, 0, 0.1)',
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: '50%',
                  bgcolor: 'black',
                }}
              >
                <PeopleIcon fontSize="large" color="success" />
              </Box>
            </Box>
            <Typography variant="body1" sx={{ mt: 2 }}>
              24/7 Customer Service
            </Typography>
            <Typography variant="body2">Friendly 24/7 customer support</Typography>
          
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          
            <Box
              sx={{
                display: 'inline-block',
                p: 2,
                borderRadius: '50%',
                bgcolor: 'rgba(0, 0, 0, 0.1)',
              }}
            >
              <Box
                sx={{
                  p: 2,
                  borderRadius: '50%',
                  bgcolor: 'black',
                }}
              >
                <AttachMoneyIcon fontSize="large" color="secondary" />
              </Box>
            </Box>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Money Back Guarantee
            </Typography>
            <Typography variant="body2">We return money within 30 days</Typography>
          
        </Grid>
        </Grid>
    </Box>
  );
};

export default FeaturedSection;

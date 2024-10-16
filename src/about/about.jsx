import React from 'react';
import { Container, Grid, Typography, Box, Avatar, Paper, IconButton } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Shop from './shop.jpg';
import Tom from './th.jpeg';
import Emma from './em.jpeg';
import Will from './ws.jpeg';

const teamMembers = [
  {
    name: 'Tom Cruise',
    role: 'Founder & Chairman',
    img: Tom,
    social: {
      instagram: 'https://www.instagram.com/tomcruise',
      twitter: 'https://twitter.com/tomcruise',
      linkedin: 'https://www.linkedin.com/in/tomcruise',
    },
  },
  {
    name: 'Emma Watson',
    role: 'Managing Director',
    img: Emma,
    social: {
      instagram: 'https://www.instagram.com/emmawatson',
      twitter: 'https://twitter.com/emmawatson',
      linkedin: 'https://www.linkedin.com/in/emmawatson',
    },
  },
  {
    name: 'Will Smith',
    role: 'Product Designer',
    img: Will,
    social: {
      instagram: 'https://www.instagram.com/willsmith',
      twitter: 'https://twitter.com/willsmith',
      linkedin: 'https://www.linkedin.com/in/willsmith',
    },
  },
];

export default function About() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center" sx={{ mt: 4, width: '1300px', marginLeft: '0px' }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3">Our Story</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace, with a strong presence in
            Bangladesh, supported by wide-ranging international marketing and diverse solutions. Exclusive now has
            10,000 sellers and 500 brands and serves 5 million customers.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={Shop} alt="shopping" style={{ width: '105%' }} />
        </Grid>
      </Grid>

    
      <Grid container spacing={2} sx={{ mt: 5, textAlign: 'center' }}>
        <Grid item xs={6} md={3}>
          <Paper elevation={3} sx={{ p: 3 }}>
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
            <Typography variant="h4">10.5k</Typography>
            <Typography variant="body1">Sellers active on our site</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper elevation={3} sx={{ p: 3 }}>
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
                <ShoppingCartIcon fontSize="large" color="error" />
              </Box>
            </Box>
            <Typography variant="h4">33k</Typography>
            <Typography variant="body1">Majority Product Sale</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper elevation={3} sx={{ p: 3 }}>
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
            <Typography variant="h4">45.5k</Typography>
            <Typography variant="body1">Customers active in our site</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper elevation={3} sx={{ p: 3 }}>
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
            <Typography variant="h4">25k</Typography>
            <Typography variant="body1">Annual gross sales in our site</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" textAlign="center" sx={{ mb: 4 }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '350px',
                }}
              >
                
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{
                    width: 150,
                    height: 150,
                    mb: 2,
                  }}
                />

                
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {member.name}
                </Typography>

                
                <Typography variant="body1" color="textSecondary">
                  {member.role}
                </Typography>

                <Box
                  sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'flex-start', 
                    gap: 1,
                    width: '100%',
                  }}
                >
                  <IconButton
                    component="a"
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{ color: 'black' }}
                  >
                    <TwitterIcon />
                  </IconButton>

                  <IconButton
                    component="a"
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{ color: 'black' }}
                  >
                    <InstagramIcon />
                  </IconButton>

                  <IconButton
                    component="a"
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{ color: 'black' }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 5, marginBottom: '50px' }}>
        <Grid item xs={12} sm={4} md={3}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
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
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

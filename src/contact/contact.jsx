import React from 'react';
import { Container, Grid, Box, Typography, TextField, Button, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Container sx={{ mt: 5, m:'35px'}}>
      <Grid container spacing={5}>
        
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              borderRadius: 2,
              p: 3,
              backgroundColor: 'white',
            }}
          >
            
            <Box display="flex" alignItems="center" mb={2}>
              <PhoneIcon sx={{ color: 'red', mr: 1 }} />
              <Typography variant="h6">Call To Us</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" mb={1}>
              We are available 24/7, 7 days a week.
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              Phone: +8801671112222
            </Typography>

           
            <Divider sx={{ my: 3 }} />

            
            <Box display="flex" alignItems="center" mb={2}>
              <EmailIcon sx={{ color: 'red', mr: 1 }} />
              <Typography variant="h6">Write To Us</Typography>
            </Box>
            <Typography variant="body2" color="textSecondary" mb={1}>
              Fill out our form and we will contact you within 24 hours.
            </Typography>
            <Typography variant="body1">
              Emails: customer@exclusive.com <br />
              support@exclusive.com
            </Typography>
          </Box>
        </Grid>

        
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              border: '1px solid #ddd',
              borderRadius: 2,
              p: 3,
              backgroundColor: '#fff',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField label="Your Name *" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="Your Email *" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="Your Phone *" fullWidth variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Your Message"
                  multiline
                  rows={5}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Box textAlign="right" sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="error"
                sx={{ textTransform: 'none', px: 5 }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;

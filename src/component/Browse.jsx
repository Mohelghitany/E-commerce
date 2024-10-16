
import React from 'react';
import { Box, Typography, Grid, Button, IconButton, Paper } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

const categories = [
  { name: 'Phones', icon: '📱' },
  { name: 'Computers', icon: '💻' },
  { name: 'SmartWatch', icon: '⌚' },
  { name: 'Camera', icon: '📷' },
  { name: 'Headphones', icon: '🎧' },
  { name: 'Gaming', icon: '🎮' }
];

const BrowseByCategory = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Browse By Category
      </Typography>

      <Grid container spacing={2} alignItems="center">
        
        <Grid item>
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Grid>

        
        {categories.map((category, index) => (
          <Grid item key={index} xs>
            <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center' }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {category.icon}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {category.name}
              </Typography>
            </Paper>
          </Grid>
        ))}

       
        <Grid item>
          <IconButton>
            <ArrowForward />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BrowseByCategory;

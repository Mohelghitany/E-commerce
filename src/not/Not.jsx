import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Container sx={{ textAlign: 'center', mt: 10 ,m:'35px'}}>
      <Typography variant="h1" sx={{ fontSize: '80px', fontWeight: 'bold' }}>
        404 Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Your visited page not found. You may go to the home page.
      </Typography>

      <Box sx={{ mt: 5 }}>
        <Button
          variant="contained"
          color="error"
          sx={{ textTransform: 'none', px: 5, py: 1.5, fontSize: '16px' }}
          onClick={handleGoHome}
        >
          Back to Home Page
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;

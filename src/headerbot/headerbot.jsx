import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, Menu, MenuItem } from '@mui/material';
import { ShoppingCart, Favorite, Person } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom'; 

const HeaderBot = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const [anchorEl, setAnchorEl] = useState(null); 

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
      
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleNavigateToWishlist = () => {
    navigate('/wishlist');
  };

  const handleNavigateToFavorites = () => {
    navigate('/cart'); 
    console.log(isLoggedIn);
  };
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', false);
    setIsLoggedIn(false);
    navigate('/'); 
    handleMenuClose();
  };

  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <AppBar position="static" style={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        
        <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
          Exclusive
        </Typography>

        <div>
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
          <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
          <Button color="inherit" onClick={() => navigate('/signup')}>Sign Up</Button>
        </div>

        {!isAuthPage && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <InputBase
              placeholder="What are you looking for?"
              style={{ backgroundColor: '#f5f5f5', padding: '5px 10px', borderRadius: '5px', marginRight: '10px' }}
            />
            <IconButton onClick={handleNavigateToWishlist}>
        <Favorite />
      </IconButton>
      <IconButton onClick={handleNavigateToFavorites}>
        <ShoppingCart />
      </IconButton>

            
            <IconButton onClick={handleMenuClick}>
              <Person />
            </IconButton>

            
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  backgroundColor: '#0000000A', 
                  color: 'white',               
                  backdropFilter: 'blur(150%)', 
                  borderRadius: '8px',          
                },
              }}
            >
              <MenuItem 
                  onClick={() => {
                    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 
                    if (isLoggedIn) {
                      navigate('/profile'); 
                    } else {
                      navigate('/signin');  
                    }
                    handleMenuClose(); 
                  }}
                >
                  Manage My Account
                </MenuItem>
              <MenuItem onClick={() => { navigate('/orders'); handleMenuClose(); }}>My Order</MenuItem>
              <MenuItem onClick={() => { navigate('/cancellations'); handleMenuClose(); }}>My Cancellations</MenuItem>
              <MenuItem onClick={() => { navigate('/reviews'); handleMenuClose(); }}>My Reviews</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBot;

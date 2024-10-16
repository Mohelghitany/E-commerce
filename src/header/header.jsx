import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Link, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState('English'); 

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (selectedLanguage) => {
    if (selectedLanguage) {
      setLanguage(selectedLanguage); 
    }
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'black', padding: '5px 0' }}>
      <Toolbar style={{ justifyContent: 'center', textAlign: 'center' }}>
        <Typography variant="body1" style={{ color: 'white' }}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href="#" style={{ marginLeft: '10px', color: 'white', textDecoration: 'underline' }}>
            Shop Now
          </Link>
        </Typography>

        <div style={{ position: 'absolute', right: '10px' }}> 
          <Button
            onClick={handleMenuClick}
            style={{ color: 'white', textTransform: 'none', fontSize: '14px' }}
            endIcon={<ArrowDropDownIcon />}
          >
            {language}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleMenuClose()}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={() => handleMenuClose('English')}>English</MenuItem>
            <MenuItem onClick={() => handleMenuClose('French')}>French</MenuItem>
            <MenuItem onClick={() => handleMenuClose('Spanish')}>Spanish</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { Container, Box, Grid, TextField, Button, Typography, Link } from "@mui/material";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      const nameParts = savedUser.name.split(' ');
      setProfileData({
        firstName: nameParts[0] || '',
        lastName: nameParts[1] || '',
        email: savedUser.email || '',
        address: 'Kingston, 5236, United States',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      });
    }
  }, []);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    const savedUser = JSON.parse(localStorage.getItem('user'));

    
    if (profileData.currentPassword !== savedUser.password) {
      alert("Current password is incorrect!");
      return;
    }

    
    if (profileData.newPassword && profileData.newPassword !== profileData.confirmNewPassword) {
      alert("New passwords do not match!");
      return;
    }

    const updatedUser = {
      name: `${profileData.firstName} ${profileData.lastName}`,
      email: profileData.email,
      password: profileData.newPassword || savedUser.password, 
    };
    localStorage.setItem('user', JSON.stringify(updatedUser));

   
  };

  return (
    <Container maxWidth="lg">
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={3}>
        <Box>
          <Link href="/" sx={{ color: 'black', textDecoration: 'none' }}>
            Home
          </Link>
          {" / "}
          <Typography component="span" sx={{ fontWeight: "bold" }}>
            My Account
          </Typography>
        </Box>

        <Typography variant="body1">
          Welcome!{" "}
          <Link href="#" sx={{ color: 'Red', textDecoration: 'none', fontWeight: 'bold' }}>
            {profileData.firstName} {profileData.lastName}
          </Link>
        </Typography>
      </Box>

      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box
              sx={{
                backgroundColor: "#fff",
                height: "100vh",
                padding: "20px",
              }}
            >
              <Typography variant="h6">Manage My Account</Typography>
              <Box textAlign="center">
                <Link href="#" sx={{ color: "Red", textDecoration: "none", fontWeight: "bolder" }}>
                  My Profile
                </Link>
                <br />
                <Link href="#" sx={{ color: "black", textDecoration: "none" }}>
                  Address Book
                </Link>
                <br />
                <Link href="#" sx={{ color: "black", textDecoration: "none" }}>
                  My Payment Options
                </Link>
              </Box>

              <Typography variant="h6" mt={2}>My Orders</Typography>
              <Box textAlign="center">
                <Link href="#" sx={{ color: "black", textDecoration: "none" }}>
                  My Returns
                </Link>
                <br />
                <Link href="#" sx={{ color: "black", textDecoration: "none" }}>
                  My Cancellations
                </Link>
              </Box>

              <Typography variant="h6" mt={2}>My Wishlist</Typography>
              <Box textAlign="center">
                <Link href="#" sx={{ color: "black", textDecoration: "none" }}>
                  My Wishlist
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={9}>
            <Box
              sx={{
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="h5" mb={2} color="error">
                Edit Your Profile
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="First Name"
                    fullWidth
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Last Name"
                    fullWidth
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    fullWidth
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
                    fullWidth
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="subtitle1">Password Changes</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Current Password"
                    type="password"
                    fullWidth
                    name="currentPassword"
                    value={profileData.currentPassword}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="New Password"
                    type="password"
                    fullWidth
                    name="newPassword"
                    value={profileData.newPassword}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Confirm New Password"
                    type="password"
                    fullWidth
                    name="confirmNewPassword"
                    value={profileData.confirmNewPassword}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button variant="outlined" sx={{ marginRight: "10px" }}>
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#f44336", color: "#fff", "&:hover": { backgroundColor: "#d32f2f" } }}
                      onClick={handleSaveChanges}
                    >
                      Save Changes
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfilePage;

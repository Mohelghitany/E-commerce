
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container} from '@mui/material';

import Banner from '../component/banner.jsx';
import FlashSales from '../component/FlashSale';
import BrowseByCategory from '../component/Browse';
import BestSellingProducts from '../component/best.jsx';
import HomePageSection from '../component/section.jsx';
import ProductGrid from '../component/show.jsx';
import FeaturedSection from '../component/new.jsx';
import { WishlistProvider } from '../WishlistContext';

const Home = () => {
  const [flashSales, setFlashSales] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setFlashSales(response.data.slice(0, 4)); 
        setBestSelling(response.data.slice(4, 8)); 
        setNewArrivals(response.data.slice(8, 12)); 
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
    
      <Banner />

      <Container sx={{ marginTop: '20px' }}>
        <FlashSales products={flashSales} />
        <BrowseByCategory />
        <BestSellingProducts products={bestSelling} />
        <HomePageSection  />
        <ProductGrid />
        <FeaturedSection  />
      </Container>
    
      
    </>
  );
};

export default Home;

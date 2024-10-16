import React, { createContext, useState, useEffect, useContext } from 'react';
import { CartContext } from './CartContext'; 

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  
  
  const { addToCart } = useContext(CartContext);

 
  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

 
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const isAlreadyInWishlist = prev.some(item => item.id === product.id);
      if (isAlreadyInWishlist) return prev;
      return [...prev, product];
    });
  };

  
  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter(item => item.id !== productId));
  };

  
  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  
  const moveToCart = (productId) => {
    const product = wishlist.find(item => item.id === productId);
    if (product) {
      addToCart(product); 
      removeFromWishlist(productId); 
    }
  };

  
  const moveAllToCart = () => {
    wishlist.forEach(item => addToCart(item));
    setWishlist([]); 
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        moveToCart,
        moveAllToCart,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

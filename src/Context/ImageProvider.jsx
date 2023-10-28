// ImageContext.js - using React Context API

import React, { createContext, useState, useContext } from 'react';
import { AccountContext } from './AccountProvider';

export const ImageContext = createContext();

const ImageProvider = ({ children }) => {

  const {account} = useContext(AccountContext);
  const [imageUrl, setImageUrl] = useState(account.picture); // Initialize with default image URL

  return (
    <ImageContext.Provider value={{ 
      imageUrl, 
      setImageUrl 
    }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;

import React, {createContext, useState} from 'react';


export const ShoppingCartContext = createContext(null);

const ShoppingCartContextProvider = ({ children }) => {
  const [medicinesList, setMedicinesList] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);

  /* eslint-disable-next-line react/jsx-no-constructed-context-values */
  return <ShoppingCartContext.Provider value={{ medicinesList, setMedicinesList, selectedShop, setSelectedShop }}>{children}</ShoppingCartContext.Provider>;
};

export default ShoppingCartContextProvider;

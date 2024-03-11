import React, {useContext, useEffect, useState} from 'react';

import MedicineCard from '../../Components/MedicineCard';
import { ShoppingCartContext } from '../../context/shoppingCartContext';

import './drugStores.css';

const DrugStores = () => {
  const { medicinesList, setMedicinesList, selectedShop, setSelectedShop } = useContext(ShoppingCartContext);
  const [shopList, setShopList] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api')
      .then((res) => res.json()
        .then((data) => {
          setLoading(false);
          setShopList(data);
        }));
  }, []);

  const handleAddToCart = (medicine) => {
    if (!medicinesList.map((medicine) => medicine.name).includes(medicine.name)){
      setMedicinesList((prev) => [...prev, medicine]);
    }
  };

  const handleShopClick = (shopId) => {
    setSelectedShop(shopId);
    setMedicinesList([]);
  };

  return (
    <>
      {
        !isLoading ? (
          <div className="store">
            <div className="store-shops">
              <div>Shops:</div>
              {
                shopList?.map((shop) => <div key={shop._id} className={`store-shop-card ${selectedShop === shop._id ? 'card-active' : ''}`}
                                             onClick={() => handleShopClick(shop._id)}>{shop.name}</div>)
              }
            </div>
            {
              selectedShop && <div className="store-medicines">
                {
                  shopList?.find((shop) => shop._id === selectedShop)?.medicines?.map((medicine) => <MedicineCard key={selectedShop + medicine.name} medicine={medicine} onAddToCart={handleAddToCart} />)
                }
              </div>
            }
          </div>
        ) : <div>Loading...</div>
      }
    </>
  );
};

export default DrugStores;

import React, {useEffect, useState} from 'react';

import MedicineCard from "../../Components/MedicineCard";

import './drugStores.css';

const DrugStores = () => {
  const [shopList, setShopList] = useState(null);
  const [medicinesList, setMedicinesList] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
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

  useEffect(() => {
    if (medicinesList.length!== 0) {
      setMedicinesList([]);
    }
  }, [selectedShop]);

  const handleAddToCart = (medicine) => {
    if (!medicinesList.includes(medicine)){
      setMedicinesList((prev) => [...prev, medicine]);
    }
  };

  const handleShopClick = (shopId) => setSelectedShop(shopId);

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
                  shopList.find((shop) => shop._id === selectedShop)?.medicines?.map((medicine) => <MedicineCard key={selectedShop + medicine} medicine={medicine} onAddToCart={handleAddToCart} />)
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

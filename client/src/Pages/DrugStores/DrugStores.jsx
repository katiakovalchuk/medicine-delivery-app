import React, {useEffect, useState} from 'react';

import './drugStores.css';

const DrugStores = () => {
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

  return (
    <>
      {
        !isLoading ? (
          <div className="store">
            <div>Shops:</div>
            {
              shopList?.map((shop) => <div key={shop._id} className="store-card">{shop.name}</div>)
            }
          </div>
        ) : <div>Loading...</div>
      }
    </>
  );
};

export default DrugStores;

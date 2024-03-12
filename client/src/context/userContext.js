import React, {createContext, useState} from 'react';

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  /* eslint-disable-next-line react/jsx-no-constructed-context-values */
  return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;

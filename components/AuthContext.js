import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const loginUser = (token) => {
    console.log('Setting access token:', token);
    setAccessToken(token);
  };

  const logoutUser = () => {
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

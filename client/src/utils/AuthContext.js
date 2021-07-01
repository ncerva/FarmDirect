import React from 'react';

const AuthContext = React.createContext({
  token: '',
  isAuthorized: false,
  isFarmer: false,
  currentUser: 'not logged in'
});

export default AuthContext;
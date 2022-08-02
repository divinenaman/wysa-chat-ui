import React, { useContext } from "react";

import { AuthContext } from "../Providers/AuthManager";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;

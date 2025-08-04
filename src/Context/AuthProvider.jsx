import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {

  const authProperties = { name: "utso" };
  
  return (
    <AuthContext.Provider value={authProperties}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

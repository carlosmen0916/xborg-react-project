import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [isOwner, setIsOwner] = useState(false);
  const [provider, setProvider] = useState(null);
  const [freeNFTContract, setFreeNFTContract] = useState(null);
  const [usdtContract, setUsdtContract] = useState(null);
  const [account, setAccount] = useState(null);
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isOwner,
        setIsOwner,
        provider,
        setProvider,
        freeNFTContract,
        setFreeNFTContract,
        usdtContract,
        setUsdtContract,
        account,
        setAccount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);

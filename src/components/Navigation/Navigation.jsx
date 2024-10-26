import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Images } from "../../assets/imgs/Images";
import { ButtonPrimary } from "../ButtonPrimary";
import { onboard } from "../../service";
import Web3 from "web3";
// import { ethers } from "ethers";
import freeNftabi from "../../abi/freeNFT.json";
import usdtabi from "../../abi/usdt.json";
// import { AbiItem } from "web3-utils";
import { useAppContext } from "../../context/contractContext";
import { FREENFT_ADDRESS, USDT_ADDRESS } from "../../constants/blockchain";
import { backend_url } from "../../constants/backend";
import Loading from "../general/loading";

export const Navigation = () => {
  const [loading, setLoading] = useState(false);
  const context = useAppContext();
  const [active, setActive] = useState(false);
  const [walletFlag, setWalletFlag] = useState(false);
  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    if (context) {
      async function fetchData() {
        let flag = await context.freeNFTContract.methods
          .getPlayingStatus()
          .call();
        setIsStart(flag);
      }
      fetchData();
    }
  }, [context]);

  const links = [
    { to: "home", label: "Home" },
    { to: "twitter", label: "Twitter" },
    { to: "discord", label: "Discord" },
  ];

  const web3 = new Web3(window.ethereum);

  const getNetworkId = async () => {
    const currentChainId = await web3.eth.net.getId();
    return currentChainId;
  };

  const swichNetwork = async (chainId) => {
    const currentChainId = await getNetworkId();

    if (currentChainId !== chainId) {
      try {
        await web3.currentProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Web3.utils.toHex(chainId) }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          alert("add this chain id");
        }
      }
    }
  };

  const handleWallet = async () => {
    try {
      const wallets = await onboard.connectWallet();
      swichNetwork(97);
      const { accounts } = wallets[0];
      // const { accounts, chains, provider } = wallets[0];
      // context.setProvider(new ethers.providers.Web3Provider(provider));
      const web3 = new Web3(window.ethereum);
      setLoading(true);

      const freeNFTContract = new web3.eth.Contract(
        freeNftabi,
        FREENFT_ADDRESS
      );
      await context.setFreeNFTContract(freeNFTContract);

      const usdtContract = new web3.eth.Contract(usdtabi, USDT_ADDRESS);
      await context.setUsdtContract(usdtContract);

      await context.setAccount(accounts[0].address);

      const tokenIds = await freeNFTContract.methods
        .getTokenByOwner(accounts[0].address)
        .call();
      const owner = await freeNFTContract.methods.owner().call();
      if (owner.toLowerCase() === accounts[0].address.toLowerCase()) {
        context.setIsOwner(true);
      }
      context.setUser(tokenIds);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleAction = async (name) => {
    try {
      setLoading(true);
      if (name === "start") {
        const total_token_amount = await context.freeNFTContract.methods
          .totalAmount()
          .call();
        if (total_token_amount < 5) {
          return;
        }
        const isStarted = await context.freeNFTContract.methods
          .getPlayingStatus()
          .call();

        if (isStarted === true) return;
        console.log(isStarted);
        await context.freeNFTContract.methods
          .A_startPlayingSortition()
          .send({ from: context.account });
        setIsStart(true);
        // axios.
      } else if (name === "cancel") {
        await context.freeNFTContract.methods
          .A_finishPlayingSortition()
          .send({ from: context.account });
        axios.get(`${backend_url}/account/cancel`);
      } else if (name === "usdtWithdraw") {
        const total_Amount = await context.usdtContract.methods
          .balanceOf(context.freeNFTContract._address)
          .call();
        await context.freeNFTContract.methods
          .withdrawERC20(total_Amount)
          .send({ from: context.account });
      }
      setWalletFlag(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const walletLogout = async () => {
    try {
      const [primaryWallet] = await onboard.state.get().wallets;
      if (primaryWallet)
        await onboard.disconnectWallet({ label: primaryWallet.label });
      context.setAccount(null);
      context.setFreeNFTContract(null);
      context.setProvider(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="
    flex items-center justify-between py-2 px-6 fixed top-0 left-0 w-full z-20 
    lg:pt-[10px]  lg:px-20 bg-[#151d1b] bg-opacity-90"
    >
      <img src={Images.logo03} className="md:hidden flex h-[75px]" alt="Lodg" />
      <img src={Images.logo04} className="md:flex hidden" alt="Lodg" />
      <nav
        className={`
      bg-[rgba(17,17,17,0.95)] absolute h-screen w-screen top-0 ${
        active ? "left-0 opacity-100" : "left-[-100%] opacity-0"
      }
      items-center flex flex-1 flex-col justify-center
      text-xs font-normal tracking-widest
      transition-all duration-500
      md:pr-[12%] lg:justify-start
      lg:flex lg:flex-row lg:relative lg:w-auto lg:h-auto lg:bg-transparent lg:opacity-100 lg:left-0 
      xl:justify-center z-[99]`}
      >
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) =>
              isActive
                ? "text-primary100 px-5 py-4"
                : "text-light100 px-5 py-4 hover:text-primary100 ease-in duration-200 transition"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      {/* <div className="relative z-[1] md:flex hidden">
        <img src={Images.logo.default} alt="xborg.com" className="h-8" />
      </div> */}
      <div
        className="relative flex justify-center items-centerbg-white lg:ml-20 bg-[gray] w-[150px]"
        onMouseEnter={() => setWalletFlag(true)}
        onMouseLeave={() => setWalletFlag(false)}
      >
        {/* <div className="absolute w-36 h-36 bg-primary100 rounded-full blur-[150px] bottom-0 hidden lg:flex">
          adsfasdfasd
        </div> */}

        <ButtonPrimary
          label={
            context.account
              ? `${context.account.slice(0, 6)}...${context.account.slice(
                  context.account.length - 4,
                  context.account.length
                )}`
              : "Connect Wallet"
          }
          className="relative"
          onClick={() => {
            if (!context.account) handleWallet();
          }}
        />
        {walletFlag && context.account && (
          <div className="absolute top-[100%] w-full">
            {context.isOwner && (
              <>
                <ButtonPrimary
                  label="Start sortition"
                  className="relative"
                  onClick={() => {
                    handleAction("start");
                  }}
                  disabled={isStart}
                />
                <ButtonPrimary
                  label="Cancel sortition"
                  className="relative"
                  onClick={() => {
                    handleAction("cancel");
                  }}
                />
                <ButtonPrimary
                  label="USDT withdraw"
                  className="relative"
                  onClick={() => {
                    handleAction("usdtWithdraw");
                  }}
                />
              </>
            )}
            <ButtonPrimary
              label="Disconnect Wallet"
              className="relative"
              onClick={() => {
                walletLogout();
              }}
            />
          </div>
        )}
      </div>
      <div
        className="w-10 h-10 bg-dark100 flex justify-center items-center relative z-[100] lg:hidden"
        onClick={() => setActive(!active)}
      >
        <img src={Images.menu.default} alt="hamburger" />
      </div>
      {loading && <Loading text="Loading" color="#4287f5" />}
    </div>
  );
};

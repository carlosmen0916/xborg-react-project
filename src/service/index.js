import Onboard from "@web3-onboard/core";
// import ball from "../assets/ball.svg";
import coinbaseModule from "@web3-onboard/coinbase";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";
const injected = injectedModule();
const coinbase = coinbaseModule();
const walletConnect = walletConnectModule();
const infuraID = 'f3fa7f76f22c4bd5a1d25cacc37c4b67';
export const onboard = Onboard({
    wallets: [injected, coinbase, walletConnect],
    chains: [
        {
            id: "0x1",
            token: "ETH",
            label: "Ethereum",
            rpcUrl: `https://mainnet.infura.io/v3/${infuraID}`,
        },
        {
            id: "0x5",
            token: "ETH",
            label: "Goerli",
            rpcUrl: `https://goerli.infura.io/v3/${infuraID}`,
        },
        {
            id: "0x38",
            token: "BNB",
            label: "Binance",
            rpcUrl: "https://bsc-dataseed.binance.org",
        },
        {
            id: "0x61",
            token: "BNB",
            label: "BNBTest",
            rpcUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
        },
        {
            id: "0x89",
            token: "MATIC",
            label: "Polygon",
            rpcUrl: "https://matic-mainnet.chainstacklabs.com",
        },
    ],
    apiKey: '119476c4-d356-494e-b9c0-06e594ed198a',
    appMetadata: {
        name: "loyal",
        // icon: ball,
        // logo: ball,
        description: "loyal app",
        recommendedInjectedWallets: [
            {
                name: "Metamask",
                url: "https://metamask.io",
            },
            {
                name: "Coinbase",
                url: "https://wallet.coinbase.com/",
            },
        ],
    },
    accountCenter: {
        desktop: {
            enabled: false,
        },
        mobile: {
            enabled: false,
        },
    },
});

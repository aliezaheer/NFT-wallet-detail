import { useEffect, useState } from "react";
import NFTContainer from "./components/NFTContainer";

function App() {
  const [walletAddress, setWalletAdress] = useState(null);
  const [nfts, setNfts] = useState([]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setWalletAdress(accounts[0]);
    }
  };

  const getNFTData = async () => {
    if (!walletAddress) return;

    const response = await fetch(
      `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`
    );

    const data = await response.json();

    setNfts(data.items);
  };

  useEffect(() => {
    getNFTData();
  });

  return (
    <div className="App">
      <div>Account: {walletAddress} </div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <NFTContainer nfts={nfts} />
    </div>
  );
}

export default App;

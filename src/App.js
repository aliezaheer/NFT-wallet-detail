import { useEffect, useState } from "react";
import NFTContainer from "./components/NFTContainer";

function App() {
  const [walletAddress, setWalletAdress] = useState("Not connected");
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
      <div className="flex justify-center">
        <div>
          <div className="text-5xl font-bold mb-10">Fiver Project for NFT</div>
          <div>Account: {walletAddress} </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
          <NFTContainer nfts={nfts} />
        </div>
      </div>
    </div>
  );
}

export default App;

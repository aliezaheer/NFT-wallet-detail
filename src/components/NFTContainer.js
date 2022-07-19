import React from "react";
import NFTCard from "./NFTCard";

const NFTContainer = ({ nfts }) => {
  return (
    <>
      {nfts.map((nft, index) => {
        return <NFTCard nft={nft} key={index} />;
      })}
    </>
  );
};

export default NFTContainer;

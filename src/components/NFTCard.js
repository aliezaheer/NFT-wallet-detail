import React from "react";

const NFTCard = ({ nft }) => {
  return (
    <>
      <img
        src={nft.meta.content[1].url}
        alt="Beautiful NFT's coming from opensea"
      />
      <div>Contract Address:</div>
      <div>{nft.contract}</div>

      <div>Cllection Address:</div>
      <div>{nft.collection}</div>
      <div>NFT Name:</div>
      <div>{nft.meta.name}</div>
      <div>Collection Description:</div>
      <div>{nft.meta.description}</div>
    </>
  );
};

export default NFTCard;

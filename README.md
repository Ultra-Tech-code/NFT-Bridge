# Overview

---
This project involves the creation and deployment of an ERC721A-compliant NFT (Non-Fungible Token)
contract named MetaverseNFT on Sepolia Ethereum testnet then approve and deposit the NFT to Polygon
Aloy using their fxPortal bridge.

## Getting Started

---
### Prerequisites

- Use **Node.js version 18** or higher.
- NPM


## Project Initialization

---
```shell
git clone https://github.com/Ultra-Tech-code/NFT-Bridge
```
```shell
cd NFT-Bridge
```
```shell
npm install
```

## Configuration

---
### Deploy contract
First compile the contract using `npx hardhat compile` then deploy the contract onto
Sepolia Ethereum testnet using the following command:
```shell
npx hardhat run scripts/MetaverseNFT/deploy.js --network sepolia
```

Then, if everything is set up right, you get a console response like this:
```
MetaverseNFT deployed to <CONTRACT-ADDRESS>
```
### Batch mint NFTs
To batch mint NFTs to the deployed contract, update the contract address in the
`.env.example.` file and rename the file to `.env`. Also, subsequently update
the required variables in the `.env` file.  

Then run the `batchMint.js` script with this hardhat command:
```shell
npx hardhat run scripts/MetaverseNFT/batchMint.js --network sepolia
```
The response log will look like:
```
MetaverseNFT Balance  of  <WALLET-ADDRESS> is <Number>
prompt description:  /imagine metaverse
```
### Approve transfer and deposit the NFTs to Polygon bridge
Pass in the Polygon Amoy bridged address of your contract to `BRIDGE-ADDRESS` in
`.env`, then run the `approveTransfer.js` script with hardhat:
```shell
npx hardhat run scripts/MetaverseNFT/approveTransfer.js --network sepolia
```
The response should look like this:

```
NFT approval confirmed
NFT deposited on Polygon Amoy
```


## Author

0xblackadam
const hre = require("hardhat");
require("dotenv").config();

const fxERC721RootContractABI = require("../../fxErc721RootContractAbi.json");

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;
const fxERC721RootAddress = "0x9E688939Cb5d484e401933D850207D6750852053";

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  //metaverse contract
  const metaverseNFT = await hre.ethers.getContractAt("MetaverseNFT", CONTRACT_ADDRESS);

  //fxroot contract
  const fxRootContract = await hre.ethers.getContractAt(fxERC721RootContractABI,fxERC721RootAddress );

  // Approve NFTs for transfer
  const approveTx = await metaverseNFT.connect(deployer).setApprovalForAll(fxERC721RootAddress, true);
  await approveTx.wait();
  console.log("metaverseNFT approval confirmed");


  // Deposit NFTs to Polygon Mumbai bridge
  for (let i = 0; i < 5; i++) {
    const depositTx = await fxRootContract.connect(deployer).deposit(CONTRACT_ADDRESS, ACCOUNT_ADDRESS, i, "0x6566");
    await depositTx.wait();
  }

  console.log("metaverseNFT deposited on Polygon Amoy");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
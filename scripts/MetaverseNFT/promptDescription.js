const hre = require("hardhat");
require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
  const metaverseNFT = await hre.ethers.getContractAt("MetaverseNFT", CONTRACT_ADDRESS);

  console.log("prompt is ",await metaverseNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const metaverseNFT = await hre.ethers.getContractAt("MetaverseNFT", CONTRACT_ADDRESS);

  const balance = await metaverseNFT.balanceOf(ACCOUNT_ADDRESS);
  console.log("Balance is ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
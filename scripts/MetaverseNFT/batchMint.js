const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const metaverseNFT = await hre.ethers.getContractAt("MetaverseNFT", CONTRACT_ADDRESS);
  
  const mintTx = await metaverseNFT.safeMint(5);
  await mintTx.wait();

  let nftBalance = await metaverseNFT.balanceOf( ACCOUNT_ADDRESS )

  console.log( `MetaverseNFT Balance  of  ${ACCOUNT_ADDRESS} is ${nftBalance}`);
  console.log("prompt description: ", await metaverseNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
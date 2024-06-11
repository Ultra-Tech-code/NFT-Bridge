const hre = require("hardhat");

async function main() {
  const MetaverseNFT = await hre.ethers.deployContract("MetaverseNFT");
  const metaverseNFT = await MetaverseNFT.waitForDeployment();

  console.log("MetaverseNFT deployed to", metaverseNFT.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { AMOY_URL, PRIVATE_KEY, SEPOLIA_URL} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    polygon: {
      url: AMOY_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  sourcify: {
    enabled: true,
  },
};

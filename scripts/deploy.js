const { ethers } = require("hardhat");

async function main() {
  const TokenSeerAnalytics = await ethers.getContractFactory("TokenSeerAnalytics");
  const tokenSeerAnalytics = await TokenSeerAnalytics.deploy();

  await tokenSeerAnalytics.deployed();

  console.log("TokenSeerAnalytics contract deployed to:", tokenSeerAnalytics.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

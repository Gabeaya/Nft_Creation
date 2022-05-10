//ether.js comes built in with hardhat
//it is a good library for interacting with ethereum

//oimport ethers


const {ethers} = require("hardhat");

async function main() {

  //things we want the function to do:
  //We want the script to  determnie what contract to deploy
  const contract = await ethers.getContractFactory("NFT");
  //Deploy it
  const deployedContract = await contract.deploy();
  //Await completion of deployment
  await deployedContract.deployed();
  // Print the contract address
  console.log("Nft deployed to: ", deployedContract.address)

}

main()
// once the main function is ran then we can proceed to exit
  .then(() => process.exit(0))
  // if there is an error
  .catch((error) => {
    //console error and then exit
    console.error(error);
    process.exit(1);
  });
;
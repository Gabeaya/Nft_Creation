require("@nomiclabs/hardhat-waffle")
// this allows the app to read the env file 
require("dotenv").config();
const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL
const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY
module.exports = {
  solidity: "0.8.4",
  
  // what to do:
  // define test this.networks
  networks: {
    ropsten: {
      url: ALCHEMY_API_KEY_URL,
      // define the accout to use to deploy
      accounts: [ROPSTEN_PRIVATE_KEY],
    },
  },
  // define the accout to use to deploy
};

import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import '@nomiclabs/hardhat-ethers'
import "@typechain/hardhat";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{
      version: "0.8.15",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }],
  },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      blockGasLimit: 300000000,
      accounts: {
        count: 10,
        accountsBalance: "100000000000000000000000000"
      },
      loggingEnabled: false
    },
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
  },
  typechain: {
    outDir: 'typechain'
  },
  mocha: {
    timeout: 0,
    bail: true
  }
};

export default config;

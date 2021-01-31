import Web3 from "web3";
import ApplyProblem from './contracts/ApplyProblem.json';

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [ ApplyProblem ],
  
};

export default options;

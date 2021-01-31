import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import ApplyProblem from './contracts/ApplyProblem.json';
import AnswerProblem from './contracts/AnswerProblem.json';

const options = {
  web3: {
    block: false,
    customProvider: new Web3("ws://localhost:8545"),
  },
  contracts: [ ComplexStorage, ApplyProblem, AnswerProblem ],
  events: {
    ApplyProblem: ["Log"]
  }
};

export default options;

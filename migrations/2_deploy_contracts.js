const ApplyProblem = artifacts.require("ApplyProblem");
const ComplexStorage = artifacts.require("ComplexStorage");

module.exports = function(deployer) {
  deployer.deploy(ApplyProblem);
  deployer.deploy(ComplexStorage);
  
};

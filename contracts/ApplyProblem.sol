pragma solidity ^0.5.0;

contract ApplyProblem {

    event Log(string);
    address public owner;
    address payable public beneficiary;
    uint count = 0;

    constructor() public{
        owner = msg.sender;
    }

    modifier OnlyOwner (){
        require(msg.sender == owner);
        _;
    }
    
    mapping (uint => DataBase) public data;

    struct DataBase {
        uint id;
        address addressAsker;
        string pb;
        uint bounty;
        bool resolved;
        address payable addressAnswer;
        string solution;
    }

    string[5] public arr;

    function postPb(string memory _pb, uint _bounty) public payable{
        
        require(msg.sender.balance >= _bounty,'You dont have enough ETH to complete this form');
        data[count].id = count;
        data[count].addressAsker = msg.sender;
        data[count].pb = _pb;
        data[count].bounty = _bounty;
        data[count].resolved = false;
        count++;
        
    }

    function AnswerPb(uint rank, address payable _addr,string memory _pb) public {
        data[rank].addressAnswer = _addr;
        data[rank].solution = _pb;
        
    }

    
    function resolved(uint rank) public payable{
        beneficiary = data[rank].addressAnswer;
        beneficiary.transfer(data[rank].bounty);
        data[rank].resolved = true;
        
    }


}



pragma solidity ^0.4.24;

contract Marriage {
  
  string public husband;
  string public wife;
  string public owner;

  constructor() {
    owner = msg.sender;
  }

  function obtainMarriageCertificate(string newHusband, string newWife) public payable {
    require(msg.sender = owner);
    require(msg.value > .001 ether);
    husband = newHusband;
    wife = newWife;
  }

}
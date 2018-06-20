# Ethereum Intro Workshop

Metamask networks on http://ethernodes.org/network/2

== Tools ==
1. Ganache stack - ethereum simulator 
  Flavors: Ganache UI, Ganache core, Ganache CLI

2. Web3 

3. Truffle - development environment, testing framework, and asset pipeline for Ethereum that gives you a lot of scaffolding for easier production development
   HDwallet

4. Infura - you can rent a node on this free tool via an API (Rinkeyby nodes, Mainnet nodes, Kovan nodes)


=== GANACHE UI WALKTHROUGH ===
- Simulator
- Featuers
- Automining
- CLI screen
- Chrome

1:1 correlation between a block and transaction in Ganache.
However, in Ethereum, there's a 1:many relationshp between blocks and transactions.


=== INFURA ===

Register for an API. Use one of these test or production endpoints as your Ethereum client provider. 
Add your Access Token to the end of the URL:

Mainnet	production network	https://mainnet.infura.io/DFS4YNHytZmjgqc2Mxtu
Ropsten	test network	https://ropsten.infura.io/DFS4YNHytZmjgqc2Mxtu
INFURAnet	test network	https://infuranet.infura.io/DFS4YNHytZmjgqc2Mxtu
Kovan	test network	https://kovan.infura.io/DFS4YNHytZmjgqc2Mxtu
Rinkeby	test network	https://rinkeby.infura.io/DFS4YNHytZmjgqc2Mxtu
IPFS	gateway	https://ipfs.infura.io


=== SOLIDITY SMART CONTRACT ===

*RISKS:
- Security & attack vectors
- Concurrecy issues (Reentrancy, etc.)

*COMPILATION & DEPLOYMENT
- Compiler: solc
- Execution environment: EVM
- Storage: blockchain



BYTECODE

Contract creation transaction -- From address, To address
When you deploy a contract, the "To address" is null

http://remix.ethereum.org/#optimize=false&version=soljson-v0.4.24+commit.e67f0147.js


=== DECEMNTRALIZED MUNICIPALITY ===
- Use blockchain to store marriages
- Marriage Contract Solidity contract


====== SYNTAX ======

pragma solidity ^0.4.24;

contract Marriage {
	
	string public husband;
	string public wife;

	function obtainMarriageLicense(string newHusband, string newWife) public
	  husband = newHusband;
	  wife = newWife;
	}

}

=== Main Data Types ===
bool 
address (20-byte Ethereum address on blockchain)
string
int (int8, int16...int256)
uint (signed or not signed, positive/negative numbers, uint8...uint256)

=== Data Structures ===
mapping (key value pair)
struct  (like in C) 
fixed-length array
dynamic array


http://faucet.rinkeby.io


=== GAS ===
- gas units
- gas price (in wei)
- gas limit
- your cost is
  

=== MSG GLOBAL VARIABLE ===
Meta-data about the party that invoked the contract:

msg.sender (address of party invoking contract)
msg.value (any ether sent with the invocation)
msg.gas  
msg.data


=== GLOBAL FUNCTIONS ===
- examples:
  -- keccak256()






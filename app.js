console.log('Welcome to Solidity 101');

const ganache = require('ganache-cli');
const Web3 = require('web3');
const solc = require('solc');

const path = require('path');
const fs = require('fs');
const contractLocation = path.resolve(__dirname, 'contracts', 'Marriage.sol');
const contract = fs.readFileSync(contractLocation, 'utf-8');

var run = async() => {

  web3 = new Web3(ganache.provider());
  accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log(accounts[0]);
  console.log(contract);

  compiled = solc.compile(contract,1).contracts[':Marriage'];
  console.log(compiled.interface);
  console.log(compiled.bytecode);

  marriageContract = await new web3.eth.Contract(JSON.parse(compiled.interface))
    .deploy({data: '0x' + compiled.bytecode})
    .send({gas:'1000000', from:accounts[0]});

  console.log(marriageContract);
  console.log('Contract address: ', marriageContract.options.address);

  marriageCertificate = await marriageContract.methods.obtainMarriageCertificate('dad', 'mom').send({from:accounts[0]});
  transactionHash = marriageCertificate.transactionHash;

  console.log('Tx hash:', transactionHash);

  const HDWalletProvider = require('truffle-hdwallet-provider');
  infuraURL = 'https://rinkeby.infura.io/' + infuraAccessKey ;
  provider = new HDWalletProvider(mnemonic, infuraURL);
  web3 = new Web3(provider);
  accounts = await web3.eth.getAccounts();

  marriageContract = await new web3.eth.Contract(JSON.parse(compiled.interface))
  .deploy({data: '0x' + compiled.bytecode})
  .send({gas:'1000000', from:accounts[0]});
  console.log('Rinkeby Contract address: ', marriageContract.options.address)

  marriageCertificate = await marriageContract.methods.obtainMarriageCertificate('dad', 'mom').send({from:accounts[0]});

}

run();
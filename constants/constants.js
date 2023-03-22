export const ADDRESS = "0x16E7eF94cE592114EbCDF29a1Af5FfD3fb3634Aa"
export const ABI =[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "confession",
        "type": "string"
      }
    ],
    "name": "Confessed",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "theConfession",
        "type": "string"
      }
    ],
    "name": "confess",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCounter",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
export const ADDRESS = "0xDef94e2eaE1A10BaEE9421Bf53594096918Cc931"
export const ABI =[
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "confession",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "num",
        "type": "uint256"
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
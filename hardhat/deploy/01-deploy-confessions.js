const {ethers, network} = require("hardhat")

module.exports = async function ({getNamedAccounts, deployments}){
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId
    console.log(chainId)
    await deploy("Confessions", {
        from:deployer,
        args:[],
        log:true
    })






}

module.exports.tags = ["confessions", "all"]
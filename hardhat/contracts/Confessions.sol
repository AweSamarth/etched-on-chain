// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract Confessions{
    uint256 counter = 0;



    event Confessed(string confession, uint num);

    function getCounter() public view returns(uint256){
        return counter;
    }

    function confess(string memory theConfession) public {
        counter++;
        emit Confessed(theConfession, counter);
    
    } 

}


/*
> const confessionsFactory = await ethers.getContractFactory("Confessions")
> const confessions= await confessionsFactory.deploy()
> const transactionResponse = await confessions.confess("another confession")
> const transactionReceipt = await transactionResponse.wait()
> console.log(transactionReceipt.events[0])
> console.log(transactionReceipt.events[0].args.confession
> const allevents = await confessions.queryFilter("Confessed")
> console.log(allevents.length)



*/

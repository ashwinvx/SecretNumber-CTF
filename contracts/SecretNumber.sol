//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;


contract SecretNumber {
    bytes32 answerHash = 0x763a7e0ee79faefad826c47a503fa6ee5c67f35d622ef6580ba47c2bb991c707;
    address public owner;
    
    constructor() public {
        owner = msg.sender;
    }
    
    function changeOwner(uint8 secretNumber) public {
        //require(msg.value == 1 ether);
        
        if (keccak256(abi.encodePacked(secretNumber)) == answerHash) {
            owner = msg.sender;
            //payable(address(msg.sender)).transfer(1 ether);
        }
    }
}
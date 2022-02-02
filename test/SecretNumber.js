const { expect } = require("chai");
const { ethers } = require("hardhat");
const { sha3, toHex } = require("web3-utils");

/// @title Test class for Secret Number CTF assignment
/// @author Ashwin Rachakonda 💯💯😎💯💯
/// @notice Used for testing Secret Number

describe("Secret Number", () => {
    let SecretNumber, secretNumber;
    let owner;

    beforeEach(async () => {
        [owner] = await ethers.getSigners();
        SecretNumber = await ethers.getContractFactory("SecretNumber");
        secretNumber = await SecretNumber.deploy();
    });

    describe("deployment", function () {
        it("check owner", async function () {
            expect(await secretNumber.owner()).to.equal(owner.address);
        });
    });

    describe("changeOwner", function () {
        let num;
        for(i=0; i < 256; i++){
            console.log('hash-->'+i+'-->'+sha3(toHex(i)));
            if(sha3(toHex(i)) == 0x763a7e0ee79faefad826c47a503fa6ee5c67f35d622ef6580ba47c2bb991c707){
                num = i;
                break;
            }
        }
        console.log('Secret Number-->'+num);

        /*it("change owner", async function () {
            await secretNumber.changeOwner(num);
            expect(await secretNumber.owner()).to.equal(owner.address);
        });*/
    });
});
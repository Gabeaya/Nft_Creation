// SPDx-License-Identifyer: MIT
pragma solidity ^0.8.4;

// this allows us to use contracts from openzeppelin which give us usable code
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//this denotes that what type of contract framework
contract NFT is ERC721{
    //Create an ERC721 contract
    //Mint some NFTS

    constructor () ERC721("NFT", "LNFT"){
        _mint (msg.sender, 1);
    }
}
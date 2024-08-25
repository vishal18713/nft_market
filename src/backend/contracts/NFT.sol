// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract NFT is ERC721URIStorage {
    uint public tokenCount;
    constructor() ERC721("v NFT","VNFT") {
        
        
    }

    function mint(string memory _tokenURI) external returns (uint) {
        uint tokenId = tokenCount;
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        tokenCount++;
        return tokenCount;
    }
}

// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Marketplace is ReentrancyGuard {

    address payable public immutable feeAccount; // account for recciving fees
    uint public immutable feepercent;//fee percentages on sales
    uint public itemCount;

    constructor(uint _feePercent) {
        feeAccount = payable(msg.sender);
        feepercent = _feePercent;
        
    }
}


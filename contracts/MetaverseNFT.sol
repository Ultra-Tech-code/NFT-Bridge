// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract MetaverseNFT is ERC721A {
    constructor() ERC721A("MetaverseNFT", "MFT") {}

    function safeMint(uint8 _quantity) external payable {
        if (_quantity > 5 || totalSupply() + _quantity > 5 ) _revert("Max");
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmZn5pNQdeLo6ZpYLkASTmrbdXqcXUffiDydBzxCFZTZdR/";
    }

    function promptDescription() external pure returns (string memory) {
        return "/imagine metaverse";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}
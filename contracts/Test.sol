// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

contract Test {
    error MyCustomError(uint256 i);

    constructor() {}

    function doRevertWithMyCustomError() external {
        revert MyCustomError(1 ether);   
    }
}
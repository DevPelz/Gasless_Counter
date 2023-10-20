// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

interface IERC2771Context {
    function _msgSender() external view returns (address sender);
}

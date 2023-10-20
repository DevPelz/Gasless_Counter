# Gasless Transaction Smart Contract

**Deployed on Mumbai Testnet at:** [0xff29e9DB150B2aBe5E2939fb4E92C343b7eD2761](https://mumbai.polygonscan.com/address/0xff29e9DB150B2aBe5E2939fb4E92C343b7eD2761)

**DEMO APP** [gasless counter](https://gasless-counter-r3uz.vercel.app/)

## Overview

This smart contract demonstrates the implementation of gasless transactions using account abstraction. It allows you to perform transactions without worrying about gas costs, making it user-friendly and accessible.

## Features

1. **Gasless Transactions**: Users can interact with the contract without paying gas fees. The contract sponsor (Relayer) covers the gas costs for the transactions.

2. **Counter**: The contract provides a simple counter that can be incremented or decremented.

3. **Transaction History**: The contract records the address of the last user who interacted with it.

## Usage

### Setting Up the Contract

1. Deploy the contract to the Mumbai Testnet or your preferred network.

2. Define a trusted forwarder. The trusted forwarder's address should be provided when deploying the contract. This address will be used for gasless transactions.

### Interacting with the Contract

1. Use the functions:

   - `setNumber(uint256 newNumber)`: Set the counter to a specific value.
   - `increment()`: Increment the counter.
   - `decrement()`: Decrement the counter.

2. View the address of the last user who interacted with the contract using `showAddress()`.

### Gasless Transactions

To execute gasless transactions, users need to sign and submit transactions through a trusted relayer. The relayer will cover the gas costs.

## Prerequisites

1. Ethereum Wallet (e.g., MetaMask) with testnet (e.g., Mumbai) support.

2. Access to a trusted relayer service for gasless transactions.

## Development

The contract is written in Solidity and uses the OpenZeppelin ERC2771Context for gasless transaction support. You can modify and extend the contract to suit your specific use cases.

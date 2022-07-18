---
title: My Project
layout: page
---

## Inspiration

I have always wanted to do a project in Web3 and decentralized exchange is an idea which initially fascinated me, because of the fact that there is no intermediary involved, only code.

## What it does

Centralized exchanges require the user to verify themselves and the transaction between any two buyers and sellers involves an intermediary. Waffleswap is a decentralized exchange over ethereum wherein the transaction takes place directly between the buyer and seller. This removes the intermediary and the KYC requirement which otherwise would need to be done in centralized exchanges. This is one of the core concepts of decentralization, which states trustless transactions. Waffleswap is a simple user friendly DApp built using Solidity for smart contracts.

## How I built it

Nextjs and Tailwind CSS for the Frontend Application
Ganache Blockchain for running the DEX on.
Truffle and Web3.js for building and testing Smart Contracts.
Solidity for defining the Smart Contracts functionality.

## Challenge I ran into while building

While testing the Selling function, I ran into a bug where the selling function was verifying the transaction but not performing it. Console threw the error: MetaMask - RPC Error: Cannot set properties of undefined (setting 'loadingDefaults'), reinstalling modules and recompiling didn't do anything, but it worked out after I changed the function to async await syntax. Now everything works flawlessly.

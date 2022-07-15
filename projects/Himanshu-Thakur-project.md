---
title: My Project
layout: page
---

## Inspiration

Love for chess!

## What it does

A Chess Gaming platform where users can play chess either in offline mode vs Stockfish engine or in a multiplayer format vs other players online . The users can also view their win/loss statistics in form of a pie chart. Anyone can also learn and solidify his / her understanding of the game from the learn chess section of application, where youtube videos from a leading chess content creator are showcased.


## How I built it

I started by building a login screen for the application followed by setting up a chess board and pieces . The chessboard along with all the logics of the game were put in place using a package of flutter called bishop. Then after configuring the stockfish engine also available as part of bishop package , I started upon the online gameplay part. For this purpose I make players join a socket.io room with a common id . Each room can accomodate upto 2 players and when a room hits the limit, the game begins. Then I started preserving the players data (their wins and losses ) on cloud firestore database provided by Google's Firebase. This data was then showcased in the application using a pie chart. Lastly I took upon the learn chess section for which I used the youtube v3 api from GCP console and fetched the videos from my target playlist.

## Challenge I ran into while building 

- Was using Socket.io for the very first time . So had to learn from scratch . Also faced issues with version incompatibility between Socket.io on nodejs and flutter.

- Setting up the stockfish engine using flutter's bishop package was challenging
---
title: My Project
layout: page
---

## Inspiration

The idea or inspiration is that the users can pay for movies in hbars directly to production companies without any intermediaries using Hedera's transaction system.

## What it does

MovieNix is a decentralized streaming platform built on top of Hedera's Hashgraph SDK. The users can log in to the platform using Google authentication. Then users can scroll or slide through the movies according to the genre on the home page or search for a particular movie. After the first login, a user is given a header account ID and a private key, to create a transaction for payment of movie and check balance which is done in the header network.

There are two types of subscription features to watch a movie on this platform->
1)buy a movie for 14 days by giving a one-time fee and watch it an infinite number of times, before the movie gets unsubscribed.
2)If you don't want to buy the full movie and you want to watch a specific part then you can use the pay per second(PPS) feature, which lets you pay only for the number of seconds you watched.

The website is highly responsive and it looks engaging both on desktop and mobile. Firebase is been used for the necessary storage of information.

The reason for making this project is to directly send the user's money to production companies without third-party involvement

## How I built it

I learned quite a lot of things while working on this project. Firstly, I learned a lot about reactJS from the react documentation. I learned react-router-dom for the frontend routing. I learned how to set up google authentication and firebase for the storage of necessary information. To get the movie details and movie trailer ID on the website, I had to go through the TMDB documentation and check with the postman whether I am getting the necessary information or not.

Then I had to go through the Hedera hashgraph SDK documentation so that we can set up the server, for that I had to make a dummy project to experiment with account creation, transfer money, and get user balance.

For the movie platform UI, we had to go through dribble, and I went ahead and designed the whole home page, with an animation that makes the home page look stunning and responsive at the same time using styled-components.

For the video player, I had to go through a bunch of YouTube videos and came up with a react-player or YouTube-player, and used them to enhance user experience and implement (PPS)pay-per-second feature.

Extra things learned-Heroku-CLI, CI/CD, scrum, leadership, teamwork, and collaboration.

## Challenge I ran into while building 

The main challenge was the decentralised payment part. Had to go through a huge documentation to implement that.
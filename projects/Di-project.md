---
title: My Project
layout: page
---

## Inspiration

This is a project built for e-commerce platforms to track their inventory so that they can maintain and manage their inventory more efficiently.

## What it does

E-commerce platforms can track their, maintain and manage their inventory more efficiently. One can add new items in the system, edit the existing items, delete them, and undo the deletion. The inventory is presented in a table and I enabled pagination make it look better.

## How I built it

I first designed the front-end and used bootstrap to create a webpage that present the inventory in a table, as well as the buttons for CRUD functionalities. Then, I connected to the database in the backend to fetch the data and implemented the CRUD functionalities. Then, I implemented the undo deletion feature, and enabled pagination with a library called mongoose-paginate-v2.

## Challenge I ran into while building

The biggest challenge I had was to implement the multiple deletion functionality for the checked items. It was hard because I used a modal for deletion confirmation, but it is separate from the item table with the item information including item ID, which makes it difficult to get the ID of the checked items. Apart from that, the undelete feature was also hard to implement. I think a good way to do that is to create a separate database for the deleted items. But for convenience, I just played a trick there, and delete the selected items rows using Javascript, which means the they are not really deleted from the database, making it possible for the user to fetch the data again from the database after they decide to undo the deletion.

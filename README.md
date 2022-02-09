MEMORY-LOTERIA
Lotería (Spanish word meaning "lottery") is a traditional game of chance, similar to bingo, but using iconic images in Mexican culture on a deck of cards instead of numbers.

Instructions:
Lotería Mexicana’s simplest variant consists of the following rules:

1.- There is a deck with 54 cards, each card has an image of Mexican culture, but this version only have 12 cards.
2.- Since this is my own version, I will make each image a memory card. 
3.-This game is for a single player
4.-Each memory card has a meaning in the Mexican culture.
5.-The background is pinto beans, because that is our traditional markings for the original Loteria.
6.-Players have to match the cards with the same image, in the less amount of clicks.
7.- The score is 3 guitars for the best score, 2 guitars for the middle score and 1 guitar for the lowest score. 

Starting the project:
At the beginning I wanted to do a full functioning Loteria. But as I did my research, I found out the a lots of people fall before me trying to do this project. I only saw one full game that is functioning and it is from Google. 

Check Google Loteria game from 2019:
https://g.co/kgs/bPRQkv

Taking in consideration the time I had, since I work full time with overtime like the rest of us. I decided to do something more simple. I thought.

I love memory game, but also love loteria game, so I decided to combined the two of them. 

I start to collect the images and I try to decided how should I display my images. 

I knew I needed to have all the cards in one screen to do the matching. I did run into a few problems with the display. I have to return to my lessons about boxes and placement. 

I also did some research:
https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model

Because I had several images position in to top of each other and I have to take in consideration the transtion of the board, memory-card, container and score board.
I run into too much problems with placing my items correctly
here are few photos of the horrors I made:

![Guitar bad placement!](img/images for the project/guitars display wrong.png)


the second problem after placing everything was that I could not have my cards shuffle correctly, the cards keep appearing in the same place and next to each other. 
To correct the problem, I made my code look like this:

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 32);
    card.style.order = randomPos;
  });
})();

Then I try to set my reset button, I wanted a button that look like the reset of the browser, so I use the Fa-Fa reset, but then I run into another problem, not matter what I did the button would not reset my cards. 
After asking for help from the intructor, he spot a capitalization error where I link my Scripts.js. I had it like scripts.js. after correcting this the reset button start working.



different problems , how your solve them,
how the development came together
youtube video playing it.

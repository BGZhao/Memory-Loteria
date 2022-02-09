# **MEMORY-LOTERIA**
Lotería (Spanish word meaning "lottery") is a traditional game of chance, similar to bingo, but using iconic images in Mexican culture on a deck of cards instead of numbers.

## **Instructions:**
Lotería Mexicana’s simplest variant consists of the following rules:

1. There is a deck with 54 cards, each card has an image of Mexican culture, but this version only have 12 cards.
2. Since this is my own version, I will make each image a memory card. 
3. This game is for a single player
4. Each memory card has a meaning in the Mexican culture.
5. The background is pinto beans, because that is our traditional markings for the original Loteria.
6. Players have to match the cards with the same image, in the less amount of clicks.
7.  The score is 3 guitars for the best score, 2 guitars for the middle score and 1 guitar for the lowest score. 

## **Starting the project:**
At the beginning I wanted to do a full functioning Loteria. But as I did my research, I found out the a lots of people fall before me trying to do this project. I only saw one full game that is functioning and it is from Google. 

[Check Google Loteria game from 2019:](https://g.co/kgs/bPRQkv)

                                        
Taking in consideration the time I had, since I work full time with overtime like the rest of us. I decided to do something more simple. I thought.

- I love memory game, but also love loteria game, so I decided to combined the two of them. 

- I start to collect the images and I try to decided how should I display my images. 

- I knew I needed to have all the cards in one screen to do the matching. I did run into a few problems with the display. I have to return to my lessons about boxes and placement. 

[I also did some research on Mozilla:](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)


Because I had several images position in to top of each other and I have to take in consideration the transtion of the board, memory-card, container and score board.
I run into too much problems with placing my items correctly
here are few photos of the horrors I made:

![alt tag](https://github.com/BGZhao/Memory-Loteria/blob/main/guitars%20display%20wrong%20Small.jpeg)

- I have to set a container to divide my header, my score board, board and the placement of the cards.

![alt tag](https://github.com/BGZhao/Memory-Loteria/blob/main/Setting%20up%20my%20container.png)

- The second problem after placing everything was that I could not have my cards shuffle correctly, the cards keep appearing in the same place and next to each other. 

![alt tag](https://github.com/BGZhao/Memory-Loteria/blob/main/Cards%20not%20shuffle.png)

- To correct the problem, I made my code look like this:

![alt tag](https://github.com/BGZhao/Memory-Loteria/blob/main/correcting%20code%20to%20shuffle.png)

- function shuffle() {
-  cards.forEach(card => {
-    let randomPos = Math.floor(Math.random() * 32);
-    card.style.order = randomPos;
-  });
- })();

Then I try to set my reset button, I wanted a button that look like the reset of the browser, so I use the Fa-Fa reset, but then I run into another problem, not matter what I did the button would not reset my cards. 

After asking for help from the instructor, he spot a capitalization error where I link my Scripts.js. I had it like scripts.js. after correcting this the reset button start working.

### **Issues**
- My movements counter is not working, I need to debug.
- My timer is does not have completed code yet. For Lack of time.
- my score board also is not working. I need to debug.
- I download files for music, but it is 1:30pm the project is due at 5:00 pm. So I had to make some decisions on what to present. 
- The game is work in process and will need an updated to fully work. 

#### ** Just for fun meaning of some of the loteria cards: **

![alt tag](https://github.com/BGZhao/Memory-Loteria/blob/main/img/El%20Cucuy.png)

**EL Cucuy** is a Mexican urban legend. Legend says it that once upon a time a father was really angry at his kids for misbehaving. As a matter of punishment, he decided to lock his kids in his closet to learn their lesson. After a while, he decided to go to town and run some errands but he forgot to take his kids out of the closet. When he came back from the town he saw that his barn and his house caught on fire which killed the kids and the father was cursed. In disbelief, he decided to look for his kids in many closets. It has been years from look for his kids and started growing an appetite for them. Now he hunts kids and hides in closets at night waiting for the right moment to pounce.

![alt tag](https://github.com/BGZhao/Memory-Loteria/blob/main/img/El%20Chupacabras.png)
**El Cupacabras** a blood sucking creature, alien looking, that sucks the blood out of the cows,goats,chickens and other farm animals or animals that it finds.

![alt tag](https://github.com/BGZhao/Memory-Loteria/blob/main/img/La%20Llorona.png)
**La Llorona** The crying lady that latino parents scare their kids with if they aren't behaving or doing what they're told.The earliest documentation of La Llorona is traced back to 1550 in Mexico City. But there are theories about her story being connected to specific Aztec mythological creation stories. "The Hungry Woman" includes a wailing woman constantly crying for food, which has been compared to La Llorona's signature nocturnal wailing for her children. The motherly nature of La Llorona's tragedy has been compared to Chihuacoatl, an Aztec goddess deity of motherhood. Her seeking of children to keep for herself is significantly compared to Coatlicue, known as "Our Lady Mother" or Tonantsi (whose also comparable to the Virgen de Guadalupe, another significant mother figure in Mexican-culture), also a monster that devours filth or sin.
![alt tag](https://github.com/BGZhao/Memory-Loteria/blob/main/img/El%20Xoloitzcuintle.png)
**El Xoloitzcuintle** The name comes from the God Xolotl that according to ancient narratives is its creator and itzcuīntli [it͡sˈkʷiːnt͡ɬi], meaning 'dog' in Nahuatl language.

# Garbage - Card Game

This card game is designed for 2 Players, and was requested by my daughters, who regularly play this game around the house.

## Dependencies

This online game relies on the Deck of Cards API and JQuery, to operate without issue.

## How to Play

The goal is to place your cards in order from Ace(1) to 10. Jacks and Queens are "Garbage", and have to be discarded. Kings can be used as a wild. If you draw a card and place it in it's corresponding spot, with a King already there, you can then place the King in a different location. When the game loads, Player 1 gets to go first. Click on the deck of cards in the middle to draw. Follow up by dragging the card to it's corresponding position. Once placed, you will then have to flip over the card that was removed, and continue placing in the corresponding location. Once you can no longer place a card, either due to it being "garbage", or already having a card in the desired location, discard it to allow the next player to proceed. Either player can use the top discarded card as well. Once all ten cards have been placed, you win.

## Known Issues

* If you accidently pick up a discarded card, and don't use it, your turn ends if you place it back on the pile. If you just release it and let it "revert" back to the discard pile, you can continue your turn.

* Cards located in your hand that have not been turned over yet, still can be flipped by clicking on them. Need to disable.

* When a card is moved to the middle after dropping a card from the deck, you can still draw another card without placing that one first. Need to disable drawing when all cards haven't been placed correctly.

## Future Features

* Create an automated opponent for Single Player mode.

* Auto flip cards when a drawn card is placed on top

## License
[MIT](https://choosealicense.com/licenses/mit/)
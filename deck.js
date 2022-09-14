class Deck {
    constructor() {
      this.deck = [];
      this.deckID;
      this.remaining;
      this.init(startDeal);
    }
  
    async init(callback) {
      await this.create();
      callback();
    }
  
    async create() {
      // this.deck = ["Joker", "Joker"];
      // const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
      // const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
  
      // suits.forEach((suit) => {
      //   values.forEach((value) => {
      //     this.deck.push(value + " of " + suit);
      //   });
      // });
  
      let response = await fetch(
        "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      let result = await response.json();
      this.deckID = result.deck_id;
      this.remaining = result.remaining;
    }
  
    async deal() {
      // return this.deck.pop();
      // let teststr = `http://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`;
      // console.log('TEST: '+teststr);
      let response = await fetch(
        `http://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=52`
      );
      let result = await response.json();
      // this.remaining = result.remaining;
      result.cards.forEach(element => {
        let jsonObj = {
          "value": element.value,
          "image": element.image
        }
        this.deck.push(jsonObj);
      });
      return [result.cards[0].value, result.cards[0].image];
    }
  
    isEmpty() {
      return this.deck.length == 0;
    }
  
    length() {
      return this.deck.length;
    }
  
    drawDeck(card) {
      eval(`${card}.flip();`);
      let obj = document.getElementById(card);
      obj.style.left += "200px";
    }
  }
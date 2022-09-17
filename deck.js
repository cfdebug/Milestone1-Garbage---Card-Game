// Create Deck
class Deck {
    constructor() {
      this.deck = [];
      this.deckID;
      this.init(startDeal);
    }
  
    async init(callback) {
      await this.create();
      callback();
    }
  
    async create() {
      let response = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      let result = await response.json();
      this.deckID = result.deck_id;
    }
  
    async deal() {
      let response = await fetch(
        `https://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=52`
      );
      let result = await response.json();
      result.cards.forEach(element => {
        let jsonObj = {
          "value": element.value,
          "image": element.image
        }
        this.deck.push(jsonObj);
      });
      return [result.cards[0].value, result.cards[0].image];
    }
  
    drawDeck(card) {
      eval(`${card}.flip();`);
      let obj = document.getElementById(card);
      obj.style.left += "200px";
    }

    async shuffle(){
      hand.deck = [];
      positionX = 0;
      positionY = 0;
      await this.init(startDeal);
    }
  }
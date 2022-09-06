class Deck {
  constructor() {
    this.deck;
    this.deckID;
    this.remaining;
    this.init(startDeal)
  }

  async init(callback){
    await this.create()
    callback.bind(this)();
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

    let response = await fetch('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1&jokers_enabled=true');
    let result = await response.json();
    this.deck = result;
    this.deckID = result.deck_id;
    this.remaining = result.remaining;
}

  shuffle() {
    let numberOfCards = this.deck.length;
    for (let x = 0; x < numberOfCards; x++) {
      let j = Math.floor(Math.random() * numberOfCards);
      let temp = this.deck[x];
      this.deck[x] = this.deck[j];
      this.deck[j] = temp;
    }
  }

  async deal() {
    // return this.deck.pop();
    console.log(this.deckID)
    // let teststr = `http://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`;
    // console.log('TEST: '+teststr);
    let response = await fetch(`http://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`);
    let result = await response.json();
    this.remaining = result.remaining;
    return [result.cards[0].code,result.cards[0].image];
  }

  isEmpty() {
    return this.deck.length == 0;
  }

  length() {
    return this.deck.length;
  }
}

class Card {
  constructor(objName, card) {
    console.log(objName);
    console.log(card);
    this.card = card[0];
    this.img = card[1];
    this.placeHolder = document.getElementById(objName);
    $(`#${objName}`).draggable();
    this.flipped = false;
    this.placeHolder.addEventListener("click", function () {
      switch (objName) {
        case "card1":
          card1.flip();
          break;
        case "card2":
          card2.flip();
          break;
        case "card3":
          card3.flip();
          break;
        case "card4":
          card4.flip();
          break;
        case "card5":
          card5.flip();
          break;
        case "card6":
          card6.flip();
          break;
        case "card7":
          card7.flip();
          break;
        case "card8":
          card8.flip();
          break;
        case "card9":
          card9.flip();
          break;
        case "card10":
          card10.flip();
          break;
        case "card11":
          card11.flip();
          break;
        case "card12":
          card12.flip();
          break;
        case "card13":
          card13.flip();
          break;
        case "card14":
          card14.flip();
          break;
        case "card15":
          card15.flip();
          break;
        case "card16":
          card16.flip();
          break;
        case "card17":
          card17.flip();
          break;
        case "card18":
          card18.flip();
          break;
        case "card19":
          card19.flip();
          break;
        case "card20":
          card20.flip();
          break;
      }
    });
    };
    
  displayCard(flipped) {
    this.placeHolder.classList.add("card");
    this.placeHolder.classList.add("ui-widget-content");
    this.flipped = flipped;
    if (flipped) {
      this.placeHolder.style.backgroundImage = `url(${this.img})`;
    } else {
      this.placeHolder.style.backgroundImage = "url(https://deckofcardsapi.com/static/img/back.png)";
    }
  }

  flip() {
    if (this.flipped) {
      this.placeHolder.style.backgroundImage = "url(https://deckofcardsapi.com/static/img/back.png)";
      this.flipped = false;
    } else {
      this.placeHolder.style.backgroundImage = `url(${this.img})`;
      this.flipped = true;
    }
  }
}

let card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20;
const hand = new Deck();


async function startDeal() {
  card1 = new Card("card1", await hand.deal());
  card2 = new Card("card2", await hand.deal());
  card3 = new Card("card3", await hand.deal());
  card4 = new Card("card4", await hand.deal());
  card5 = new Card("card5", await hand.deal());
  card6 = new Card("card6", await hand.deal());
  card7 = new Card("card7", await hand.deal());
  card8 = new Card("card8", await hand.deal());
  card9 = new Card("card9", await hand.deal());
  card10 = new Card("card10", await hand.deal());
  card11 = new Card("card11", await hand.deal());
  card12 = new Card("card12", await hand.deal());
  card13 = new Card("card13", await hand.deal());
  card14 = new Card("card14", await hand.deal());
  card15 = new Card("card15", await hand.deal());
  card16 = new Card("card16", await hand.deal());
  card17 = new Card("card17", await hand.deal());
  card18 = new Card("card18", await hand.deal());
  card19 = new Card("card19", await hand.deal());
  card20 = new Card("card20", await hand.deal());

  card1.displayCard(false);
  card2.displayCard(false);
  card3.displayCard(false);
  card4.displayCard(false);
  card5.displayCard(false);
  card6.displayCard(false);
  card7.displayCard(false);
  card8.displayCard(false);
  card9.displayCard(false);
  card10.displayCard(false);
  card11.displayCard(false);
  card12.displayCard(false);
  card13.displayCard(false);
  card14.displayCard(false);
  card15.displayCard(false);
  card16.displayCard(false);
  card17.displayCard(false);
  card18.displayCard(false);
  card19.displayCard(false);
  card20.displayCard(false);
  //     card4.displayCard('card4',true);
  //     card5.displayCard('card5',true);
  //     card6.displayCard('card6',true);
  //     card7.displayCard('card7',true);
  //     card8.displayCard('card8',true);
  //     card9.displayCard('card9',true);
  //     discarded.displayCard('discarded',false);
  //     toDraw.displayCard('toDraw',false);
}
$('#card1').draggable();
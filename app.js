class Deck {
  constructor() {
    this.deck;
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
    console.log(this.deckID);
    // let teststr = `http://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`;
    // console.log('TEST: '+teststr);
    let response = await fetch(
      `http://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`
    );
    let result = await response.json();
    this.remaining = result.remaining;
    return [result.cards[0].code, result.cards[0].image];
  }

  isEmpty() {
    return this.deck.length == 0;
  }

  length() {
    return this.deck.length;
  }

  drawDeck(card) {
    console.log(card);
    eval(`${card}.flip();`);
    let obj = document.getElementById(card);
    obj.style.left += "200px";
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
        default:
          hand.drawDeck(objName);
      }
    });
  }

  displayCard(flipped) {
    this.placeHolder.classList.add("card");
    this.placeHolder.classList.add("ui-draggable");
    this.flipped = flipped;
    if (flipped) {
      this.placeHolder.style.backgroundImage = `url(${this.img})`;
    } else {
      this.placeHolder.style.backgroundImage =
        "url(https://deckofcardsapi.com/static/img/back.png)";
    }
  }

  addToDeck() {
    this.placeHolder.classList.add("card");
    this.placeHolder.classList.add("ui-draggable");
    this.placeHolder.style.backgroundImage =
      "url(https://deckofcardsapi.com/static/img/back.png)";
    this.placeHolder.style.position = "absolute";
    this.placeHolder.style.bottom = positionY + .25 + "px";
    this.placeHolder.style.right = positionX + .10 + "px";
    positionY = positionY + .25;
    positionX += .10;
    console.log(this.placeHolder.style.bottom + ":" + positionY + " Y");
    console.log(this.placeHolder.style.right + ":" + positionX + " X");
  }

  flip() {
    if (this.flipped) {
      this.placeHolder.style.backgroundImage =
        "url(https://deckofcardsapi.com/static/img/back.png)";
      this.flipped = false;
    } else {
      this.placeHolder.style.backgroundImage = `url(${this.img})`;
      this.flipped = true;
    }
  }
}

for (x = 1; x < 53; x++) {
  eval("var card" + x);
}

let positionX = 0;
let positionY = 0;

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
  card21 = new Card("card21", await hand.deal());
  card22 = new Card("card22", await hand.deal());
  card23 = new Card("card23", await hand.deal());
  card24 = new Card("card24", await hand.deal());
  card25 = new Card("card25", await hand.deal());
  card26 = new Card("card26", await hand.deal());
  card27 = new Card("card27", await hand.deal());
  card28 = new Card("card28", await hand.deal());
  card29 = new Card("card29", await hand.deal());
  card30 = new Card("card30", await hand.deal());
  card31 = new Card("card31", await hand.deal());
  card32 = new Card("card32", await hand.deal());
  card33 = new Card("card33", await hand.deal());
  card34 = new Card("card34", await hand.deal());
  card35 = new Card("card35", await hand.deal());
  card36 = new Card("card36", await hand.deal());
  card37 = new Card("card37", await hand.deal());
  card38 = new Card("card38", await hand.deal());
  card39 = new Card("card39", await hand.deal());
  card40 = new Card("card40", await hand.deal());
  card41 = new Card("card41", await hand.deal());
  card42 = new Card("card42", await hand.deal());
  card43 = new Card("card43", await hand.deal());
  card44 = new Card("card44", await hand.deal());
  card45 = new Card("card45", await hand.deal());
  card46 = new Card("card46", await hand.deal());
  card47 = new Card("card47", await hand.deal());
  card48 = new Card("card48", await hand.deal());
  card49 = new Card("card49", await hand.deal());
  card50 = new Card("card50", await hand.deal());
  card51 = new Card("card51", await hand.deal());
  card52 = new Card("card52", await hand.deal());

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
  card21.addToDeck();
  card22.addToDeck();
  card23.addToDeck();
  card24.addToDeck();
  card25.addToDeck();
  card26.addToDeck();
  card27.addToDeck();
  card28.addToDeck();
  card29.addToDeck();
  card30.addToDeck();
  card31.addToDeck();
  card32.addToDeck();
  card33.addToDeck();
  card34.addToDeck();
  card35.addToDeck();
  card36.addToDeck();
  card37.addToDeck();
  card38.addToDeck();
  card39.addToDeck();
  card40.addToDeck();
  card41.addToDeck();
  card42.addToDeck();
  card43.addToDeck();
  card44.addToDeck();
  card45.addToDeck();
  card46.addToDeck();
  card47.addToDeck();
  card48.addToDeck();
  card49.addToDeck();
  card50.addToDeck();
  card51.addToDeck();
  card52.addToDeck();

  //     card4.displayCard('card4',true);
  //     card5.displayCard('card5',true);
  //     card6.displayCard('card6',true);
  //     card7.displayCard('card7',true);
  //     card8.displayCard('card8',true);
  //     card9.displayCard('card9',true);
  //     discarded.displayCard('discarded',false);
  //     toDraw.displayCard('toDraw',false);
}

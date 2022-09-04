class Deck {
  constructor() {
    this.deck = [];
    this.create();
    this.shuffle();
  }

  create() {
    this.deck = ["Joker", "Joker"];
    const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];

    suits.forEach((suit) => {
      values.forEach((value) => {
        this.deck.push(value + " of " + suit);
      });
    });
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

  deal() {
    return this.deck.pop();
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
    this.card = card;
    const values = {
      "Ace of Hearts": 1,
      "2 of Hearts": 2,
      "3 of Hearts": 3,
      "4 of Hearts": 4,
      "5 of Hearts": 5,
      "6 of Hearts": 6,
      "7 of Hearts": 7,
      "8 of Hearts": 8,
      "9 of Hearts": 9,
      "10 of Hearts": 10,
      "Jack of Hearts": 11,
      "Queen of Hearts": 12,
      "King of Hearts": 13,
      "Ace of Diamonds": 1,
      "2 of Diamonds": 2,
      "3 of Diamonds": 3,
      "4 of Diamonds": 4,
      "5 of Diamonds": 5,
      "6 of Diamonds": 6,
      "7 of Diamonds": 7,
      "8 of Diamonds": 8,
      "9 of Diamonds": 9,
      "10 of Diamonds": 10,
      "Jack of Diamonds": 11,
      "Queen of Diamonds": 12,
      "King of Diamonds": 13,
      "Ace of Clubs": 1,
      "2 of Clubs": 2,
      "3 of Clubs": 3,
      "4 of Clubs": 4,
      "5 of Clubs": 5,
      "6 of Clubs": 6,
      "7 of Clubs": 7,
      "8 of Clubs": 8,
      "9 of Clubs": 9,
      "10 of Clubs": 10,
      "Jack of Clubs": 11,
      "Queen of Clubs": 12,
      "King of Clubs": 13,
      "Ace of Spades": 1,
      "2 of Spades": 2,
      "3 of Spades": 3,
      "4 of Spades": 4,
      "5 of Spades": 5,
      "6 of Spades": 6,
      "7 of Spades": 7,
      "8 of Spades": 8,
      "9 of Spades": 9,
      "10 of Spades": 10,
      "Jack of Spades": 11,
      "Queen of Spades": 12,
      "King of Spades": 13,
    };
    this.value = values[card];
    this.suit = card.substring(card.indexOf(" of ") + 4);
    this.placeHolder = document.getElementById(objName);
    this.flipped = false;
    this.that = objName;
    var suits = { Hearts: 0, Diamonds: 13, Clubs: 26, Spades: 39 };
    this.position = suits[this.suit] + this.value;
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
      }
    });
  }
  displayCard(flipped) {
    console.log(flipped)
    this.placeHolder.classList.add("card");
    this.flipped = flipped;
    if (flipped) {
      this.placeHolder.style.backgroundPosition = -150 * this.position + "px";
    } else {
      this.placeHolder.style.backgroundPosition = "0px";
    }
  }

  flip() {
    if (this.flipped) {
      this.placeHolder.style.backgroundPosition = "0px";
      this.flipped = false;
    } else {
      this.placeHolder.style.backgroundPosition = -150 * this.position + "px";
      this.flipped = true;
    }
  }
}

const hand = new Deck();
for(x=1;x<21;x++){
    eval('let card'+x+';')
}

async function deal() {
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

  await card1.displayCard(false);
  await card2.displayCard(false);
  await card3.displayCard(false);
  await card4.displayCard(false);
  await card5.displayCard(false);
  await card6.displayCard(false);
  await card7.displayCard(false);
  await card8.displayCard(false);
  await card9.displayCard(false);
  await card10.displayCard(false);
  await card11.displayCard(false);
  await card12.displayCard(false);
  await card13.displayCard(false);
  await card14.displayCard(false);
  await card15.displayCard(false);
  await card16.displayCard(false);
  await card17.displayCard(false);
  await card18.displayCard(false);
  await card19.displayCard(false);
  await card20.displayCard(false);
  //     card4.displayCard('card4',true);
  //     card5.displayCard('card5',true);
  //     card6.displayCard('card6',true);
  //     card7.displayCard('card7',true);
  //     card8.displayCard('card8',true);
  //     card9.displayCard('card9',true);
  //     discarded.displayCard('discarded',false);
  //     toDraw.displayCard('toDraw',false);
}

deal();

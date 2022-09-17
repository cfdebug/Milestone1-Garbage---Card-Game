let playerTurn;
let totalPlays = 0;
let positionX = 0;
let positionY = 0;

// Define Card Variables
for (x = 1; x < 53; x++) {
  eval("var card" + x);
}

// Create Deck
const hand = new Deck();

// Hide Success Message
$('#successMessage').hide()

// Watch for Winner
setInterval(checkWinner,100);
nextTurn();

// Start Game
async function startDeal() {
  initLayout();
  totalPlays += 1;
  correctCardsP1 = [0,0,0,0,0,0,0,0,0,0];
  correctCardsP2 = [0,0,0,0,0,0,0,0,0,0];
  $('#successMessage').hide()
  await hand.deal();
  card1 = new Card("card1", hand.deck[0],1);
  card2 = new Card("card2", hand.deck[1],1);
  card3 = new Card("card3", hand.deck[2],1);
  card4 = new Card("card4", hand.deck[3],1);
  card5 = new Card("card5", hand.deck[4],1);
  card6 = new Card("card6", hand.deck[5],1);
  card7 = new Card("card7", hand.deck[6],1);
  card8 = new Card("card8", hand.deck[7],1);
  card9 = new Card("card9", hand.deck[8],1);
  card10 = new Card("card10", hand.deck[9],1);
  card11 = new Card("card11", hand.deck[10],2);
  card12 = new Card("card12", hand.deck[11],2);
  card13 = new Card("card13", hand.deck[12],2);
  card14 = new Card("card14", hand.deck[13],2);
  card15 = new Card("card15", hand.deck[14],2);
  card16 = new Card("card16", hand.deck[15],2);
  card17 = new Card("card17", hand.deck[16],2);
  card18 = new Card("card18", hand.deck[17],2);
  card19 = new Card("card19", hand.deck[18],2);
  card20 = new Card("card20", hand.deck[19],2);
  card21 = new Card("card21", hand.deck[20],3);
  card22 = new Card("card22", hand.deck[21],3);
  card23 = new Card("card23", hand.deck[22],3);
  card24 = new Card("card24", hand.deck[23],3);
  card25 = new Card("card25", hand.deck[24],3);
  card26 = new Card("card26", hand.deck[25],3);
  card27 = new Card("card27", hand.deck[26],3);
  card28 = new Card("card28", hand.deck[27],3);
  card29 = new Card("card29", hand.deck[28],3);
  card30 = new Card("card30", hand.deck[29],3);
  card31 = new Card("card31", hand.deck[30],3);
  card32 = new Card("card32", hand.deck[31],3);
  card33 = new Card("card33", hand.deck[32],3);
  card34 = new Card("card34", hand.deck[33],3);
  card35 = new Card("card35", hand.deck[34],3);
  card36 = new Card("card36", hand.deck[35],3);
  card37 = new Card("card37", hand.deck[36],3);
  card38 = new Card("card38", hand.deck[37],3);
  card39 = new Card("card39", hand.deck[38],3);
  card40 = new Card("card40", hand.deck[39],3);
  card41 = new Card("card41", hand.deck[40],3);
  card42 = new Card("card42", hand.deck[41],3);
  card43 = new Card("card43", hand.deck[42],3);
  card44 = new Card("card44", hand.deck[43],3);
  card45 = new Card("card45", hand.deck[44],3);
  card46 = new Card("card46", hand.deck[45],3);
  card47 = new Card("card47", hand.deck[46],3);
  card48 = new Card("card48", hand.deck[47],3);
  card49 = new Card("card49", hand.deck[48],3);
  card50 = new Card("card50", hand.deck[49],3);
  card51 = new Card("card51", hand.deck[50],3);
  card52 = new Card("card52", hand.deck[51],3);

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
}
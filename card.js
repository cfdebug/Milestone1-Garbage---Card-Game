class Card {
    constructor(objName, card) {
      if(card[0] == 'ACE'){
        this.card = 1;
      }else if(card[0] == 'JACK'){
        this.card = 11;
      }else if(card[0] == 'QUEEN'){
        this.card = 12;
      }else if(card[0] == 'KING'){
        this.card = 13;
      }else{
        this.card = card[0];
      };
      this.img = card[1];
      this.placeHolder = document.getElementById(objName);
      $(`#${objName}`).data('value', this.card).draggable({
        containment: '#gameBoard',
        stack: '#p1-board div',
        cursor: 'move',
        revert: false
      } );
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
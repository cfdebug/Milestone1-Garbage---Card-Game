class Card {
    constructor(objName, card, board) {
      if(card.value == 'ACE'){
        this.card = 1;
      }else if(card.value == 'JACK'){
        this.card = 11;
      }else if(card.value == 'QUEEN'){
        this.card = 12;
      }else if(card.value == 'KING'){
        this.card = 13;
      }else{
        this.card = card.value;
      };
      this.img = card.image;
      this.objName = objName;
      this.placeHolder = document.getElementById(objName);

      if(board == 1){
      $(`#${objName}`).data('value', this.card).draggable({
        containment: '#gameBoard',
        stack: '.card',
        cursor: 'move',
        drag: function() {
          if(playerTurn == 2){
          $(".ui-draggable-dragging").css({
            WebkitTransform: 'rotate(180deg)', '-moz-transform': 'rotate(180deg)'
          })}
        },
        revert: true
      } );
      }else if (board == 2){
        $(`#${objName}`).data('value', this.card).draggable({
          containment: '#gameBoard',
          stack: '.card',
          cursor: 'move',
          drag: function() {
            if(playerTurn == 2){
            $(".ui-draggable-dragging").css({
              WebkitTransform: 'rotate(180deg)', '-moz-transform': 'rotate(180deg)'
            })}
          },
          revert: true
        } );
      }else{
        $(`#${objName}`).data('value', this.card).draggable({
          containment: '#gameBoard',
          stack: '.card',
          cursor: 'move',
          drag: function() {
            if(playerTurn == 2){
            $(".ui-draggable-dragging").css({
              WebkitTransform: 'rotate(180deg)', '-moz-transform': 'rotate(180deg)'
            })}
          },
          revert: true
        } );
      }
      this.flipped = false;

      this.placeHolder.addEventListener('click',function(){
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
      })
    }

    displayCard(flipped) {
      this.placeHolder.classList.add("card");
      this.flipped = flipped;
      if (flipped) {
        this.placeHolder.style.backgroundImage = `url(${this.img})`;
      } else {
        this.placeHolder.style.backgroundImage =
          "url(https://deckofcardsapi.com/static/img/back.png)";
      }
    }
  
    addToDeck() {
      if (this.flipped){
        this.flip();
      };
      this.placeHolder.classList.add("card");
      $('#remainingCards').append(this.placeHolder);
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
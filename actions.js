let correctCardsP1;
let correctCardsP2;
let prevCard;

// Card was dropped Event
function handleCardDrop( event, ui ) {
    let slotNumber = $(this).data( 'number' );
    let cardNumber = ui.draggable.data( 'value' );
    let currCard = $(this)[0].childNodes[1]; 

    // If the card was dropped to the correct slot,

    if ( slotNumber == cardNumber ) {
      $('#remainingCards').append(currCard);
      currCard.style.left = '300px';
      ui.draggable.addClass( 'correct' );
      ui.draggable.draggable( 'disable' );
      $(this).droppable( 'disable' );
      $(this).append($(ui.draggable));
      ui.draggable.position( { of: $(this), my: 'left bottom', at: 'left bottom'} );
      ui.draggable.draggable( 'option', 'revert', false );
      if (playerTurn == 1){
      correctCardsP1[slotNumber-1] = cardNumber;
      }else if(playerTurn == 2){
        correctCardsP2[slotNumber-1] = cardNumber; 
      }
    } else if(cardNumber == '13'){
      $('#remainingCards').append(currCard);
      currCard.style.left = '300px';
      $(this).append($(ui.draggable));
        ui.draggable.position( { of: $(this), my: 'left bottom', at: 'left bottom'} );
        ui.draggable.draggable( 'option', 'revert', false ); 
        if (playerTurn == 1){
          correctCardsP1[slotNumber-1] = cardNumber;
          }else if(playerTurn == 2){
            correctCardsP2[slotNumber-1] = cardNumber; 
          }
    }
  
  }

  // Card was discarded
  function handleDiscard( event, ui) {
    if($(this)[0].childNodes.length >= 1){
      prevCard.draggable('disable');
      $(this).append($(ui.draggable));
      prevCard = ui.draggable;
      ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
      ui.draggable.draggable( 'option', 'revert', false );
      nextTurn();
    }else{
      $(this).append($(ui.draggable))
      ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
      ui.draggable.draggable( 'option', 'revert', false );
      prevCard = ui.draggable;
      nextTurn();
    }
}

// Enable revert when Discard is picked up
  function handlePickDiscard(event, ui) {
    ui.draggable.draggable( 'option', 'revert', true );
  }
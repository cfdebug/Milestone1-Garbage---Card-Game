var correctCards = 0;
var prevCard;

function handleCardDrop( event, ui ) {
    let slotNumber = $(this).data( 'number' );
    let cardNumber = ui.draggable.data( 'value' );
    let currCard = $(this)[0].firstElementChild;

    console.log(slotNumber);
    console.log(cardNumber);
    // If the card was dropped to the correct slot,
    // change the card colour, position it directly
    // on top of the slot, and prevent it being dragged
    // again
    

    if ( slotNumber == cardNumber ) {
      ui.draggable.addClass( 'correct' );
      if(cardNumber != '13'){
      ui.draggable.draggable( 'disable' );
      $(this).droppable( 'disable' );}
      ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
      ui.draggable.draggable( 'option', 'revert', false );
      currCard.style.bottom = '300px';
      currCard.appendTo('#remainingCards')
      $(this).append($(ui.draggable));
      correctCards++;
    } else if(cardNumber == '13'){
        ui.draggable.addClass( 'correct' );
        ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
        ui.draggable.draggable( 'option', 'revert', false ); 
        currCard.style.bottom = '300px';
        $(this).append($(ui.draggable));
        correctCards++;
    }
    
    // If all the cards have been placed correctly then display a message
    // and reset the cards for another go
  
    if ( correctCards == 10 ) {
      $('#successMessage').show();
      $('#successMessage').animate( {
        left: '380px',
        top: '200px',
        width: '400px',
        height: '100px',
        opacity: 1
      } );
    }
  
  }

  function handleCardRemoval( event, ui) {
    let cardNumber = ui.draggable.data( 'value' );

    if (cardNumber == '13'){
        correctCards--;
    }
  }

  function handleDiscard( event, ui) {
    if($(this)[0].childNodes.length >= 1){
      console.log("Prev: "+prevCard)
      prevCard.draggable('disable');
      $(this).append($(ui.draggable));
      prevCard = ui.draggable;
      ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
      ui.draggable.draggable( 'option', 'revert', false );
    }else{
      $(this).append($(ui.draggable))
      ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
      ui.draggable.draggable( 'option', 'revert', false );
      prevCard = ui.draggable;
    }
  // }else{   
  // ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
  // console.log(ui.draggable.position)
  // ui.draggable.draggable( 'option', 'revert', false );

  // }
}

  function handlePickDiscard(event, ui) {
    // ui.draggable.appendTo('#remainingCards');
    ui.draggable.draggable( 'option', 'revert', true );
  }
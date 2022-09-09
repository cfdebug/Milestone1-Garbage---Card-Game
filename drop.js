var correctCards = 0;

function handleCardDrop( event, ui ) {
    let slotNumber = $(this).data( 'number' );
    let cardNumber = ui.draggable.data( 'value' );
    let currCard = $(this)[0].firstElementChild;
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
      correctCards++;
    } else if(cardNumber == '13'){
        ui.draggable.addClass( 'correct' );
        ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
        ui.draggable.draggable( 'option', 'revert', false ); 
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
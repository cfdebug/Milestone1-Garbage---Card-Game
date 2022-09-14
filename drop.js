var correctCards = 0;
var prevCard;

function handleCardDrop( event, ui ) {
    let slotNumber = $(this).data( 'number' );
    let cardNumber = ui.draggable.data( 'value' );
    let currCard = $(this)[0].firstElementChild;

    // If the card was dropped to the correct slot,

    if ( slotNumber == cardNumber ) {
      $('#remainingCards').append(currCard);
      currCard.style.top = '300px';
      ui.draggable.addClass( 'correct' );
      ui.draggable.draggable( 'disable' );
      $(this).droppable( 'disable' );
      $(this).append($(ui.draggable));
      ui.draggable.position( { of: $(this), my: 'left bottom', at: 'left bottom' } );
      ui.draggable.draggable( 'option', 'revert', false );
      correctCards++;
    } else if(cardNumber == '13'){
      $('#remainingCards').append(currCard);
      currCard.style.top = '300px';
      $(this).append($(ui.draggable));
        ui.draggable.position( { of: $(this), my: 'left bottom', at: 'left bottom' } );
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
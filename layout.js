// Initialize Layout
function initLayout(){      
      var words = [ 'ACE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN' ];
      
        $('<h2 id=player1Lbl>Player 1</h2>').appendTo('#p1-board');
        $('<h2 id=player2Lbl>Player 2</h2>').appendTo('#p2-board');

      for ( y=1; y<=10; y++ ) {
        $('<div id=drop'+(y)+'><h4>' + words[y-1] + '</h4></div>').data( 'number', y ).appendTo( '#p1-board' ).droppable( {
          accept: '#p1-board div, #remainingCards div',
          hoverClass: 'hovered',
          drop: handleCardDrop
        } );
      }
      
      for ( i=1; i<=10; i++ ) {
        $('<div id=drop'+(i+10)+'><h4>' + words[i-1] + '</h4></div>').data( 'number', i ).appendTo( '#p2-board' ).droppable( {
          accept: '#p2-board div, #remainingCards div',
          hoverClass: 'hovered',
          drop: handleCardDrop
        } );
      }
      
      $('<div id=discardPile></div>').appendTo( '#remainingCards').droppable({
        accept: '#p1-board div, #p2-board div, #remainingCards div',
        drop: handleDiscard,
        out: handlePickDiscard
      })

    for (x=1; x<=10; x++) {
        $('<div id=card'+(x+10)+'></div>').appendTo( '#drop'+(x+10));
      }
      for (z=1; z<=10; z++) {
        $('<div id=card'+(z)+'></div>').appendTo( '#drop'+(z));
      }
      for (h=21;h<=52;h++){
        $('<div id=card'+(h)+'></div>').appendTo( '#remainingCards');
      }
}
// Clear Board for another round
function resetLayout(){
    let p1 = document.getElementById('p1-board');
    p1.innerHTML = '';

    let p2 = document.getElementById('p2-board');
    p2.innerHTML = '';

    let rc = document.getElementById('remainingCards');
    rc.innerHTML = '';    

    hand.shuffle();
}
// Keep track of player turns
function nextTurn(){
    if(playerTurn == 1){
        playerTurn = 2
        $('#p1-board').hide();
        $('#p2-board').show();
    }else{
        playerTurn = 1;
        $('#p2-board').hide();
        $('#p1-board').show();
    }
    
}
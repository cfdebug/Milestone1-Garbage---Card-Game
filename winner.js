// Keep track of who wins
let cardCompareP1 = [false,false,false,false,false,false,false,false,false,false]
let cardCompareP2 = [false,false,false,false,false,false,false,false,false,false]
correctCardsP1 = [0,0,0,0,0,0,0,0,0,0];
correctCardsP2 = [0,0,0,0,0,0,0,0,0,0];
let player1Wins = false;
let player2Wins = false;

function checkWinner(){
    for(x=0;x<10;x++){
        if((correctCardsP1[x] == x+1) | (correctCardsP1[x] == 13)){
            cardCompareP1[x] = true;
        }else{
            cardCompareP1[x] = false;
        }
        if((correctCardsP2[x] == x+1) | (correctCardsP2[x] == 13)){
            cardCompareP2[x] = true;
        }else{
            cardCompareP2[x] = false;
        }
    }
    player1Wins = cardCompareP1.every(element => element === true)
    player2Wins = cardCompareP2.every(element => element === true)

if ( player1Wins) {
    $('#winMsg').text('Player 1 Wins!');
    $('#successMessage').show();
    $('#successMessage').animate( {
      width: '100%',
      height: '100%',
      opacity: 1
    });
    }else if(player2Wins){
      $('#winMsg').text('Player 2 Wins!');
      $('#successMessage').show();
      $('#successMessage').animate( {
        width: '100%',
        height: '100%',
        opacity: 1
      });
    };
}

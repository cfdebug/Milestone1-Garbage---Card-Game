function player1Turn(){
    $('#gameBoard').css('transform','rotate(0deg)');
    $('#player1Lbl').css('transform','rotate(0deg)');
    $('#player2Lbl').css('transform','rotate(0deg)');
    $('h4').css('transform','rotate(0deg)');
}

function player2Turn(){
    $('#gameBoard').css('transform','rotate(180deg)');
    $('#player1Lbl').css('transform','rotate(180deg)');
    $('#player2Lbl').css('transform','rotate(180deg)');
    $('h4').css('transform','rotate(180deg)');
}
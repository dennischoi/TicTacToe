
$(document).on('ready', function() {
  // var winningCombo = [[1,2,3],[4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
  // var magicCombo =
  // var turn = 0;
  var turn = 0;
  var board = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  function checkWinner() {
    if(
      $('#1').hasClass('o') && $('#2').hasClass('o') && $('#3').hasClass('o') ||
      $('#4').hasClass('o') && $('#5').hasClass('o') && $('#6').hasClass('o') ||
      $('#7').hasClass('o') && $('#8').hasClass('o') && $('#9').hasClass('o') ||
      $('#1').hasClass('o') && $('#5').hasClass('o') && $('#9').hasClass('o') ||
      $('#3').hasClass('o') && $('#5').hasClass('o') && $('#7').hasClass('o') ||
      $('#1').hasClass('o') && $('#4').hasClass('o') && $('#7').hasClass('o') ||
      $('#2').hasClass('o') && $('#5').hasClass('o') && $('#8').hasClass('o') ||
      $('#3').hasClass('o') && $('#6').hasClass('o') && $('#9').hasClass('o')
    ) {
      alert('O-man has WON!')
      resetTd();
    } else if (
      $('#1').hasClass('x') && $('#2').hasClass('x') && $('#3').hasClass('x') ||
      $('#4').hasClass('x') && $('#5').hasClass('x') && $('#6').hasClass('x') ||
      $('#7').hasClass('x') && $('#8').hasClass('x') && $('#9').hasClass('x') ||
      $('#1').hasClass('x') && $('#5').hasClass('x') && $('#9').hasClass('x') ||
      $('#3').hasClass('x') && $('#5').hasClass('x') && $('#7').hasClass('x') ||
      $('#1').hasClass('x') && $('#4').hasClass('x') && $('#7').hasClass('x') ||
      $('#2').hasClass('x') && $('#5').hasClass('x') && $('#8').hasClass('x') ||
      $('#3').hasClass('x') && $('#6').hasClass('x') && $('#9').hasClass('x')
     ) {
      alert('X-man has WON!')
      resetTd();
    } else if (turn === 9)
    {
      alert("It's a TIE! Play again")
      resetTd();
    }
  }


  //
  // $('td').on('click', function() {
  //   if (turn % 2 === 0) {
  //     $(this).html('X').addClass('x');
  //   }else{
  //     $(this).html('O').addClass('o');
  //   }
  //
  //   checkWinner();
  //   $(this).off('click');
  //   turn++;
  // });
  // function clickTd(event) {
  //   if (turn % 2 === 0) {
  //     $(this).html('X').addClass('x');
  //   } else {
  //     $(this).html('O').addClass('o');
  //   }
  //
  //   $(this).off('click');
  //   turn++;
  //
  //   checkWinner();
  // }

  $('td').on('click', function() {
    console.log('USER CLICK')
    turn = 1;
      $(this).html('X').addClass('x');
      $(compMove()).html('O').addClass('o');

      $(this).off('click');
      turn += 2;
      checkWinner();

  });

  function compMove() {
    // debugger
    console.log('USER MOVE')

    var ind = Math.floor(Math.random() * board.length)
    var place = board[ind]

    console.log(board)

    if ($('#' + place).hasClass('x')){
      console.log('USER fail x')
      board.splice(ind, 1)
      return compMove();
    } else if ($('#' + place).hasClass('o')) {
      console.log('USER fail o')
      board.splice(ind, 1)
      return compMove();
    } else { //if (!($('#' + place).hasClass('x')) || !($('#' + place).hasClass('o'))) {
      console.log('USER console')
      board.splice(ind, 1)
      return ('#' + place)
      // debugger   <=== AWESOME SHIT USE ALWAYS
    }
  }

  function resetTd() {

    $('td').text('+');
    $('td').removeClass('x');
    $('td').removeClass('o');
    $('td').off('click');
    // $('td').on('click', clickTd);
    turn = 0;

  }

  $('#reset').on('click', resetTd)
  // $('td').on('click', clickTd);


});








// $('#reset').on('click', function() {
//   $('td').text('');
//   $('td').removeClass('x');
//   $('td').removeClass('o');
//   $('td').removeAttr('class');
//   $('td').off('click');
//   $('td').on('click')
//   count = 0;
//
// });


// for( var i = 0; 1 < winningCombo.length; i++) {
// var combo = winningCombo[i];
// combo will be something
// compare each combo to a player state array or use the DOM => $(.'x')
// alert('we have a winner!')
// }
// }


// $('td').on('click', function() {
//   if (turn % 2 === 0) {
//     $(this).html('X').addClass('x');
//   }else{
//     $(this).html('O').addClass('o');
//   }
//   $(this).off('click');
//
//   checkWinner();
//
//   turn++;
// });





  // function checkWinner(){
  //   for(var prop in winningCombo){
  //       if($('.x').hasClass(winningCombos[prop][0]) && $('.x').hasClass(winningCombos[prop][1]) && $('.x').hasClass(winningCombos[prop][2]) ){
  //       alert()
  //       resetTd()
  //     }else if {
  //       if($('.o').hasClass(winningCombos[prop][0]) && $('.o').hasClass(winningCombos[prop][1]) && $('.o').hasClass(winningCombos[prop][2]) ){
  //         alert()
  //         resetTd()
  //     }
  //   }
  // }

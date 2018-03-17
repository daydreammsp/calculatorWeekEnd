$(document).ready(readyNow);
let currentAdd = 0;
function readyNow(){
    console.log('hello world');

        $('#submit').on('click', inputNumber);
        $('#add').on('click', function(){
          currentAdd = 1
          opDisplay();
          $('#operator').append('+');
        });
        $('#minus').on('click', function(){
          currentAdd = 2
          opDisplay();
          $('#operator').append('-');
        });
        $('#multiply').on('click', function(){
          currentAdd = 3
          opDisplay();
          $('#operator').append('*');
        });
        $('#divide').on('click', function(){
          currentAdd = 4
          opDisplay();
          $('#operator').append('/');
        });
        $('#reset').on('click', reset1);
        $('#clear').on('click', function(){
          currentAdd = 0;
          $('#input, #input2, #operator, .displayTotal').empty();
        })
        $('#0').on('click', numDisplay);
        $('#1').on('click', numDisplay);
        $('#2').on('click', numDisplay);
        $('#3').on('click', numDisplay);
        $('#4').on('click', numDisplay);
        $('#5').on('click', numDisplay);
        $('#6').on('click', numDisplay);
        $('#7').on('click', numDisplay);
        $('#8').on('click', numDisplay);
        $('#9').on('click', numDisplay);

}
function reset1(){
    let noNum = [];
    currentAdd = 0;
  $('#input').append().val('');
  $('#input2').append().val('');
  $('#answer').empty();
  $('.history').empty();
  $('.input, .input2, .displayTotal').empty();

  $.ajax({
    type: 'POST',
    data: noNum,
    url: '/reset'
  }).done(function(response){
    console.log('reset');
    
    }).fail(function(response){
    alert('did not work');
  })
}

function inputNumber(){
 let numIn = $('#input').html();
 let numIn2 = $('#input2').html();
 
  
 $.ajax({
    type: 'POST',
    data: {numIn: numIn,
          numIn2: numIn2,
          opperator: currentAdd},
    url: '/number'
  }).done(function(response){
    receiveFromServer();
    
    }).fail(function(response){
    alert('did not work');
  })

  function receiveFromServer(){
    $.ajax({
      type: 'GET',
      url: '/number'
    }).done(function(response){
      console.log(response);
      for(let num of response){
        $('#input, #input2, #operator').empty();
        $('.displayTotal').empty();
        $('.displayTotal').append('<span class="answer">' + num.answer1 + '</span>');
        
        $('.history').append('<h1>' + num.numIn + num.opp2 + num.numIn2 + '=' + num.answer1 + '</h1>');
      }
    })
  }
  



}
function numDisplay(){
  if(currentAdd === 0){
    $('#input').append($(this).html());
  }
  else{
    $('#input2').append($(this).html());
  }
}
function opDisplay(){
$('#operator').empty();
$('#operator').append();
}

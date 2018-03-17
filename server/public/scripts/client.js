$(document).ready(readyNow);
let currentAdd;
function readyNow(){
    console.log('hello world');

        $('#submit').on('click', inputNumber);
        $('#add').on('click', function(){
          currentAdd = 1
        });
        $('#minus').on('click', function(){
          currentAdd = 2
        });
        $('#multiply').on('click', function(){
          currentAdd = 3
        });
        $('#divide').on('click', function(){
          currentAdd = 4
        });
        $('#reset').on('click', reset1);

}
function reset1(){
    let noNum = [];
  $('#input').append().val('');
  $('#input2').append().val('');
  $('#answer').empty();
  $('.history').empty();

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
 let numIn = $('#input').val();
 let numIn2 = $('#input2').val()
 $('#input').append().val('')
  
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
        $('#answer').empty()
        $('#answer').append(num.answer1);
        
        $('.history').append('<h1>',num.numIn, num.opp2, num.numIn2,'=', num.answer1,'</h1>');
      }
    })
  }
  



}
function addTo(){
  currentAdd = 1;
  console.log(currentAdd);
}
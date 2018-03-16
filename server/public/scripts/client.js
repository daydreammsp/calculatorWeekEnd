$(document).ready(readyNow);

function readyNow(){
    console.log('hello world');

        $('#submit').on('click', inputNumber);



}

function inputNumber(){
 let numIn = $('#input').val();
 $.ajax({
    type: 'POST',
    data: {numIn: numIn},
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
      console.log(response[0].numIn);
    })
  }

}
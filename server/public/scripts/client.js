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

}

function inputNumber(){
 let numIn = $('#input').val();
 let numIn2 = $('#input2').val()
 
  
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
    })
  }




}
function addTo(){
  currentAdd = 1;
  console.log(currentAdd);
}
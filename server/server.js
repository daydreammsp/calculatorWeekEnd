let express = require('express');
let bodyParser = require('body-parser');
let calculation = require('./modules/calculation')
let app = express();
let numServer = [];
let x;


const PORT = 5000;
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));
app.get('/number', (req, res) => {
    res.send(numServer);
  })

app.post('/number', (req, res) => {
    let receiveNum = req.body
    
    receiveNum.answer1 = true;
    numServer.push(receiveNum);
    
    
    console.log(receiveNum);
    calculate(numServer)
    res.sendStatus(200);
  })
  
  
  function calculate(numServer){

for(let num of numServer){
    let m = parseInt(num.opperator)
    let r = parseInt(num.numIn)
    
        switch(m) {
            case 1:
               x = r + r;
               num.answer1 = x
           
                break;
            case 2:
            x = r - r;
            num.answer1 = x
            
                break;
            case 3:
            x = r * r;
            num.answer1 = x
            
                break;
            case 4:
            x = r / r;
            num.answer1 = x
            
                break;
        }
        
}

    
}




app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  });

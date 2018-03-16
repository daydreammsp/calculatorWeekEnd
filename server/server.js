let express = require('express');
let bodyParser = require('body-parser')
let app = express();
let numIn = [];
console.log('hello world');

const PORT = 5000;
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('server/public'));
app.get('/number', (req, res) => {
    res.send(numIn);
  })

app.post('/number', (req, res) => {
    let receiveNum = req.body
    numIn.push(receiveNum);
    console.log(receiveNum);
    res.sendStatus(200);
  })



app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  });

var express = require('express');
var app = express();
var path = require('path');
const models = require('./models/combineModels.js');
var fetch = require("node-fetch");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

console.log(path.join(__dirname, '../build'))
// app.use(express.static(path.join(__dirname, './../build'))); //serves the build

app.get('/build/webpack-bundle.js', (req,res) => {
    res.sendFile(path.resolve(__dirname+'./../build/webpack-bundle.js'));
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname+'./../index.html'));

});
app.post('/api', (req,res)=> {
    const ingredients = req.body.ingredients.split(/\W/g);
    const dish = req.body.dish;
    let url = "http://www.recipepuppy.com/api/?";
     if (ingredients.length > 0){
         url = url + 'i='+ ingredients.join(',')+'&';
     }
     if (dish.length > 0){
         url = url + 'q=' + dish;
     }
     console.log('this is url: ', url);
    // console.log('ingredients: ', ingredients);
    // console.log('dish: ', dish);
    fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    } 
  })
  .then((responseJson) => {
    // Do something with the response
    res.setHeader('Content-Type', 'application/json');
    return res.send(responseJson);
  })
  .catch((error) => {

    console.log('there was an error');
    console.log(error);
    return res.send(error);
  });
});

app.listen(4000, ()=>{console.log('server connected!')}); //listens on port 3000 -> http://localhost:3000/

// models.sequelize.sync({force:true}).then(() => {
//     app.listen(5000, () => {
//       console.log('Your Server is up and running');
//     });
//   })



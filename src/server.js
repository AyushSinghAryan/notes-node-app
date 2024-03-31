// initialization
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const Note = require('./models/Note');

app.use(bodyParser.urlencoded({ extended: false }));
//! if extended true means we can give nested objects
// ! if extended false means nested objecct ko yeh solve nhi kar paye ga
//! nested object means object key andar object 


app.use(bodyParser.json());
mongoose.connect('mongodb+srv://sharksingh700:pdOni4CT7uqvEM5J@cluster0.ngg9sgo.mongodb.net/notesdb').then(
   function () {
      app.get("/", function (req, res) {
         const response = {message:"API works"};
         res.json(response);
      });
      const noteRouter = require('./routes/Note');
      app.use('/notes',noteRouter); //! asey use karney sey my url like /notes/notes/add , so i want /notes only one time so remove /notes from Note router


   }
);
// ! jab tak mongoose connect nhi hu tabh tak mey main page ko access nhi kar pao
const Port = 3000 || process.env.PORT;
// app routes




// starting the server on port 
app.listen(Port, () => {
   console.log(`The Server is Listen on ${Port}`)
})


//  mongodb+srv://sharksingh700:pdOni4CT7uqvEM5J@cluster0.ngg9sgo.mongodb.net/
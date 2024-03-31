const express = require('express');
const Note = require('../models/Note');

   const router = express.Router();  

     // TODO Read notes
      // app.get("/notes/list/:userid", async function (req, res) {
      //    var notes = await Note.find({ userid: req.params.userid }); //! this is using here for the filter 
      //    res.json(notes); // this can be the array , this will get the us the all the saved notes 
      // }) // ! fetching the data base from mongoDB 
      router.post("/list", async function (req, res) {
        var notes = await Note.find({ userid: req.body.userid }); //! this is using here for the filter 
        res.json(notes); // this can be the array , this will get the us the all the saved notes 
     }) // ! fetching the data base from mongoDB 


        // TODO Add notes 
        router.post("/add", async function (req, res) {

        //res.json(req.body); //! this will send the body data

        await Note.deleteOne({id:req.body.id}); // TODO here we are updating the data by id 
// ! here the delete the current note by id and update the current by putting value it updates some how 
        const newNote = new Note({
           id: req.body.id,
           userid: req.body.userid,
           title: req.body.title,
           content: req.body.content
        });
        // ! hum aesey tho nhi barna nhi chahey gey we make a request so we use "post" instead of "get"

        await newNote.save();// this save is in the mongoose 
        const response = { message: "New Note created!" + `id: ${req.body.id}` };
        res.json(response);
     });
     // TODO Delete a note
     router.post("/delete", async function(req,res){
        await Note.deleteOne({id:req.body.id});
        const response = { message: " Note Deleted!" + `id: ${req.body.id}` };
        res.json(response);
     });

     module.exports = router;
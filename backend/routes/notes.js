const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
var fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");

// ROUTE: 1 create a user using: POST "/api/notes/fetchAllUser" . login required
router.get('/fetchAllUser',fetchuser, async(req,res)=>{

try {
    const notes = await Notes.find({user:req.user.id});
    res.json(notes);
    
} catch(error){
    console.log(error.message)
    res.status(500).send("Internal server error"); 
}

})

// ROUTE: 2 Add note a user using: POST "/api/notes/addnote" . login required
router.post('/addnote',fetchuser,[
    body('title','Enter a valid name').isLength({ min: 3 }),    
    body('description','description must be atleast 5 charactor').isLength({ min: 5 })], async(req,res)=>{

     try {
     const {title,description,tag} = req.body;

    // if there are errors return bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
      }

      const note = new Notes({
        title,description,tag,user:req.user.id
      })

      const savenote = await note.save();
      res.json(savenote);
      

    } catch(error){
        console.log(error.message)
        res.status(500).send("Internal server error"); 
  } 

})

// ROUTE: 3 upade a existing note using: PUT "/api/notes/upadenote" . login required

router.put('/updatenote/:id',fetchuser,[
    body('title','Enter a valid name').isLength({ min: 3 }),    
    body('description','description must be atleast 5 charactor').isLength({ min: 5 }),
    body('tag','tag must be atleast 5 charactor').isLength({ min: 3 })
], async(req,res)=>{


   try {

    const {title,description,tag} = req.body;

    const newnote = {}

    if(title){newnote.title = title}
    if(description){newnote.description = description}
    if(tag){newnote.tag = tag}

    // find the note to be update and update it 
    let note = await Notes.findById(req.params.id);
    if(!note){return res.status(404).send("Not found")}

    // allow updation if only user own this note
    if(note.user.toString() !== req.user.id){
        return res.status(404).send("Not allowed");
    }

    note  = await Notes.findByIdAndUpdate(req.params.id ,{$set:newnote}, {new:true})
    res.json({note});

} catch(error){
    console.log(error.message)
    res.status(500).send("Internal server error"); 
} 

})

// ROUTE: 4 delete a existing note using: DELETE "/api/notes/deletenote" . login required

router.delete('/deletenote/:id',fetchuser, async(req,res)=>{

   try {
    // Find the note to be delete and delete it
    let note = await Notes.findById(req.params.id);
    if(!note){return res.status(404).send("Not found")}

    //allow deletion only if user owns this note
    if(note.user.toString() !== req.user.id){
        return res.status(404).send("Not allowed");
    }

    note  = await Notes.findByIdAndDelete(req.params.id)
    res.json({"success": "note has been deleted", note:note});

} catch(error){
    console.log(error.message)
    res.status(500).send("Internal server error"); 
} 

})

module.exports = router;

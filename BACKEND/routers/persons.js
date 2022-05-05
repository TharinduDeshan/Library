const express = require('express');
const router = express.Router()
const Person = require('../models/person')


router.get('/', async (req, res) => {
   try{
       const persons = await Person.find()
       res.json(persons);
   }catch(err){
       res.send('Error', + err)
   }
})

router.get('/:id', async (req, res) => {
    try{
        const person = await Person.findById(req.params.id)
        res.json(person);
    }catch(err){
        res.send('Error', + err)
    }
 })

router.post('/', async (req, res) => {
    const person = new Person({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })

    try{
       const a1 =  await person.save()
       res.json(a1)
    }catch(err){
        res.send('Error')
    }
})



module.exports = router;
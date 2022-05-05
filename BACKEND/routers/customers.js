const express = require('express');
const router = express.Router()
const Customer = require('../models/customer')

router.get('/', async (req, res) => {
   try{
       const customers = await Customer.find()
       res.json(customers);
   }catch(err){
       res.send('Error', + err)
   }
})

router.get('/:id', async (req, res) => {
    try{
        const customer = await Customer.findById(req.params.id)
        res.json(customer);
    }catch(err){
        res.send('Error', + err)
    }
 })

 router.delete('/:id', async (req, res) => {
     try{
        const customer = await Customer.deleteOne({_id: req.params.id})
        res.send(customer)
     }catch(err) {
         res.send('Error', + err)
     }
 })






module.exports = router;
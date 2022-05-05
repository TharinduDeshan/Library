const { RoundaboutLeftRounded } = require('@mui/icons-material');
const express = require('express');
const router = express.Router()
const CustomerDetails = require('../models/customerDetails')

router.get('/', async (req, res) => {
   try{
       const customersDetails = await CustomerDetails.find()
       res.json(customersDetails);
   }catch(err){
       res.send('Error', + err)
   }
})

router.get('/getCount', async (req, res) => {
    try{
        const customerDetails = await CustomerDetails.find().countDocuments()
        res.json(customerDetails);
    }catch(err){
        res.send('Error', + err)
    }
 })

 router.delete('/:id', async (req, res) => {
     try{
        const customerDetails = await CustomerDetails.deleteOne({_id: req.params.id})
        res.send(customerDetails)
     }catch(err) {
         res.send('Error', + err)
     }
 })

 






module.exports = router;
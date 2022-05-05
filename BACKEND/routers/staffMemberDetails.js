const express = require('express');
const router = express.Router()
const StaffMemberDetails = require('../models/staffMemberDetails')

router.get('/', async (req, res) => {
   try{
       const staffMembersDetails = await StaffMemberDetails.find()
       res.json(staffMembersDetails);
   }catch(err){
       res.send('Error', + err)
   }
})

router.get('/:id', async (req, res) => {
    try{
        const staffMemberDetail = await StaffMemberDetails.findById(req.params.id)
        res.json(staffMemberDetail);
    }catch(err){
        res.send('Error', + err)
    }
 })

 router.delete('/:id', async (req, res) => {
     try{
        const staffMemberDetail = await StaffMemberDetails.deleteOne({_id: req.params.id})
        res.send(staffMemberDetail)
     }catch(err) {
         res.send('Error', + err)
     }
 })

 router.get("/search/:key", async (req, res) => {
     try{
        const data = await StaffMemberDetails.find(
            {
                "$or":[
                    {memberName:{$regex: req.params.key} }
                ]
            }
        )
        console.log(req.params.key)
        res.send(data)
     }catch(err) {
         res.send('Error',+ err)
     }
     
 })






module.exports = router;
const router = require("express").Router();
let Issued = require("../modules/issued");

//Insert
router.route("/add").post((req, res) => {

    const customerID  = req.body.customerID;
    const itemIDs     = req.body.itemIDs;
    const issuedDate  = req.body.issuedDate;
    const totalPrice  = req.body.totalPrice;

  const newIssued = new Issued({
    customerID,
    itemIDs,
    issuedDate,
    totalPrice
  });

    //Insert the created object to the DB //.save()->pass the obeject to the mongo DB through the schema in the model
    newIssued.save().then(() => {
      

        res.json("Issued Items Added"); //Pass to the frontend as response in json format
    }).catch((err) => {

        console.log(err); //Display the error in console
    })
});


router.route("/getAll").get((req, res) => {

    //Variable declared at line 5
    Issued.find().then((issued) => {

        res.json(issued);
    }).catch((err) => {

        console.log(err);
    })


})



    //Get one Customer's Issued Items
    router.route("/getOne/:id").get((req, res)=> {


        let customerID = req.params.id;

        const getOne = Issued.findOne({customerID:customerID}).exec ((err, post) =>{

            if(err){

                console.log(err);
            }

            else{

                res.send(post);
            }

        })


    })


    //Delete Issued Items
    router.route("/deleteIssuedItem/:id").delete(async (req, res) => {

        let issuedID = req.params.id;
    
        await Issued.findByIdAndDelete(issuedID)
        .then(() => {
    
            res.status(200).send({status: "Issued Items Removed"});
     
    
        }).catch((err) => {
    
            console.log(err.message);
            res.status(500).send({status: "Error with delete Item", error : err.message} );
        })
    })
    

module.exports = router;

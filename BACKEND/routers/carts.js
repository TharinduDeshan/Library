const router = require("express").Router();
let Cart = require("../modules/cart");

//Insert
router.route("/add").post((req, res) => {

    const customerID  = req.body.customerID;
    const itemIDs     = req.body.itemIDs;
    // const orderDate  = req.body.orderDate;

  const newCart = new Cart({
    customerID,
    itemIDs,
    // orderDate
  });

    //Insert the created object to the DB //.save()->pass the obeject to the mongo DB through the schema in the model
    newCart.save().then(() => {
      

        res.json("Cart Created"); //Pass to the frontend as response in json format
    }).catch((err) => {

        console.log(err); //Display the error in console
    })
});


router.route("/getAllCarts").get((req, res) => {

    //Variable declared at line 5
    Cart.find().then((carts) => {

        res.json(carts);
    }).catch((err) => {

        console.log(err);
    })


})


//Update ItemIDS
router.route("/updateCartItems/:id").put(async (req, res) => {
    let customerID = req.params.id;
    const{
            itemIDs
       
         } = req.body;
  
    const UpdatedCart  = {
        itemIDs
    }
  
 
    const update = await Cart.updateOne(
  
      {customerID : customerID },
      {$set : { itemIDs : itemIDs}},
  
  
    ).then(() => {
  
      res.status(200).send({ status: "Cart updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
  
  
    })



    //Get one Customer's Cart
    router.route("/getOneCart/:id").get((req, res)=> {


        let customerID = req.params.id;

        const getOne = Cart.findOne({customerID:customerID}).exec ((err, post) =>{

            if(err){

                console.log(err);
            }

            else{

                res.send(post);
            }

        })


    })


    //Delete Cart
    router.route("/deleteCart/:id").delete(async (req, res) => {

        let cartID = req.params.id;
    
        await cart.findByIdAndDelete(cartID)
        .then(() => {
    
            res.status(200).send({status: "Cart deleted"});
     
    
        }).catch((err) => {
    
            console.log(err.message);
            res.status(500).send({status: "Error with delete Item", error : err.message} );
        })
    })
    


    router.route("/updateSItem/:id").put(async (req, res) => {
        let cartID = req.params.id;
        const {
          customerID,
          itemIDs,
          // orderDate
        
        } = req.body;
      
        const updateItem = {
          customerID,
          itemIDs,
          // orderDate
      
        };
      
        const update = await Cart.findByIdAndUpdate(cartID, updateItem)
          .then(() => {
            res.status(200).send({ status: "cart updated" });
          })
          .catch((err) => {
            console.log(err);
            res
              .status(500)
              .send({ status: "Error with updating data", error: err.message });
          });
      });
    

module.exports = router;

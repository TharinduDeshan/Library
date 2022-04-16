const router = require("express").Router();
let Customer = require("../modules/Customer");

//Insert
router.route("/add").post((req, res) => {
  const CustomerID = req.body.CustomerID;
  const Name = req.body.Name;
  const NIC = req.body.NIC;
  const PhoneNumber = parseInt(req.body.PhoneNumber);
  const Address = req.body.Address;
  const Email = req.body.Email;
  const Occupcation = req.body.Occupcation;
  const Gender = req.body.Gender;
  const Member = req.body.Member;
  // const CustomerID = req.body.CustomerID;

  const newCustomer = new Customer({
    CustomerID,
    Name,
    NIC,
    PhoneNumber,
    Address,
    Email,
    Occupcation,
    Gender,
    Member,
    
    // CustomerID
  });

  newCustomer
    .save()
    .then(() => {
      res.json({
        newCustomer: {
          CustomerID: newCustomer.CustomerID,
          Name: newCustomer.Name,
          NIC: newCustomer.NIC,
          PhoneNumber: newCustomer.PhoneNumber,
          Address: newCustomer.Address,
          Email: newCustomer.Email,
          Occupcation: newCustomer.Description,
          Gender: newCustomer.Gender,
          Member: newCustomer.Member,
         
          // CustomerID : newItem.CustomerID
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// retrive

// route("/") this can use for fetching all the data from the DB
router.route("/get").get((reg, res) => {
  Customer.find()
    .then((customers) => {
      res.json(customers);
    })
    .catch((err) => {
      console.log(err);
    });
});

// update
router.route("/update/:id").patch(async (req, res) => {
  let customerID = req.params.id;
  const {
    CustomerID,
    Name,
    NIC,
    PhoneNumber,
    Address,
    Email,
    Occupcation,
    Gender,
    Member,

  } = req.body;

  const updateItem = {
    
   CustomerID,
    Name,
    NIC,
    PhoneNumber,
    Address,
    Email,
    Occupcation,
    Gender,
    Member,

  };

  const update = await Customer.findByIdAndUpdate(customerID, updateCustomer)
    .then(() => {
      res.status(200).send({ status: "Data updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

// delete
// router.route("/delete/:id").delete(async (req, res) => {
//   let itemID = req.params.id;

//   await Item.findByIdAndDelete(itemID)
//     .then(() => {
//       res.status(200).send({ status: "Item Deleted" });
//     })
//     .catch((err) => {
//       console.log(err.message);
//       res.status(500).send({ status: "Error with delete", error: err.message });
//     });
// });

// get one item details
router.route("/get/:id").get(async (req, res) => {
  let customerID = req.params.id;
  const customers = await Customer.findById(customerID)
    .then((customerss) => {
      // res.status(200).send({status:"Item fetched"});
      res.json(customerss);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});


module.exports = router;

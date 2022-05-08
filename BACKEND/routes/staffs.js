const router = require("express").Router();
let Staff = require("../modules/Staff");

//Insert
router.route("/add").post((req, res) => {
  const Username = req.body.Username;
  const Email = req.body.Email;
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const NIC = req.body.NIC;
  const Telephone = req.body.Telephone;
  const Password = req.body.Password;


  const newStaff = new Staff({
    Username,
    Email,
    FirstName,
    LastName,
    NIC,
    Telephone,
    Password
  });

  newStaff
    .save()
    .then(() => {
      res.json({
        newStaff: {
          _id: newStaff._id,
          Username: newStaff.Username,
          Email: newStaff.Email,
          FirstName: newStaff.FirstName,
          LastName: newStaff.LastName,
          NIC: newStaff.NIC,
          Telephone: newStaff.Telephone,
          Password: newStaff.Password,
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
  console.log('get command!')
  Staff.find()
    .then((staffs) => {
      res.json(staffs);
    })
    .catch((err) => {
      console.log(err);
    });
});

// update
router.route("/update/:id").put(async (req, res) => {
  let itemID = req.params.id;
  const {Username,Email,FirstName,LastName,NIC,Telephone} = req.body;

  const staff = {Username,Email,FirstName,LastName,NIC,Telephone}


  const update = await Staff.findByIdAndUpdate(itemID, staff)
    .then(() => {
      res.status(200).send({
        status: "Staff Details Updated"
      });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({
          status: "Error with updating data",
          error: err.message
        });
    });
});

// delete
router.route("/delete/:id").delete(async (req, res) => {
  let itemID = req.params.id;

  await Item.findByIdAndDelete(itemID)
    .then(() => {
      res.status(200).send({
        status: "Item Deleted"
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({
        status: "Error with delete",
        error: err.message
      });
    });
});

// get one item details
router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const items = await Staff.findById(userId)
    .then((itemss) => {
      // res.status(200).send({status:"Item fetched"});
      res.json(itemss);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({
          status: "Error with get user",
          error: err.message
        });
    });
});


module.exports = router;
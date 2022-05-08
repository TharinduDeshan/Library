const router = require("express").Router();
let Member = require("../modules/Member");

//Insert
router.route("/add").post((req, res) => {
  const MemberID = req.body.MemberID;
  const Name = req.body.Name;
  const NIC = req.body.NIC;
  const PhoneNumber = parseInt(req.body.PhoneNumber);
  const Address = req.body.Address;
  const Email = req.body.Email;
  const Occupcation = req.body.Occupcation;
  const Gender = req.body.Gender;
  const RegistredDate = req.body.RegistredDate;
  // const CustomerID = req.body.CustomerID;

  const newMember = new Member({
    MemberID,
    Name,
    NIC,
    PhoneNumber,
    Address,
    Email,
    Occupcation,
    Gender,
    RegistredDate,
    
    // CustomerID
  });

  newMember
    .save()
    .then(() => {
      res.json({
        newMember: {
          MemberID: newMember.MemberID,
          Name: newMember.Name,
          NIC: newMember.NIC,
          PhoneNumber: newMember.PhoneNumber,
          Address: newMember.Address,
          Email: newMember.Email,
          Occupcation: newMember.Description,
          Gender: newMember.Gender,
          RegistredDate: newMember.RegistredDate,
         
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
    Member.find()
    .then((members) => {
      res.json(members);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:id").get((req, res) => {
  let MemberID = req.params.id;
  Member.findById(MemberID)
    .then((members) => {
      res.json(members);
    })
    .catch((err) => {
      console.log(err);
    });
});


// update
router.route("/update/:id").patch(async (req, res) => {
  let memberID = req.params.id;
  const {
    MemberID,
    Name,
    NIC,
    PhoneNumber,
    Address,
    Email,
    Occupcation,
    Gender,
    RegistredDate,

  } = req.body;

  const updateMember = {
    
    MemberID,
    Name,
    NIC,
    PhoneNumber,
    Address,
    Email,
    Occupcation,
    Gender,
    RegistredDate,

  };

  const update = await Member.findByIdAndUpdate(memberID, updateMember)
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
router.route("/delete/:id").delete(async (req, res) => {
  let memberID = req.params.id;

  await Member.findByIdAndDelete(memberID)
    .then(() => {
      res.status(200).send({ status: "Member Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ status: "Error with delete", error: err.message });
    });
});
// get one item details
router.route("/get/:id").get(async (req, res) => {
  let memberID = req.params.id;
  const members = await Member.findById(memberID)
    .then((memberss) => {
      // res.status(200).send({status:"Item fetched"});
      res.json(memberss);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});


module.exports = router;

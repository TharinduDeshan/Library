//Import Packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

//Defining the port
const PORT = process.env.PORT || 8070;

// mount the specified middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//Obtatain the Connection URL from .env file
const URL = process.env.MONGODB_URL;

//Building MongoDB Connection

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB Connection Successful");
})

//Make access to routes
const customerRouter = require("./routes/customers.js");
app.use("/customers", customerRouter);

const memberRouter = require("./routes/members.js");
app.use("/members", memberRouter);

const cartRouter = require("./routes/carts.js");
app.use("/cart", cartRouter);

const issuedRouter = require("./routes/issued.js");
app.use("/issued", issuedRouter);

const itemsRouter = require("./routes/items.js");
app.use("/items", itemsRouter);

//Users route
const userRouter = require("./routes/staffs.js");
app.use("/staff", userRouter);

// const customerRouter = require("./routes/customers.js");
// app.use("/customer", itemRouter);

//Running the app on the defined port
app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});




// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const app = express();
// const bodyParser = require("body-parser");
// require("dotenv").config();

// //Defining the port
// const PORT = process.env.PORT || 8070;

// // mount the specified middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

// //Obtatain the Connection URL from .env file
// const URL = process.env.MONGODB_URL;

// //Building MongoDB Connection

// mongoose.connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//     console.log("MongoDB Connection Successful");
// })

// //Make access to routes
// const itemRouter = require("./routes/items.js");
// app.use("/items", itemRouter);

// // const customerRouter = require("./routes/customers.js");
// // app.use("/customer", itemRouter);



// //Running the app on the defined port
// app.listen(PORT, () => {
//     console.log(`Server is up and running on PORT ${PORT}`);
// });





// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const app = express();
// const bodyParser = require("body-parser");
// require("dotenv").config();

// const PORT = process.env.PORT || 8070;

// app.use(cors());
// app.use(express.json());

// const URL = process.env.MONGODB_URL;

// mongoose.connect(URL, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });


// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB Connection successful");
// });


// app.listen(PORT, () => {
//   console.log("Server connection successful");
// });

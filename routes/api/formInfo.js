const express = require("express"); //bring in express
const router = express.Router(); //bring in express router, allows us to make routes in separate files
const config = require("config"); //bring in config to use the 'jwtsecret' value we made in our default.json inside our config folder

const FormInfo = require("../../models/FormInfo"); //bring in our FormInfo model
// the first '../' is to get out of the 'api' folder, the second '../' is to get out of the routers folder

router.post("/", async (req, res) => {
  const { name, color, meaning } = req.body; //pull these pieces of data out of the data that is sent to us

  try {
    const formInfo = new FormInfo({
      //create an instance of a new formInfo with the fields that we want
      name,
      color,
      meaning,
    });

    await formInfo.save(); //now we save the formInfo to our database
  } catch (err) {
    //if something goes wrong here, then it's a server error
    console.error(err.message);
    res.status(500).send("Server error"); //500 is an Internal Server Error
  }
});

module.exports = router; //export the router

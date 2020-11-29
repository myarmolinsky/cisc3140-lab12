const mongoose = require("mongoose"); //bring in mongoose

const FormInfoSchema = new mongoose.Schema({
  //create our schema
  //mongoose.Schema() takes in an object with all the fields that we want
  name: {
    type: String,
  },
  color: {
    type: String,
  },
  meaning: {
    type: String,
  },
});

module.exports = FormInfo = mongoose.model("FormInfo", FormInfoSchema); //export this as FormInfo which is a mongoose model
//mongoose.model() takes in 2 things: the model name (in this case "FormInfo") and the schema (which we just made, in this case "FormInfoSchema")

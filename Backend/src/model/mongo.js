const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/IdApp")
const schema =mongoose.Schema;

const blogschema = new schema({
    name:String,
    ID:String,
    Email:String,
    Password:String,
    Course:String,
    Batch:String,
});
var blog =mongoose.model("admin",blogschema);
module.exports=blog;
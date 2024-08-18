const mongoose = require("mongoose");
const Campsite = require("./models/campsite");
// connects to nucamp db in mongodb
const url = "mongodb://localhost:27017/nucampsite";

const connect = mongoose.connect(url, {
  // useCreateIndex: true,
  // useNewUrlParser: true,
  // useUnifiedTopology: true
});
connect.then(() => {
  console.log("Connected correctly to server");
  // creating a new document
  const newCampsite = new Campsite(
    // object to create document fields
    {
      name: "React Lake Campground",
      description: "test",
    }
  );
  // saving document
  newCampsite
    .save()
    .then((campsite) => {
      console.log(campsite);
      return Campsite.find();
    })
    // finding all documents
    .then((campsites) => {
      console.log(campsites);
      return Campsite.deleteMany();
    })
    // closing connection
    .then(() => {
      return mongoose.connection.close();
    })
    // error handling
    .catch((err) => {
      console.log(err);
      mongoose.connection.close();
    });
});

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
// making a new object named CampsiteSchema 
const CampsiteSchema = new Schema({
    // required 1arg name,  description
    name: {
        type: String,
        required: true,
        // no 2 documents should have the same field
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    
},
// required 2arg optins 
{
    // creats created at and updated at fields
    timestamps: true
});

// creating a model using the schema
// model name campsites, and schema we want to use for collection
// schema returns, constructor fn, that can be used to create new documents
const Campsite = mongoose.model('Campsite', CampsiteSchema);
module.exports = Campsite
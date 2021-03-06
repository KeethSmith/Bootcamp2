/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

    mongoose.connect(config.db.uri, {useNewUrlParser: true});
/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {

  Listing.find({name : 'Library West'}, function (err, data)
  {
    if (err) throw err
    console.log(JSON.stringify(data, null, 1))
  });
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() 
{

  Listing.findOneAndRemove({code : 'CABL'}, function (err, data)
  {
    if(err) throw err
    console.log(JSON.stringify(data, null, 1))
  });

  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsMemorial = function()
 {
  

  Listing.findOneAndUpdate({code : 'PHL'}, {address : "1953 Museum Rd, Gainesville, FL 32603"}, function(err, data)
  {
    if(err) throw err
    console.log(JSON.stringify(data, null, 1))
  })

  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603
   */
};
var retrieveAllListings = function() 
{
  

  Listing.find(function (err, data)
  {
    if(err) throw err
    console.log(JSON.stringify(data, null, 1))
  })
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
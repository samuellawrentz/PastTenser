const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
var fs = require("fs");
// Get content from file
 var contents = fs.readFileSync("./data/pastdata.json");
 var data = JSON.parse(contents);

 function GetRegularVerb(verb){
if(verb[verb.length-1]==='e')
return verb+'d';
if(verb[verb.length-1]==='y')
return verb.slice(0, verb.length-1,1)+'ied';
 }

 function PastTense(verb){
     var response = {
         'past tense': data[verb]? data[verb][0] : GetRegularVerb(verb),
         'past participle': data[verb]? data[verb][1] : GetRegularVerb(verb)
};
return response;
 }

app.get("/:verb", function(req, res) {
    var verb= req.params.verb;
    res.send(PastTense(verb));
 });

 app.listen(port, function() {
    console.log("Listening on " + port);
  });
import cloneIt from "./cloneFiles.js";
import insertData from "./mongo.js"
import fs  from 'fs';
//import path  from 'path';
import json  from 'big-json';
 

await cloneIt();
 

let file = "jsonFiles/ransomware_overview.json"
const readStream = fs.createReadStream(file);
const parseStream = json.createParseStream();

parseStream.on('data', function(pojo) {
    pojo.forEach(element => {
        //console.log(element)
         insertData(element)
            .then(console.log)
             .catch(console.error)

    });
});

readStream.pipe(parseStream);

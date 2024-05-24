
 
import { MongoClient }  from  'mongodb';
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://dingkyduo:ddgg120282DD@cluster0.dm5nudf.mongodb.net/";

const client = new MongoClient(url);

// Database Name
const dbName = 'dingky';
 
export default async function insertData(data) {
  // Use connect method to connect to the server
 let dbCon= await client.connect();
 //console.log(dbCon)
  //console.log('Connected successfully to server');
  const db = client.db(dbName);
  const ransomware = db.collection('ransomware');
 
  const filteredDocs = await ransomware.find({ransomNoteFilenames:data.ransomNoteFilenames,name:data.name}).toArray()
  //console.log(data.ransomNoteFilenames)
    //console.log(filteredDocs)
  if(typeof(filteredDocs[0])=='undefined'){
    let insert = await ransomware.insertOne(data);
    return 'inserted.';
  } else{
    return 'existing';
  }
 
}


  


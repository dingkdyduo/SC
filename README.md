**install and run**
1. clone the repo
2. goto folder SC and run "nmp install"
3. run the file readAndSave.js "node readAndSave.js"

**to view DB:** 
1. mongosh "mongodb+srv://cluster0.dm5nudf.mongodb.net/" --apiVersion 1 --username dingkyduo --password ddgg120282DD

**to change the DB to local:**
pls edit mongo.js  for connection , DB name and collection
1. const url = "mongodb+srv://dingkyduo:ddgg120282DD@cluster0.dm5nudf.mongodb.net/";
2. const dbName = 'dingky';
3. const ransomware = db.collection('ransomware');



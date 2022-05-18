
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://vaibbhav:vaibhav1112@cluster0.ousqe.mongodb.net/Project 0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");

  console.log("connection success");
 
});
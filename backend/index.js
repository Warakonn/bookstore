const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const {MongoClient} = require("mongodb");
const uri = "mongodb://admin:PPTzoh39726@node31436-bookshop.app.ruk-com.cloud:11332";

app.post('/book/create', async (req, res) => {
  const books = req.body;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db("mydb").collection("book").insertOne({
    id: parseInt(books.id),
    fname:books.fname,
    price:books.price,
    IMG:books.IMG
  });
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message":"book with ID" + books.id + "is created",
    "book":books

  })
})

app.get('/book', async (req, res) => {
  const client = new MongoClient(uri);
  await client.connect();
  const books = await client.db("mydb").collection("book").find({}).toArray();
  await client.close();
  res.status(200).send(books);
})

app.get('/book/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const client = new MongoClient(uri);
  await client.connect();
  const books = await client.db("mydb").collection("book").findOne({"id":id});
  await client.close();
  res.status(200).send({
    "status":"ok",
    "book":books
  });
})

app.put('/book/update', async (req, res) => {
  const books = req.body;
  const id = books.id;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db("mydb").collection("book").updateOne({"id": id}, {"$set": {
    fname: books.fname,
    price: books.price,
    IMG: books.IMG
  }});
  await client.close();
  res.status(200).send({
    "status":"ok",
    "message":"book id = " +id + "update.",
    "book" : books  
  });
})

app.delete('/book/delete', async (req, res) => {
  const id = req.body.id;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db("mydb").collection("book").deleteOne({'id': id});
  await client.close();
  res.status(200).send({
    "status":"ok",
    "message":"book id = " +id + "delete.",
  });
})


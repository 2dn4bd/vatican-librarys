const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(express.json())
app.get('/', (req, res) =>{
    res.send('server is running')
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@vatican-library.x0lmrnq.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const bookCategory = client.db('libraryDB').collection('categoryOfBooks')
    const bookCollection = client.db('libraryDB').collection('collectionOfBooks')
    const borrowedBooksClt = client.db('libraryDB').collection('borrowedBooks')
    app.get('/bookcategory', async(req, res) =>{
        const cursor = bookCategory.find()
        const result = await cursor.toArray()
        res.send(result)
    })
    app.get('/books/:name', async(req, res) =>{
      const name = req.params.name;
      const query = {category_name: name}
      const result = await bookCollection.find(query).toArray()
      res.send(result)
    })
    app.get('/bookdetail/:id', async(req, res) =>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await bookCollection.findOne(query)
      res.send(result)
    })
    app.get('/allbooks', async(req, res) =>{
      const filter = req.query
      console.log(filter);
      const query = {
        quantity:filter.sort === 'asc' ? {$gte: 0} : {$ne: 0}
      }
      const cursor = bookCollection.find(query)
      const result = await cursor.toArray()
      res.send(result)
    })
    app.post('/books', async(req, res) =>{
      const addNewBook = req.body;
      const result = await bookCollection.insertOne(addNewBook)
      res.send(result)
    })
    app.post('/borrowedbooks', async(req, res) =>{
      const bookInfo = req.body;
      const result = await borrowedBooksClt.insertOne(bookInfo)
      res.send(result)
    })
    app.get('/getborrowedbooks/:email', async(req, res) =>{
      const email = req.params.email;
      const queryByEmail = {
        user_email: email }
        const result = await borrowedBooksClt.find(queryByEmail).toArray()
        res.send(result)
    })
    app.put('/updatedbook/:id', async(req, res) =>{
      const id = req.params.id;
      const updateInfo = req.body;
      const filter = {_id: new ObjectId(id)}
      const changedInfo ={
        $set:{
          name:updateInfo.name,
          category_name:updateInfo.category,
          author:updateInfo.author,
          rating:updateInfo.rating,
          image:updateInfo.image
        }
      }
      const result = await bookCollection.updateOne(filter, changedInfo)
      res.send(result)
    })

    app.put('/reduce/:id', async(req , res) =>{
      const id = req.params.id;
      console.log(id);
      const reduceInfo = req.body;
      const filter = {_id: new ObjectId(id)}
     const reduce = {
      $set:{
        quantity:reduceInfo.reduce
      }
     }
      const result = await bookCollection.updateOne(filter, reduce)
      res.send(result)
    })
    app.put('/increasequantity/:id', async(req, res) =>{
      const id = req.params.id;
      const increaseInfo = req.body;
      const filter = {_id: new ObjectId(id)}
      const increaseQun = {
        $set:{
          quantity:increaseInfo.increase
        }
      }
      const result = await borrowedBooksClt.updateOne(filter, increaseQun)
      res.send(result)
    })

    app.delete('/returnbook/:id', async(req, res) =>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await borrowedBooksClt.deleteOne(query)
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () =>{
    console.log(`server is running on port ${port}`);
})
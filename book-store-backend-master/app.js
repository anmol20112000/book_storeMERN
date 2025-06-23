// const express = require("express");

// const mongoose = require("mongoose");

// const router = require("./routes/book-routes");

// const app = express();

// mongoose.connect(
//     "mongodb+srv://admin:mranmlsingh101@cluster0.pemem.mongodb.net/?retryWrites=true&w=majority"
// ).then(()=> console.log("Connected to a database"))
// .then(()=> {
//     app.listen(5000);
// })
// .catch((err)=> console.log(err));

// app.use(express.json());
// app.use("/books",router);
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const router = require("./routes/book-routes");
// require("dotenv").config(); // load .env

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());
// app.use("/books", router);

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("✅ Connected to MongoDB");
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mranmolsingh101%40gmail.com:Lotussss@cluster0.g7pixgd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

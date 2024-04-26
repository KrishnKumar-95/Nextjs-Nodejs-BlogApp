import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";

const uri="mongodb+srv://krishnkumar180895:Krishn9518297071@krishn-cluster.mijdjki.mongodb.net/node-auth?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectDB() {
  try {
    await mongoose
      .connect(uri, {})
      .then(() => console.log("MongoDB connected!"))
      .catch((err) => console.log(err));
    await client.connect();
  } finally {
    await client.close();
  }
}

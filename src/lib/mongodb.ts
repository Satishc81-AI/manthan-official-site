import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let clientPromise: Promise<MongoClient> | null = null;

if (uri) {
  if (process.env.NODE_ENV === "development") {
    const g = globalThis as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };
    if (!g._mongoClientPromise) {
      g._mongoClientPromise = new MongoClient(uri).connect();
    }
    clientPromise = g._mongoClientPromise;
  } else {
    clientPromise = new MongoClient(uri).connect();
  }
}

export default clientPromise;

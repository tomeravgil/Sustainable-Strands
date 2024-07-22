const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb+srv://babcoh2:ieDbbjQ94n4CZA8r@cluster0.6djjcbt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const mongoClient = new MongoClient(uri);
    
  try {
    
    const database = mongoClient.db('Hemp_Dummy_Data');

    // Create a time-series collection
    await database.createCollection("Verification_Code", {
      timeseries: {
        timeField: "timestamp",
        metaField: "metadata",
        granularity: "seconds"
      }
    });

    console.log("Time-series collection created");
  } finally {
    await mongoClient.close();
  }
}

run().catch(console.dir);

const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    process.env.MONGO_URI ||
      "mongodb://alfin70:alfinkerin70@cluster0-shard-00-00.zzz4a.mongodb.net:27017,cluster0-shard-00-01.zzz4a.mongodb.net:27017,cluster0-shard-00-02.zzz4a.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-o4vzzp-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
  console.log(`MongoDB Conneted ${conn.connection.host} `);
};

module.exports = connectDB;

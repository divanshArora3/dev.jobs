import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(
      "mongodb+srv://krishnamahajan4602:7YmBTBuyzSRl6Zr4@cluster0.xlzgldp.mongodb.net/?retryWrites=true&w=majority",
      {
        dbName: "job_portal",
      }
    )
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some error occured while connecting to database: ${err}`);
    });
};

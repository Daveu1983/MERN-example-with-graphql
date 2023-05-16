const mongoose = require('mongoose')
const { config } = require('dotenv');

config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_ROOTPASS}@mongodb:27017`)
    console.log(`MongoDB Connected`)
  } 
  catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
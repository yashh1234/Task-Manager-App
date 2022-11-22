const mongoose = require('mongoose')

//const connectDB = (url) => {
  //return mongoose.connect(url, {
    //useNewUrlParser:true,
    //useUnifiedTopology:true,
    //useCreateIndex:true,
    //useFindAndModify:false,
  //})
//}

const connectDB = async ()=>{
  try{
      const conn = await mongoose.connect(process.env.MONGO_URI,{
          useUnifiedTopology:true,
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: true,
      })
      console.log(`MongoDB is connected! ${conn.connection.host}`)
  }catch(error){
      console.error(`Error: ${error}`)
      process.exit(1) 
  }
}

module.exports = connectDB
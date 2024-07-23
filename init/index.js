//the entire initialization will be done here
const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

//connection with DB
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main()
.then(()=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

//iniitialization
const initDB=async()=>{
    await Listing.deleteMany({});   //delete the previou data if any
    initData.data=initData.data.map((obj)=>({...obj,owner:"6699694fc0591b287aed0e50"}))
    await Listing.insertMany(initData.data);
    console.log("data initialized");
}

initDB();
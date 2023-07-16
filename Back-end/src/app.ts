import express from "express";
import db from "mongoose";

const app = express();

app.listen(5000, ()=>{
    console.log("server is running on port 5000");
})


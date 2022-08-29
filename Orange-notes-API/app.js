import express from "express";
import * as dotenv from "dotenv";


dotenv.config()

const port = process.env.PORT || 3000
const app = express()

app.listen(port, ()=>{
    if(port == 3000){
        console.log(`http://localhost:${port}`)
    }else{
        console.log(port)
    }
})

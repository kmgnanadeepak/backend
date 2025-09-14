const express=require("express")
const app=express()
let port=3000
app.listen(port,()=>{
    console.log(`hello from ${port}`)
})
app.use((req,res)=>{
    console.log("req recieved")
    res.send("hello from orange",port)
})

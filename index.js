const express=require("express")
const bodyParser=require("body-parser")
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.get("/bbb",(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);	
res.send("45852")	
})

app.post("/ccc",(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);	
res.send(req.body)	
})
app.listen(3000,()=>{
	
console.log("on")	
	
	
})
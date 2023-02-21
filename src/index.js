const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
// your code goes here

app.get('',(req,res)=>{
    // res.send('Hello World')
    res.sendFile(__dirname+"/index.html")
})
app.post('/add',(req,res)=>{
    const num1=req.body.add1
    const num2=req.body.add2
    let add=Number(num1)+Number(num2)
    let status
    let message
    console.log(num1,num2);
    if (num1<-1e6 || num2<-1e6 || add<-1e6) {
        status='failure'
        message='Underflow'
        add='Na'
    }
    else if(num1>1e6 || num2>1e6 || add>1e6){
        status='failire'
        message='Overflow'
        add='Na'
    }
    else if(isNaN(num1) || isNaN(num2)){
        status='error'
        message='Invalid data types'
    }
    else{
        status='succes'
        message='The sum of given two numbers'
    }
    res.status(200).json({
        status:status,
        message:message,
        sum:add
    })
})
app.post('/sub',(req,res)=>{
    const num1=req.body.sub1
    const num2=req.body.sub2
    let sub=Number(num1)-Number(num2)
    let status
    let message
    console.log(num1,num2);

    if (num1<-1e6 || num2<-1e6 || sub<-1e6) {
        status='failure'
        message='Underflow'
        sub='Na'
    }
    else if(num1>1e6 || num2>1e6 || sub>1e6){
        status='failire'
        message='Overflow'
        sub='Na'
    }
    else if(isNaN(num1) || isNaN(num2)){
        status='error'
        message='Invalid data types'
    }
    else{
        status='succes'
        message='The difference of given two numbers'
    }
    res.status(200).json({
        status:status,
        message:message,
        difference:sub
    })
})
app.post('/mul',(req,res)=>{
    const num1=req.body.mul1
    const num2=req.body.mul2
    let mul=Number(num1)*Number(num2)
    let status
    let message
    console.log(num1,num2);

    if (num1<-1e6 || num2<-1e6 || mul<-1e6) {
        status='failure'
        message='Underflow'
        mul='Na'
    }
    else if(num1>1e6 || num2>1e6 || mul>1e6){
        status='failire'
        message='Overflow'
        mul='Na'
    }
    else if(isNaN(num1) || isNaN(num2)){
        status='error'
        message='Invalid data types'
    }
    else{
        status='succes'
        message='The product of given two numbers'
    }
    res.status(200).json({
        status:status,
        message:message,
        result:mul
    })  
})
app.post('/div',(req,res)=>{
    const num1=req.body.div1
    const num2=req.body.div2
    let div=Number(num1)/Number(num2)
    let status
    let message
    console.log(num1,num2);

    if ((num1<-1e6 || num2<-1e6 || div<-1e6)&& num2!=0) {
        status='failure'
        message='Underflow'
        div='Na'
    }
    else if((num1>1e6 || num2>1e6 || div>1e6) && num2!=0){
        status='failure'
        message='Overflow'
        div='Na'
    }
    else if(isNaN(num1) || isNaN(num2)){
        status='error'
        message='Invalid data types'
    }
    else if(num2==0){
        status='failure'
        message='Cannot devide by zero'
        div='Na'
    }
    else{
        status='succes'
        message='The division of given two numbers'
    }
    res.status(200).json({
        status:status,
        message:message,
        result:div
    })
})
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;

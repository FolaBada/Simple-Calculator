const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));


app.get('', (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/add', (req,res)=>{
    let firstNumber= Number(req.body.add1)
    let secondNumber= Number(req.body.add2)
    let add= firstNumber + secondNumber
    res.send('Answer is' +' ' + add)
})
app.post('/sub' , (req , res)=>{
    let firstNumber= Number(req.body.sub1)
    let secondNumber= Number(req.body.sub2)
    let sub= firstNumber - secondNumber
    res.send('Answer is' +' ' + sub)
})
app.post('/multiply', (req,res)=>{
    let firstNumber= Number(req.body.multiply1)
    let secondNumber= Number(req.body.multiply2)
    let multiply= firstNumber * secondNumber
    res.send('Answer is' +' ' + multiply)
})
app.post('/divide' , (req , res)=>{
    let firstNumber= Number(req.body.divide1)
    let secondNumber= Number(req.body.divide2)
    let divide= firstNumber / secondNumber
    res.send('Answer is' + ' ' + divide)
})



app.listen(3000, function () {
    console.log('listening on 3000');
})
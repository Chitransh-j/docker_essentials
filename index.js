const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.json([
    {
        id : '1',
        name : 'Chitransh',
        age: 22
    },
    {
        id : '2',
        name : 'Ram',
        age: 22
    },
    {
        id : '3',
        name : 'Sita',
        age: 20
    }]
)
})

app.listen(3000,()=>{
    console.log('Listening!')
})
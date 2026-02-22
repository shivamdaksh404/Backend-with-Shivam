import express from 'express'
import dotenv from 'dotenv';
import connectDB from './db/connection.js';
import app from './app.js';

dotenv.config();
const port = process.env.PORT ;

connectDB()
.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.error(`Failed to connect to the database: ${error.message}`);
    process.exit(1);
});

// app.get('/', (req, res) => {
//     res.send("Hello World Chao")
// })

// app.get('/api/login', (req, res) => {
//     res.send("<h1>Loign Page </h1>")
// })

// app.get('/api/signup',(req,res)=>{
//     res.send("<h1>Signup</h1>")
// })

// app.get('/api/posts',(req,res)=>{
//     res.json(posts);
// })

app.listen(port, () => {
    console.log(`Running on ${port}`)
})

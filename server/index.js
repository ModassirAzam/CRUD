import express from 'express';
import dotenv from 'dotenv';
import Routes from './routes/route.js';
import connection from './database/db.js';//extension
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended:true }));
app.use(bodyParser.urlencoded({ extended:true }))

app.use(cors());//for not getting error in network tabs cross origin resource sharing...


app.use('/',Routes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username,password);

app.listen(8000,()=>{
    console.log("server is running...");
})
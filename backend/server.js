import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import data from './data.js';
import tiktokVideos from './model.js';

// app config
const app = express();
const port = process.env.port || 3003;
const db_conn = "mongodb://cli:password@localhost:27017/titktok_db?authMechanism=DEFAULT&authSource=admin"
// const db_conn = "mongodb://localhost:27017/titktok_db?authMechanism=DEFAULT"

//middlewares
app.use(express.json());
app.use(Cors());

// /db config
mongoose.connect(db_conn)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

// db endpoints
app.get('/', (req, res) => {
    res.status(200).send('wagwan wagwan');
})

app.get('/local/posts', (req, res) => {
    res.status(200).send(data);
})

app.get('/v1/posts', async (req, res) => {
    
    try {
        var getvids = await tiktokVideos.find()
        res.status(200).send(getvids);
    }
    catch(err) {
        console.error("Error fetching:", err);
        res.status(500).send(err)
    }        
})


app.post('/v1/posts', async (req, res) => {
    const postvids = req.body; //
    console.log("data", postvids)
    try {
        const data = await tiktokVideos.insertMany(postvids); // Using insertMany method
        res.status(201).send('Success all round');
    } catch (err) {
        res.status(500).send(err);
    }
});

//listener
app.listen(port, () => console.log(`liszening on port ${port}`))
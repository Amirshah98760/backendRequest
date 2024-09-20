import express from 'express'

const app = express();
const PORT = 3000;

app.use(express.json());

let items = [];

app.get('/items', (req, res)=> { 
    res.json(items);
});


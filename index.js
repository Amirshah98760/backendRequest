import express from 'express'

const app = express();
const PORT = 3000;

app.use(express.json());

let items = [];

//get request 
app.get('/items', (req, res)=> { 
    res.json(items);
});

// Post
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
    };
    items.push(newItem);
    res.status(201).json(newItem);
});




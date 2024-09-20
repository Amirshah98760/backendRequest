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

//Put
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }

    item.name = req.body.name;
    res.json(item);
});

app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex(i => i.id === id);

    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }

    items.splice(itemIndex, 1);
    res.status(204).send();
});

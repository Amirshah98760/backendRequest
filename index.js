import express from 'express'

const app = express();
const PORT = 3001;

app.use(express.json());


app.get('/', (req, res) => {
    res.json({ message: "Home page is running!" });
});

app.get('/about', (req, res) => {
    res.json({ message: "about  page is running!" });
});





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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Successfully running server');
});

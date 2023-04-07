const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data/db.json');

app.use(cors());


app.get('/blogs', (req, res) => {
    res.json(data);
});

app.get('/blog/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const blogs = data.blogs.find(blog => blog.id === id);

    if (blogs) {
        const result = {
            blogs : blogs
        }
        res.json(result);
    } else {
        res.status(404).json({ message: 'Blog not found' });
    }
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
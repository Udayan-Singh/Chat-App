const express = require('express');
const chats = require('./data/data');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send("API is running.")
})

app.get('/api/chat', (req,res) => {
    res.send(chats);
})

app.get('/api/chat/:id', (req,res) => {
    const singleChat = chats.find((c) => c._id === req.params.id)
    res.send(singleChat);
})

app.listen(PORT, (req,res) => {
    console.log(`Server started on http://localhost:${PORT}`);
})
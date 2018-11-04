// implement your API here
const express = require('express')
const data = require('./data/db.js')

const server = express()

server.get('/', (req, res) => {
    res.send('Hello World')
})

server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id: 1,
            name: 'Samwise Gamgee'
        },
        {
            id: 2,
            name: 'Frodo Baggins'
        }
    ]

    res.status(200).json(hobbits)
})

server.get('/users', (req, res) => {
    data.find().then(users => res.status(200).json(users)).catch(e => console.log(e, res.status(500), "error"))
})

server.listen(8000, () => console.log('API running on port 8000'))

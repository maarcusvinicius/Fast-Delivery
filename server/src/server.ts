import express from "express";

const app = express()

app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'Anúncio 1'},
        { id: 2, name: 'Anúncio 2'}
    ])
})

app.listen(3333)
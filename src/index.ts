import express from "express";

const app = express()

app.get('/hello', (req, res) => res.send('Hello Simplon 1'));

app.listen(3001, ()=> console.log("Application démarrée sur le port Alexis: 3001"));
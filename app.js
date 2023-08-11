const express = require('express');
const app = express();
const router = require('./imgRoutes.js')

app.use(express.json());
app.use('/api/imgapp', router)
module.exports = app;
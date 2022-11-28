const express = require('express');
const port = 3001; 

const app = express();

const cors = require('cors');
app.use(cors());

app.listen(port);
console.log('Server listening...');

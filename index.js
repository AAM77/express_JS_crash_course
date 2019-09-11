const express = require('express');
const path = require('path');
const logger = require('./middleware/logger.js');

const app = express();


// INITIALIZE MIDDLEWARE
//app.use(logger);


// SET A STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

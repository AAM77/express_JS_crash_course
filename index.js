const express = require('express');
const path = require('path');
const members = require('./Members.js');
const logger = require('./middleware/logger.js');

const app = express();


// INITIALIZE MIDDLEWARE
//app.use(logger);

// GETS ALL MEMBERS
app.get('/api/members', (req, res) => res.json(members));

// GET SINGLE MEMBER
app.get('/api/members/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// SET A STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members.js');


// GETS ALL MEMBERS
router.get('/', (req, res) => res.json(members));

// GET SINGLE MEMBER
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// CREATE MEMBER
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email.' });
  }

  members.push(newMember);

  res.json(members);
});

module.exports = router;

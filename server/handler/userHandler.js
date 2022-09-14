const express = require('express');
const User = require('../schemas/userSchema');

const router = express.Router();

// get all users
router.get('/', async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send({
      result: user,
      message: 'uses fetched successfully',
    });
  } catch (error) {
    res.status(500).json({ error: 'There was a server side error!' });
  }
});

// get user by id
router.get('/:id', async (req, res) => {
  try {
    const result = await User.findById({ _id: req.params.id });
    res.status(200).send({ data: result });
  } catch (error) {
    res.status(500).send({ error: 'There was a server side error!' });
  }
});

// post a user
router.post('/', async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(200).send('success');
  } catch (err) {
    res.status(500).json({ error: 'There was a server side error!' });
  }
});

// update a user
router.put('/:id', async (req, res) => {
  try {
    await User.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body });
    res.status(200).send('user updated successfully!');
  } catch (error) {
    res.status(500).send('There was a server side error!');
  }
});

// delete a user
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send('user deleted successfully!');
  } catch (error) {
    res.status(500).send('There was a server side error!');
  }
});

module.exports = router;

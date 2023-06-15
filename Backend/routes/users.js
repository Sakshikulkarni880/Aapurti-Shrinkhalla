const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for /api/users

// // GET /api/users
// router.get('/', (req, res) => {
//   res.send('This is the users route');
// });

// // POST /api/users
// router.post('/', (req, res) => {
//   res.send('Create a new user');
// });

// // PUT /api/users/:id
// router.put('/:id', (req, res) => {
//   res.send(`Update user with ID ${req.params.id}`);
// });

// // DELETE /api/users/:id
// router.delete('/:id', (req, res) => {
//   res.send(`Delete user with ID ${req.params.id}`);
// });


// Define routes for /api/users

// GET /api/users
router.get('/', userController.getUsers);

// GET /api/users/:id
router.get('/:id', userController.getUserById);

// POST /api/users
router.post('/', userController.createUser);

// PUT /api/users/:id
router.put('/:id', userController.updateUser);

// DELETE /api/users/:id
router.delete('/:id', userController.deleteUser);

module.exports = router;

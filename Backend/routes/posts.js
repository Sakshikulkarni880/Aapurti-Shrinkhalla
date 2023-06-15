// const express = require('express');
// const router = express.Router();
// const postController = require('../controllers/postController');

// // Define routes for /api/posts

// // GET /api/posts
// router.get('/', (req, res) => {
//   res.send('This is the posts route');
// });

// // POST /api/posts
// router.post('/', (req, res) => {
//   res.send('Create a new post');
// });

// // PUT /api/posts/:id
// router.put('/:id', (req, res) => {
//   res.send(`Update post with ID ${req.params.id}`);
// });

// // DELETE /api/posts/:id
// router.delete('/:id', (req, res) => {
//   res.send(`Delete post with ID ${req.params.id}`);
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define routes for /api/posts

// GET /api/posts
router.get('/', postController.getAllPosts);

// GET /api/posts/:id
router.get('/:id', postController.getPostById);

// POST /api/posts
router.post('/', postController.createPost);

// PUT /api/posts/:id
router.put('/:id', postController.updatePost);

// DELETE /api/posts/:id
router.delete('/:id', postController.deletePost);

module.exports = router;

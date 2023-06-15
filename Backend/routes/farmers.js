const express = require('express');
const router = express.Router();
const farmerController = require('../controllers/farmerController');

// // Define routes for /api/farmers

// // GET /api/farmers
// router.get('/', (req, res) => {
//   res.send('This is the farmers route');
// });

// // POST /api/farmers
// router.post('/', (req, res) => {
//   res.send('Create a new farmer');
// });

// // PUT /api/farmers/:id
// router.put('/:id', (req, res) => {
//   res.send(`Update farmer with ID ${req.params.id}`);
// });

// // DELETE /api/farmers/:id
// router.delete('/:id', (req, res) => {
//   res.send(`Delete farmer with ID ${req.params.id}`);
// });

// GET /api/farmers
router.get('/', farmerController.getFarmers);

// GET /api/farmers/:id
router.get('/:id', farmerController.getFarmerById);

// POST /api/farmers
router.post('/', farmerController.createFarmer);

// PUT /api/farmers/:id
router.put('/:id', farmerController.updateFarmer);

// DELETE /api/farmers/:id
router.delete('/:id', farmerController.deleteFarmer);

module.exports = router;

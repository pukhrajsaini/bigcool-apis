const express = require('express');
const router = express.Router();
const query = require('../controllers/queryController');

router.post('/', query.addQuery);
router.get('/', query.findAllQueries);
router.delete('/:id', query.deleteQuery);
router.patch('/:id',query.solvedQuery);

module.exports = router;
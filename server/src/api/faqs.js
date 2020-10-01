const express = require('express');
const monk = require('monk');


const db = monk(process.env.MONGODB_URI);
const faqs = db.get('faqs');

const router = express.Router();


//  Read All
router.get('/', (req, res, next) => {
    res.json({
        msg: 'Show All',
    });
});
//  Read One
router.get('/:id', (req, res, next) => {
    res.json({
        msg: 'Show One',
    });
});
//  Create
router.post('/', (req, res, next) => {
    res.json({
        msg: 'Create',
    });
});
//  Update
router.put('/:id', (req, res, next) => {
    res.json({
        msg: 'Update',
    });
});
//  Delete
router.delete('/:id', (req, res, next) => {
    res.json({
        msg: 'Delete',
    });
});
module.exports = router;
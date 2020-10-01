const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

const db = monk(process.env.MONGODB_URI);
const faqs = db.get('faqs');

const schema = Joi.object({
    question: Joi.string().trim().required(),
    answer: Joi.object().trim().required(),
    video_url: Joi.string().uri(),
});


const router = express.Router();


//  Read All
router.get('/', async (req, res, next) => {
    try {
        const items = faqs.find({});
        res.json(items);

    } catch (error) {
        next(error);
    }
});
//  Read One
router.get('/:id', (req, res, next) => {
    res.json({
        msg: 'Show One',
    });
});
//  Create
router.post('/', async (req, res, next) => {
    try {


    } catch (error) {

    }
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
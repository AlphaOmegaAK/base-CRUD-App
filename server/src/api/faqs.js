const express = require('express');
const monk = require('monk');
const Joi = require('@hapi/joi');

const db = monk(process.env.MONGODB_URI);
const faqs = db.get('faqs');

const schema = Joi.object({
    question: Joi.string().required(),
    answer: Joi.string().required(),
    video_url: Joi.string().uri(),
});

const router = express.Router();

//  Read All
router.get('/', async (req, res, next) => {
    try {
        const items = faqs.find({});



    } catch (error) {
        next(error);
    }
});

//  Read One
router.get('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const item = await faqs.findOne({
            _id: id,

        });
        if (!item) {
            return next()
        };
        return res.json(item);
    } catch (error) {
        next(error)
    }
});

//  Create
router.post('/', async (req, res, next) => {
    try {

        console.log(req.body);
        const value = await schema.validateAsync(req.body);
        const insert = await faqs.insert(value);
        res.json(insert);

    } catch (error) {
        next(error);
    }
});

//  Update
router.put('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const value = await schema.validateAsync(req.body);
        const item = await faqs.findOne({
            _id: id,
        });
        if (!item) return next();
        await faqs.update({
            _id: id,
        }, {
            $set: value
        });
        res.json(value);
    } catch (error) {
        next(error)
    }
});

//  Delete
router.delete('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
    await faqs.remove({
            _id: id
        });
        res.status(200).send('Deleted Successfully');
    } catch (error) {
        next(error)
    }
});

module.exports = router;
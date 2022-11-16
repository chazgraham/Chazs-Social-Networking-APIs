const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtsById,
    addThoughts,
    updateThoughts,
    removeThoughts,
    addReactions,
    removeReactions
} = require('../../controllers/thoughts-controller');

router.route('/')
    .get(getAllThoughts);

router.route('/:id')
    .get(getThoughtsById)
    .put(updateThoughts)

router.route('/:userId').post(addThoughts);

router.route('/:userId/:thoughtId')
    .put(addReactions)
    .delete(removeThoughts)

router.route('/:userId/:thoughtId/:reactionId').delete(removeReactions)

module.exports = router;
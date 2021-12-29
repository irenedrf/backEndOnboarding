const router = require('express').Router();
const { getAllVideos } = require('../../models/video')

router.get('/', async (req, res) => {
    try {
        const rows = await getAllVideos();
        res.json(rows);
    } catch (error) {
        res.json({ error: error.message })
    }
});

module.exports = router;
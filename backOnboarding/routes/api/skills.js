const router = require('express').Router();
const { getAllSkills } = require('../../models/skill')

router.get('/', async (req, res) => {
    try {
        const rows = await getAllSkills();
        res.json(rows);
    } catch (error) {
        res.json({ error: error.message })
    }
});

module.exports = router;
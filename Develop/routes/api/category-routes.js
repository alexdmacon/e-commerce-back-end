const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findall({
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err)
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new category
});


// NEED TO COME BACK TO THIS BECASUE I'M NOT REALLY SURE WHAT I'M DOING
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { userInput } = req.body;
  try {
  const categoryData = await Category.findOne({where: { id }})
  categoryData.userInput = userInput;
  await categoryData.save();
  } catch (err) {
    res.status(400).json(err);
  }
  // update a category by its `id` value

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;

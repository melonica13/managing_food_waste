const Dish = require('../models/Dish');

exports.getDishes = async (req, res) => {
  try {
    const dishes = await Dish.getAll();
    res.json(dishes);
  } catch (error) {
    console.error('Error fetching dishes:', error);
    res.status(500).json({ message: 'Error fetching dishes', error: error.message });
  }
};

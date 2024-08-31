const db = require('../config/db');

class Dish {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM dishes');
    return rows;
  }
}

module.exports = Dish;

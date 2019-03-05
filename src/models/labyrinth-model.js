const mongoose = require('mongoose');

const labyrinthSchema = new mongoose.Schema({
  playfield: [
    {
      x: Number,
      y: Number,
      type: {
        type: String
      }
    }
  ],
  start: {
    x: Number,
    y: Number
  },
  end: {
    x: Number,
    y: Number
  }
});

module.exports = mongoose.model('Labyrinth', labyrinthSchema);

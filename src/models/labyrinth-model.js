const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const labyrinthSchema = new mongoose.Schema({
  owner: ObjectId,
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

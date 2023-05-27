const mongoose = require("mongoose");
const { Schema, model, SchemaTypes } = mongoose;

const userStatusSchema = new Schema({
  level: {
    type: Number,
    required: true,
  },
  exp: {
    type: Number,
    require: true,
  },
  requireExp: {
    type: Number,
    require: true,
  },
  hp: {
    type: Number,
    required: true,
  },
  maxmumHp: {
    type: Number,
    required: true,
  },
  at: {
    type: Number,
    required: true,
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    require: true,
  },
});

module.exports = model("Status", userStatusSchema);

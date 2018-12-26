const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    level: Number,
    nickname: {
        type: String,
        unique: true
    },
    class_name: String
})

const itemModel = mongoose.model('items', itemSchema);
module.exports = itemModel;
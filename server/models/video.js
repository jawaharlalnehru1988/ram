const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const videoSchema = new Schema({
    id: Number,
    name: String,
    youLink: String,
    title: String,
    timing: String,
    detail: String
});

module.exports = mongoose.model('video', videoSchema, 'videos');
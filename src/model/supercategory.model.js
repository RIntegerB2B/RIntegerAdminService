var mongoose = require('mongoose');
var MainCategory = require('./mainCategory.model');

const SuperCategorySchema = new mongoose.Schema({
    
    categoryName: String,
    mainCategory:[MainCategory]
});

const Category = mongoose.model('portfoliomenu', SuperCategorySchema);
module.exports = Category;



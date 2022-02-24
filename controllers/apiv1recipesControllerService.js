'use strict'

module.exports.getRecipes = function getRecipes(req, res, next) {
  res.send([
    {
    recipeId: 'g',
    description : 'blabla',
    ingredients: 'blablabla',
    complexity: 2
    }
  ]);
};

module.exports.addRecipe = function addRecipe(req, res, next) {
  res.send({
    message: 'This is the mockup controller for addRecipe'
  });
};
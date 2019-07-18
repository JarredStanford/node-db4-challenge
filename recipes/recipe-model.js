const db = require('../data/db-config.js')

module.exports = {
    getRecipes,
    getShoppingList
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipes as r')
        .innerJoin('recipe_details as rd', 'r.id', 'rd.recipe_id')
        .innerJoin('ingredients as i')
        .where({ recipe_id })
        .select('rd.ingredient_id', 'rd.ingredient_quantity')
}
/*getRecipes(): should return a list of all recipes in the database.
getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe*/
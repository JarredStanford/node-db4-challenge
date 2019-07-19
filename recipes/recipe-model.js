const db = require('../data/db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getCommonRecipes
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipes as r')
        .innerJoin('recipe_details as rd', 'r.id', 'rd.recipe_id')
        .innerJoin('ingredients as i', 'rd.ingredient_id', 'i.id')
        .where({ recipe_id })
        .select('rd.ingredient_quantity as Quantity', 'i.ingredient_name as Ingredient')
}

function getInstructions(recipe_id) {
    return db('recipes as r')
        .innerJoin('steps as s', 'r.id', 's.recipe_id')
        .where({ recipe_id })
        .select('r.recipe_name', 's.step_number', 's.description')
}

function getCommonRecipes(ingredient_id) {
    return db('recipe_details as rd')
        .innerJoin('ingredients as i', 'rd.ingredient_id', 'i.id')
        .where({ ingredient_id })
}

/*getRecipes(): should return a list of all recipes in the database.
getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe*/
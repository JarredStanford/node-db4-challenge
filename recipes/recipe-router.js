const express = require('express')

const Recipes = require('./recipe-model.js')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json({
            message: "There was an error getting the recipes."
        })
    }
})

router.get('/:id/shoppinglist', async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const list = await Recipes.getShoppingList(id);
        res.status(200).json(list)
    } catch (err) {
        res.status(500).json({
            message: "There was an error creating the shopping list."
        })
    }
})

router.get('/:id/instructions', async (req, res) => {
    try {
        const { id } = req.params
        const steps = await Recipes.getInstructions(id)
        res.status(200).json(steps)
    } catch (err) {
        res.status(500).json({
            message: "There was an error getting the instructions."
        })
    }
})

router.get('/ingredients/:id/recipes', async (req, res) => {
    try {
        const { id } = req.params
        const recipeList = await Recipes.getCommonRecipes(id)
        res.status(200).json(recipeList)
    } catch (err) {
        res.status(500).json({
            message: "There was an error retrieving the list."
        })
    }
})

module.exports = router
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
        console.log(list)
        res.status(200).json(list)
    } catch (err) {
        res.status(500).json({
            message: "There was an error creating the shopping list."
        })
    }
})

module.exports = router
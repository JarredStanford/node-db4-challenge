exports.seed = function (knex) {
  return knex('recipe_details').truncate().then(() => {
    return knex('recipe_details').insert([
      { ingredient_quantity: '1 Cup', ingredient_id: 1, recipe_id: 1 },
      { ingredient_quantity: '1 tsp.', ingredient_id: 2, recipe_id: 1 },
      { ingredient_quantity: '1/2 Cup', ingredient_id: 3, recipe_id: 1 },
      { ingredient_quantity: '1/2 Cup', ingredient_id: 4, recipe_id: 1 },
      { ingredient_quantity: '1 Lb', ingredient_id: 5, recipe_id: 1 },
      { ingredient_quantity: '1 Cup', ingredient_id: 6, recipe_id: 2 },
      { ingredient_quantity: '1', ingredient_id: 7, recipe_id: 2 },
      { ingredient_quantity: '1 Cup', ingredient_id: 8, recipe_id: 2 },
      { ingredient_quantity: '1 Oz', ingredient_id: 9, recipe_id: 2 },
      { ingredient_quantity: '4 Oz', ingredient_id: 10, recipe_id: 2 },
      { ingredient_quantity: 'Varies', ingredient_id: 11, recipe_id: 2 },
      { ingredient_quantity: 'A Pinch', ingredient_id: 2, recipe_id: 2 }
    ])
  })
}
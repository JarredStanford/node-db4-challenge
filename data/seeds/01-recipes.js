
exports.seed = function (knex) {
  return knex('recipes').insert([
    { recipe_name: 'Nana\'s Pizza' },
    { recipe_name: 'Dank Vegan Burrito' }
  ])
}
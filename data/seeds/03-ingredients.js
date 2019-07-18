exports.seed = function (knex) {
  return knex('ingredients').insert([
    { ingredient_name: "Flour" },
    { ingredient_name: "Salt" },
    { ingredient_name: "Water" },
    { ingredient_name: "Oil" },
    { ingredient_name: "Mozzarella Cheese" },
    { ingredient_name: "Black Beans" },
    { ingredient_name: "Tortilla" },
    { ingredient_name: "Brown Rice" },
    { ingredient_name: "Vegan Cheese" },
    { ingredient_name: "Beyond Meat" },
    { ingredient_name: "Spices of Your Choice" }
  ])
}
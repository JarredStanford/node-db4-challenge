exports.seed = function (knex) {
  return knex('steps').insert([
    { step_number: 1, description: "Spread dough on pan.", recipe_id: 1 },
    { step_number: 2, description: "Put on toppings on dough.", recipe_id: 1 },
    { step_number: 3, description: "Bake Pizza @ 450F for 15 Min.", recipe_id: 1 },
    { step_number: 1, description: "Make Rice and Beans and Beyond Meat", recipe_id: 2 },
    { step_number: 2, description: "Wrap in tortilla with vegan cheese, veggies, spices. ", recipe_id: 2 }
  ])
}
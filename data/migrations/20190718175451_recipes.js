
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.text('recipe_name', 128)
                .unique()
                .notNullable()
        })

        .createTable('steps', tbl => {
            tbl.increments();
            tbl.integer('step_number')
                .unsigned()
                .notNullable();
            tbl.text('description')
                .notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })

        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.text('ingredient_name')
                .notNullable()
                .unique()
        })

        .createTable('recipe_details', tbl => {
            tbl.increments()
            tbl.text('ingredient_quantity')
                .notNullable()
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipe_details')
};

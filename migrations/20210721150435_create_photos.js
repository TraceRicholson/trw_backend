
  exports.up = function(knex) {
    return knex.schema.createTable('photos', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('title').notNullable();+
      table.string('category');
      table.string('description', 2000);
      table.string('metadata', 2000);
      table.string('image_url', 1000)
    });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('photos');
  };






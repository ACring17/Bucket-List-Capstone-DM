const sequelize = require('../server/db');

async function createDatabaseSchema(req, res) {
    try {
        await sequelize.query(`
    drop table if exists bucket_list;
    create table bucket_list (
      id serial primary key,
      value text,
      is_achieved boolean,
      user_id integer
    );
  `);

        res.sendStatus(200);
    } catch (error) {
        console.log(error);

        res.sendStatus(500);
    }
}

module.exports = { createDatabaseSchema };
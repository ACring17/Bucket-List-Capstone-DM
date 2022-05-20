const sequelize = require('../utils/db');

async function createDatabaseSchema(req, res) {
    try {
        await sequelize.query(`
    drop table if exists users;
    drop table if exists characters;
    create table Bucket List (
      id integer primary key,
      Value text,
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

module.exports = {
    createDatabaseSchema,
};
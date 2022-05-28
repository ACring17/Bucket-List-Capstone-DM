const { DATABASE_URL } = process.env.CONNECTION_STRING;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

module.exports = sequelize;
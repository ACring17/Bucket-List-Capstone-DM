const sequelize = require('../utils/db');

async function getBucketList(req, res) {
    const userID = req.session.user.id;

    try {
        const [result] = await sequelize.query(`
        select * from characters where user_id = ${userID}
      `);

        res.status(200).send(result);
    } catch (error) {
        const user = req.session.user; // This information is here because I added to the session in my auth.controller.js

        rollbar.error(error, {
            user: user,
        });

        res.sendStatus(500);
    }
}

async function handleListMutations(req, res) {
    const { bucketListItems } = req.body;
    const userID = req.session.user.id;

    if (_method === 'post') {
        await sequelize.query(`
      insert into bucketList ( bucketListItems) values ('${bucketListItems});
    `);
    } else if (_method === 'patch') {
        await sequelize.query(`
      update list set bucketList = ${bucketListItems};
    `);
    } else if (_method === 'delete') {
        await sequelize.query(`
        delete list item bucketlist = ${bucketListItems}`)
    }

    res.redirect('/bucketList');
}

module.exports = {
    getBucketList,
    createList: handlelistMutations,
};
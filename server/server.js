require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require("cors");
const { createDatabaseSchema } = require('./seed.controller');
const app = express()


app.use(express.json());
app.use(cors());
app.get("/seed", createDatabaseSchema)

// GET API methods
app.get("/api/bucketList", async(req, res) => {
    const [usersBucketList] = await sequelize.query('select * from bucket_list where is_achieved = false');
    console.log(usersBucketList)
    if (usersBucketList.length) {
        res.status(200).send(usersBucketList);
        return
    }
    res.status(200).send([])
});

app.get("/api/achievementList", async(req, res) => {
    const [usersAchievementList] = await sequelize.query('select * from bucket_list where is_achieved = true');
    console.log(usersAchievementList)
    res.status(200).send(usersAchievementList);

});


// Post API methods
app.post("/api/bucketList", (req, res) => {
    // Code to post goals to bucket list
    const { bucketListGoals } = req.body;
    if (!bucketListGoals) {
        res.status(400).send("Looks like you forgot to type in a goal. What would you like to acheieve?")
    } else {
        const usersAchievementList = sequelize.query(`insert into bucket_list (is_achieved, value, user_id) values (false, '${bucketListGoals}', 1)`);
        res.status(200).send([]) 
    }
})

// Put method -- updating bucklist item to achievement list item
app.put("/api/bucketList/:id", async(req, res) => {
    // Code to move from bucket list to acheivement list
    const { id } = req.params;
    const movedToAchieve = await sequelize.query(`update bucket_list set is_achieved = true where id = ${id}`);
    res.status(200).send([]); 

})


// Delete API methods
app.delete("/api/bucketList/:id", async(req, res) => {
    // code to delete bucket list goal off list
    const { id } = req.params;
    const deleteFromList = await sequelize.query(`delete from bucket_list where id = ${id}`);
    console.log(deleteFromList, 'hit')
    res.status(200).send([]); 
})

app.delete("/api/achievementList/:id", async(req, res) => {
    // code to remove achievement off list
    const { id } = req.params;
    const deleteFromList = await sequelize.query(`delete from bucket_list where id = ${id}`);
    res.status(200).send([]); 
})

app.listen(process.env.SERVER_PORT, () => console.log(`Server running on ${process.env.SERVER_PORT}`))

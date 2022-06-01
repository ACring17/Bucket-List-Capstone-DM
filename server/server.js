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
    const [usersBucketList] = await sequelize.query('select value from bucket_list');
    console.log(usersBucketList)
    res.status(200).send(usersBucketList);

});

app.get("/api/achievementList", async(req, res) => {
    const [usersAchievementList] = await sequelize.query('select is_achieved from bucket_list');
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
        res.status(200).send([]) //Do I need a function to add to db?
    }
})

app.put("/api/achievementList/:id", (req, res) => {
    // Code to move from bucket list to acheivement list
    const { id } = req.params;
    const achievementListGoals = req.body;
    sequelize.query(`update into bucket_list (is_achieved, user_id) values (true, '${id})`);
    res.status(200).send([]);
    // How do I get it to change boolean in the DB?
})


// Delete API methods
app.delete("/api/bucketList/:bucketListGoals", (req, res) => {
    // code to delete bucket list goal off list
    let existingBucketList = req.params.bucketListGoals;
    let deleteBucketListGoal = req.body.bucketListGoals;
    bucketListTable.splice(deleteBucketListGoal, 1);
    bucketListTable.delete(existingBucketList); //Seems redundant
    res.status(200).send(bucketListTable);
})

app.delete("/api/achevementList/:achievementListGoals", (req, res) => {
    // code to remove achievement off list
    let existingBucketList = req.params.bucketListGoals;
    let deleteBucketListGoal = req.body.bucketListGoals;
    bucketListTable.splice(deleteBucketListGoal, 1);
    bucketListTable.delete(existingBucketList); //Seems redundant
    res.status(200).send(bucketListTable);
})

app.listen(process.env.SERVER_PORT, () => console.log(`Server running on ${process.env.SERVER_PORT}`))

// // PUT API methods
// app.put("/api/bucketList/:bucketListGoals", (req, res) => {
//     // code to edit goals on bucket list
//     let existingBucketList = req.params.bucketListGoals; //Need to change this so it goes to the DB
//     let newBucketListGoal = req.body.bucketListGoals;
//     bucketListTable.push(newBucketListGoal);
//     bucketListTable.delete(existingBucketList);
//     res.status(200).send(bucketListTable); //
// })

// app.put("/api/achievementList/:achievementListGoals", (req, res) => {
//     // code to edit achievement list
//     let existingAchievementList = req.params.achievementListGoals;
//     let newAchievementListGoal = req.body.bucketListGoals;
//     bucketListTable.push(newAchievementListGoal);
//     bucketListTable.delete(existingAchievementList);
//     res.status(200).send(bucketListTable); //
// })
// For id login look at backend video 1 at 1:45 mark
require('dotenv').config();
const express = require('express');

const app = express()


app.use(express.json());


// GET API methods
app.get("/api/bucketList", (req, res) => {
    const usersBucketList = DATABASE_URL;
    res.status(200).send(usersBucketList);

});

app.get("/api/achievementList", (req, res) => {
    const usersAchievementList = DATABASE_URL;
    res.status(200).send(usersAchievementList);

});


// Post API methods
app.post("api/bucketList", (req, res) => {
    // Code to post goals to bucket list
    const { bucketListGoals } = req.body;
    if (!bucketListGoals) {
        res.status(400).send("Looks like you forgot to type in a goal. What would you like to acheieve?")
    } else {
        bucketListTable.push(req.body);
        res.status(200).send(bucketListTable)
    }
})

app.post("api/achievementList", (req, res) => {
    // Code to move from bucket list to acheivement list
    const achievementListGoals = req.body;
    bucketListTable.push(achievementListGoals);
    res.status(200).send(bucketListTable.achievementListGoals)
        // Does this work as I intend it to?
})

// PUT API methods
app.put("api/bucketList/:bucketListGoals", (req, res) => {
    // code to edit goals on bucket list
    let existingBucketList = req.params.bucketListGoals;
    let newBucketListGoal = req.body.bucketListGoals;
    bucketListTable.push(newBucketListGoal);
    bucketListTable.delete(existingBucketList);
    res.status(200).send(bucketListTable); //
})

app.put("api/achievementList/:achievementListGoals", (req, res) => {
    // code to edit achievement list
    let existingAchievementList = req.params.achievementListGoals;
    let newAchievementListGoal = req.body.bucketListGoals;
    bucketListTable.push(newAchievementListGoal);
    bucketListTable.delete(existingAchievementList);
    res.status(200).send(bucketListTable); //
})

// Delete API methods
app.delete("api/bucketList/:bucketListGoals", (req, res) => {
    // code to delete bucket list goal off list
    let existingBucketList = req.params.bucketListGoals;
    let deleteBucketListGoal = req.body.bucketListGoals;
    bucketListTable.splice(deleteBucketListGoal, 1);
    bucketListTable.delete(existingBucketList); //Seems redundant
    res.status(200).send(bucketListTable);
})

app.delete("api/achevementList/:achievementListGoals", (req, res) => {
    // code to remove achievement off list
    let existingBucketList = req.params.bucketListGoals;
    let deleteBucketListGoal = req.body.bucketListGoals;
    bucketListTable.splice(deleteBucketListGoal, 1);
    bucketListTable.delete(existingBucketList); //Seems redundant
    res.status(200).send(bucketListTable);
})

app.listen(process.env.SERVER_PORT, () => console.log(`Server running on ${process.env.SERVER_PORT}`))

// For id login look at backend video 1 at 1:45 mark
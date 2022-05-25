const express = require('express')

const app = express()

app.use(express.json())


// bucketListTable = database

// GET API methods
app.get("/api/bucketList", (req, res) => {
    const usersBucketList = //Where the bucket list items are stored in the DB
        res.status(200).send(usersBucketList);

});

app.get("/api/achievementList", (req, res) => {
    const usersAchievementList = //Where the achievement list items are stored in the DB
        res.status(200).send(usersAchievementList);

});


// Post API methods
app.post("api/bucketList", (req, res) => {
    // Code to post goals to bucket list
    const bucketListGoals = req.body;
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
app.put("api/bucketList", (req, res) => {
    // code to edit goals on bucket list
})

app.put("api/achievementList", (req, res) => {
    // code to edit achievement list 
})

// Delete API methods
app.delete("api/bucketList", (req, res) => {
    // code to delete bucket list goal off list
})

app.delete("api/achevementList", (req, res) => {
    // code to remove achievement off list

})

app.listen(4040, () => console.log('Server running on 4040'))

// For id login look at backend video 1 at 1:45 mark
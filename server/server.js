const express = require('express')

const app = express()

app.use(express.json())

app.get("/api/bucketList", (req, res) => {
    const usersBucketList = //Where the bucket list items are stored in the DB
        res.status(200).send(usersBucketList);

});

app.get("/api/achievementList", (req, res) => {
    const usersAchievementList = //Where the achievement list items are stored in the DB
        res.status(200).send(usersAchievementList);

});


app.listen(4040, () => console.log('Server running on 4040'))
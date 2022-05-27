const { createElement } = require("react/cjs/react.production.min")

// Post methods
document.getElementById('submitBtn').onclick = function(event) {
    event.preventDefault()
    const addBucket = document.getElementById("addBucket")
    console.log(addBucket.value)
    const goals = { DataBaseName: addBucket.value }
    axios.post('http://localhost:4040/api/bucketList', goals).then(res => {
            console.log(res.data)
        }) //Will need to change DataBaseName to whatever I need to connnect to heroku. Not sure if I need the console.log
}


// Code to display lists-Get requests
document.getElementById("bucket-list").onclick = function() {
    axios.get("http://localhost:4040/api/bucketList/")
        .then(function(response) {
            const data = response.data;
            const listItems = document.createElement("ul");
            data.appendChild(listItems);
            document.body.append("bucket-list");
        });
};

document.getElementById("achievement-list").onclick = function() {
    axios.get("http://localhost:4040/api/achievementList/")
        .then(function(response) {
            const data = response.data;
            const listItems = document.createElement("ul");
            data.appendChild(listItems);
            document.body.append("achievment-list");
        });
};

// Code to hide buttons until list items are added

// code to have the buttons appear for each list item

// code to move list items from bucket list to achieved list

// document.getElementById("complimentButton").onclick = function() {
//     axios.get("http://localhost:4000/api/compliment/")
//         .then(function(response) {
//             const data = response.data;
//             alert(data);
//         });
// };
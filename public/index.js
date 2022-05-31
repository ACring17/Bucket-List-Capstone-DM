// Post method for bucket list
document.getElementById('submitBtn').onclick = function(event) {
    event.preventDefault()
    const addBucket = document.getElementById("addBucket")
    console.log(addBucket.value)
    const goals = { bucketListGoals: addBucket.value }
    axios.post('http://localhost:4040/api/bucketList', goals).then(res => {
        console.log(res.data)
    })
}

// Get requests
const bucketList = document.getElementById("bucket-list")

function getBucketList() {
    axios.get("http://localhost:4040/api/bucketList/")
        .then(function(response) {
            const data = response.data;
            const lis = data.map(d => {
                const li = document.createElement("li")
                li.innerText = d.value
                    // const edit = document.createElement("button")
                    // edit.setAttribute("id", "edit")
                    // edit.textContent = "Edit"
                const deletebtn = document.createElement("button")
                deletebtn.setAttribute("id", "deletebtn")
                deletebtn.textContent = "Delete"
                const achieved = document.createElement("button")
                achieved.setAttribute("id", "achieved")
                achieved.textContent = ("Achieved")

                bucketList.appendChild(li);
                // bucketList.appendChild(edit)
                bucketList.appendChild(deletebtn)
                bucketList.appendChild(achieved)
            });
        });
};
getBucketList()

const achievementList = document.getElementById("achievement-list")

function getAchievementList() {
    axios.get("http://localhost:4040/api/bucketList/")
        .then(function(response) {
            const data = response.data;
            const lis = data.map(d => {
                const li = document.createElement("li")
                li.innerText = d.value
                const deletebtn = document.createElement("button")
                deletebtn.setAttribute("id", "deletebtn")
                deletebtn.textContent = "Delete"

                bucketList.appendChild(li);
                bucketList.appendChild(deletebtn)
            });
        });
};
// getAchievementList()     Think of how to call this so it shows on the achievement page.

// Put methods - Basic structure for now
// document.getElementById("edit").onclick = function() {
//     axios.put("http://localhost:4040/api/bucketList/")
//         .then(function(response) {
//             const data = response.data; //How do I link to data base? sequalize?
//             const listItems = document.createElement("ul"); //Create li for the bucket list
//             data.appendChild(listItems);
//             document.body.append("bucket-list");
//         });
// };

// document.getElementById("edit").onclick = function() {
//     axios.put("http://localhost:4040/api/achievementList/")
//         .then(function(response) {
//             const data = response.data;
//             const listItems = document.createElement("ul");
//             data.appendChild(listItems);
//             document.body.append("bucket-list");
//         }); //Will need to think of way to move ul item into achievement list
// };

// Delete method
document.getElementById("delete").onclick = function() {
    axios.delete("http://localhost:4040/api/bucketList/")
        .then(function(response) {
            const data = response.data;
            data.body; //Does not see right. Trying to display updated list after deleting. 
        });
};

document.getElementById("delete").onclick = function() {
    axios.delete("http://localhost:4040/api/achievementList/")
        .then(function(response) {
            const data = response.data;
            data.body; //Does not see right. Trying to display updated list after deleting. 
        });
};

// Code to hide buttons until list items are added
// function () = hide element by ID 
// When ! ID 
//   Hide element 
// diplay eleent
// document.getElementsByClassName("list-button")

// code to have the buttons appear for each list item
// for each ul element (ul)
//    display element by (bttn)

// code to move list items from bucket list to achieved list
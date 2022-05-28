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
                    // li.appendChild(button) //Where the buttons will go so they appear with each li
                    // li.appendChild(document.createElementBy("button"))
                    // li.appendChild(document.createElementBy("button"))
                bucketList.appendChild(li);
            });
        });
};
getBucketList()

document.getElementById("achievement-list") = function() {
    axios.get("http://localhost:4040/api/achievementList/")
        .then(function(response) {
            const data = response.data;
            const listItems = document.createElement("ul");
            data.appendChild(listItems);
            document.body.append("achievment-list");
        });
};

// Put methods - Basic structure for now
document.getElementById("edit").onclick = function() {
    axios.put("http://localhost:4040/api/bucketList/")
        .then(function(response) {
            const data = response.data; //How do I link to data base? sequalize?
            const listItems = document.createElement("ul"); //Create li for the bucket list
            data.appendChild(listItems);
            document.body.append("bucket-list");
        });
};

document.getElementById("edit").onclick = function() {
    axios.put("http://localhost:4040/api/achievementList/")
        .then(function(response) {
            const data = response.data;
            const listItems = document.createElement("ul");
            data.appendChild(listItems);
            document.body.append("bucket-list");
        }); //Will need to think of way to move ul item into achievement list
};

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
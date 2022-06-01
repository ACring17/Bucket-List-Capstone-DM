// Post method for adding to bucket list
document.getElementById('submitBtn').onclick = function(event) {
    event.preventDefault()
    const addBucket = document.getElementById("addBucket")
    console.log(addBucket.value)
    const goals = { bucketListGoals: addBucket.value }
    axios.post('http://localhost:4040/api/bucketList', goals).then(res => {
        console.log(res.data)
    })
}

// Get requests to show user their lists
const bucketList = document.getElementById("bucket-list")

function getBucketList() {
    axios.get("http://localhost:4040/api/bucketList/")
        .then(function(response) {
            const data = response.data;
            const lis = data.map(d => {
                    const li = document.createElement("li")
                    li.innerText = d.value
                    const deletebtn = document.createElement("button")
                    deletebtn.setAttribute("id", "deletebtn")
                    deletebtn.textContent = "Delete"
                    const achieved = document.createElement("button")
                    achieved.setAttribute("id", "achieved")
                    achieved.textContent = ("Achieved")

                    bucketList.appendChild(li);
                    bucketList.appendChild(deletebtn)
                    bucketList.appendChild(achieved)
                })
                // Delete method -- For removing items off lists
            document.getElementById('deletebtn').onclick = function(event) {
                event.preventDefault()
                const deletebtn = document.getElementById("deletebtn")
                axios.delete('http://localhost:4040/api/bucketList').then(res => {
                    console.log(res.data)
                })
            };
        })
};

getBucketList()
// Post method for adding to bucket list
document.getElementById('submitBtn').onclick = function(event) {
    event.preventDefault()
    const addBucket = document.getElementById("addBucket")
    console.log(addBucket.value)
    const goals = { bucketListGoals: addBucket.value }
    axios.post('http://localhost:4040/api/bucketList', goals).then(res => {
        console.log(res.data)
        getBucketList()
    })
}

// Get requests to show user their lists
const bucketList = document.getElementById("bucket-list")

function getBucketList() {
    axios.get("http://localhost:4040/api/bucketList/")
        .then(function(response) {
            const data = response.data;
            bucketList.innerHTML = ''
            const lis = data.map(d => {
                const li = document.createElement("li")
                li.innerText = d.value
                const deletebtn = document.createElement("button")
                deletebtn.setAttribute("id", "deletebtn")
                deletebtn.textContent = "Delete"
                const achieved = document.createElement("button")
                achieved.setAttribute("id", "achieved")
                achieved.textContent = ("Achieved")
                deletebtn.bucketListID = d.id;
                achieved.bucketListID = d.id;
                bucketList.appendChild(li);
                bucketList.appendChild(deletebtn)
                bucketList.appendChild(achieved)
                    // Put Method -- Moving goal from bucket list to Achieved list
                document.getElementById('achieved').onclick = function(event) {
                        event.preventDefault()
                        const achieved = document.getElementById("achieved")
                        const goals = { bucketList: achieved.value }
                        axios.put(`http://localhost:4040/api/bucketList/${event.target.bucketListID}`, goals).then(res => {
                            console.log(res.data)
                            getBucketList()
                        })
                    }
                    // Delete method -- For removing items off lists  ---Need to make sure the end points are correct. Right function?
                document.getElementById('deletebtn').onclick = function(event) {
                    event.preventDefault()
                    console.log(event)
                    axios.delete(`http://localhost:4040/api/bucketList/${event.target.bucketListID}`).then(res => {
                        console.log(res.data)
                        getBucketList();
                    })
                };
            })
        })
};

getBucketList()
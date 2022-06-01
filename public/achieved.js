const achievementList = document.getElementById("achievement-list")
console.log(achievementList)

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

                achievementList.appendChild(li);
                achievementList.appendChild(deletebtn)
                    // Put Method -- Moving goal from bucket list to Achieved list
                document.getElementById('achieved').onclick = function(event) {
                        event.preventDefault()
                        const achieved = document.getElementById("achieved")
                        console.log(achieved.value)
                        const goals = { bucketListGoals: achieved.value }
                        axios.post('http://localhost:4040/api/bucketList', goals).then(res => {
                            console.log(res.data)
                        })
                    }
                    // Delete method -- For removing items off lists
                document.getElementById('deleteBtn').onclick = function(event) {
                    event.preventDefault()
                    const deletebtn = document.getElementById("deletebtn")
                    console.log(deletebtn.value)
                    const goals = { bucketListGoals: deletebtn.value }
                    axios.delete('http://localhost:4040/api/bucketList', goals).then(res => {
                        console.log(res.data)
                    })
                }
            });
        });
};
getAchievementList() //Think of how to call this so it shows on the achievement page.
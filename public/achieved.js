const achievementList = document.getElementById("achievement-list")
console.log(achievementList)

function getAchievementList() {
    axios.get("http://localhost:4040/api/achievementList/")
        .then(function(response) {
            const data = response.data;
            achievementList.innerHTML = ''
            const lis = data.map(d => {
                const li = document.createElement("li")
                li.innerText = d.value
                const deletebtn = document.createElement("button")
                deletebtn.setAttribute("id", "deletebtn")
                deletebtn.textContent = "Delete"
                deletebtn.bucketListID = d.id;
                achievementList.appendChild(li);
                achievementList.appendChild(deletebtn)
                    // Delete method -- For removing items off list
                document.getElementById('deletebtn').onclick = function(event) {
                    event.preventDefault()
                    axios.delete(`http://localhost:4040/api/achievementList/${event.target.bucketListID}`).then(res => {
                        console.log(res.data)
                        getAchievementList();
                    })
                }
            });
        });
};
getAchievementList()
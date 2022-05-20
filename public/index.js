const addBucket = document.getElementById("#addBucket")

function showUnexpectedErrorAlert() {
    alert('Sorry, an unexpected error occurred. Please try again later!');
}

async function getCharacters() {
    try {
        const res = await axios.get('/api/characters');

        renderCharacters(res.data);
    } catch (error) {
        showUnexpectedErrorAlert();
    }
}

function renderBucketList() {
    const bucketListContainer = document.getElementById('#bucket-list-container');

    for (const items of items) {
        const li = document.createElement('li');
        li.addEventListener('dblclick', () => {
            const nameInput = document.getElementsByName('name')[0];


            nameInput.value = character.name;
            levelInput.value = character.level;
            methodInput.value = 'patch';
            idInput.value = character.id;
            button.innerText = 'Update Character';
        });

        bucketListContainer.appendChild(li);
    }
}

// document.getElementById("complimentButton").onclick = function() {
//     axios.get("http://localhost:4000/api/compliment/")
//         .then(function(response) {
//             const data = response.data;
//             alert(data);
//         });
// };
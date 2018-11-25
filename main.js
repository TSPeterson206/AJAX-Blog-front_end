// DECLARED VARIABLES
const createButton = document.querySelector('.entryForm');
const updateButton = document.querySelector('.updateButton');
const removeButton = document.querySelector('.removeButton');
const display = document.querySelector('.bodyMain')
const index = document.querySelector('.postIndex')
const entryForm = document.querySelector(".entryForm")

// GET THE DATA
// axios.get('http://localhost:5000/blogs')
//     .then(result => {
//         return result.data
//     })

// POPULATE POST LIST
function init() {
    axios.get('http://localhost:5000/blogs')
        .then(response => {
            const list = document.querySelector('.postIndexList')

            list.innerHTML = response.data.data.map(ele => `<li>${ele.content}`).join('\n')

        })
}

// CREATE UPDATE AND REMOVE BUTTONS
entryForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const content = "hello world"

    axios.post('http://localhost:5000/blogs', {
            content,
        })
        .then(response => {
            init()
        })
})

// updateButton.addEventListener('click', function () {
//     axios.put('http://localhost:5000/blogs/:id')
// })

// removeButton.addEventListener('click', function () {
//     axios.delete('http://localhost:5000/blogs/:id')
// })



// axios.post('http://localhost:5000/blogs', {
//         id: uuid(),
//         title: createFormPostTitle.value,
//         body: createFormPostBody.value
//     })
//     .then((response) => {
//         display.innerHTML = response.data
//     })
//     .catch(error => {
//         error.response = "Please complete all fields!"
//         display.innerHTML = error.response
//     })











//   .addEventListener('click', function () {
//     const entryForm =
//         `<form>
// <label for="title">Post Title</label>
// <input id="title" class="newPostTitle" type="text"></input><br>
// <label for="body">Post Body</label>
// <input id="body" class="newPostBody" type="text"></input>
// <button type="button" class="createFormButton">Publish</button>
// </form>`

//     display.innerHTML = entryForm;

//     const createFormPostTitle = document.querySelector('.newPostTitle')
//     const createFormPostBody = document.querySelector('.newPostBody')

//     const createFormButton = document.querySelector('.createFormButton')
//     createFormButton.addEventListener('click', function () {
//         var node = document.createElement("LI");
//         var textnode = document.createTextNode(createFormPostTitle.value);
//         node.appendChild(textnode);
//         document.querySelector(".postIndexList").appendChild(node);
//         display.innerHTML = `<div>${createFormPostTitle.value}</div><br>
// ${createFormPostBody.value}`
//     })
// })
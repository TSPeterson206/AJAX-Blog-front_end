// DECLARED VARIABLES
const createButton = document.querySelector('.entryForm');
const updateButton = document.querySelector('.updateButton');
const removeButton = document.querySelector('.removeButton');
const display = document.querySelector('.bodyMain')
const index = document.querySelector('.postIndex')
const entryForm = document.querySelector(".entryForm")

const createFormPostTitle = document.querySelector('.newPostTitle')
const createFormPostBody = document.querySelector('.newPostBody')

function setDisplay(post){
    display.innerHTML = `
    <div class="postBody" data-id="${post.id}">
        <strong>${post.title}</strong><br>${post.body}
    </div>`
}

// POPULATE POST LIST
function init() {
    axios.get('http://localhost:5000/blogs')
        .then(response => {

            const allPosts = response.data.data
            const lastPost = allPosts[allPosts.length - 1]

            // function insertDisplay() {
                const list = document.querySelector('.postIndexList')
                list.innerHTML = response.data.data.map(ele => `<li> <a data-id="${ele.id}">${ele.title}</a> </li>`).join('\n')
                setDisplay(lastPost)

            // }
            // insertDisplay()
        })
    const listBody = document.querySelector('.postIndex')
    listBody.addEventListener('click',
        function (event) {
            if(event.target.tagName !== 'A') return

            const id = event.target.getAttribute('data-id')
            axios.get(`http://localhost:5000/blogs/${id}`)
            .then(response => {
                setDisplay(response.data)
            })
        })
}

init()
// CREATE UPDATE AND REMOVE BUTTONS
entryForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const title = document.querySelector('.newPostTitle').value
    const body = document.querySelector('.newPostBody').value

    axios.post('http://localhost:5000/blogs/', {
            title,
            body
        })
        .then(response => {
            init()
        })
})

updateButton.addEventListener('click', function () {
    const title = document.querySelector('.newPostTitle')
    const body = document.querySelector('.newPostBody')
    const id = document.querySelector('.postBody')
    const id2 = id.getAttribute('data-id')
    
    axios.put(`http://localhost:5000/blogs/${id2}`, {
            title: title.value,
            body: body.value
        })
        .then(response => {
            console.log(response.data)
            init()
        })
})

removeButton.addEventListener('click', function () {
    const id = document.querySelector('.postBody')
    const id2 = id.getAttribute('data-id')
    axios.delete(`http://localhost:5000/blogs/${id2}`)
        .then(() => {
            init()
        })
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// document.querySelector('#destroy-button').addEventListener('click', () => {
//     const container = document.querySelector('#destroy-container')
//     const deleteInput = document.querySelector('#destroy-id-input').value

//     axios.delete(`${baseURL}/notes/${deleteInput}`)
//     .then(result => {
//       container.innerHTML = `
//       <code>${JSON.stringify(result.data)}</code>`
//     })
//   })

//   let elementPos = characters.map(function (x) {
//     return x.id;
//   }).indexOf(req.params.id);
//   var objectFound = characters[elementPos];
//   let thisOtherOne = characters.splice(objectFound, 1)
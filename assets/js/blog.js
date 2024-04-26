const username = document.querySelector('#username')
const title = document.querySelector('#title')
const content = document.querySelector('#content')
const back = document.querySelector('#back')

back.addEventListener('click', function(){
    window.location.href = "./index.html"
})

function init() {
    // Get stored todos from localStorage
   username.textContent = (localStorage.getItem('username'))
   title.textContent = (localStorage.getItem('title')) 
   content.textContent = (localStorage.getItem('content')) 
}

init()
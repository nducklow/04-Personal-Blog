const usernameInput = document.querySelector('#username')
const titleInput = document.querySelector('#title')
const contentInput = document.querySelector('#content')
const submit = document.querySelector('#submit')

const blogPosts = []



submit.addEventListener('click', function(event){
    event.preventDefault()

    const username = usernameInput.value.trim()
    const title = titleInput.value.trim()
    const content = contentInput.value.trim()

    localStorage.setItem('username', username)
    localStorage.setItem('title', title)
    localStorage.setItem('content', content)
    
    window.location.replace("./blog.html")
    
    
    
 })




 

 
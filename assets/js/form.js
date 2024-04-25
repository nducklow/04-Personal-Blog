const usernameInput = document.querySelector('#username')
const titleInput = document.querySelector('#title')
const contentInput = document.querySelector('#content')
const submit = document.querySelector('#submit')

const blogPosts = []



submit.addEventListener('click', function(event){
    event.preventDefault()

    const username = usernameInput.value
    const title = titleInput.value
    const content = contentInput.value

    localStorage.setItem('username', username)
    localStorage.setItem('title', title)
    localStorage.setItem('content', content)
    
    window.location.href = "./blog.html"
    
    
    
 })




 

 
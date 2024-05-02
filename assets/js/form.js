const usernameInput = document.querySelector('#username')
const titleInput = document.querySelector('#title')
const contentInput = document.querySelector('#content')
const submit = document.querySelector('#submit')




submit.addEventListener('click', function(event){
event.preventDefault()

const postInfo = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
}

localStorage.setItem('currentPost', JSON.stringify(postInfo))

window.location.replace("./blog.html")




 })




 

 
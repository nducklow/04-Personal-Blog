const usernameEl = document.querySelector('#username')
const titleEl = document.querySelector('#title')
const contentEl = document.querySelector('#content')
const backEl = document.querySelector('#back')
const postsEl = document.querySelector('#posts')

 let posts = []

function init() {
    const currentPost = JSON.parse(localStorage.getItem('posts'))
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts'))
    if (savedPosts !== null) {
        posts = savedPosts;
      }
    console.log(currentPost)
    posts.push(currentPost)
    console.log(posts)
    localStorage.setItem('savedPosts', JSON.stringify(posts))
    
    for (const post of posts) {
        console.log(post.username)
        const title = document.createElement('h2')
        title.textContent = post.title
        postsEl.appendChild(title)
        const content = document.createElement('div')
        content.textContent = post.content
        postsEl.appendChild(content)
        const username = document.createElement('h4')
        username.textContent = post.username
        postsEl.appendChild(username)

    }
    
    backEl.addEventListener('click', function(){
        window.location.href = "./index.html"
    })
    
}




init()
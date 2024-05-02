const usernameEl = document.querySelector('#username')
const titleEl = document.querySelector('#title')
const contentEl = document.querySelector('#content')
const backEl = document.querySelector('#back')
const postsEl = document.querySelector('#posts')

 let posts = []

function init() {
    backEl.addEventListener('click', function(){
        window.location.href = "./index.html"
    })
    
    const currentPost = JSON.parse(localStorage.getItem('currentPost'))
    const savedPosts = JSON.parse(localStorage.getItem('savedPosts'))
    if (savedPosts !== null) {
        posts = savedPosts;
      }
    if (currentPost === null){
        return

    }
    posts.push(currentPost)
    localStorage.setItem('savedPosts', JSON.stringify(posts))
    
    for (const post of posts) {
        console.log(post)
        const postArea = document.createElement('section')
        const title = document.createElement('h2')
        title.textContent = post.title
        postArea.appendChild(title)
        const content = document.createElement('div')
        content.textContent = post.content
        postArea.appendChild(content)
        const username = document.createElement('h4')
        username.textContent = post.username
        postArea.appendChild(username)
        postsEl.appendChild(postArea)

    }
    localStorage.removeItem('currentPost')
}




init()
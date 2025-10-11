import  blogData from './blogs.js'

const homePage = document.getElementById('home-page');
const aboutMePage =  document.getElementById('about-me-page');
const singlePostPage = document.getElementById('single-post-page');
const heroPost = document.getElementById('hero-post');
const recentPostsGrid = document.getElementById('recent-posts-grid');  
const blogGrid = document.getElementById('blog-grid');
const viewMoreBtn = document.getElementById('view-more-btn');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body= document.body;
const logo = document.getElementById('logo-link');
const home = document.getElementById('home-link');
const about = document.getElementById('about-me-link');

const POSTS_PER_PAGE = 3;
let additionalPostsToShow = 0;

function renderHeroPost() {
    const heroData = blogData.find(post => post.id === 'hero');
    if (heroData) {
        heroPost.style.backgroundImage = `url(${heroData.image})`
        heroPost.innerHTML = `
            <div class="container" data-id="hero">
                <p class="post-date">${heroData.date}</p>
                <h2 class="post-title">${heroData.title}</h2>
                <p class="post-content">${heroData.content}</p>
            </div>`
    }
}

function renderRecentPosts() {
    const recentPosts = blogData.filter(post => post.id !== 'hero').slice(0, POSTS_TO_SHOW);
    recentPostsGrid.innerHTML = recentPosts.map(post => getPostHTML(post)).join('');
    additionalPostsToShow = recentPosts.length;
}

function getPostHTML(post) {
    return `
        <article class="blog-card" data-id="${post.id}">
            <img src="${post.image}" alt="${post.alt}" class="blog-card-img" />
            <div class="blog-card-content">
                <p class="post-date">${post.date}</p>
                <h2 class="post-title">${post.title}</h2>
                <p class="post-content">${post.content}</p>
            </div>
        </article>`;
    
}

function renderAllPosts() {
    const allPosts = blogData.filter(blog => blog.id !== 'hero').slice(3);
    const totalPostsToShow = POSTS_PER_PAGE + additionalPostsToShow;
    const postsToRender = allPosts.slice(0, totalPostsToShow);

    blogGrid.innerHTML = postsToRender.map(post => getPostHTML(post)).join('');
    viewMoreBtn.style.display = totalPostsToShow >= allPosts.length ? 'none' : 'block';
}
  
function init() {
    renderHeroPost();
    renderRecentPosts();
    renderAllPosts();
}

init();
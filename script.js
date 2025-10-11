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

const POSTS_TO_SHOW = 3;
let postsDisplayed = 0;

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

function init() {
    renderHeroPost();
}

init();
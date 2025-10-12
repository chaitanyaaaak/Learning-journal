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

const navlinks = {
    home: document.getElementById('home-link'),
    about: document.getElementById('about-me-link'),
    logo: document.getElementById('logo-link')
}

const POSTS_PER_PAGE = 3;
let additionalPostsToShow = 0;

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);

}

function showPage(pageName) {
    [homePage, aboutMePage, singlePostPage].forEach(page => page.classList.add('hidden'));
    Object.values(navlinks).forEach(link => {
        if (link) link.classList.remove('active');
    });

    if (pageName === 'home') {
        homePage.classList.remove('hidden');
        navlinks.home.classList.add('active');
    } else if (pageName === 'about') {
        aboutMePage.classList.remove('hidden');
        renderAboutMePage();
        navlinks.about.classList.add('active');
    } else if (pageName === 'single-post') {
        singlePostPage.classList.remove('hidden');
    }
}

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
    const recentPosts = blogData.filter(post => post.id !== 'hero').slice(0, POSTS_PER_PAGE);
    recentPostsGrid.innerHTML = recentPosts.map(post => getPostHTML(post)).join('');
}


function renderAllPosts() {
    const gridPosts = blogData.filter(blog => blog.id !== 'hero').slice(3);
    const totalPostsToShow = POSTS_PER_PAGE + additionalPostsToShow;
    const postsToRender = gridPosts.slice(0, totalPostsToShow);
    
    blogGrid.innerHTML = postsToRender.map(post => getPostHTML(post)).join('');
    viewMoreBtn.style.display = totalPostsToShow >= gridPosts.length ? 'none' : 'block';
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


function renderAboutMePage() {
    aboutMePage.innerHTML = `
        <div class="about-me-container">
            <div class="about-me-content">
                <img src="./Images/BG_Chaitanya.jpeg" alt="A portrait of Chaitanya" class="about-me-img" />

                <div class="about-me-text">
                    <h2>Hi there! My name is Chaitanya and welcome to my learning journal.</h2>
                    <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the bootcamp to get expert code reviews of my Solo Projects and meet like-minded peers.</p>
                    <p>I'm excited to document my journey as I tackle new challenges, master new technologies like AI and Full-Stack development, and grow as a developer. Follow along to see my progress!
                    </p>
                </div>
            </div>
        </div>`;  
}

function renderSinglePost(postId) {
    const post = blogData.find(post => post.id == postId);
    if (post) {
        singlePostPage.innerHTML = `
            <div class="container single-post-content">
                <button class="back-btn" id="back-to-home-btn">&larr;  Back to Home</button>
                <h1 class="single-post-title">${post.title}</h1>
                <p class="post-date">${post.date}</p>
                <img src="${post.image}" alt="${post.alt}"  class="single-post-img"/>
                <div class="single-post-text">
                    ${post.longContent || `<p>${post.content}</p>`}
                </div>
            </div>`;
        showPage('single-post');
        document.getElementById('back-to-home-btn').addEventListener('click', () => showPage('home'));
    }
}

viewMoreBtn.addEventListener('click', () => {
    additionalPostsToShow += POSTS_PER_PAGE;
    renderAllPosts();
});

navlinks.home.addEventListener('click', () => showPage('home'));
navlinks.logo.addEventListener('click', () => showPage('home'));
navlinks.about.addEventListener('click', () => showPage('about'));

darkModeToggle.addEventListener('click', toggleTheme);

document.addEventListener('click', (e) => {
    const clickedPost = e.target.closest('[data-id]')
    if (clickedPost) {
        const postId = clickedPost.dataset.id;
        // console.log(postId);
        renderSinglePost(postId);
        window.scrollTo(0,0);
    }
})

function init() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    showPage('home');
    renderHeroPost();
    renderRecentPosts();
    renderAllPosts();
}

init();
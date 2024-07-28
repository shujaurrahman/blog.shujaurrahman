const blogData = {
    posts: [
        {
            title: "Hello I am Shuja Ur Rahman.",
            link: "shujaurrahman.github.io/blog.shujaurrahman/posts/about-shuja.md",
            description: "Hello to people out there this is shuja ",
            tags: ["Personal"],
            date: "2024-07-28"
        },{
            title: "Building a Modern Blog Website with Markdown, Tailwind CSS, and JavaScript",
            link: "shujaurrahman.github.io/blog.shujaurrahman/posts/about.md",
            description: "How i created dynmaic blog website using markdown as source.",
            tags: ["About"],
            date: "2024-07-28"
        }
        // Add other blog posts similarly
    ]
};


function renderPosts(posts) {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';

    posts.forEach(post => {
        const postHTML = `
            <div class="blog-card">
                <div class="blog-content-wrapper">
                    <button class="blog-topic text-tiny" onclick="filterPostsByTag('${post.tags.join(', ')}')">${post.tags.join(', ')}</button>
                    <h3>
                        <a href="post.html?postUrl=${encodeURIComponent(post.link)}&postTitle=${encodeURIComponent(post.title)}" class="h3">${post.title}</a>
                    </h3>
                    <p class="blog-text">${post.description}</p>
                    <p class="blog-text">${post.date}</p>
                </div>
            </div>
        `;
        blogPostsContainer.insertAdjacentHTML('beforeend', postHTML);
    });
}



function filterPostsByTag(tag) {
    const filteredPosts = blogData.posts.filter(post => post.tags.includes(tag));
    renderPosts(filteredPosts);
    document.getElementById('blog-header').textContent = `Posts tagged as "${tag}"`;
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderPosts(blogData.posts);
    renderTags();
});

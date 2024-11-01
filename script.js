const blogData = {
    posts: [
        {
            "title": "Hello I am Shuja Ur Rahman.",
            "link": "./posts/2024-07-28.md",
            "description": "Discover the journey of Shuja Ur Rahman—a tech enthusiast, coder, and student with a passion for all things digital. Dive into my world of gadgets, programming, and endless curiosity.",
            "tags": ["Personal"],
            "date": "2024-07-28"
        }, {
            "title": "Building a Modern Blog Website with Markdown, Tailwind CSS, and JavaScript",
            "link": "./posts/2024-07-29.md",
            "description": "Ever wondered how to create a stunning, dynamic blog with Markdown and Tailwind CSS? Follow my step-by-step guide on building a modern blog website from scratch with these powerful tools.",
            "tags": ["About"],
            "date": "2024-07-29"
        }, {
            "title": "Back to Hostel: Summer’s End and Final Year Begins",
            "link": "./posts/2024-08-11.md",
            "description": "Join me as I navigate the end of summer break and dive back into the hustle of hostel life and final year classes. From exciting projects to sleepless nights, get an inside look at the adventures and challenges of a tech student returning to campus.",
            "tags": ["Personal"],
            "date": "2024-08-11",
        },
        {
            "title": "Integrate Spotify with Your Website: A Comprehensive Guide",
            "link": "./posts/2024-08-30.md",
            "description": "Integrating Spotify into your website can enhance user engagement by showcasing currently playing or recently played tracks. This guide provides a detailed overview of setting up a Spotify integration project, including configuration, code explanation, and deployment.",
            "tags": ["Tutorial"],
            "date": "2024-08-30" 
        },
        {
                "title": "Implementing Fine-Tuned AI with JSON Context",
                "link": "./posts/2024-10-26.md",
                "description": "Learn how to deploy and interact with fine-tuned AI models using JSON context, with setup steps, code snippets, and optimization tips for any project.",
                "tags": ["AI"],
                "date": "2024-10-26",
                "isNew": true
              
        },
        {
                "title": "Setting Up a CI/CD Pipeline with GitHub Actions for InfinityFree Deployment",
                "link": "./posts/2024-10-30.md",
                "description": "Continuous Integration and Continuous Deployment (CI/CD) pipeline is a powerful way to streamline and automate deployments.",
                "tags": ["CI-CD"],
                "date": "2024-10-30",
                "isNew": true
              
        }
        
        // Add other blog posts with , post url and meta tags 
    ]
};

function renderPosts(posts) {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';

    // Sort posts in descending order by date
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedPosts.forEach(post => {
        const isNew = post.isNew ? '<span class="new-tag">New</span>' : '';
        const postHTML = `
            <div class="blog-card" style="position: relative;">
                ${isNew}
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
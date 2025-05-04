document.addEventListener('DOMContentLoaded', () => {
    // Get the current blog post ID from the data attribute on the article element
    const currentPostArticle = document.querySelector('article[data-post-id]');
    
    if (!currentPostArticle) return;
    
    const currentPostId = currentPostArticle.getAttribute('data-post-id');
    const relatedPostsContainer = document.querySelector('.related-posts-grid');
    
    if (!relatedPostsContainer) return;
    
    // Fetch the blog posts data
    fetch('/data/blog-posts.json')
        .then(response => response.json())
        .then(data => {
            const currentPost = data.posts.find(post => post.id === currentPostId);
            
            if (!currentPost) return;
            
            // Function to calculate relevance score between posts
            function calculateRelevance(post) {
                if (post.id === currentPostId) return -1; // Exclude current post
                
                let score = 0;
                
                // Same category is highly relevant
                if (post.category === currentPost.category) score += 3;
                
                // Count matching tags
                const currentTags = new Set(currentPost.tags);
                post.tags.forEach(tag => {
                    if (currentTags.has(tag)) score += 2;
                });
                
                return score;
            }
            
            // Sort posts by relevance score
            const relatedPosts = data.posts
                .map(post => ({ ...post, relevance: calculateRelevance(post) }))
                .filter(post => post.relevance > 0)
                .sort((a, b) => b.relevance - a.relevance)
                .slice(0, 3); // Get top 3 related posts
            
            // Clear any existing content
            relatedPostsContainer.innerHTML = '';
            
            // If we have related posts, add them to the container
            if (relatedPosts.length > 0) {
                relatedPosts.forEach(post => {
                    const postHtml = `
                        <article class="blog-post">
                            <div class="post-image">
                                <img src="${post.image}" alt="${post.title}">
                            </div>
                            <div class="post-content">
                                <div class="post-meta">
                                    <span class="post-date">${post.date}</span>
                                    <span class="post-category">${post.category}</span>
                                </div>
                                <h2>${post.title}</h2>
                                <a href="${post.url}" class="btn small">Read More</a>
                            </div>
                        </article>
                    `;
                    relatedPostsContainer.innerHTML += postHtml;
                });
            } else {
                // If no related posts, show some default posts
                const defaultPosts = data.posts
                    .filter(post => post.id !== currentPostId)
                    .slice(0, 3);
                    
                defaultPosts.forEach(post => {
                    const postHtml = `
                        <article class="blog-post">
                            <div class="post-image">
                                <img src="${post.image}" alt="${post.title}">
                            </div>
                            <div class="post-content">
                                <div class="post-meta">
                                    <span class="post-date">${post.date}</span>
                                    <span class="post-category">${post.category}</span>
                                </div>
                                <h2>${post.title}</h2>
                                <a href="${post.url}" class="btn small">Read More</a>
                            </div>
                        </article>
                    `;
                    relatedPostsContainer.innerHTML += postHtml;
                });
            }
        })
        .catch(error => {
            console.error('Error loading blog posts data:', error);
            // Fallback to display a message
            relatedPostsContainer.innerHTML = '<p class="text-center">Unable to load related posts.</p>';
        });
});

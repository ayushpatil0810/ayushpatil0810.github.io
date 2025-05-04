document.addEventListener('DOMContentLoaded', () => {
    // Blog post filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter blog posts
            const filter = button.getAttribute('data-filter');
            let visiblePosts = [];
            
            blogPosts.forEach(post => {
                // Remove previous filtered attribute
                post.removeAttribute('data-filtered');
                
                if (filter === 'all' || post.getAttribute('data-categories').includes(filter)) {
                    post.style.display = 'block'; // Initially set to block
                    visiblePosts.push(post);
                } else {
                    post.style.display = 'none';
                    post.setAttribute('data-filtered', 'true');
                }
            });
            
            // Update pagination based on filtered posts
            if (window.updateBlogPagination) {
                window.updateBlogPagination(visiblePosts);
            }
        });
    });
    
    // Blog search functionality
    const searchInput = document.getElementById('blog-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            const blogPosts = document.querySelectorAll('.blog-post');
            
            blogPosts.forEach(post => {
                // Remove previous filtered attribute
                post.removeAttribute('data-filtered');
                
                // Get post content for search
                const postTitle = post.querySelector('h2').textContent.toLowerCase();
                const postExcerpt = post.querySelector('.post-excerpt') ? 
                    post.querySelector('.post-excerpt').textContent.toLowerCase() : '';
                const postCategory = post.querySelector('.post-category').textContent.toLowerCase();
                
                // Check if the post contains the search term
                if (searchTerm === '' || 
                    postTitle.includes(searchTerm) || 
                    postExcerpt.includes(searchTerm) || 
                    postCategory.includes(searchTerm)) {
                    post.style.display = 'block'; // Initially set to block
                } else {
                    post.style.display = 'none';
                    post.setAttribute('data-filtered', 'true');
                }
            });
            
            // Update pagination based on filtered posts
            if (window.updateBlogPagination) {
                window.updateBlogPagination();
            }
        });
    }
    
    // Pagination functionality
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    
    paginationButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('active') && !button.classList.contains('next')) {
                paginationButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // In a real implementation, this would load new posts
                // For this demo, we'll just show an animation
                blogPosts.forEach(post => {
                    post.classList.remove('fade-in');
                    post.classList.add('fade-out');
                });
                
                setTimeout(() => {
                    blogPosts.forEach(post => {
                        post.classList.remove('fade-out');
                        post.classList.add('fade-in');
                    });
                }, 300);
            }
        });
    });
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                // In a real app, you would submit this to a server
                // Here we'll just show a success message
                const button = newsletterForm.querySelector('button');
                const originalText = button.textContent;
                
                button.disabled = true;
                button.textContent = 'Subscribing...';
                
                setTimeout(() => {
                    emailInput.value = '';
                    button.textContent = 'Subscribed!';
                    
                    setTimeout(() => {
                        button.disabled = false;
                        button.textContent = originalText;
                    }, 2000);
                }, 1000);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Pagination configuration
    const postsPerPage = 3;
    let currentPage = 1;
    
    const blogPosts = document.querySelectorAll('.blog-post');
    const paginationButtons = document.querySelectorAll('.pagination-btn:not(.next)');
    const nextButton = document.querySelector('.pagination-btn.next');
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);
    
    // Initialize pagination
    updatePagination();
    
    // Add event listeners to pagination buttons
    paginationButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentPage = parseInt(button.textContent);
            updatePagination();
            scrollToTop();
        });
    });
    
    // Next button functionality
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
                scrollToTop();
            }
        });
    }
    
    // Function to update pagination and visible posts
    function updatePagination() {
        // Get all non-filtered posts (either visible or to be made visible by pagination)
        const visiblePosts = Array.from(blogPosts).filter(post => !post.hasAttribute('data-filtered'));
        
        // Calculate total pages based on visible posts
        const calculatedTotalPages = Math.ceil(visiblePosts.length / postsPerPage);
        
        // If current page is now invalid (could happen after filtering), reset to page 1
        if (currentPage > calculatedTotalPages && calculatedTotalPages > 0) {
            currentPage = 1;
        }
        
        // Update active button state
        paginationButtons.forEach(button => {
            const pageNum = parseInt(button.textContent);
            button.classList.remove('active');
            if (pageNum === currentPage) {
                button.classList.add('active');
            }
            
            // Hide pagination buttons that exceed total pages
            button.style.display = pageNum <= calculatedTotalPages ? 'flex' : 'none';
        });
        
        // Enable/disable next button based on current page
        if (nextButton) {
            nextButton.disabled = (currentPage >= calculatedTotalPages);
            nextButton.style.opacity = (currentPage >= calculatedTotalPages) ? '0.5' : '1';
        }
        
        // Calculate which posts to show based on current page
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        
        // First, hide all posts
        blogPosts.forEach(post => {
            post.style.display = 'none';
        });
        
        // Then, show only the non-filtered posts for the current page
        visiblePosts.forEach((post, index) => {
            if (index >= startIndex && index < endIndex) {
                post.style.display = 'block';
            }
        });
        
        // Hide pagination if only one page or no pages
        const paginationContainer = document.querySelector('.pagination');
        if (paginationContainer) {
            paginationContainer.style.display = calculatedTotalPages <= 1 ? 'none' : 'flex';
        }
    }
    
    // Helper function to scroll back to top of blog posts
    function scrollToTop() {
        const blogSection = document.querySelector('.blog-grid');
        blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Function to be called from outside (for filtering integration)
    window.updateBlogPagination = function(filteredPosts) {
        // Reset to first page when filtering
        currentPage = 1;
        updatePagination();
    };
});

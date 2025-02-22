import blogLoader from './blogLoader.js';

async function displayRecentBlogs() {
    const blogs = await blogLoader.loadBlogList();
    const recentBlogs = blogs.slice(0, 2);
    
    const container = document.getElementById('recent-blogs');
    container.innerHTML = recentBlogs.map(blog => createBlogCard(blog)).join('');
}

async function displayBlogPost(id) {
    const blog = await blogLoader.loadBlog(id);
    document.getElementById('blog-title').textContent = blog.title;
    document.getElementById('blog-content').innerHTML = blog.content;
    // ... rest of the blog display logic
}

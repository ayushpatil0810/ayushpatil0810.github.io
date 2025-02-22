class BlogLoader {
    constructor() {
        this.blogCache = new Map();
    }

    async loadBlogList() {
        // This would fetch and parse the blog directory
        const response = await fetch('/api/blogs');
        return await response.json();
    }

    async loadBlog(id) {
        if (this.blogCache.has(id)) {
            return this.blogCache.get(id);
        }

        const response = await fetch(`/blogs/${id}.md`);
        const markdown = await response.text();
        const blog = this.parseMarkdown(markdown);
        this.blogCache.set(id, blog);
        return blog;
    }

    parseMarkdown(markdown) {
        // Split frontmatter and content
        const [_, frontmatter, content] = markdown.split('---');
        
        // Parse frontmatter
        const metadata = {};
        frontmatter.split('\n').forEach(line => {
            if (line.trim()) {
                const [key, value] = line.split(':');
                metadata[key.trim()] = value.trim();
            }
        });

        // Convert markdown to HTML using a library like marked
        const htmlContent = marked(content);

        return {
            ...metadata,
            content: htmlContent
        };
    }
}

const blogLoader = new BlogLoader();
export default blogLoader;

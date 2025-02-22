const blogs = [
    {
        id: 1,
        title: "How to Deploy a Web App Using GitHub Pages",
        excerpt: "A step-by-step guide to deploying your web application using GitHub Pages for free hosting.",
        date: "2025-02-18",
        image: "images/blogs/github-pages.png",
        category: "Web Development",
        readTime: "4 min read",
        link: "blog.html?id=1",
        content: `
            <img src="images/blogs/github-pages.png" alt="GitHub Pages Deployment" class="w-full">
            
            <h2>What is GitHub Pages?</h2>
            <p>GitHub Pages is a free hosting service provided by GitHub that allows you to host static websites directly from your GitHub repository. It's perfect for hosting personal portfolios, project documentation, or simple web applications.</p>
            
            <h2>Prerequisites</h2>
            <ul>
                <li>A GitHub account</li>
                <li>Git installed on your computer</li>
                <li>Your web application files ready for deployment</li>
            </ul>
            
            <h2>Step 1: Create a New Repository</h2>
            <ol>
                <li>Go to GitHub and click the "+" button to create a new repository</li>
                <li>Name it <code>username.github.io</code> (replace username with your GitHub username)</li>
                <li>Make the repository public</li>
                <li>Initialize with a README if you want</li>
            </ol>
            
            <h2>Step 2: Clone and Add Your Files</h2>
            <pre><code>
# Clone your repository
git clone https://github.com/username/username.github.io.git

# Copy your web app files into the cloned directory
# Add files to git
git add .

# Commit your changes
git commit -m "Initial website files"

# Push to GitHub
git push origin main
            </code></pre>
            
            <h2>Step 3: Configure GitHub Pages</h2>
            <ol>
                <li>Go to your repository settings on GitHub</li>
                <li>Scroll down to "GitHub Pages" section</li>
                <li>Select your source branch (usually 'main' or 'master')</li>
                <li>Choose root folder or /docs as your source</li>
                <li>Click Save</li>
            </ol>
            
            <h2>Step 4: Custom Domain (Optional)</h2>
            <p>If you want to use a custom domain:</p>
            <ol>
                <li>Add your custom domain in the GitHub Pages settings</li>
                <li>Create a CNAME file in your repository containing your domain</li>
                <li>Configure your domain's DNS settings:
                    <pre><code>
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     username.github.io
                    </code></pre>
                </li>
            </ol>
            
            <h2>Important Tips</h2>
            <ul>
                <li>Make sure your repository contains an index.html file at the root level</li>
                <li>All file paths should be relative to the root directory</li>
                <li>GitHub Pages only hosts static content (HTML, CSS, JavaScript)</li>
                <li>The site may take a few minutes to go live after deployment</li>
            </ul>
            
            <h2>Common Issues and Solutions</h2>
            <ul>
                <li><strong>404 Errors:</strong> Check if your repository name matches exactly with username.github.io</li>
                <li><strong>CSS/JS not loading:</strong> Ensure paths are relative and correct</li>
                <li><strong>Custom domain not working:</strong> DNS changes can take up to 48 hours to propagate</li>
                <li><strong>Build errors:</strong> Check the Actions tab for detailed error messages</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>GitHub Pages provides a simple and free way to host your static websites. Once set up, you can easily update your site by pushing changes to your repository. For more advanced features, consider using static site generators like Jekyll, which are supported by GitHub Pages.</p>
        `
    },
    {
        id: 2,
        title: "Why Every Developer Should Start a Blog",
        excerpt: "Discover the career-boosting benefits of maintaining a technical blog and how it can improve your coding skills.",
        date: "2025-02-19",
        image: "images/blogs/developer-blogging.webp",
        category: "Career Development",
        readTime: "5 min read",
        link: "blog.html?id=2",
        content: `
            <img src="images/blogs/developer-blogging.webp" alt="Developer Blogging" class="w-full">
            
            <h2>The Power of Developer Blogging</h2>
            <p>As developers, we constantly learn new technologies, solve complex problems, and build interesting projects. Starting a blog isn't just about sharing knowledge—it's about creating a powerful tool for professional growth and community engagement.</p>
            
            <h2>Key Benefits of Blogging</h2>
            <ul>
                <li><strong>Deepens Your Understanding:</strong> When you explain concepts to others, you understand them better yourself</li>
                <li><strong>Builds Your Personal Brand:</strong> A blog serves as a living portfolio of your expertise</li>
                <li><strong>Improves Communication Skills:</strong> Regular writing makes you better at explaining technical concepts</li>
                <li><strong>Creates Networking Opportunities:</strong> Your blog can connect you with other developers and potential employers</li>
            </ul>
            
            <h2>What to Write About</h2>
            <ol>
                <li><strong>Tutorial Posts:</strong> Step-by-step guides for solving specific problems</li>
                <li><strong>Project Walkthroughs:</strong> Detailed explanations of your personal projects</li>
                <li><strong>Bug Solutions:</strong> Document tricky bugs you've encountered and solved</li>
                <li><strong>Technology Reviews:</strong> Share your experiences with new tools and frameworks</li>
                <li><strong>Career Insights:</strong> Discuss your professional journey and lessons learned</li>
            </ol>
            
            <h2>Getting Started</h2>
            <p>Here's a simple framework to begin your blogging journey:</p>
            
            <pre><code>
1. Choose Your Platform
   - Medium
   - Dev.to
   - Hashnode
   - Personal website
   
2. Set a Schedule
   - Start with monthly posts
   - Build consistency
   - Quality over quantity
   
3. Structure Your Posts
   - Clear introduction
   - Problem statement
   - Solution/Implementation
   - Conclusion and takeaways
            </code></pre>
            
            <h2>Best Practices for Technical Blogging</h2>
            <ul>
                <li>Include code snippets and examples</li>
                <li>Use clear headings and organization</li>
                <li>Add relevant images and diagrams</li>
                <li>Keep paragraphs concise</li>
                <li>Link to additional resources</li>
            </ul>
            
            <h2>Overcoming Common Challenges</h2>
            <h3>1. "Everything Has Already Been Written"</h3>
            <p>Your unique perspective and experience make your content valuable. Different explanations resonate with different people.</p>
            
            <h3>2. "I'm Not Expert Enough"</h3>
            <p>Share your learning journey. Writing about what you're learning helps others who are a few steps behind you.</p>
            
            <h3>3. "I Don't Have Time"</h3>
            <p>Start small. Even a 15-minute write-up about solving a specific problem is valuable content.</p>
            
            <h2>Measuring Impact</h2>
            <ul>
                <li>Track page views and engagement</li>
                <li>Collect feedback through comments</li>
                <li>Monitor social media shares</li>
                <li>Note career opportunities that arise</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Starting a blog is one of the most rewarding investments you can make in your development career. It builds your expertise, expands your network, and creates opportunities you might never have encountered otherwise. The key is to start small, be consistent, and focus on providing value to your readers.</p>
            
            <p>Remember: The best time to start blogging was yesterday; the second best time is today. Your future self will thank you for starting this journey.</p>
        `
    },
    {
        id: 3,
        title: "Why Every Student Developer Should Learn Git and GitHub",
        excerpt: "Learn how version control with Git and GitHub can supercharge your development journey and prepare you for professional success.",
        date: "2025-02-20",
        image: "images/blogs/git-github.png",
        category: "Development Tools",
        readTime: "6 min read",
        link: "blog.html?id=3",
        content: `
            <img src="images/blogs/git-github.png" alt="Git and GitHub for Students" class="w-full">
            
            <h2>Introduction to Git and GitHub</h2>
            <p>As a student developer, learning Git and GitHub isn't just about following industry trends—it's about setting yourself up for success in your development journey. These tools are fundamental to modern software development and can significantly enhance your learning experience.</p>
            
            <h2>Why Git and GitHub Matter for Students</h2>
            <ul>
                <li><strong>Project Portfolio:</strong> Showcase your work to potential employers</li>
                <li><strong>Collaboration Skills:</strong> Learn to work with others on code projects</li>
                <li><strong>Version Control:</strong> Track changes and experiment safely</li>
                <li><strong>Industry Standard:</strong> Prepare for professional development work</li>
            </ul>
            
            <h2>Key Benefits for Students</h2>
            <h3>1. Track Your Progress</h3>
            <pre><code>
# See your coding history
git log --oneline --graph

# View changes in a file
git diff filename.txt
            </code></pre>
            
            <h3>2. Experiment Safely</h3>
            <pre><code>
# Create a new branch for features
git checkout -b new-feature

# Switch between versions
git checkout main
            </code></pre>
            
            <h3>3. Backup Your Projects</h3>
            <pre><code>
# Save your changes to GitHub
git add .
git commit -m "Added new features"
git push origin main
            </code></pre>
            
            <h2>Getting Started with GitHub as a Student</h2>
            <ol>
                <li><strong>GitHub Student Pack:</strong> Get free access to developer tools and services</li>
                <li><strong>Create a Profile README:</strong> Showcase your skills and projects</li>
                <li><strong>Join Student Communities:</strong> Connect with other learners</li>
                <li><strong>Contribute to Open Source:</strong> Build real-world experience</li>
            </ol>
            
            <h2>Essential Git Commands for Students</h2>
            <pre><code>
# Basic workflow
git init              # Start a new repository
git clone             # Copy an existing repository
git add               # Stage changes
git commit            # Save changes
git push              # Upload to GitHub
git pull              # Download latest changes

# Branching
git branch            # List branches
git checkout          # Switch branches
git merge             # Combine branches
            </code></pre>
            
            <h2>Best Practices for Students</h2>
            <ul>
                <li>Commit frequently with clear messages</li>
                <li>Use branches for new features</li>
                <li>Write good README files</li>
                <li>Keep repositories organized</li>
                <li>Document your code well</li>
            </ul>
            
            <h2>Common Student Mistakes to Avoid</h2>
            <ul>
                <li><strong>Poor Commit Messages:</strong> "Fixed stuff" vs. "Fixed login validation bug"</li>
                <li><strong>Committing Sensitive Data:</strong> Always use .gitignore for secrets</li>
                <li><strong>Working Only on Main Branch:</strong> Use feature branches</li>
                <li><strong>Not Backing Up Regularly:</strong> Push changes frequently</li>
            </ul>
            
            <h2>Building Your GitHub Profile</h2>
            <p>Your GitHub profile is like your coding resume. Here's what to include:</p>
            <ul>
                <li>Pin your best repositories</li>
                <li>Create a professional README</li>
                <li>Contribute consistently</li>
                <li>Document your projects well</li>
            </ul>
            
            <h2>Next Steps</h2>
            <ol>
                <li>Install Git on your computer</li>
                <li>Create a GitHub account</li>
                <li>Apply for GitHub Student Developer Pack</li>
                <li>Start with small projects</li>
                <li>Join student coding communities</li>
            </ol>
            
            <h2>Conclusion</h2>
            <p>Learning Git and GitHub as a student developer is an investment in your future. Not only does it make your current projects more manageable, but it also prepares you for professional development work. Start small, practice regularly, and don't be afraid to make mistakes—that's how you learn!</p>
        `
    },
    {
        id: 4,
        title: "NVIDIA GeForce RTX 50 Series: Everything You Need to Know",
        excerpt: "A deep dive into NVIDIA’s latest 50-series GPUs, comparing specs, performance, and pricing with the previous generation.",
        date: "2025-02-21",
        image: "images/blogs/nvidia-50-series.jpg",
        category: "Hardware & GPUs",
        readTime: "6 min read",
        link: "blog.html?id=4",
        content: `
                <img src="images/blogs/nvidia-50-series.jpg" alt="NVIDIA RTX 50 Series" class="w-full">
    
                <h2>Introduction</h2>
                <p>NVIDIA has unveiled its highly anticipated GeForce RTX 50 series, promising next-level performance, power efficiency, and AI-driven features. Let's explore the specifications, performance benchmarks, and how these GPUs compare to the previous RTX 40 series.</p>
    
                <h2>RTX 50 Series vs RTX 40 Series: Specs Comparison</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full border border-gray-300 my-4">
                        <thead>
                            <tr>
                                <th class="border border-gray-300 bg-gray-100 px-4 py-2">GPU Model</th>
                                <th class="border border-gray-300 bg-gray-100 px-4 py-2">CUDA Cores</th>
                                <th class="border border-gray-300 bg-gray-100 px-4 py-2">VRAM</th>
                                <th class="border border-gray-300 bg-gray-100 px-4 py-2">Memory Type</th>
                                <th class="border border-gray-300 bg-gray-100 px-4 py-2">Boost Clock</th>
                                <th class="border border-gray-300 bg-gray-100 px-4 py-2">Power Consumption</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">RTX 5090</td>
                                <td class="border border-gray-300 px-4 py-2">18,432</td>
                                <td class="border border-gray-300 px-4 py-2">24GB</td>
                                <td class="border border-gray-300 px-4 py-2">GDDR7</td>
                                <td class="border border-gray-300 px-4 py-2">2.8 GHz</td>
                                <td class="border border-gray-300 px-4 py-2">450W</td>
                            </tr>
                            <tr class="bg-gray-50">
                                <td class="border border-gray-300 px-4 py-2">RTX 4090</td>
                                <td class="border border-gray-300 px-4 py-2">16,384</td>
                                <td class="border border-gray-300 px-4 py-2">24GB</td>
                                <td class="border border-gray-300 px-4 py-2">GDDR6X</td>
                                <td class="border border-gray-300 px-4 py-2">2.5 GHz</td>
                                <td class="border border-gray-300 px-4 py-2">450W</td>
                            </tr>
                            <tr>
                                <td class="border border-gray-300 px-4 py-2">RTX 5080</td>
                                <td class="border border-gray-300 px-4 py-2">14,000</td>
                                <td class="border border-gray-300 px-4 py-2">16GB</td>
                                <td class="border border-gray-300 px-4 py-2">GDDR7</td>
                                <td class="border border-gray-300 px-4 py-2">2.7 GHz</td>
                                <td class="border border-gray-300 px-4 py-2">350W</td>
                            </tr>
                            <tr class="bg-gray-50">
                                <td class="border border-gray-300 px-4 py-2">RTX 4080</td>
                                <td class="border border-gray-300 px-4 py-2">9,728</td>
                                <td class="border border-gray-300 px-4 py-2">16GB</td>
                                <td class="border border-gray-300 px-4 py-2">GDDR6X</td>
                                <td class="border border-gray-300 px-4 py-2">2.5 GHz</td>
                                <td class="border border-gray-300 px-4 py-2">320W</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    
                <h2>Performance Gains</h2>
                <ul>
                    <li><strong>AI-Enhanced Performance:</strong> The RTX 50 series leverages improved AI cores, boosting DLSS 4.0 capabilities.</li>
                    <li><strong>Faster Ray Tracing:</strong> Enhanced RT cores provide up to a 40% increase in real-time ray tracing performance.</li>
                    <li><strong>Memory Bandwidth Boost:</strong> GDDR7 delivers significantly higher memory speeds, reducing latency and improving 4K gaming.</li>
                    <li><strong>Lower Power Efficiency:</strong> Despite high power requirements, NVIDIA's new architecture optimizes energy use with improved thermal efficiency.</li>
                </ul>
    
                <h2>Price and Availability</h2>
                <p>The NVIDIA RTX 50 series will be available starting in late 2025. Here are the expected prices:</p>
                <ul>
                    <li><strong>RTX 5090:</strong> $1,799</li>
                    <li><strong>RTX 5080:</strong> $1,199</li>
                    <li><strong>RTX 5070:</strong> $799</li>
                </ul>
    
                <h2>Should You Upgrade?</h2>
                <p>If you're using an RTX 40 series GPU, the improvements in AI, ray tracing, and power efficiency may not justify an immediate upgrade. However, for users with RTX 30 series or older GPUs, the RTX 50 series provides a massive leap in performance.</p>
    
                <h2>Conclusion</h2>
                <p>NVIDIA's RTX 50 series sets a new standard for high-performance gaming and AI-driven computing. With cutting-edge hardware and software optimizations, these GPUs are built for the future of gaming and creative workloads.</p>
            `
    },
    {
        id: 5,
        title: "What is NVIDIA DLSS? Everything You Need to Know",
        excerpt: "Learn how NVIDIA DLSS leverages AI and deep learning to boost gaming performance and image quality without sacrificing frame rates.",
        date: "2025-02-22",
        image: "images/blogs/nvidia-dlss.jpg",
        category: "Gaming Technology",
        readTime: "5 min read",
        link: "blog.html?id=5",
        content: `
            <img src="images/blogs/nvidia-dlss.jpg" alt="NVIDIA DLSS Explained" class="w-full">

            <h2>Introduction</h2>
            <p>NVIDIA DLSS (Deep Learning Super Sampling) is an AI-powered rendering technology designed to improve gaming performance and image quality. By using deep learning and dedicated Tensor Cores in RTX GPUs, DLSS can upscale lower-resolution images in real-time, delivering higher frame rates without sacrificing visual fidelity.</p>

            <h2>How Does DLSS Work?</h2>
            <p>DLSS utilizes a trained AI model to predict high-quality images from lower-resolution inputs. Here’s a step-by-step breakdown:</p>
            <ol>
                <li>The game renders at a lower resolution (e.g., 1080p instead of 4K).</li>
                <li>DLSS AI upscales the image using NVIDIA's deep learning model.</li>
                <li>Frame reconstruction improves sharpness and detail, making the upscaled image look as good as (or sometimes better than) native resolution.</li>
                <li>The final frame is displayed with improved performance and minimal visual loss.</li>
            </ol>

            <h2>DLSS Versions Explained</h2>
            <ul>
                <li><strong>DLSS 1.0:</strong> Early version with limited adoption and minor performance gains.</li>
                <li><strong>DLSS 2.0:</strong> Major improvements with better AI training, customizable quality settings (Performance, Balanced, Quality, Ultra Performance).</li>
                <li><strong>DLSS 3.0:</strong> Introduced **Frame Generation**, adding AI-generated frames to increase FPS beyond traditional upscaling.</li>
                <li><strong>DLSS 4.0 (Expected):</strong> Rumored to improve ray tracing reconstruction and introduce enhanced motion vector processing.</li>
            </ul>

            <h2>Performance Benefits</h2>
            <p>DLSS significantly enhances gaming performance, particularly in demanding AAA titles. Here’s a comparison of native vs. DLSS-enabled gameplay:</p>
            <div class="overflow-x-auto">
                <table class="min-w-full border border-gray-300 my-4">
                    <thead>
                        <tr>
                            <th class="border border-gray-300 bg-gray-100 px-4 py-2">Game</th>
                            <th class="border border-gray-300 bg-gray-100 px-4 py-2">Native 4K FPS</th>
                            <th class="border border-gray-300 bg-gray-100 px-4 py-2">DLSS 2.0 FPS</th>
                            <th class="border border-gray-300 bg-gray-100 px-4 py-2">DLSS 3.0 FPS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Cyberpunk 2077</td>
                            <td class="border border-gray-300 px-4 py-2">35 FPS</td>
                            <td class="border border-gray-300 px-4 py-2">65 FPS</td>
                            <td class="border border-gray-300 px-4 py-2">95 FPS</td>
                        </tr>
                        <tr class="bg-gray-50">
                            <td class="border border-gray-300 px-4 py-2">Control</td>
                            <td class="border border-gray-300 px-4 py-2">40 FPS</td>
                            <td class="border border-gray-300 px-4 py-2">75 FPS</td>
                            <td class="border border-gray-300 px-4 py-2">110 FPS</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-300 px-4 py-2">Red Dead Redemption 2</td>
                            <td class="border border-gray-300 px-4 py-2">45 FPS</td>
                            <td class="border border-gray-300 px-4 py-2">80 FPS</td>
                            <td class="border border-gray-300 px-4 py-2">120 FPS</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2>DLSS vs. Traditional Upscaling</h2>
            <p>Unlike conventional upscaling methods like AMD FSR and Intel XeSS, DLSS leverages dedicated AI hardware (Tensor Cores) to deliver superior image quality while minimizing artifacts.</p>
            <ul>
                <li><strong>DLSS:</strong> AI-driven, high quality, requires RTX GPU.</li>
                <li><strong>AMD FSR:</strong> Open-source, works on all GPUs, slightly lower quality.</li>
                <li><strong>Intel XeSS:</strong> AI-accelerated but not as advanced as DLSS.</li>
            </ul>

            <h2>Should You Enable DLSS?</h2>
            <p>If you own an NVIDIA RTX GPU, enabling DLSS is almost always beneficial, especially for high-resolution gaming. It provides:</p>
            <ul>
                <li>Higher FPS without major visual quality loss.</li>
                <li>Better ray tracing performance.</li>
                <li>Improved responsiveness in competitive games.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>NVIDIA DLSS is a game-changer for modern gaming, making high-quality visuals and high frame rates accessible even on demanding titles. As AI continues to improve, DLSS will likely play an even bigger role in the future of PC gaming.</p>
        `
    },
];

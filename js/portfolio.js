document.addEventListener('DOMContentLoaded', () => {
    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            const filter = button.getAttribute('data-filter');
            
            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    
                    // Animation
                    item.classList.remove('fade-in');
                    setTimeout(() => {
                        item.classList.add('fade-in');
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Case study toggle
    const caseStudyButtons = document.querySelectorAll('.case-study-btn');
    
    caseStudyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            const caseStudy = document.getElementById(`case-study-${projectId}`);
            
            // Toggle visibility
            if (caseStudy.classList.contains('active')) {
                // Close case study
                caseStudy.classList.remove('active');
                button.textContent = 'Case Study';
                
                // Scroll to the project card after closing
                setTimeout(() => {
                    const projectCard = button.closest('.project-card');
                    projectCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 300);
            } else {
                // Close any open case studies
                document.querySelectorAll('.case-study.active').forEach(study => {
                    study.classList.remove('active');
                    const btn = document.querySelector(`.case-study-btn[data-project="${study.id.replace('case-study-', '')}"]`);
                    if (btn) btn.textContent = 'Case Study';
                });
                
                // Open this case study
                caseStudy.classList.add('active');
                button.textContent = 'Close Study';
                
                // Scroll to the case study
                setTimeout(() => {
                    caseStudy.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 300);
            }
        });
    });
    
    // Project image hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const links = card.querySelector('.project-links');
            if (links) {
                links.style.opacity = '1';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const links = card.querySelector('.project-links');
            if (links) {
                links.style.opacity = '0';
            }
        });
    });
});

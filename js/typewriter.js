document.addEventListener('DOMContentLoaded', () => {
    // Text array from old portfolio
    const textArray = ['Passionate Developer', 'AI & ML Enthusiast', 'Data Science Student'];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 600; // Delay between current and next text
    
    const typewriterElement = document.getElementById('typewriter');
    const cursorElement = document.querySelector('.cursor');
    let textArrayIndex = 0;
    let charIndex = 0;
    
    // Add CSS for typewriter effect
    const style = document.createElement('style');
    style.innerHTML = `
        .subtitle {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        @media (max-width: 992px) {
            .subtitle {
                justify-content: center;
            }
        }
        
        .typewriter {
            color: var(--accent-color);
            font-weight: bold;
            display: inline-block;
        }
        
        .cursor {
            display: inline-block;
            width: 3px;
            height: 1.2em;
            background-color: var(--primary-color);
            margin-left: 2px;
            vertical-align: middle;
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Type function - adds one character at a time
    function type() {
        if (!typewriterElement) return;
        
        if (charIndex < textArray[textArrayIndex].length) {
            typewriterElement.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            // Pause at the end of typing a complete word then erase
            setTimeout(erase, newTextDelay);
        }
    }
    
    // Erase function - removes one character at a time
    function erase() {
        if (!typewriterElement) return;
        
        if (charIndex > 0) {
            typewriterElement.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            // Move to next text in the array when completely erased
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }
    
    // Start the typing effect if the element exists
    if (typewriterElement) {
        setTimeout(type, newTextDelay + 250);
    }
});

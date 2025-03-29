/**
 * GitHub API Utility Functions
 * This file contains utility functions to fetch and process GitHub data
 */

// GitHub API base URL
const GITHUB_API_BASE = 'https://api.github.com';

/**
 * Fetches user profile data from GitHub API
 * @param {string} username - GitHub username
 * @returns {Promise} - Promise with user data
 */
function fetchGitHubUser(username) {
    return fetch(`${GITHUB_API_BASE}/users/${username}`)
        .then(handleApiResponse);
}

/**
 * Fetches repositories for a given user
 * @param {string} username - GitHub username
 * @param {Object} options - Optional parameters like sort, per_page, page
 * @returns {Promise} - Promise with repositories data
 */
function fetchUserRepositories(username, options = {}) {
    const { sort = 'updated', per_page = 6, page = 1 } = options;
    
    return fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=${sort}&per_page=${per_page}&page=${page}`)
        .then(handleApiResponse);
}

/**
 * Handles API response and error cases
 * @param {Response} response - Fetch API response
 * @returns {Promise} - Promise with JSON data or error
 */
function handleApiResponse(response) {
    if (!response.ok) {
        if (response.status === 403) {
            throw new Error('GitHub API rate limit exceeded. Please try again later.');
        } else if (response.status === 404) {
            throw new Error('User not found on GitHub.');
        } else {
            throw new Error(`GitHub API error: ${response.statusText}`);
        }
    }
    return response.json();
}

/**
 * Gets color for programming language
 * @param {string} language - Programming language name
 * @returns {string} - Hex color code
 */
function getLanguageColor(language) {
    const colors = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#2b7489',
        'Python': '#3572A5',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Dart': '#00B4AB',
        'Java': '#b07219',
        'C#': '#178600',
        'PHP': '#4F5D95',
        'C++': '#f34b7d',
        'C': '#555555',
        'Swift': '#ffac45',
        'Go': '#00ADD8',
        'Ruby': '#701516',
        'Kotlin': '#F18E33',
        'Rust': '#dea584',
        'Shell': '#89e051',
        'PowerShell': '#012456',
        'R': '#198CE7',
        'Elixir': '#6e4a7e',
    };
    
    return colors[language] || '#8257e5'; // Default purple for unknown languages
}

// Export functions for use in main script
window.GitHubAPI = {
    fetchGitHubUser,
    fetchUserRepositories,
    getLanguageColor
};

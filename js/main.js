
// Convert title to URL slug
function titleToSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}

// Main JavaScript for Bemba Hymn Book

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    loadFavorites();
});

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput) return;
    
    // Search on input
    searchInput.addEventListener('input', function() {
        performSearch(this.value);
    });
    
    // Search on button click
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
    }
    
    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            if (searchResults) {
                searchResults.classList.remove('show');
            }
        }
    });
}

// Perform search
function performSearch(query) {
    const searchResults = document.getElementById('searchResults');
    
    if (!searchResults) return;
    
    if (!query || query.trim() === '') {
        searchResults.classList.remove('show');
        return;
    }
    
    const results = searchHymns(query);
    displaySearchResults(results);
}

// Display search results
function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    
    if (!searchResults) return;
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="bi bi-search fs-3 text-muted mb-2"></i>
                <p class="mb-0">No hymns found. Try searching by hymn number or title.</p>
            </div>
        `;
        searchResults.classList.add('show');
        return;
    }
    
    let html = '';
    results.forEach(hymn => {
        html += `
            <div class="search-result-item" onclick="goToHymn(${hymn.id})">
                <span class="search-result-number">${hymn.number}</span>
                <span class="search-result-title">${hymn.title}</span>
                <i class="bi bi-arrow-right text-muted"></i>
            </div>
        `;
    });
    
    searchResults.innerHTML = html;
    searchResults.classList.add('show');
}

// Quick search function
function quickSearch(number) {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = number;
        performSearch(number);
    }
}

// Navigate to hymn detail page
function goToHymn(id) {
    const hymn = getHymnById(id);
    if (hymn) {
        window.location.href = `ucz-bemba-hymn-${hymn.number}-${titleToSlug(hymn.title)}.html`;
    }
}

// Favorites functionality
function toggleFavorite(hymnId) {
    let favorites = getFavorites();
    const index = favorites.indexOf(hymnId);
    
    if (index > -1) {
        // Remove from favorites
        favorites.splice(index, 1);
    } else {
        // Add to favorites
        favorites.push(hymnId);
    }
    
    saveFavorites(favorites);
    updateFavoriteButtons();
    
    // Show notification
    showNotification(index > -1 ? 'Removed from favorites' : 'Added to favorites');
}

// Get favorites from localStorage
function getFavorites() {
    const favorites = localStorage.getItem('uczBembaHymnFavorites');
    return favorites ? JSON.parse(favorites) : [];
}

// Save favorites to localStorage
function saveFavorites(favorites) {
    localStorage.setItem('uczBembaHymnFavorites', JSON.stringify(favorites));
}

// Load and update favorite buttons on page load
function loadFavorites() {
    updateFavoriteButtons();
}

// Update all favorite buttons based on saved favorites
function updateFavoriteButtons() {
    const favorites = getFavorites();
    const favoriteButtons = document.querySelectorAll('.btn-favorite');
    
    favoriteButtons.forEach(btn => {
        const hymnNumber = parseInt(btn.getAttribute('onclick').match(/\d+/)[0]);
        const hymn = getHymnByNumber(hymnNumber);
        
        if (hymn && favorites.includes(hymn.id)) {
            btn.classList.add('active');
            btn.querySelector('i').classList.remove('bi-heart');
            btn.querySelector('i').classList.add('bi-heart-fill');
        } else {
            btn.classList.remove('active');
            btn.querySelector('i').classList.remove('bi-heart-fill');
            btn.querySelector('i').classList.add('bi-heart');
        }
    });
}

// Show notification
function showNotification(message) {
    // Check if notification already exists
    let notification = document.querySelector('.custom-notification');
    
    if (notification) {
        notification.remove();
    }
    
    // Create new notification
    notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.innerHTML = `
        <i class="bi bi-check-circle me-2"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #04015d 0%, #e92112 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        display: flex;
        align-items: center;
        font-weight: 500;
        animation: slideInRight 0.4s ease, slideOutRight 0.4s ease 2.6s;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add notification animations to the page
if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Print hymn functionality
function printHymn() {
    window.print();
}

// Share hymn functionality
function shareHymn(hymnId) {
    const hymn = getHymnById(hymnId);
    
    if (!hymn) return;
    
    if (navigator.share) {
        navigator.share({
            title: `Hymn ${hymn.number} - ${hymn.title}`,
            text: `Check out this Bemba hymn: ${hymn.title}`,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy link to clipboard
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Link copied to clipboard!');
        });
    }
}

// Format lyrics with line breaks
function formatLyrics(lyrics) {
    return lyrics.split('\n').map(line => {
        if (line.trim() === '') {
            return '<br>';
        }
        return `<p class="mb-2">${line}</p>`;
    }).join('');
}

// Get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Initialize page-specific functionality
if (document.querySelector('.all-hymns-page')) {
    loadAllHymns();
}

if (document.querySelector('.favorites-page')) {
    loadFavoritesPage();
}

// Load all hymns page
function loadAllHymns() {
    const hymns = getAllHymns();
    const container = document.getElementById('hymnsContainer');
    
    if (!container) return;
    
    let html = '';
    hymns.forEach(hymn => {
        html += createHymnCard(hymn);
    });
    
    container.innerHTML = html;
    updateFavoriteButtons();
}

// Create hymn card HTML
function createHymnCard(hymn) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="hymn-card">
                <div class="hymn-card-header">
                    <span class="hymn-number">${hymn.number}</span>
                    <button class="btn-favorite" onclick="toggleFavorite(${hymn.id})">
                        <i class="bi bi-heart"></i>
                    </button>
                </div>
                <h5 class="hymn-title">${hymn.title}</h5>
                <p class="hymn-preview">${hymn.lyrics.substring(0, 80)}...</p>
                <a href="ucz-bemba-hymn-${hymn.number}-${titleToSlug(hymn.title)}.html" class="btn btn-primary btn-sm">
                    View Hymn <i class="bi bi-arrow-right ms-1"></i>
                </a>
            </div>
        </div>
    `;
}

// Load favorites page
function loadFavoritesPage() {
    const favorites = getFavorites();
    const container = document.getElementById('favoritesContainer');
    
    if (!container) return;
    
    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-heart fs-1 text-muted mb-3"></i>
                <h3>No favorites yet</h3>
                <p class="text-muted">Start adding hymns to your favorites!</p>
                <a href="hymns.html" class="btn btn-primary mt-3">Browse Hymns</a>
            </div>
        `;
        return;
    }
    
    let html = '';
    favorites.forEach(hymnId => {
        const hymn = getHymnById(hymnId);
        if (hymn) {
            html += createHymnCard(hymn);
        }
    });
    
    container.innerHTML = html;
    updateFavoriteButtons();
}


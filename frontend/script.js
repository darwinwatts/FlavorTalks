// FlavorTalks - Main JavaScript File

// App State Management
class FlavorTalksApp {
    constructor() {
        this.currentPage = 'chat';
        this.isLoggedIn = false;
        this.conversations = [];
        this.currentUser = null;
        this.restaurants = [];
        this.foodCourts = [];
        this.init();
    }

    init() {
        this.checkAuthStatus();
        this.setupEventListeners();
        this.loadInitialData();
    }

// Authentication Management
checkAuthStatus() {
    const stored = localStorage.getItem('flavortalks_user');
    if (stored) {
        this.isLoggedIn = true;
        this.currentUser = JSON.parse(stored);
        this.showMainApp();
    } else {
        this.showAuthPage();
    }
}

showAuthPage() {
    document.getElementById('auth-page').style.display = 'block';
    document.getElementById('main-app').style.display = 'none';
}

showMainApp() {
    document.getElementById('auth-page').style.display = 'none';
    document.getElementById('main-app').style.display = 'flex';
}

handleAuth(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelector('input[type="password"]').value;
    
    // Simulate authentication
    setTimeout(() => {
        this.isLoggedIn = true;
        this.currentUser = {
            name: 'Alex Chen',
            email: email,
            cultural_background: ['Chinese', 'American'],
            preferences: {
                spiceLevel: 'high',
                budget: { min: 15, max: 50 },
                adventureLevel: 75
            }
        };
        
        localStorage.setItem('flavortalks_user', JSON.stringify(this.currentUser));
        this.showMainApp();
        this.updateUserInfo();
    }, 1000);
}

logout() {
    localStorage.removeItem('flavortalks_user');
    this.isLoggedIn = false;
    this.currentUser = null;
    this.showAuthPage();
}

// Navigation Management
navigateToPage(page) {
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-page="${page}"]`).classList.add('active');

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    // Show selected page
    document.getElementById(page).classList.add('active');

    // Update page title
    const titles = {
        'chat': 'FlavorTalks Chat',
        'discover': 'Discover Restaurants',
        'profile': 'Your Profile',
        'social': 'Food Courts',
        'cultural': 'Cultural Bridge'
    };
    document.getElementById('page-title').textContent = titles[page];

    this.currentPage = page;
    this.loadPageData(page);
}

// Chat Functionality
sendMessage() {
    const input = document.querySelector('.chat-input');
    const message = input.value.trim();
    
    if (!message) return;

    this.addMessage(message, 'user');
    input.value = '';
    input.style.height = 'auto';

    this.showTypingIndicator();
    
    // Simulate AI response
    setTimeout(() => {
        this.hideTypingIndicator();
        this.generateAIResponse(message);
    }, 2000);
}

addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    messageDiv.innerHTML = `
        <div>${text}</div>
        <div class="message-time">${timeString}</div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

generateAIResponse(userMessage) {
    const responses = this.getContextualResponse(userMessage);
    this.addMessage(responses.text, 'ai');
    
    if (responses.includeRestaurant) {
        setTimeout(() => {
            this.addRestaurantRecommendation();
        }, 1000);
    }
}

getContextualResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('chinese') || lowerMessage.includes('asian')) {
        return {
            text: "Perfect! I can see your Chinese heritage is important to you. Let me find restaurants that honor your cultural roots while offering exciting new experiences.",
            includeRestaurant: true
        };
    } else if (lowerMessage.includes('spicy') || lowerMessage.includes('hot')) {
        return {
            text: "I love that you enjoy bold flavors! Based on your Sichuan background, I'll find places that understand how to balance heat with complex flavors.",
            includeRestaurant: true
        };
    } else if (lowerMessage.includes('budget') || lowerMessage.includes('cheap')) {
        return {
            text: "Great food doesn't have to break the bank! I'll focus on hidden gems and authentic spots that offer amazing value.",
            includeRestaurant: true
        };
    } else {
        return {
            text: "I understand! Let me think about restaurants that would resonate with your cultural background and preferences.",
            includeRestaurant: Math.random() > 0.3
        };
    }
}

addRestaurantRecommendation() {
    const restaurants = [
        {
            emoji: '🍜',
            name: 'Golden Dragon Noodles',
            cuisine: 'Authentic Sichuan',
            rating: 4.8,
            reviews: 234,
            context: 'Hand-pulled noodles with the perfect mala flavor balance - just like home!'
        },
        {
            emoji: '🌮',
            name: 'Fusion Fiesta',
            cuisine: 'Chinese-Mexican',
            rating: 4.6,
            reviews: 156,
            context: 'Five-spice carnitas tacos that bridge your heritage with adventure!'
        },
        {
            emoji: '🍕',
            name: 'Wok & Roll Pizza',
            cuisine: 'Italian-Chinese Fusion',
            rating: 4.5,
            reviews: 89,
            context: 'Char siu pizza that somehow works perfectly - culinary innovation at its best!'
        }
    ];
    
    const restaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ai';
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    messageDiv.innerHTML = `
        <div>Here's a perfect match for you:</div>
        <div class="message-time">${timeString}</div>
        <div class="restaurant-card" onclick="app.openRestaurantDetails('${restaurant.name}')">
            <div class="restaurant-image">${restaurant.emoji}</div>
            <div class="restaurant-info">
                <div class="restaurant-name">${restaurant.name}</div>
                <div class="restaurant-cuisine">${restaurant.cuisine}</div>
                <div class="restaurant-rating">
                    <span class="stars">⭐⭐⭐⭐⭐</span>
                    <span>${restaurant.rating} (${restaurant.reviews} reviews)</span>
                </div>
                <div class="cultural-context">
                    <div class="cultural-context-title">
                        🌉 Cultural Bridge
                    </div>
                    <div>${restaurant.context}</div>
                </div>
            </div>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

showTypingIndicator() {
    const messagesContainer = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Restaurant Management
openRestaurantDetails(restaurantName) {
    alert(`Opening details for ${restaurantName}!\n\nThis would show:\n• Full menu with cultural context\n• Photos and reviews\n• Booking options\n• Cultural bridge explanations\n• Social features (save to food court)`);
}

// Food Court Management
createNewCourt() {
    const courtName = prompt('What would you like to name your new food court?');
    if (courtName) {
        const newCourt = {
            id: Date.now(),
            name: courtName,
            restaurants: [],
            isPublic: false,
            createdAt: new Date()
        };
        this.foodCourts.push(newCourt);
        this.saveFoodCourts();
        alert(`"${courtName}" food court created! You can now start adding restaurants to it.`);
        this.renderFoodCourts();
    }
}

openFoodCourt(courtId) {
    alert(`Opening ${courtId.replace('-', ' ')} food court!\n\nThis would show:\n• All restaurants in this collection\n• Options to add/remove restaurants\n• Sharing settings\n• Collaborative features`);
}

// Data Management
loadInitialData() {
    // Load food courts from localStorage
    const stored = localStorage.getItem('flavortalks_foodcourts');
    if (stored) {
        this.foodCourts = JSON.parse(stored);
    }
}

saveFoodCourts() {
    localStorage.setItem('flavortalks_foodcourts', JSON.stringify(this.foodCourts));
}

loadPageData(page) {
    switch(page) {
        case 'discover':
            this.loadDiscoverData();
            break;
        case 'profile':
            this.loadProfileData();
            break;
        case 'social':
            this.renderFoodCourts();
            break;
        case 'cultural':
            this.loadCulturalData();
            break;
    }
}

loadDiscoverData() {
    // Simulate loading restaurant data
    console.log('Loading discover page data...');
}

loadProfileData() {
    if (this.currentUser) {
        this.updateUserInfo();
    }
}

loadCulturalData() {
    // Simulate loading cultural bridge data
    console.log('Loading cultural bridge data...');
}

updateUserInfo() {
    if (!this.currentUser) return;
    
    // Update user avatar and name in sidebar
    const userInfo = document.querySelector('.user-info');
    if (userInfo) {
        userInfo.innerHTML = `
            <div class="user-avatar">👤</div>
            <div>
                <div style="font-weight: 600;">${this.currentUser.name}</div>
                <div style="font-size: 14px; opacity: 0.8;">Cultural Explorer</div>
            </div>
        `;
    }
}

renderFoodCourts() {
    // Update food courts display if on social page
    if (this.currentPage === 'social') {
        console.log('Rendering food courts...');
    }
}

// UI Helpers
toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

exploreCulturalBridge() {
    alert('🌉 Cultural Bridge Explorer\n\nThis would open an interactive experience showing:\n• Ingredient origins and migrations\n• Cooking technique similarities\n• Flavor profile connections\n• Historical cultural exchanges\n• Personal taste DNA analysis');
}

// Event Listeners Setup
setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const page = e.currentTarget.dataset.page;
            this.navigateToPage(page);
        });
    });

    // Auth form
    const authForm = document.getElementById('auth-form');
    if (authForm) {
        authForm.addEventListener('submit', (e) => this.handleAuth(e));
    }

    // Chat input
    const chatInput = document.querySelector('.chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Auto-resize chat input
        chatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 100) + 'px';
        });
    }

    // Send button
    const sendBtn = document.querySelector('.send-btn');
    if (sendBtn) {
        sendBtn.addEventListener('click', () => this.sendMessage());
    }

    // Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Header actions
    const newChatBtn = document.querySelector('.header-actions .btn-primary');
    if (newChatBtn && newChatBtn.textContent.includes('New Chat')) {
        newChatBtn.addEventListener('click', () => {
            document.getElementById('chat-messages').innerHTML = '';
            this.addMessage('👋 Hello! I\'m your cultural food guide. Tell me about your background and what you\'re craving today!', 'ai');
        });
    }

    // Logout functionality (if logout button exists)
    const logoutBtn = document.querySelector('[data-action="logout"]');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => this.logout());
    }
}

// Utility Functions
formatTime(date) {
    return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Simulate real-time features
    startRealTimeUpdates() {
        setInterval(() => {
            if (this.currentPage === 'chat' && Math.random() > 0.98) {
                const systemMessages = [
                    "💡 Tip: Try asking about restaurants near your current location!",
                    "🌟 New: Check out our Cultural Bridge feature!",
                    "👥 Your friend just shared a new food court with you!"
                ];
                const randomMessage = systemMessages[Math.floor(Math.random() * systemMessages.length)];
                this.addMessage(randomMessage, 'ai');
            }
        }, 30000);
    }
}

// Initialize the app
let app;

document.addEventListener('DOMContentLoaded', function() {
    app = new FlavorTalksApp();
    app.startRealTimeUpdates();

    // Add some initial chat messages
    setTimeout(() => {
        if (app.isLoggedIn) {
            const chatMessages = document.getElementById('chat-messages');
            if (chatMessages && chatMessages.children.length === 0) {
                app.addMessage('👋 Hello! I\'m your cultural food guide. Tell me about your background and what you\'re craving today!', 'ai');
            }
        }
    }, 1000);
});

// Global functions for onclick handlers
function createNewCourt() {
    app.createNewCourt();
}

function openFoodCourt(courtId) {
    app.openFoodCourt(courtId);
}

function openRestaurantDetails(name) {
    app.openRestaurantDetails(name);
}

function exploreCulturalBridge() {
    app.exploreCulturalBridge();
}

function toggleMobileMenu() {
    app.toggleMobileMenu();
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('auth-form');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      const password = form.querySelector('input[type="password"]').value;

      // Send to backend (adjust URL as needed)
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Success: redirect or show main app
        alert('Login successful!');
        // window.location.href = '/main.html'; // or show/hide app sections
      } else {
        alert('Login failed. Please check your credentials.');
      }
    });
  }
});
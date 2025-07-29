// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development",
        excerpt: "Exploring the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.",
        content: `
            <h2>The Future of Web Development</h2>
            <p>Web development is evolving at an unprecedented pace. As we look toward the future, several key trends are emerging that will shape how we build and interact with web applications.</p>
            
            <h3>AI-Powered Development</h3>
            <p>Artificial intelligence is revolutionizing how we approach web development. From code generation to automated testing, AI tools are becoming indispensable for modern developers.</p>
            
            <h3>Progressive Web Apps</h3>
            <p>PWAs continue to bridge the gap between web and native applications, offering users app-like experiences while maintaining the accessibility of the web.</p>
            
            <h3>WebAssembly and Performance</h3>
            <p>WebAssembly is opening new possibilities for high-performance web applications, allowing developers to run complex applications directly in the browser.</p>
            
            <p>The future of web development is bright, with new technologies making it easier than ever to create fast, accessible, and engaging web experiences.</p>
        `,
        category: "technology",
        date: "2025-01-20",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop"
    },
    {
        id: 2,
        title: "Minimalist Living: Less is More",
        excerpt: "Discover the art of minimalist living and how reducing clutter can lead to a more fulfilling and peaceful lifestyle.",
        content: `
            <h2>Minimalist Living: Less is More</h2>
            <p>In a world filled with constant stimulation and material excess, minimalism offers a refreshing approach to living. It's not just about having fewer possessions—it's about making room for what truly matters.</p>
            
            <h3>What is Minimalism?</h3>
            <p>Minimalism is a lifestyle that emphasizes intentional living. It's about removing the unnecessary to make space for the meaningful. This philosophy can be applied to every aspect of life, from your living space to your digital habits.</p>
            
            <h3>Benefits of Minimalist Living</h3>
            <ul>
                <li>Reduced stress and anxiety</li>
                <li>More time for meaningful activities</li>
                <li>Financial freedom through conscious spending</li>
                <li>Enhanced creativity and focus</li>
                <li>Environmental benefits</li>
            </ul>
            
            <h3>Getting Started</h3>
            <p>Start small. Choose one area of your life—perhaps your wardrobe or workspace—and begin the process of mindful reduction. Ask yourself: "Does this add value to my life?"</p>
            
            <p>Remember, minimalism isn't about deprivation. It's about abundance—abundance of time, peace, and joy that comes from living with intention.</p>
        `,
        category: "lifestyle",
        date: "2025-01-18",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=300&fit=crop"
    },
    {
        id: 3,
        title: "Hidden Gems of Southeast Asia",
        excerpt: "Uncover the breathtaking beauty and rich culture of Southeast Asia's lesser-known destinations that should be on every traveler's bucket list.",
        content: `
            <h2>Hidden Gems of Southeast Asia</h2>
            <p>While popular destinations like Bangkok, Bali, and Singapore draw millions of visitors, Southeast Asia is home to countless hidden gems waiting to be discovered.</p>
            
            <h3>Luang Prabang, Laos</h3>
            <p>This UNESCO World Heritage city sits at the confluence of the Mekong and Nam Khan rivers. Its golden temples, colonial architecture, and morning alms ceremony create an atmosphere of timeless tranquility.</p>
            
            <h3>Hoi An, Vietnam</h3>
            <p>Step into a living museum where tailor shops, lantern-lit streets, and ancient architecture tell stories of maritime trade routes that once connected East and West.</p>
            
            <h3>Palawan, Philippines</h3>
            <p>From the underground river in Puerto Princesa to the pristine beaches of El Nido, Palawan offers some of the world's most stunning natural beauty.</p>
            
            <h3>Yogyakarta, Indonesia</h3>
            <p>The cultural heart of Java, where ancient temples like Borobudur and Prambanan stand alongside vibrant street art and traditional batik workshops.</p>
            
            <p>Each destination offers unique experiences that showcase the incredible diversity and beauty of Southeast Asian culture.</p>
        `,
        category: "travel",
        date: "2025-01-15",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=300&fit=crop"
    },
    {
        id: 4,
        title: "The Art of Coffee: From Bean to Cup",
        excerpt: "Journey through the fascinating world of coffee, from its origins to the perfect brewing methods that bring out the best flavors.",
        content: `
            <h2>The Art of Coffee: From Bean to Cup</h2>
            <p>Coffee is more than just a morning ritual—it's a craft, a culture, and for many, a passion. Understanding the journey from bean to cup can transform your daily coffee experience.</p>
            
            <h3>Origins and Varieties</h3>
            <p>Coffee grows in the "coffee belt" between 25°N and 30°S latitude. The two main species are Arabica (known for its smooth, sweet flavor) and Robusta (stronger and more bitter, with higher caffeine content).</p>
            
            <h3>Processing Methods</h3>
            <p>How coffee beans are processed after harvesting dramatically affects their flavor:</p>
            <ul>
                <li><strong>Washed:</strong> Clean, bright flavors</li>
                <li><strong>Natural:</strong> Fruity, sweet characteristics</li>
                <li><strong>Honey:</strong> Balanced sweetness and body</li>
            </ul>
            
            <h3>Brewing Techniques</h3>
            <p>Different brewing methods extract different flavors from the same beans:</p>
            <ul>
                <li><strong>Pour Over:</strong> Clean, nuanced flavors</li>
                <li><strong>French Press:</strong> Full body, rich oils</li>
                <li><strong>Espresso:</strong> Concentrated, intense flavor</li>
                <li><strong>Cold Brew:</strong> Smooth, low acidity</li>
            </ul>
            
            <h3>The Perfect Cup</h3>
            <p>Great coffee starts with fresh, quality beans, proper grind size, correct water temperature (195-205°F), and the right brewing time. Experiment to find your perfect combination!</p>
        `,
        category: "food",
        date: "2025-01-12",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=300&fit=crop"
    },
    {
        id: 5,
        title: "Building Sustainable Habits",
        excerpt: "Learn practical strategies for creating lasting positive changes in your life through the power of small, consistent actions.",
        content: `
            <h2>Building Sustainable Habits</h2>
            <p>The key to lasting change isn't willpower—it's systems. Building sustainable habits requires understanding the psychology behind behavior change and implementing strategies that work with, not against, human nature.</p>
            
            <h3>The Habit Loop</h3>
            <p>Every habit consists of three components:</p>
            <ul>
                <li><strong>Cue:</strong> The trigger that initiates the behavior</li>
                <li><strong>Routine:</strong> The behavior itself</li>
                <li><strong>Reward:</strong> The benefit you gain from doing the behavior</li>
            </ul>
            
            <h3>Start Small</h3>
            <p>The biggest mistake people make is trying to change too much too quickly. Instead, focus on tiny habits that are so easy you can't say no. Want to read more? Start with just one page per day.</p>
            
            <h3>Stack Your Habits</h3>
            <p>Link new habits to existing ones. After I pour my morning coffee, I will write in my journal. This technique leverages the established routine to anchor the new behavior.</p>
            
            <h3>Focus on Identity</h3>
            <p>Instead of saying "I want to run a marathon," say "I am a runner." Small wins reinforce your new identity, making the habit sustainable long-term.</p>
            
            <p>Remember: You don't rise to the level of your goals; you fall to the level of your systems.</p>
        `,
        category: "lifestyle",
        date: "2025-01-10",
        image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600&h=300&fit=crop"
    },
    {
        id: 6,
        title: "The Rise of Sustainable Technology",
        excerpt: "Exploring how technology companies are innovating to create more environmentally friendly solutions for our digital future.",
        content: `
            <h2>The Rise of Sustainable Technology</h2>
            <p>As climate consciousness grows, the tech industry is responding with innovative solutions that prioritize environmental sustainability alongside technological advancement.</p>
            
            <h3>Green Data Centers</h3>
            <p>Major tech companies are revolutionizing data center design with renewable energy, advanced cooling systems, and AI-optimized power management, reducing energy consumption by up to 40%.</p>
            
            <h3>Circular Design Principles</h3>
            <p>The concept of circular economy is being applied to technology design, focusing on:</p>
            <ul>
                <li>Modular devices that can be easily repaired</li>
                <li>Materials that can be fully recycled</li>
                <li>Extended product lifecycles through software updates</li>
            </ul>
            
            <h3>Carbon-Neutral Computing</h3>
            <p>Cloud computing providers are investing heavily in carbon-neutral operations, with some aiming for carbon-negative status by 2030.</p>
            
            <h3>The Role of AI</h3>
            <p>Artificial intelligence is being deployed to optimize energy usage across industries, from smart grid management to predictive maintenance that reduces waste.</p>
            
            <p>The future of technology isn't just about what we can build—it's about building responsibly for the planet we all share.</p>
        `,
        category: "technology",
        date: "2025-01-08",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=300&fit=crop"
    }
];

// State management
let currentPosts = [];
let displayedPosts = 0;
let postsPerPage = 3;
let currentCategory = 'all';
let currentSearchTerm = '';

// DOM elements
const blogContainer = document.getElementById('blogContainer');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryList = document.getElementById('categoryList');
const recentPosts = document.getElementById('recentPosts');
const postModal = document.getElementById('postModal');
const modalContent = document.getElementById('modalContent');
const themeToggle = document.getElementById('themeToggle');

// Initialize the blog
document.addEventListener('DOMContentLoaded', function() {
    initializeBlog();
    setupEventListeners();
    loadTheme();
});

function initializeBlog() {
    currentPosts = [...blogPosts];
    displayedPosts = 0;
    loadPosts();
    populateRecentPosts();
}

function setupEventListeners() {
    // Load more posts
    loadMoreBtn.addEventListener('click', loadPosts);
    
    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Category filtering
    categoryList.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const category = e.target.dataset.category;
            filterByCategory(category);
            
            // Update active category
            document.querySelectorAll('#categoryList a').forEach(link => 
                link.classList.remove('active')
            );
            e.target.classList.add('active');
        }
    });
    
    // Modal functionality
    postModal.addEventListener('click', function(e) {
        if (e.target === postModal || e.target.classList.contains('close')) {
            closeModal();
        }
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

function loadPosts() {
    const postsToShow = currentPosts.slice(displayedPosts, displayedPosts + postsPerPage);
    
    postsToShow.forEach(post => {
        const postElement = createPostElement(post);
        blogContainer.appendChild(postElement);
    });
    
    displayedPosts += postsToShow.length;
    
    // Hide load more button if all posts are displayed
    if (displayedPosts >= currentPosts.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
    
    // Initialize observation for new posts
    initializePostsObservation();
}

function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post-card';
    postDiv.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="post-image" loading="lazy">
        <div class="post-content">
            <div class="post-meta">
                <span class="post-category">${post.category}</span>
                <span class="post-date">${formatDate(post.date)}</span>
            </div>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more" data-post-id="${post.id}">Read More →</a>
        </div>
    `;
    
    // Add click event for opening modal
    postDiv.addEventListener('click', function(e) {
        if (e.target.classList.contains('read-more')) {
            e.preventDefault();
            openModal(post);
        } else {
            openModal(post);
        }
    });
    
    return postDiv;
}

function openModal(post) {
    modalContent.innerHTML = `
        <div class="post-meta">
            <span class="post-category">${post.category}</span>
            <span class="post-date">${formatDate(post.date)}</span>
        </div>
        ${post.content}
    `;
    postModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    postModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    currentSearchTerm = searchTerm;
    
    if (searchTerm === '') {
        resetPosts();
        return;
    }
    
    currentPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm)
    );
    
    resetDisplay();
}

function filterByCategory(category) {
    currentCategory = category;
    
    if (category === 'all') {
        currentPosts = [...blogPosts];
    } else {
        currentPosts = blogPosts.filter(post => post.category === category);
    }
    
    // Apply search filter if active
    if (currentSearchTerm) {
        currentPosts = currentPosts.filter(post => 
            post.title.toLowerCase().includes(currentSearchTerm) ||
            post.excerpt.toLowerCase().includes(currentSearchTerm) ||
            post.content.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    resetDisplay();
}

function resetPosts() {
    currentSearchTerm = '';
    searchInput.value = '';
    filterByCategory(currentCategory);
}

function resetDisplay() {
    blogContainer.innerHTML = '';
    displayedPosts = 0;
    loadPosts();
}

function populateRecentPosts() {
    const recent = blogPosts.slice(0, 4);
    recentPosts.innerHTML = recent.map(post => `
        <li>
            <a href="#" data-post-id="${post.id}">${post.title}</a>
            <small>${formatDate(post.date)}</small>
        </li>
    `).join('');
    
    // Add click events for recent posts
    recentPosts.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const postId = parseInt(e.target.dataset.postId);
            const post = blogPosts.find(p => p.id === postId);
            if (post) {
                openModal(post);
            }
        }
    });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Smooth scroll to top when clicking logo
document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add some loading animation
function showLoading() {
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.disabled = true;
}

function hideLoading() {
    loadMoreBtn.textContent = 'Load More Posts';
    loadMoreBtn.disabled = false;
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe post cards for animation
function observeNewPosts() {
    document.querySelectorAll('.post-card').forEach(card => {
        observer.observe(card);
    });
}

// Initialize posts observation
function initializePostsObservation() {
    setTimeout(observeNewPosts, 100);
}

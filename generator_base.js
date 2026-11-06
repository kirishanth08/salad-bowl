/**
 * BOWL'D — Static Site Generator for 27 Pages
 * Pure Vanilla HTML5, CSS3, JS Template Architect
 */

const fs = require('fs');
const path = require('path');

// Common Head Generator
function getHead(title, description, isDashboard = false) {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Bowl'd — Fresh Salad & Healthy Bowl Cafe</title>
  <meta name="description" content="${description}">
  <meta name="theme-color" content="#499A13">
  
  <!-- Open Graph Metadata -->
  <meta property="og:title" content="${title} | Bowl'd">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="assets/images/favicon.svg">
  
  <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
  <link rel="stylesheet" href="assets/css/style.css">
  ${isDashboard ? '<link rel="stylesheet" href="assets/css/dashboard.css">' : ''}
</head>
<body${isDashboard ? ' class="dashboard-body"' : ''}>`;
}

// Global Navbar (identical on every public page)
function getNavbar(activePage) {
  return `
  <!-- Global Top Header & Sticky Navigation -->
  <header class="site-header">
    <div class="container navbar-container">
      <a href="index.html" class="navbar-brand" aria-label="Bowl'd Home">
        <img src="assets/images/logo.svg" alt="Bowl'd Fresh Salads & Bowls Logo" width="168" height="38">
      </a>
      
      <!-- Primary Navigation Links -->
      <nav class="navbar-nav" aria-label="Main Navigation">
        <div class="nav-item nav-dropdown">
          <a href="index.html" class="nav-link dropdown-toggle ${(activePage === 'home' || activePage === 'home-2') ? 'active' : ''}" role="button" aria-expanded="false">
            Home
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="dropdown-chevron"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <div class="dropdown-menu">
            <a href="index.html" class="dropdown-item ${activePage === 'home' ? 'active' : ''}">
              <div class="dropdown-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div class="dropdown-item-text">
                <div class="dropdown-item-title">Home 1 (Signature)</div>
                <div class="dropdown-item-desc">Fresh favorites, bases, &amp; subscriptions</div>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="dropdown-item-arrow"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
            <a href="home-2.html" class="dropdown-item ${activePage === 'home-2' ? 'active' : ''}">
              <div class="dropdown-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 1 10 10c0 4.5-3 8-7 9.5V18a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3.5C5 20 2 16.5 2 12A10 10 0 0 1 12 2z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="dropdown-item-text">
                <div class="dropdown-item-title">Home 2 (Editorial &amp; Builder)</div>
                <div class="dropdown-item-desc">Interactive kitchen bowl creator</div>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="dropdown-item-arrow"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
            <div class="dropdown-menu-footer">
              <span class="dropdown-footer-tag">NEW</span>
              <span>Try our live interactive bowl kitchen!</span>
            </div>
          </div>
        </div>
        <div class="nav-item">
          <a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">About</a>
        </div>
        <div class="nav-item">
          <a href="menu.html" class="nav-link ${activePage === 'menu' ? 'active' : ''}">Menu</a>
        </div>
        <div class="nav-item">
          <a href="meal-plans.html" class="nav-link ${activePage === 'plans' ? 'active' : ''}">Meal Plans</a>
        </div>
        <div class="nav-item">
          <a href="blog.html" class="nav-link ${activePage === 'blog' ? 'active' : ''}">Blog</a>
        </div>
        <div class="nav-item">
          <a href="contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
        </div>
      </nav>
      
      <!-- Navbar Controls: Theme, Direction, Portal & CTA -->
      <div class="navbar-actions">
        <button type="button" class="theme-toggle-btn" aria-label="Toggle theme">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <button type="button" class="rtl-toggle-btn" title="Toggle LTR/RTL Layout" aria-label="Toggle text direction">
          RTL
        </button>
        <a href="dashboard.html" class="portal-btn" title="Subscriber Dashboard" aria-label="Subscriber Portal">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </a>
        <a href="login.html" class="btn btn-sm nav-login-btn">Log In</a>
        <a href="meal-plans.html" class="btn btn-primary btn-sm nav-subscribe-btn">Subscribe Now</a>
        <button type="button" class="mobile-nav-toggle" aria-label="Open mobile navigation menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      <!-- Simple Mobile Navigation Dropdown (Exact Navbar Links Only) -->
      <div class="mobile-nav-dropdown" id="mobile-nav-dropdown">
        <a href="index.html" class="mobile-dropdown-link ${activePage === 'home' ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Home</span>
        </a>
        <a href="about.html" class="mobile-dropdown-link ${activePage === 'about' ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <span>About</span>
        </a>
        <a href="menu.html" class="mobile-dropdown-link ${activePage === 'menu' ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>
          <span>Menu</span>
        </a>
        <a href="meal-plans.html" class="mobile-dropdown-link ${activePage === 'plans' ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>Meal Plans</span>
        </a>
        <a href="blog.html" class="mobile-dropdown-link ${activePage === 'blog' ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          <span>Blog</span>
        </a>
        <a href="contact.html" class="mobile-dropdown-link ${activePage === 'contact' ? 'active' : ''}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Contact</span>
        </a>
        <div class="mobile-dropdown-actions">
          <a href="login.html" class="btn btn-sm mobile-dropdown-login">Log In</a>
          <a href="meal-plans.html" class="btn btn-primary btn-sm mobile-dropdown-cta">Subscribe Now</a>
        </div>
      </div>
    </div>
  </header>`;
}

// Global Footer (identical on every public page)
function getFooter() {
  return `
  <!-- Global Footer -->
  <footer class="site-footer">
    <!-- Footer CTA Strip -->
    <div class="footer-cta-strip">
      <div class="container">
        <h2 class="footer-cta-title">MAKE FRESHNESS YOUR EVERYDAY HABIT.</h2>
        <p class="footer-cta-desc">Join our thriving community of healthy eaters enjoying crisp, chef-crafted organic bowls delivered on your schedule.</p>
        <a href="meal-plans.html" class="btn btn-primary btn-lg">Explore Meal Plans</a>
      </div>
    </div>
    
    <!-- Main Footer Body -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Brand & Bio -->
          <div class="footer-brand">
            <a href="index.html" aria-label="Bowl'd Home">
              <img src="assets/images/logo.svg" alt="Bowl'd Logo" width="168" height="38">
            </a>
            <p>Fresh Choices. Full of Life. Handcrafted salads, wholesome grain bowls, and flexible weekly meal subscriptions made with locally-sourced organic produce.</p>
            <div class="footer-socials">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
          
          <!-- Col 2: Quick Links -->
          <div>
            <h3 class="footer-col-title">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="index.html">Home (Signature)</a></li>
              <li><a href="home-2.html">Home 2 (Editorial &amp; Builder)</a></li>
              <li><a href="about.html">Our Story</a></li>
              <li><a href="home-2.html#build-bowl">Custom Bowl Builder</a></li>
              <li><a href="nutrition.html">Nutrition Library</a></li>
              <li><a href="blog.html">Wellness Blog</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          
          <!-- Col 3: Menu Categories -->
          <div>
            <h3 class="footer-col-title">Menu Categories</h3>
            <ul class="footer-links">
              <li><a href="menu.html">Signature Bowls</a></li>
              <li><a href="menu.html">Warm Grain Bases</a></li>
              <li><a href="menu.html">Crisp Leafy Greens</a></li>
              <li><a href="menu.html">Lean Plant & Poultry Proteins</a></li>
              <li><a href="menu.html">Artisan Dressings</a></li>
              <li><a href="menu.html">Cold-Pressed Juices</a></li>
            </ul>
          </div>
          
          <!-- Col 4: Subscriber Portal -->
          <div>
            <h3 class="footer-col-title">Subscriber Portal</h3>
            <ul class="footer-links">
              <li><a href="dashboard.html">Subscriber Dashboard</a></li>
              <li><a href="my-meal-plan.html">My Meal Plan</a></li>
              <li><a href="weekly-bowl-selection.html">Weekly Bowl Tray</a></li>
              <li><a href="delivery-schedule.html">Delivery Schedule</a></li>
              <li><a href="pause-delivery.html">Pause / Skip Delivery</a></li>
              <li><a href="login.html">Subscriber Sign In</a></li>
              <li><a href="register.html">Create New Account</a></li>
            </ul>
          </div>
          
          <!-- Col 5: Visit Us & Hours -->
          <div>
            <h3 class="footer-col-title">Visit & Subscribe</h3>
            <p class="footer-contact-info">
              <strong>Bowl'd Cafe Downtown</strong><br>
              124 Harvest Green Way, Suite 100<br>
              Open Daily: 8:00 AM – 9:00 PM<br>
              Phone: (555) 345-BOWL
            </p>
            <div class="footer-newsletter">
              <p>Receive fresh weekly menu drops & 15% off your first subscription order.</p>
              <form class="newsletter-form">
                <input type="email" class="newsletter-input" placeholder="Enter your email" required aria-label="Email address">
                <button type="submit" class="btn btn-lime btn-sm">Join</button>
              </form>
            </div>
          </div>
        </div>
        
        <!-- Bottom Row -->
        <div class="footer-bottom">
          <div>
            &copy; 2026 BOWL'D Cafe & Subscriptions. All rights reserved. Sample demonstration frontend template.
          </div>
          <div class="footer-legal-links">
            <a href="nutrition.html">Nutrition & Allergen Info</a>
            <a href="contact.html">Privacy Policy</a>
            <a href="meal-plans.html">Subscription Terms</a>
            <a href="404.html">404 Error Page</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  <script src="assets/js/main.js"></script>
</body>
</html>`;
}

// Global Dashboard Layout (for pages 16 to 24)
function getDashboardLayout(activePage, pageTitle, content) {
  const sidebarLinks = [
    { id: 'overview', url: 'dashboard.html', label: 'Overview', icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
    { id: 'plan', url: 'my-meal-plan.html', label: 'My Meal Plan', icon: '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>' },
    { id: 'selection', url: 'weekly-bowl-selection.html', label: 'Weekly Bowl Selection', icon: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>' },
    { id: 'schedule', url: 'delivery-schedule.html', label: 'Delivery Schedule', icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>' },
    { id: 'pause', url: 'pause-delivery.html', label: 'Pause Delivery', icon: '<circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/>' },
    { id: 'nutrition', url: 'nutrition-history.html', label: 'Nutrition History', icon: '<path d="M18 20V10M12 20V4M6 20v-6"/>' },
    { id: 'payment', url: 'payment-history.html', label: 'Payment History', icon: '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>' },
    { id: 'manage', url: 'manage-subscription.html', label: 'Manage Subscription', icon: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>' },
    { id: 'profile', url: 'profile.html', label: 'Profile Settings', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
    { id: 'logout', url: 'login.html', label: 'Sign Out', isLogout: true, icon: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>' }
  ];

  return `
  <div class="dashboard-wrapper">
    <div class="dash-sidebar-backdrop"></div>
    <!-- Sidebar -->
    <aside class="dashboard-sidebar">
      <div class="sidebar-header">
        <a href="index.html" class="sidebar-brand">
          <img src="assets/images/logo.svg" alt="Bowl'd Logo" width="168" height="38">
        </a>
        <span class="subscriber-pill">PRO</span>
      </div>
      
      <div class="sidebar-menu">
        ${sidebarLinks.map(link => `
          <a href="${link.url}" class="sidebar-link ${link.isLogout ? 'dash-logout-link' : ''} ${activePage === link.id ? 'active' : ''}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${link.icon}</svg>
            <span>${link.label}</span>
          </a>
        `).join('')}
      </div>
      
      <div class="sidebar-footer">
        <a href="profile.html" class="user-mini-card">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Alex Morgan" class="user-avatar">
          <div class="user-info">
            <div class="user-name" id="sidebar-user-name">Alex Morgan</div>
            <div class="user-plan">Balanced Week (5 Bowls)</div>
          </div>
        </a>
      </div>
    </aside>
    
    <!-- Main Content Area -->
    <main class="dashboard-main">
      <!-- Topbar -->
      <header class="dashboard-topbar">
        <div style="display:flex; align-items:center; gap:1rem;">
          <button type="button" class="dash-mobile-sidebar-toggle mobile-nav-toggle" aria-label="Toggle navigation drawer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
          <div class="topbar-greeting">
            <h2>HELLO, <span id="topbar-user-greeting">ALEX</span>! READY FOR A FRESH WEEK?</h2>
            <div class="topbar-subtitle">Demo Subscriber Account &bull; Next Delivery: Wednesday, 10:00 AM</div>
          </div>
        </div>
        
        <div class="topbar-actions">
          <a href="index.html" class="btn btn-outline btn-sm" style="display:inline-flex; align-items:center; gap:0.4rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            View Public Site
          </a>
          <button type="button" class="theme-toggle-btn" aria-label="Toggle theme">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
          <button type="button" class="rtl-toggle-btn" title="Toggle RTL">RTL</button>
        </div>
      </header>
      
      <!-- Content Container -->
      <div class="dashboard-content">
        ${content}
      </div>
    </main>
  </div>
  
  <script src="assets/js/main.js"></script>
  <script src="assets/js/dashboard.js"></script>
</body>
</html>`;
}

module.exports = { getHead, getNavbar, getFooter, getDashboardLayout };


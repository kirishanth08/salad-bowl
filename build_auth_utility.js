const fs = require('fs');
const { getHead, getNavbar, getFooter } = require('./generator_base');

// 13. login.html (7 Sections)
const loginHtml = `${getHead("Subscriber Sign In", "Access your Bowl'd subscriber portal to customize weekly bowls, adjust deliveries, and track nutrition.")}
<div class="auth-page-wrapper hero-bg-pumpkin">
  <header class="auth-top-nav">
    <div class="auth-top-actions">
      <button type="button" class="theme-toggle-btn" aria-label="Toggle theme">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
      <button type="button" class="rtl-toggle-btn" title="Toggle LTR/RTL Layout" aria-label="Toggle text direction">RTL</button>
    </div>
  </header>

  <main class="auth-card-container">
    <div class="auth-card-header">
      <a href="index.html" class="auth-brand" aria-label="Bowl'd Homepage">
        <img src="assets/images/logo.svg" alt="Bowl'd Logo" width="168" height="38">
      </a>
      <h1 class="auth-title">Welcome Back</h1>
      <p class="auth-subtitle">Sign in to your subscriber portal to select weekly meals and manage delivery</p>
    </div>

    <!-- Inline Success Alert -->
    <div id="login-alert" class="auth-success-alert" style="display:none;" role="alert">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>Login successful!</span>
    </div>

    <!-- Social Sign In Options: Google & Apple -->
    <div class="auth-social-group">
      <button type="button" class="btn-social btn-google" onclick="handleSocialAuth('Google')">
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
        <span>Continue with Google</span>
      </button>
      <button type="button" class="btn-social btn-apple" onclick="handleSocialAuth('Apple')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.36c.64-.78 1.08-1.86.96-2.95-1 .04-2.16.66-2.84 1.45-.58.67-1.1 1.77-.96 2.83 1.12.09 2.22-.57 2.84-1.33z"/>
        </svg>
        <span>Continue with Apple</span>
      </button>
    </div>

    <div class="auth-divider">
      <span>or continue with email</span>
    </div>

    <!-- Login Form -->
    <form id="login-form">
      <div class="form-group">
        <label class="form-label" for="login-email">Email Address</label>
        <input type="email" id="login-email" class="form-control" value="alex@bowldcafe.com" placeholder="name@domain.com" required>
      </div>

      <div class="form-group">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
          <label class="form-label" for="login-password" style="margin:0;">Password</label>
          <a href="forgot-password.html" style="font-size:0.82rem; color:var(--primary-green); font-weight:700;">Forgot Password?</a>
        </div>
        <div class="password-input-wrap">
          <input type="password" id="login-password" class="form-control" value="DemoPassword123" placeholder="Enter password" required>
          <button type="button" class="password-toggle-btn" aria-label="Toggle password visibility">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>

      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1.5rem;">
        <label style="display:flex; align-items:center; gap:0.5rem; font-size:0.88rem; cursor:pointer;">
          <input type="checkbox" checked> Remember this device
        </label>
      </div>

      <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">Sign In</button>
    </form>

    <div class="auth-switch-footer">
      Don't have an account yet? <a href="register.html">Sign Up</a>
    </div>
  </main>
</div>
<script src="assets/js/main.js"></script>
<script src="assets/js/auth.js"></script>
</body>
</html>`;

const registerHtml = `${getHead("Create Your Account", "Sign up for a Bowl'd subscription account to enjoy fresh salad and grain bowls delivered weekly.")}
<div class="auth-page-wrapper hero-bg-carrots">
  <header class="auth-top-nav">
    <div class="auth-top-actions">
      <button type="button" class="theme-toggle-btn" aria-label="Toggle theme">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
      <button type="button" class="rtl-toggle-btn" title="Toggle LTR/RTL Layout" aria-label="Toggle text direction">RTL</button>
    </div>
  </header>

  <main class="auth-card-container">
    <div class="auth-card-header">
      <a href="index.html" class="auth-brand" aria-label="Bowl'd Homepage">
        <img src="assets/images/logo.svg" alt="Bowl'd Logo" width="168" height="38">
      </a>
      <h1 class="auth-title">Create Account</h1>
      <p class="auth-subtitle">Join thousands enjoying chef-crafted healthy bowls delivered weekly</p>
    </div>

    <!-- Social Sign Up Options: Google & Apple -->
    <div class="auth-social-group">
      <button type="button" class="btn-social btn-google" onclick="handleSocialAuth('Google')">
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
        <span>Sign up with Google</span>
      </button>
      <button type="button" class="btn-social btn-apple" onclick="handleSocialAuth('Apple')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.36c.64-.78 1.08-1.86.96-2.95-1 .04-2.16.66-2.84 1.45-.58.67-1.1 1.77-.96 2.83 1.12.09 2.22-.57 2.84-1.33z"/>
        </svg>
        <span>Sign up with Apple</span>
      </button>
    </div>

    <div class="auth-divider">
      <span>or register with email</span>
    </div>

    <!-- Registration Form -->
    <form id="register-form">
      <div class="form-group">
        <label class="form-label" for="reg-name">Full Name *</label>
        <input type="text" id="reg-name" class="form-control" placeholder="Alex Morgan" required>
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-email">Email Address *</label>
        <input type="email" id="reg-email" class="form-control" placeholder="alex@example.com" required>
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-phone">Phone Number (Delivery SMS) *</label>
        <input type="tel" id="reg-phone" class="form-control" placeholder="(555) 234-5678" required>
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-password">Create Password *</label>
        <div class="password-input-wrap">
          <input type="password" id="reg-password" class="form-control" placeholder="At least 8 characters" required>
          <button type="button" class="password-toggle-btn" aria-label="Toggle password visibility">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="reg-confirm">Confirm Password *</label>
        <div class="password-input-wrap">
          <input type="password" id="reg-confirm" class="form-control" placeholder="Re-type password" required>
          <button type="button" class="password-toggle-btn" aria-label="Toggle password visibility">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>
      </div>

      <div style="margin-bottom:1.5rem;">
        <label style="display:flex; align-items:flex-start; gap:0.6rem; font-size:0.85rem; cursor:pointer;">
          <input type="checkbox" required style="margin-top:0.2rem;">
          <span>I agree to Bowl'd <a href="meal-plans.html" style="color:var(--primary-green); font-weight:700;">Subscription Terms</a> and <a href="contact.html" style="color:var(--primary-green); font-weight:700;">Privacy Policy</a>.</span>
        </label>
      </div>

      <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">Create Account</button>
    </form>

    <div class="auth-switch-footer">
      Already have an account? <a href="login.html">Log In</a>
    </div>
  </main>
</div>
<script src="assets/js/main.js"></script>
<script src="assets/js/auth.js"></script>
</body>
</html>`;

// 15. forgot-password.html (7 Sections)
const forgotPasswordHtml = `${getHead("Reset Your Password", "Recover your Bowl'd account password quickly via email.")}
${getNavbar('')}
<main>
  <!-- Section 1: Hero -->
  <section class="hero-section hero-bg-cauliflower" style="padding: 3.5rem 0 2rem;">
    <div class="container container-sm text-center">
      <span class="badge-tag badge-tag-lime">Account Recovery</span>
      <h1 class="hero-title" style="font-size:clamp(2rem, 3.5vw, 2.8rem);">RESET YOUR PASSWORD</h1>
      <p class="hero-desc" style="margin-inline:auto;">Enter your registered account email and we will send you a secure password reset link.</p>
    </div>
  </section>

  <!-- Section 2: Form -->
  <section class="section-white">
    <div class="container container-sm">
      <div class="dash-panel" style="padding:2.5rem; max-width:480px; margin:0 auto; box-shadow:var(--shadow-md);">
        <form id="forgot-form">
          <div class="form-group">
            <label class="form-label" for="forgot-email">Account Email Address</label>
            <input type="email" id="forgot-email" class="form-control" placeholder="name@domain.com" required>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width:100%; margin-top:0.5rem;">Send Password Reset Link</button>
        </form>

        <div id="forgot-success-msg" style="display:none; margin-top:1.5rem; background:var(--light-green-bg); padding:1rem; border-radius:var(--radius-md); text-align:center; border:1px solid var(--fresh-green);">
          <strong style="color:var(--deep-green); display:block; margin-bottom:0.2rem;">Demo Reset Email Dispatched!</strong>
          <span style="font-size:0.82rem; color:var(--muted-text);">In a production backend, a secure token would be delivered to your inbox.</span>
        </div>

        <div style="text-align:center; margin-top:2rem; padding-top:1.5rem; border-top:1px solid var(--border-subtle); font-size:0.92rem;">
          Remembered your password? <a href="login.html" style="font-weight:700; color:var(--primary-green);">Back to Sign In</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Recovery Steps -->
  <section class="section-tint">
    <div class="container container-sm">
      <div class="section-header">
        <span class="badge-tag">Simple Process</span>
        <h2 class="section-title">HOW PASSWORD RESET WORKS</h2>
      </div>
      <div class="grid-3">
        <div class="dash-panel" style="margin:0; text-align:center;">
          <div class="step-num" style="margin:0 auto 0.8rem;">1</div>
          <h4>Submit Email</h4>
          <p style="font-size:0.82rem; color:var(--muted-text);">Enter your subscriber email address.</p>
        </div>
        <div class="dash-panel" style="margin:0; text-align:center;">
          <div class="step-num" style="margin:0 auto 0.8rem;">2</div>
          <h4>Check Inbox</h4>
          <p style="font-size:0.82rem; color:var(--muted-text);">Click the 1-time secure link.</p>
        </div>
        <div class="dash-panel" style="margin:0; text-align:center;">
          <div class="step-num" style="margin:0 auto 0.8rem;">3</div>
          <h4>New Password</h4>
          <p style="font-size:0.82rem; color:var(--muted-text);">Access your dashboard immediately.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Security Guidance -->
  <section class="section-white">
    <div class="container container-sm">
      <div class="section-header">
        <span class="badge-tag">Account Safety</span>
        <h2 class="section-title">SECURITY TIPS FOR YOUR ACCOUNT</h2>
      </div>
      <div class="grid-2">
        <div class="dash-panel" style="margin:0;">
          <h4>Use 12+ Characters</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.3rem;">Combine letters, numbers, and symbols to ensure maximum account safety.</p>
        </div>
        <div class="dash-panel" style="margin:0;">
          <h4>Delivery SMS Protection</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.3rem;">Never share verification PINs with anyone claiming to be a courier.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Common Recovery FAQs -->
  <section class="section-tint">
    <div class="container container-sm">
      <div class="accordion">
        <div class="accordion-item active">
          <div class="accordion-header">
            <span>What if I no longer have access to my email?</span>
            <span class="accordion-icon">&#9660;</span>
          </div>
          <div class="accordion-content">
            <p>Call our subscriber concierge desk directly at (555) 345-BOWL with your delivery address to verify your account.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Support Contact -->
  <section class="section-white" style="padding:2.5rem 0;">
    <div class="container container-sm text-center">
      <p style="font-size:0.9rem; color:var(--muted-text);">Need help immediately? Contact our support line at <strong>(555) 345-BOWL</strong> or visit our <a href="contact.html">Contact Page</a>.</p>
    </div>
  </section>

  <!-- Section 7: Back to Home -->
  <section class="section-tint" style="text-align:center; padding:4rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Navigation</span>
      <h3 class="section-title" style="font-size:1.6rem; margin-bottom:0.5rem;">Return to Bowl'd Homepage</h3>
      <p class="section-subtitle" style="font-size:0.95rem; margin-bottom:1.5rem; color:var(--muted-text);">Explore our seasonal fresh salads and bowls.</p>
      <a href="index.html" class="btn btn-primary btn-sm">Return Home</a>
    </div>
  </section>
</main>
<script src="assets/js/auth.js"></script>
${getFooter()}`;

// 25. 404.html (7 Sections)
const notFoundHtml = `${getHead("Page Not Found (404)", "This bowl isn't on the menu. Explore our fresh options or return home.")}
${getNavbar('')}
<main>
  <!-- Section 1: Error Hero -->
  <section class="hero-section hero-bg-watermelonradish" style="padding: 5rem 0 3rem;">
    <div class="container text-center">
      <div style="font-size:5rem; line-height:1; margin-bottom:1rem;">🥗💨</div>
      <span class="badge-tag badge-tag-lime">Error 404</span>
      <h1 class="hero-title" style="margin-bottom:1rem;">THIS BOWL ISN'T ON THE MENU.</h1>
      <p class="hero-desc" style="margin-inline:auto; max-width:600px;">
        Looks like the page you are searching for was either eaten, moved, or never existed in our kitchen. Let's get you back to something delicious.
      </p>
      <div class="btn-group" style="justify-content:center; margin-top:1.5rem;">
        <a href="index.html" class="btn btn-primary btn-lg">Return to Homepage</a>
        <a href="menu.html" class="btn btn-outline btn-lg">Browse Menu</a>
      </div>
    </div>
  </section>

  <!-- Section 2: Quick Search Section -->
  <section class="section-tint" style="padding: 2.5rem 0;">
    <div class="container container-sm text-center">
      <h3 style="margin-bottom:1rem;">Search Our Menu &amp; Articles</h3>
      <div class="search-input-wrap" style="max-width:480px; margin:0 auto;">
        <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" class="search-input" placeholder="Type a bowl or ingredient..." onkeydown="if(event.key==='Enter') location.href='menu.html';">
      </div>
    </div>
  </section>

  <!-- Section 3: Popular Destinations Directory -->
  <section class="section-white">
    <div class="container container-sm">
      <div class="section-header">
        <span class="badge-tag">Where Would You Like to Go?</span>
        <h2 class="section-title">POPULAR DESTINATIONS</h2>
      </div>
      <div class="grid-3">
        <a href="home-2.html#build-bowl" class="dash-panel" style="margin:0; text-align:center; text-decoration:none;">
          <h4>Bowl Builder</h4>
          <p style="font-size:0.82rem; color:var(--muted-text); margin-top:0.3rem;">Craft your custom bowl.</p>
        </a>
        <a href="meal-plans.html" class="dash-panel" style="margin:0; text-align:center; text-decoration:none;">
          <h4>Meal Plans</h4>
          <p style="font-size:0.82rem; color:var(--muted-text); margin-top:0.3rem;">Weekly salad subscriptions.</p>
        </a>
        <a href="dashboard.html" class="dash-panel" style="margin:0; text-align:center; text-decoration:none;">
          <h4>My Bowl'd Portal</h4>
          <p style="font-size:0.82rem; color:var(--muted-text); margin-top:0.3rem;">Subscriber dashboard.</p>
        </a>
      </div>
    </div>
  </section>

  <!-- Section 4: Recommended Fresh Bowls -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Order Our Favorites Instead</span>
        <h2 class="section-title">TOP FRESH PICKS</h2>
      </div>
      <div class="grid-2" style="max-width:800px; margin:0 auto;">
        <article class="bowl-card">
          <div class="bowl-card-body">
            <h3 class="bowl-card-title"><a href="menu-details.html">Green Goddess Super Bowl</a></h3>
            <div class="bowl-card-price">$12.50</div>
            <p class="bowl-card-ingredients">Baby spinach, edamame, cucumber ribbons, avocado, herb goddess dressing.</p>
            <a href="menu-details.html" class="btn btn-primary btn-sm" style="margin-top:1rem;">View Bowl</a>
          </div>
        </article>

        <article class="bowl-card">
          <div class="bowl-card-body">
            <h3 class="bowl-card-title"><a href="menu-details.html">Protein Power Bowl</a></h3>
            <div class="bowl-card-price">$14.00</div>
            <p class="bowl-card-ingredients">Flame-grilled chicken, tricolor quinoa, roasted broccoli florets, chickpeas.</p>
            <a href="menu-details.html" class="btn btn-primary btn-sm" style="margin-top:1rem;">View Bowl</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Section 5: Today's Chef Specials -->
  <section class="section-white">
    <div class="container container-sm text-center">
      <div class="dash-panel" style="margin:0; padding:2rem;">
        <h4>Chef Special: Autumn Citrus Grain Bowl</h4>
        <p style="color:var(--muted-text); font-size:0.92rem; margin:0.5rem 0;">Quinoa, blood orange, toasted sunflower seeds, and Meyer lemon dressing.</p>
        <a href="menu.html" class="btn btn-outline btn-sm">Explore Menu</a>
      </div>
    </div>
  </section>

  <!-- Section 6: Report Broken Link -->
  <section class="section-tint" style="padding:2.5rem 0;">
    <div class="container container-sm text-center">
      <p style="font-size:0.88rem; color:var(--muted-text); margin:0;">
        Think this is a broken link? <a href="contact.html" style="font-weight:700; color:var(--primary-green);">Report it to our web team</a> and we'll fix it right up!
      </p>
    </div>
  </section>

  <!-- Section 7: Final CTA -->
  <section class="section-tint" style="text-align:center; padding:4rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Get Cooking</span>
      <h3 class="section-title" style="font-size:1.6rem; margin-bottom:0.5rem;">Ready to Eat Fresh?</h3>
      <p class="section-subtitle" style="font-size:0.95rem; margin-bottom:1.5rem; color:var(--muted-text);">Start building your personalized salad bowl now.</p>
      <a href="home-2.html#build-bowl" class="btn btn-primary btn-sm">Build Your Bowl</a>
    </div>
  </section>
</main>
${getFooter()}`;

// 26. coming-soon.html (7 Sections)
const comingSoonHtml = `${getHead("Something Fresh Is Coming", "Get ready for Bowl'd Winter Grain Warm Bowls. Launching soon with subscriber pre-orders.")}
${getNavbar('')}
<main>
  <!-- Section 1: Hero -->
  <section class="hero-section hero-bg-herbs" style="padding: 5rem 0 2rem;">
    <div class="container text-center">
      <span class="badge-tag badge-tag-lime">Launching Soon</span>
      <h1 class="hero-title" style="margin-bottom:1rem;">SOMETHING FRESH IS COMING</h1>
      <p class="hero-desc" style="margin-inline:auto; max-width:640px;">
        We are preparing our brand new Autumn &amp; Winter Warm Grain Bowl Collection. Roasted root squash, wild wild-rice pilaf, and slow-braised pastured proteins.
      </p>
    </div>
  </section>

  <!-- Section 2: Interactive Vanilla JS Countdown Timer -->
  <section class="section-tint" style="padding:2.5rem 0;">
    <div class="container text-center">
      <div style="display:flex; justify-content:center; gap:1.5rem; margin:0 auto; flex-wrap:wrap;">
        <div class="dash-panel" style="margin:0; min-width:100px; padding:1.2rem; text-align:center;">
          <div id="timer-days" style="font-family:var(--font-heading); font-size:2.5rem; font-weight:900; color:var(--deep-green);">14</div>
          <div style="font-size:0.78rem; text-transform:uppercase; color:var(--muted-text); font-weight:700;">Days</div>
        </div>
        <div class="dash-panel" style="margin:0; min-width:100px; padding:1.2rem; text-align:center;">
          <div id="timer-hours" style="font-family:var(--font-heading); font-size:2.5rem; font-weight:900; color:var(--deep-green);">08</div>
          <div style="font-size:0.78rem; text-transform:uppercase; color:var(--muted-text); font-weight:700;">Hours</div>
        </div>
        <div class="dash-panel" style="margin:0; min-width:100px; padding:1.2rem; text-align:center;">
          <div id="timer-minutes" style="font-family:var(--font-heading); font-size:2.5rem; font-weight:900; color:var(--deep-green);">45</div>
          <div style="font-size:0.78rem; text-transform:uppercase; color:var(--muted-text); font-weight:700;">Minutes</div>
        </div>
        <div class="dash-panel" style="margin:0; min-width:100px; padding:1.2rem; text-align:center;">
          <div id="timer-seconds" style="font-family:var(--font-heading); font-size:2.5rem; font-weight:900; color:var(--primary-green);">12</div>
          <div style="font-size:0.78rem; text-transform:uppercase; color:var(--muted-text); font-weight:700;">Seconds</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: VIP Early Access Form -->
  <section class="section-white">
    <div class="container container-sm text-center">
      <div class="dash-panel" style="padding:2.5rem; box-shadow:var(--shadow-md);">
        <h2 style="font-size:1.8rem; margin-bottom:0.5rem;">GET $15 OFF ON LAUNCH DAY</h2>
        <p style="color:var(--muted-text); font-size:0.95rem; margin-bottom:1.8rem;">Enter your email to receive first access to seasonal pre-orders before general release.</p>
        <form class="newsletter-form" style="max-width:480px; margin:0 auto;">
          <input type="email" class="newsletter-input" placeholder="Enter your email" required aria-label="Email address">
          <button type="submit" class="btn btn-primary">Join VIP Waitlist</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Section 4: Sneak Peek of Offerings -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Sneak Peek</span>
        <h2 class="section-title">WHAT'S IN THE NEW COLLECTION</h2>
      </div>
      <div class="grid-3">
        <div class="dash-panel" style="margin:0;">
          <h4>Roasted Butternut &amp; Wild Rice</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.4rem;">Maple-glazed organic squash with pomegranate seeds.</p>
        </div>
        <div class="dash-panel" style="margin:0;">
          <h4>Warm Miso Glazed Salmon Bowl</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.4rem;">Sustainable Atlantic salmon with steamed bok choy.</p>
        </div>
        <div class="dash-panel" style="margin:0;">
          <h4>Golden Turmeric Broth Bowl</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.4rem;">Immunity-boosting bone or mushroom broth poured over quinoa.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Farm Partner Spotlight -->
  <section class="section-white">
    <div class="container container-sm text-center">
      <div class="dash-panel" style="margin:0; padding:2rem;">
        <span class="badge-tag">Farm Partner Spotlight</span>
        <h3 style="margin:0.5rem 0;">Valley Oak Heirloom Farms</h3>
        <p style="color:var(--muted-text); font-size:0.92rem; max-width:540px; margin:0 auto;">
          Supplying 100% certified organic root squash and purple carrots for our upcoming winter menu line.
        </p>
      </div>
    </div>
  </section>

  <!-- Section 6: Social Community -->
  <section class="section-tint">
    <div class="container container-sm text-center">
      <h3>Follow Recipe Tests on Instagram</h3>
      <p style="color:var(--muted-text); font-size:0.92rem; margin:0.5rem 0 1.5rem;">Watch Chef Maya Lin test recipes live in our test kitchen every Tuesday.</p>
      <a href="#" class="btn btn-outline btn-sm">Follow @bowldcafe</a>
    </div>
  </section>

  <!-- Section 7: Explore Current Offerings -->
  <section class="section-tint" style="text-align:center; padding:4rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Current Menu</span>
      <h3 class="section-title" style="font-size:1.6rem; margin-bottom:0.5rem;">Can't Wait? Order from Our Current Menu</h3>
      <p class="section-subtitle" style="font-size:0.95rem; margin-bottom:1.5rem; color:var(--muted-text);">Our signature salad and grain bowls are delivering all week.</p>
      <a href="menu.html" class="btn btn-primary btn-sm">Explore Menu Now</a>
    </div>
  </section>
</main>
<script>
setInterval(() => {
  const s = document.getElementById('timer-seconds');
  if (s) {
    let cur = parseInt(s.textContent, 10);
    cur = cur > 0 ? cur - 1 : 59;
    s.textContent = cur < 10 ? '0' + cur : cur;
  }
}, 1000);
</script>
${getFooter()}`;

// 27. maintenance.html (7 Sections)
const maintenanceHtml = `${getHead("We're Preparing Something Fresh", "Platform scheduled kitchen and server optimization.")}
${getNavbar('')}
<main>
  <!-- Section 1: Hero -->
  <section class="hero-section hero-bg-fennel" style="padding: 5rem 0 3.5rem;">
    <div class="container text-center">
      <div style="font-size:5rem; line-height:1; margin-bottom:1rem;">🥑🔧</div>
      <span class="badge-tag badge-tag-lime">Scheduled Platform Tune-Up</span>
      <h1 class="hero-title" style="margin-bottom:1rem;">WE'RE PREPARING SOMETHING FRESH</h1>
      <p class="hero-desc" style="margin-inline:auto; max-width:640px;">
        Our digital ordering kitchen is undergoing scheduled maintenance to make custom bowl building faster and more responsive. We expect to be fully online shortly.
      </p>
      <div style="margin-top:2rem;">
        <button type="button" class="btn btn-primary btn-lg" onclick="location.reload();">Refresh Page</button>
      </div>
    </div>
  </section>

  <!-- Section 2: Expected Uptime -->
  <section class="section-white">
    <div class="container container-sm">
      <div class="grid-2">
        <div class="dash-panel" style="margin:0; text-align:center;">
          <h3 style="color:var(--deep-green); margin-bottom:0.4rem;">Expected Uptime</h3>
          <p style="font-size:0.9rem; color:var(--muted-text);">System optimization will conclude in approximately <strong>35 minutes</strong>.</p>
        </div>
        <div class="dash-panel" style="margin:0; text-align:center;">
          <h3 style="color:var(--deep-green); margin-bottom:0.4rem;">Urgent Subscriptions</h3>
          <p style="font-size:0.9rem; color:var(--muted-text);">For emergency delivery changes today, please call: <strong>(555) 345-BOWL</strong>.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Physical Cafe Status -->
  <section class="section-tint">
    <div class="container container-sm text-center">
      <div class="dash-panel" style="margin:0; padding:2rem;">
        <h4>Our Physical Cafe is 100% Open!</h4>
        <p style="color:var(--muted-text); font-size:0.92rem; margin:0.5rem 0 1.2rem;">Our flagship kitchen at 124 Harvest Green Way is operating with full dine-in and takeout menus.</p>
        <span style="font-size:0.85rem; font-weight:700; color:var(--primary-green);">Today's Hours: 8:00 AM – 9:00 PM</span>
      </div>
    </div>
  </section>

  <!-- Section 4: What We're Upgrading -->
  <section class="section-white">
    <div class="container container-sm">
      <div class="section-header">
        <span class="badge-tag">Improvements</span>
        <h2 class="section-title">WHAT'S BEING UPGRADED</h2>
      </div>
      <div class="grid-3">
        <div class="dash-panel" style="margin:0; text-align:center;">
          <h4>Faster Builder</h4>
          <p style="font-size:0.82rem; color:var(--muted-text);">Instant macro calculation.</p>
        </div>
        <div class="dash-panel" style="margin:0; text-align:center;">
          <h4>Live Courier GPS</h4>
          <p style="font-size:0.82rem; color:var(--muted-text);">Precise delivery tracking.</p>
        </div>
        <div class="dash-panel" style="margin:0; text-align:center;">
          <h4>Dietary Filters</h4>
          <p style="font-size:0.82rem; color:var(--muted-text);">Enhanced allergen alerts.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Real-time Social Feeds -->
  <section class="section-tint">
    <div class="container container-sm text-center">
      <p style="font-size:0.9rem; color:var(--muted-text); margin:0;">
        Follow our live status updates on Twitter: <strong>@bowldstatus</strong>
      </p>
    </div>
  </section>

  <!-- Section 6: Emergency Catering Help -->
  <section class="section-white">
    <div class="container container-sm text-center">
      <h4>Have an Event Scheduled for Today?</h4>
      <p style="color:var(--muted-text); font-size:0.9rem; margin:0.4rem 0;">Our kitchen event coordinator is on standby to take calls.</p>
      <a href="tel:5553452695" class="btn btn-outline btn-sm">Direct Line: (555) 345-BOWL</a>
    </div>
  </section>

  <!-- Section 7: Final Reload Action -->
  <section class="section-tint" style="text-align:center; padding:4rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Platform Status</span>
      <h3 class="section-title" style="font-size:1.6rem; margin-bottom:0.5rem;">Check If Maintenance Has Concluded</h3>
      <p class="section-subtitle" style="font-size:0.95rem; margin-bottom:1.5rem; color:var(--muted-text);">Click below to reload the platform.</p>
      <button type="button" class="btn btn-primary btn-sm" onclick="location.reload();">Reload Page Now</button>
    </div>
  </section>
</main>
${getFooter()}`;

fs.writeFileSync('login.html', loginHtml);
fs.writeFileSync('register.html', registerHtml);
fs.writeFileSync('forgot-password.html', forgotPasswordHtml);
fs.writeFileSync('404.html', notFoundHtml);
fs.writeFileSync('coming-soon.html', comingSoonHtml);
fs.writeFileSync('maintenance.html', maintenanceHtml);
console.log('Re-generated login, register, forgot-password, 404, coming-soon, maintenance with 7 explicit sections each.');

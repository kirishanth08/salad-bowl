const fs = require('fs');
const { getHead, getNavbar, getFooter } = require('./generator_base');

// 1. index.html (Home 1 - 7 Sections)
const indexHtml = `${getHead("Eat Fresh, Feel Good, Live Bowl'd", "Premium fresh salad and healthy bowl cafe. Discover chef-crafted grain bowls, custom salad creations, and flexible weekly meal plans.")}
${getNavbar('home')}
<main>
  <!-- Section 1: Hero Section -->
  <section class="hero-section hero-bg-lettuce">
    <div class="container hero-grid">
      <div class="hero-content">
        <span class="badge-tag badge-tag-lime">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          100% Organically Sourced Daily
        </span>
        <h1 class="hero-title">
          EAT FRESH.<br>
          FEEL GOOD.<br>
          <span class="hero-highlight">LIVE BOWL'D.</span>
        </h1>
        <p class="hero-desc">
          Craft your ideal salad bowl from locally-harvested crisp greens, warm ancient grains, flame-grilled lean proteins, and small-batch scratch dressings. Nourishing everyday eating made simple.
        </p>
        <div class="hero-actions btn-group">
          <a href="home-2.html#build-bowl" class="btn btn-primary btn-lg">Build Your Bowl</a>
          <a href="meal-plans.html" class="btn btn-outline btn-lg">Explore Meal Plans</a>
        </div>
        <div class="hero-features">
          <div class="feature-pill">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Zero Artificial Additives
          </div>
          <div class="feature-pill">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Prepared Fresh Daily
          </div>
          <div class="feature-pill">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Free Local Delivery
          </div>
        </div>
      </div>
      <div class="hero-media">
        <div class="hero-image-wrap">
          <img src="assets/images/ingredients/supergreens.jpg" alt="Vibrant Green Bowl'd Signature Salad" width="600" height="600">
        </div>
        <div class="floating-badge floating-badge-1">
          <div class="badge-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div class="badge-text">
            <strong>Subscribers Save 20%</strong>
            <span>Flexible weekly delivery box</span>
          </div>
        </div>
        <div class="floating-badge floating-badge-2">
          <div class="badge-icon" style="background:var(--lime-yellow); color:#263321;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <div class="badge-text">
            <strong>4.9/5 Rating</strong>
            <span>Over 12,000 bowls served</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Build Your Own Bowl Experience Preview -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Five Simple Steps</span>
        <h2 class="section-title">BUILD YOUR OWN BOWL</h2>
        <p class="section-subtitle">Customize every single layer to meet your macro goals, dietary lifestyle, and flavor cravings.</p>
      </div>
      <div class="grid-4" style="grid-template-columns: repeat(5, 1fr); gap: 1.2rem;">
        <div class="builder-step-panel" style="text-align:center; padding:1.8rem 1rem; margin:0;">
          <div class="step-num" style="margin: 0 auto 1rem;">1</div>
          <h4 style="margin-bottom:0.4rem;">Choose Base</h4>
          <p style="font-size:0.86rem; color:var(--muted-text);">Fluffy quinoa, nutty brown rice, baby spinach, or crisp romaine.</p>
        </div>
        <div class="builder-step-panel" style="text-align:center; padding:1.8rem 1rem; margin:0;">
          <div class="step-num" style="margin: 0 auto 1rem;">2</div>
          <h4 style="margin-bottom:0.4rem;">Add Protein</h4>
          <p style="font-size:0.86rem; color:var(--muted-text);">Herb chicken, spiced paneer, organic tofu, or chickpeas.</p>
        </div>
        <div class="builder-step-panel" style="text-align:center; padding:1.8rem 1rem; margin:0;">
          <div class="step-num" style="margin: 0 auto 1rem;">3</div>
          <h4 style="margin-bottom:0.4rem;">Pick Veggies</h4>
          <p style="font-size:0.86rem; color:var(--muted-text);">English cucumber, vine tomato, broccoli florets, and sweet corn.</p>
        </div>
        <div class="builder-step-panel" style="text-align:center; padding:1.8rem 1rem; margin:0;">
          <div class="step-num" style="margin: 0 auto 1rem;">4</div>
          <h4 style="margin-bottom:0.4rem;">Crunch & Topping</h4>
          <p style="font-size:0.86rem; color:var(--muted-text);">Roasted pepitas, toasted walnuts, fresh avocado, herb croutons.</p>
        </div>
        <div class="builder-step-panel" style="text-align:center; padding:1.8rem 1rem; margin:0;">
          <div class="step-num" style="margin: 0 auto 1rem;">5</div>
          <h4 style="margin-bottom:0.4rem;">Toss Dressing</h4>
          <p style="font-size:0.86rem; color:var(--muted-text);">Lemon herb vinaigrette, creamy sesame tahini, or buttermilk ranch.</p>
        </div>
      </div>
      <div style="text-align:center; margin-top:2.5rem;">
        <a href="home-2.html#build-bowl" class="btn btn-primary btn-lg">Launch Interactive Bowl Builder</a>
      </div>
    </div>
  </section>

  <!-- Section 3: Our Fresh Favorites -->
  <section class="section-white">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Chef's Signature Creations</span>
        <h2 class="section-title">OUR FRESH FAVORITES</h2>
        <p class="section-subtitle">Balanced, vibrant, and packed with wholesome goodness. Prepared fresh to order every morning.</p>
      </div>
      <div class="grid-3">
        <!-- Bowl 1 -->
        <article class="bowl-card">
          <div class="bowl-card-media">
            <span class="bowl-card-badge diet-badge diet-vegan">Vegan Favorite</span>
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80" alt="Green Goddess Super Bowl" loading="lazy">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title"><a href="menu-details.html">Green Goddess Bowl</a></h3>
              <div class="bowl-card-price">$12.50</div>
            </div>
            <p class="bowl-card-ingredients">Organic baby spinach, steamed edamame, cucumber ribbons, avocado slices, pumpkin seeds, and avocado-herb goddess dressing.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> 480 kcal &bull; 18g P</span>
              <a href="menu-details.html" class="btn btn-outline btn-sm">Customize</a>
            </div>
          </div>
        </article>

        <!-- Bowl 2 -->
        <article class="bowl-card">
          <div class="bowl-card-media">
            <span class="bowl-card-badge diet-badge diet-protein">High Protein</span>
            <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80" alt="Protein Power Bowl" loading="lazy">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title"><a href="menu-details.html">Protein Power Bowl</a></h3>
              <div class="bowl-card-price">$14.00</div>
            </div>
            <p class="bowl-card-ingredients">Flame-grilled chicken breast, tricolor quinoa, roasted broccoli florets, spiced chickpeas, soft egg, and lemon herb vinaigrette.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> 560 kcal &bull; 42g P</span>
              <a href="menu-details.html" class="btn btn-outline btn-sm">Customize</a>
            </div>
          </div>
        </article>

        <!-- Bowl 3 -->
        <article class="bowl-card">
          <div class="bowl-card-media">
            <span class="bowl-card-badge diet-badge diet-gf">Gluten Free</span>
            <img src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80" alt="Mediterranean Sunshine Bowl" loading="lazy">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title"><a href="menu-details.html">Mediterranean Bowl</a></h3>
              <div class="bowl-card-price">$13.25</div>
            </div>
            <p class="bowl-card-ingredients">Crisp romaine, vine-ripened tomatoes, Kalamata olives, creamy feta, shaved red onion, toasted chickpeas, and creamy Greek herb dressing.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> 510 kcal &bull; 20g P</span>
              <a href="menu-details.html" class="btn btn-outline btn-sm">Customize</a>
            </div>
          </div>
        </article>
      </div>
      <div style="text-align:center; margin-top:2.5rem;">
        <a href="menu.html" class="btn btn-primary">View Full Menu &amp; Categories</a>
      </div>
    </div>
  </section>

  <!-- Section 4: Choose Your Base -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">The Foundation of Every Bowl</span>
        <h2 class="section-title">CHOOSE YOUR PERFECT BASE</h2>
        <p class="section-subtitle">Every bowl starts with a purposeful foundation. Select from warm ancient whole grains or ultra-fresh leafy greens.</p>
      </div>
      <div class="bases-grid">
        <!-- Base 1 -->
        <article class="base-card">
          <div class="base-card-img-wrap">
            <img src="assets/images/ingredients/quinoa.jpg" alt="Tricolor Quinoa Bowl" class="base-card-img" loading="lazy">
          </div>
          <h3 class="base-card-title">Tricolor Quinoa</h3>
          <span class="base-card-badge">180 kcal &bull; 6g Protein</span>
          <p class="base-card-desc">Nutty ancient grain rich in fiber and all 9 essential amino acids for sustained fullness.</p>
        </article>

        <!-- Base 2 -->
        <article class="base-card">
          <div class="base-card-img-wrap">
            <img src="assets/images/ingredients/brown-rice.jpg" alt="Nutty Brown Rice Bowl" class="base-card-img" loading="lazy">
          </div>
          <h3 class="base-card-title">Nutty Brown Rice</h3>
          <span class="base-card-badge">190 kcal &bull; 4g Protein</span>
          <p class="base-card-desc">Slow-burning complex carbohydrate for lasting daytime energy and heart health.</p>
        </article>

        <!-- Base 3 -->
        <article class="base-card">
          <div class="base-card-img-wrap">
            <img src="assets/images/ingredients/lettuce.jpg" alt="Crisp Romaine Lettuce" class="base-card-img" loading="lazy">
          </div>
          <h3 class="base-card-title">Crisp Romaine</h3>
          <span class="base-card-badge">30 kcal &bull; 2g Protein</span>
          <p class="base-card-desc">Harvested morning-fresh for the ultimate satisfying crunch and cooling hydration.</p>
        </article>

        <!-- Base 4 -->
        <article class="base-card">
          <div class="base-card-img-wrap">
            <img src="assets/images/ingredients/spinach.jpg" alt="Fresh Baby Spinach" class="base-card-img" loading="lazy">
          </div>
          <h3 class="base-card-title">Baby Spinach</h3>
          <span class="base-card-badge">40 kcal &bull; 4g Protein</span>
          <p class="base-card-desc">Iron and folate powerhouse leaves with a tender, mild taste that pairs with every protein.</p>
        </article>

        <!-- Base 5 -->
        <article class="base-card">
          <div class="base-card-img-wrap">
            <img src="assets/images/ingredients/supergreens.jpg" alt="Mixed Organic Supergreens" class="base-card-img" loading="lazy">
          </div>
          <h3 class="base-card-title">Mixed Supergreens</h3>
          <span class="base-card-badge">35 kcal &bull; 3g Protein</span>
          <p class="base-card-desc">Arugula, red chard, baby kale, and sweet green leaves packed with phytonutrients.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Section 5: Why Bowl'd -->
  <section class="section-white">
    <div class="container">
      <div class="grid-2" style="align-items:center;">
        <div>
          <span class="badge-tag">The Bowl'd Commitment</span>
          <h2 class="section-title">WHY THOUSANDS CHOOSE BOWL'D EVERY DAY</h2>
          <p class="section-subtitle" style="margin-bottom:2rem;">We reinvented everyday lunch to be vibrant, deeply satisfying, and completely free of dietary guesswork.</p>
          <div style="display:flex; flex-direction:column; gap:1.4rem;">
            <div style="display:flex; gap:1rem;">
              <div class="badge-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <div>
                <h4 style="margin-bottom:0.2rem;">Direct Farm Relationships</h4>
                <p style="font-size:0.9rem; color:var(--muted-text);">We partner directly with organic family farms within 150 miles for peak-ripeness produce.</p>
              </div>
            </div>
            <div style="display:flex; gap:1rem;">
              <div class="badge-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div>
                <h4 style="margin-bottom:0.2rem;">Nutrient-Dense Balance</h4>
                <p style="font-size:0.9rem; color:var(--muted-text);">Formulated alongside clinical sports nutritionists so you stay energized with zero afternoon slump.</p>
              </div>
            </div>
            <div style="display:flex; gap:1rem;">
              <div class="badge-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 16V9"/></svg></div>
              <div>
                <h4 style="margin-bottom:0.2rem;">100% Compostable Packaging</h4>
                <p style="font-size:0.9rem; color:var(--muted-text);">Our sugarcane fiber bowls and plant-based lids break down cleanly in under 90 days.</p>
              </div>
            </div>
          </div>
        </div>
        <div style="position:relative;">
          <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80" alt="Fresh Market Produce" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);">
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Weekly Meal Plans Preview -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Zero Hassle Subscriptions</span>
        <h2 class="section-title">WEEKLY MEAL PLANS</h2>
        <p class="section-subtitle">Save time, eat cleaner, and enjoy predictable lunch routines. Pause or swap your bowls anytime.</p>
      </div>
      <div class="grid-3">
        <!-- Plan 1 -->
        <div class="plan-card">
          <div class="plan-header">
            <h3 class="plan-name">Starter Bowl</h3>
            <span class="plan-bowls-count">3 Bowls Per Week</span>
            <div class="plan-price">
              <span class="plan-price-currency">$</span>34<span style="font-size:1.5rem;">.50</span>
              <span class="plan-price-period">/week</span>
            </div>
            <span class="plan-demo-tag">Sample Demo Pricing &bull; $11.50/bowl</span>
          </div>
          <div class="plan-features">
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 3 Chef Bowls or Custom Builds</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Free insulated tote delivery</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Flexible weekly bowl selection</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Pause or skip anytime</div>
          </div>
          <a href="meal-plans.html" class="btn btn-outline" style="width:100%;">Choose Starter Plan</a>
        </div>

        <!-- Plan 2 (Featured) -->
        <div class="plan-card featured">
          <span class="plan-ribbon">Most Popular</span>
          <div class="plan-header">
            <h3 class="plan-name">Balanced Week</h3>
            <span class="plan-bowls-count">5 Bowls Per Week</span>
            <div class="plan-price">
              <span class="plan-price-currency">$</span>52<span style="font-size:1.5rem;">.50</span>
              <span class="plan-price-period">/week</span>
            </div>
            <span class="plan-demo-tag">Sample Demo Pricing &bull; $10.50/bowl (Save 20%)</span>
          </div>
          <div class="plan-features">
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 5 Fresh Bowls (Full Workweek)</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Unlimited ingredient customizations</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Priority Wednesday delivery slot</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 15% discount on cafe drinks</div>
          </div>
          <a href="meal-plans.html" class="btn btn-primary" style="width:100%;">Select Balanced Plan</a>
        </div>

        <!-- Plan 3 -->
        <div class="plan-card">
          <div class="plan-header">
            <h3 class="plan-name">Full Fresh Plan</h3>
            <span class="plan-bowls-count">7 Bowls Per Week</span>
            <div class="plan-price">
              <span class="plan-price-currency">$</span>68<span style="font-size:1.5rem;">.00</span>
              <span class="plan-price-period">/week</span>
            </div>
            <span class="plan-demo-tag">Sample Demo Pricing &bull; $9.71/bowl</span>
          </div>
          <div class="plan-features">
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 7 Complete Bowls (Lunch &amp; Dinners)</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 2 deliveries per week for max freshness</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Free cold-pressed juice included</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> VIP priority menu access &amp; delivery</div>
          </div>
          <a href="meal-plans.html" class="btn btn-outline" style="width:100%;">Choose Full Fresh</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Final CTA -->
  <section class="section-white" style="text-align:center; padding: 5.5rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Start Today</span>
      <h2 class="section-title" style="font-size:clamp(2rem, 4vw, 3rem); margin-bottom:1.2rem;">YOUR NEXT FAVORITE BOWL STARTS HERE.</h2>
      <p class="section-subtitle" style="font-size:1.15rem; margin-bottom:2.2rem; color:var(--muted-text);">
        Whether you are craving a crisp plant-rich salad or a protein-loaded grain bowl, Bowl'd brings chef-crafted nutrition to your table.
      </p>
      <div class="btn-group" style="justify-content:center;">
        <a href="home-2.html#build-bowl" class="btn btn-primary btn-lg">Build Your Custom Bowl</a>
        <a href="meal-plans.html" class="btn btn-outline btn-lg">View Subscription Perks</a>
      </div>
    </div>
  </section>
</main>
${getFooter()}`;

// 2. home-2.html (Alternative Editorial Home - 7 Sections)
const home2Html = `${getHead("Fresh Food. Better Routines.", "Editorial fresh food perspective. Discover seasonal ingredients, artisan grain bowls, and weekly healthy subscriptions.")}
${getNavbar('home-2')}
<main>
  <!-- Section 1: Unique Editorial Hero -->
  <section class="home2-editorial-hero hero-bg-spinach">
    <div class="container">
      <div class="editorial-hero-grid">
        <div>
          <div class="editorial-tag-wrap">
            <span class="editorial-tag-pulse"></span>
            <span class="editorial-tag-text">Editorial Harvest &bull; Season 2026</span>
          </div>
          <h1 class="editorial-hero-title">
            FRESH FOOD.<br>
            <span class="editorial-accent">BETTER ROUTINES.</span>
          </h1>
          <p class="editorial-hero-desc">
            A mindful approach to everyday eating. We combine seasonal micro-greens, whole grain ancient carbs, and unadulterated cold-pressed oils into craveable bowls that nourish mind and body.
          </p>
          <div class="btn-group">
            <a href="#build-bowl" class="btn btn-primary btn-lg">Build Custom Bowl</a>
            <a href="meal-plans.html" class="btn btn-outline btn-lg">Join Weekly Club</a>
          </div>
          
          <div class="editorial-hero-perks">
            <div class="editorial-perk-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>100% Organic Sourced</span>
            </div>
            <div class="editorial-perk-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>15-Min Cold Prep</span>
            </div>
            <div class="editorial-perk-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Compostable Sugarcane Bowl</span>
            </div>
          </div>
        </div>

        <div class="editorial-visual-wrapper">
          <div class="editorial-glow-backdrop"></div>
          
          <!-- Floating Glass Card Top Right -->
          <div class="editorial-float-top">
            <div style="font-size:1.4rem;">🌟</div>
            <div>
              <div class="editorial-rating-stars">★★★★★</div>
              <div class="editorial-float-title">4.9 / 5 Rating</div>
              <div class="editorial-float-sub">12,000+ healthy eaters</div>
            </div>
          </div>

          <!-- Main Hero Image -->
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80" alt="Editorial Salad Presentation" class="editorial-main-img">

          <!-- Floating Glass Card Bottom Left -->
          <div class="editorial-float-bottom">
            <div class="editorial-float-title">Autumn Citrus Harvest Bowl</div>
            <div class="editorial-float-sub">Local blood orange, roasted pepitas, Haas avocado &amp; lemon tahini</div>
            <div style="margin-top:0.6rem; display:flex; gap:0.5rem; align-items:center;">
              <span class="diet-badge diet-protein" style="font-size:0.75rem; padding:0.2rem 0.55rem;">28g Protein</span>
              <span class="diet-badge diet-calorie" style="font-size:0.75rem; padding:0.2rem 0.55rem;">520 kcal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Farm Direct Seasonal Ingredients -->
  <section class="section-tint" style="padding: 4.5rem 0;">
    <div class="container">
      <div class="section-header text-center">
        <span class="badge-tag">Farm Direct</span>
        <h2 class="section-title">SEASONAL INGREDIENTS SPOTLIGHT</h2>
        <p class="section-subtitle">What's in our kitchen this week? Every ingredient is sourced with obsessive attention to soil health, ethical harvesting, and peak ripeness.</p>
      </div>
      
      <div class="farm-direct-grid">
        <!-- Item 1: Haas Avocado -->
        <div class="farm-direct-card">
          <div class="farm-direct-symbol-wrap">
            <img src="assets/images/ingredients/avocado.jpg" alt="Haas Avocado" class="farm-direct-symbol-img">
          </div>
          <h4 class="farm-direct-title">Haas Avocado</h4>
          <div class="farm-direct-tag-wrap">
            <span class="farm-direct-tag">Healthy Fats</span>
          </div>
          <p class="farm-direct-desc">Rich California avocados sliced to order right before dispatch for peak velvet mouthfeel and optimal nutrient delivery.</p>
          <div class="farm-direct-footer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Santa Paula, CA &bull; Organic</span>
          </div>
        </div>

        <!-- Item 2: Spicy Pea Shoots -->
        <div class="farm-direct-card">
          <div class="farm-direct-symbol-wrap">
            <img src="assets/images/ingredients/supergreens.jpg" alt="Spicy Pea Shoots" class="farm-direct-symbol-img">
          </div>
          <h4 class="farm-direct-title">Spicy Pea Shoots</h4>
          <div class="farm-direct-tag-wrap">
            <span class="farm-direct-tag">Live Microgreens</span>
          </div>
          <p class="farm-direct-desc">Hydroponically cultivated live tender shoots delivering four times the cellular micronutrients of standard mature greens.</p>
          <div class="farm-direct-footer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Watsonville, CA &bull; Non-GMO</span>
          </div>
        </div>

        <!-- Item 3: Pastured Herb Chicken -->
        <div class="farm-direct-card">
          <div class="farm-direct-symbol-wrap">
            <img src="assets/images/ingredients/chicken.jpg" alt="Pastured Herb Chicken" class="farm-direct-symbol-img">
          </div>
          <h4 class="farm-direct-title">Pastured Herb Chicken</h4>
          <div class="farm-direct-tag-wrap">
            <span class="farm-direct-tag">32g Clean Protein</span>
          </div>
          <p class="farm-direct-desc">Free-roam antibiotic-free chicken breasts slowly seared with rosemary needles, cracked Tellicherry pepper, and Meyer zest.</p>
          <div class="farm-direct-footer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Petaluma, CA &bull; Humane Cert</span>
          </div>
        </div>

        <!-- Item 4: Meyer Lemon Tahini -->
        <div class="farm-direct-card">
          <div class="farm-direct-symbol-wrap">
            <img src="assets/images/ingredients/tahini.jpg" alt="Meyer Lemon Tahini" class="farm-direct-symbol-img">
          </div>
          <h4 class="farm-direct-title">Meyer Lemon Tahini</h4>
          <div class="farm-direct-tag-wrap">
            <span class="farm-direct-tag">Small-Batch Dressing</span>
          </div>
          <p class="farm-direct-desc">Artisanal stone-ground sesame seed butter emulsion emulsified with raw clover honey, cold water, and fresh orchard juice.</p>
          <div class="farm-direct-footer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Ojai Valley, CA &bull; House Made</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Popular Healthy Bowls -->
  <section class="section-white">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Community Loved</span>
        <h2 class="section-title">MOST ORDERED HEALTHY BOWLS</h2>
        <p class="section-subtitle">Discover our highest-rated customer creations, designed to satisfy big appetites with wholesome fuel.</p>
      </div>
      <div class="grid-3">
        <article class="bowl-card">
          <div class="bowl-card-media">
            <span class="bowl-card-badge diet-badge diet-protein">Top Seller</span>
            <img src="assets/images/ingredients/tofu.jpg" alt="Rainbow Crunch Bowl" loading="lazy">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title"><a href="menu-details.html">Rainbow Crunch Bowl</a></h3>
              <div class="bowl-card-price">$13.50</div>
            </div>
            <p class="bowl-card-ingredients">Purple cabbage, spiralized carrot ribbons, sweet edamame, toasted sesame seeds, marinated tofu, and miso ginger vinaigrette.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">490 kcal &bull; 22g Protein</span>
              <a href="menu-details.html" class="btn btn-outline btn-sm">Customize</a>
            </div>
          </div>
        </article>

        <article class="bowl-card">
          <div class="bowl-card-media">
            <span class="bowl-card-badge diet-badge diet-gf">Spicy Favorite</span>
            <img src="https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80" alt="Spicy Paneer Bowl" loading="lazy">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title"><a href="menu-details.html">Spicy Paneer Warm Bowl</a></h3>
              <div class="bowl-card-price">$13.75</div>
            </div>
            <p class="bowl-card-ingredients">Golden grilled paneer cubes, warm brown rice, baby spinach, roasted sweet peppers, pickled red chili, and spiced cilantro yogurt dressing.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">540 kcal &bull; 26g Protein</span>
              <a href="menu-details.html" class="btn btn-outline btn-sm">Customize</a>
            </div>
          </div>
        </article>

        <article class="bowl-card">
          <div class="bowl-card-media">
            <span class="bowl-card-badge diet-badge diet-calorie">Classic Reimagined</span>
            <img src="https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80" alt="Modern Caesar Bowl" loading="lazy">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title"><a href="menu-details.html">Modern Caesar Bowl</a></h3>
              <div class="bowl-card-price">$12.75</div>
            </div>
            <p class="bowl-card-ingredients">Shaved Tuscan kale, crisp romaine, sourdough croutons, parmesan crisps, herb chicken, and Greek yogurt garlic dressing.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">460 kcal &bull; 34g Protein</span>
              <a href="menu-details.html" class="btn btn-outline btn-sm">Customize</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Section 4: Interactive Build-Your-Own-Bowl Studio -->
  <section class="section-tint" id="build-bowl" style="padding: 4.5rem 0;">
    <div class="container">
      <div class="section-header text-center" style="max-width:760px; margin-inline:auto; margin-bottom:3rem;">
        <span class="badge-tag">Interactive Kitchen</span>
        <h2 class="section-title">CRAFT YOUR CUSTOM BOWL LIVE</h2>
        <p class="section-subtitle">Choose your favorite fresh base, high-protein additions, crisp market vegetables, texture crunch, and scratch dressing. Watch macros and price calculate dynamically in real time.</p>
      </div>

      <div class="builder-layout">
        <!-- Left: 5 Step Selection Panels -->
        <div class="builder-steps-column">
          
          <!-- Step 1 Choose Your Base -->
          <div class="builder-step-panel" id="step-base">
            <div class="builder-step-header">
              <div class="builder-step-title">
                <span class="step-num">1</span>
                <div>
                  <h3 style="margin-bottom:0.2rem;">Choose Your Base</h3>
                  <div class="step-rule">Select 1 foundation (Included in $9.00 Base Price)</div>
                </div>
              </div>
            </div>
            <div class="builder-options-grid">
              <div class="builder-card-option selected" data-category="base" data-value="Quinoa">
                <span class="option-badge">Ancient Grain</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/quinoa.jpg" alt="Tricolor Quinoa" loading="lazy">
                </div>
                <div class="option-name">Tricolor Quinoa</div>
                <div class="option-meta"><span>180 kcal &bull; 6g P</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option" data-category="base" data-value="Brown Rice">
                <span class="option-badge">Whole Grain</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/brown-rice.jpg" alt="Nutty Brown Rice" loading="lazy">
                </div>
                <div class="option-name">Nutty Brown Rice</div>
                <div class="option-meta"><span>190 kcal &bull; 4g P</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option" data-category="base" data-value="Lettuce">
                <span class="option-badge">Crisp Crunch</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/lettuce.jpg" alt="Crisp Romaine" loading="lazy">
                </div>
                <div class="option-name">Crisp Romaine</div>
                <div class="option-meta"><span>30 kcal &bull; 2g P</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option" data-category="base" data-value="Spinach">
                <span class="option-badge">Iron Rich</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/spinach.jpg" alt="Baby Spinach" loading="lazy">
                </div>
                <div class="option-name">Baby Spinach</div>
                <div class="option-meta"><span>40 kcal &bull; 4g P</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option" data-category="base" data-value="Mixed Greens">
                <span class="option-badge">Supergreens</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/supergreens.jpg" alt="Mixed Supergreens" loading="lazy">
                </div>
                <div class="option-name">Mixed Supergreens</div>
                <div class="option-meta"><span>35 kcal &bull; 3g P</span><span class="option-price">Included</span></div>
              </div>
            </div>
          </div>

          <!-- Step 2 Choose Protein -->
          <div class="builder-step-panel" id="step-protein">
            <div class="builder-step-header">
              <div class="builder-step-title">
                <span class="step-num">2</span>
                <div>
                  <h3 style="margin-bottom:0.2rem;">Choose Your Protein</h3>
                  <div class="step-rule">Select up to 2 proteins (Clean poultry or plant power)</div>
                </div>
              </div>
            </div>
            <div class="builder-options-grid">
              <div class="builder-card-option selected" data-category="protein" data-value="Grilled Chicken">
                <span class="option-badge">Lean Poultry</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/chicken.jpg" alt="Grilled Chicken" loading="lazy">
                </div>
                <div class="option-name">Grilled Chicken</div>
                <div class="option-meta"><span>190 kcal &bull; 32g P</span><span class="option-price">+$3.50</span></div>
              </div>
              <div class="builder-card-option" data-category="protein" data-value="Paneer">
                <span class="option-badge">Artisan Dairy</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/paneer.jpg" alt="Spiced Paneer" loading="lazy">
                </div>
                <div class="option-name">Spiced Paneer</div>
                <div class="option-meta"><span>210 kcal &bull; 18g P</span><span class="option-price">+$3.00</span></div>
              </div>
              <div class="builder-card-option" data-category="protein" data-value="Tofu">
                <span class="option-badge">Organic Plant</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/tofu.jpg" alt="Organic Tofu" loading="lazy">
                </div>
                <div class="option-name">Organic Tofu</div>
                <div class="option-meta"><span>130 kcal &bull; 14g P</span><span class="option-price">+$2.50</span></div>
              </div>
              <div class="builder-card-option" data-category="protein" data-value="Chickpeas">
                <span class="option-badge">Fiber Loaded</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/chickpeas.jpg" alt="Roasted Chickpeas" loading="lazy">
                </div>
                <div class="option-name">Roasted Chickpeas</div>
                <div class="option-meta"><span>140 kcal &bull; 8g P</span><span class="option-price">+$2.00</span></div>
              </div>
              <div class="builder-card-option" data-category="protein" data-value="Eggs">
                <span class="option-badge">Free-Range</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/eggs.jpg" alt="Soft-Boiled Eggs" loading="lazy">
                </div>
                <div class="option-name">Soft-Boiled Eggs</div>
                <div class="option-meta"><span>140 kcal &bull; 12g P</span><span class="option-price">+$2.00</span></div>
              </div>
            </div>
          </div>

          <!-- Step 3 Choose Vegetables -->
          <div class="builder-step-panel" id="step-veggies">
            <div class="builder-step-header">
              <div class="builder-step-title">
                <span class="step-num">3</span>
                <div>
                  <h3 style="margin-bottom:0.2rem;">Choose Fresh Vegetables</h3>
                  <div class="step-rule">Pick 3 included (Extra veggies +$0.75 each)</div>
                </div>
              </div>
            </div>
            <div class="builder-options-grid">
              <div class="builder-card-option selected" data-category="vegetables" data-value="Cucumber">
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/cucumber.jpg" alt="English Cucumber" loading="lazy">
                </div>
                <div class="option-name">English Cucumber</div>
                <div class="option-meta"><span>16 kcal</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option selected" data-category="vegetables" data-value="Tomato">
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/tomato.jpg" alt="Vine Tomato" loading="lazy">
                </div>
                <div class="option-name">Vine Tomato</div>
                <div class="option-meta"><span>22 kcal</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option selected" data-category="vegetables" data-value="Carrot">
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/carrot.jpg" alt="Shredded Carrot" loading="lazy">
                </div>
                <div class="option-name">Shredded Carrot</div>
                <div class="option-meta"><span>25 kcal</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option selected" data-category="vegetables" data-value="Corn">
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/corn.jpg" alt="Sweet Corn" loading="lazy">
                </div>
                <div class="option-name">Sweet Corn</div>
                <div class="option-meta"><span>45 kcal</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option" data-category="vegetables" data-value="Broccoli">
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/broccoli.jpg" alt="Steamed Broccoli" loading="lazy">
                </div>
                <div class="option-name">Steamed Broccoli</div>
                <div class="option-meta"><span>35 kcal</span><span class="option-price">Included</span></div>
              </div>
            </div>
          </div>

          <!-- Step 4 Choose Toppings -->
          <div class="builder-step-panel" id="step-toppings">
            <div class="builder-step-header">
              <div class="builder-step-title">
                <span class="step-num">4</span>
                <div>
                  <h3 style="margin-bottom:0.2rem;">Choose Crunch &amp; Toppings</h3>
                  <div class="step-rule">Select your favorite texture accents</div>
                </div>
              </div>
            </div>
            <div class="builder-options-grid">
              <div class="builder-card-option" data-category="toppings" data-value="Seeds">
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/pepitas.jpg" alt="Roasted Pepitas" loading="lazy">
                </div>
                <div class="option-name">Roasted Pepitas</div>
                <div class="option-meta"><span>70 kcal</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option" data-category="toppings" data-value="Nuts">
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/walnuts.jpg" alt="Toasted Walnuts" loading="lazy">
                </div>
                <div class="option-name">Toasted Walnuts</div>
                <div class="option-meta"><span>90 kcal</span><span class="option-price">+$0.50</span></div>
              </div>
              <div class="builder-card-option" data-category="toppings" data-value="Croutons">
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/croutons.jpg" alt="Sourdough Croutons" loading="lazy">
                </div>
                <div class="option-name">Sourdough Croutons</div>
                <div class="option-meta"><span>60 kcal</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option selected" data-category="toppings" data-value="Avocado">
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/avocado.jpg" alt="Sliced Haas Avocado" loading="lazy">
                </div>
                <div class="option-name">Sliced Haas Avocado</div>
                <div class="option-meta"><span>120 kcal</span><span class="option-price">+$1.50</span></div>
              </div>
            </div>
          </div>

          <!-- Step 5 Choose Dressing -->
          <div class="builder-step-panel" id="step-dressing">
            <div class="builder-step-header">
              <div class="builder-step-title">
                <span class="step-num">5</span>
                <div>
                  <h3 style="margin-bottom:0.2rem;">Choose Handcrafted Dressing</h3>
                  <div class="step-rule">1 scratch-made dressing included on the side</div>
                </div>
              </div>
            </div>
            <div class="builder-options-grid">
              <div class="builder-card-option selected" data-category="dressing" data-value="Lemon Herb">
                <span class="option-badge">Zesty</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/lemon-herb.jpg" alt="Lemon Herb Dressing" loading="lazy">
                </div>
                <div class="option-name">Lemon Herb</div>
                <div class="option-meta"><span>65 kcal</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option" data-category="dressing" data-value="Tahini">
                <span class="option-badge">Nutty</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/tahini.jpg" alt="Creamy Tahini Dressing" loading="lazy">
                </div>
                <div class="option-name">Creamy Tahini</div>
                <div class="option-meta"><span>90 kcal</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option" data-category="dressing" data-value="Ranch">
                <span class="option-badge">Classic</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/ranch.jpg" alt="Herbed Ranch Dressing" loading="lazy">
                </div>
                <div class="option-name">Herbed Ranch</div>
                <div class="option-meta"><span>110 kcal</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option" data-category="dressing" data-value="Honey Mustard">
                <span class="option-badge">Sweet Tang</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/honey-mustard.jpg" alt="Honey Mustard Dressing" loading="lazy">
                </div>
                <div class="option-name">Honey Mustard</div>
                <div class="option-meta"><span>85 kcal</span><span class="option-price">Included</span></div>
              </div>
              <div class="builder-card-option" data-category="dressing" data-value="Balsamic">
                <span class="option-badge">Rich</span>
                <div class="option-img-thumb">
                  <img src="assets/images/ingredients/balsamic.jpg" alt="Aged Balsamic Dressing" loading="lazy">
                </div>
                <div class="option-name">Aged Balsamic</div>
                <div class="option-meta"><span>50 kcal</span><span class="option-price">Included</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Sticky Live Bowl Summary Drawer -->
        <aside class="builder-summary-column">
          <div class="builder-summary-card">
            <div class="builder-summary-header">
              <span class="badge-tag badge-tag-lime">Live Tray Preview</span>
              <h3 style="margin:0.4rem 0;">YOUR CUSTOM BOWL</h3>
              <p style="font-size:0.85rem; color:var(--muted-text);">Calculated in real-time as you pick ingredients</p>
            </div>

            <!-- Visual Graphic Bowl Container -->
            <div class="builder-visual-bowl">
              <div style="font-size:0.75rem; font-weight:800; color:var(--deep-green); margin-bottom:0.5rem; text-transform:uppercase; letter-spacing:0.05em;">Bowl Assembly</div>
              <div class="bowl-graphic-preview" id="bowl-live-preview-tags">
                <!-- Dynamically populated tags -->
              </div>
            </div>

            <!-- Line Items Summary -->
            <div class="builder-summary-list">
              <div class="summary-line-item">
                <span class="summary-line-label">Base Foundation:</span>
                <span class="summary-line-value" id="summary-base">Quinoa</span>
              </div>
              <div class="summary-line-item">
                <span class="summary-line-label">Protein(s):</span>
                <span class="summary-line-value" id="summary-protein">Grilled Chicken</span>
              </div>
              <div class="summary-line-item">
                <span class="summary-line-label">Vegetables:</span>
                <span class="summary-line-value" id="summary-veg">Cucumber, Tomato, Carrot</span>
              </div>
              <div class="summary-line-item">
                <span class="summary-line-label">Toppings:</span>
                <span class="summary-line-value" id="summary-toppings">Avocado</span>
              </div>
              <div class="summary-line-item">
                <span class="summary-line-label">Dressing:</span>
                <span class="summary-line-value" id="summary-dressing">Lemon Herb</span>
              </div>
            </div>

            <!-- Macro Progress Visualizers (Pure CSS, no chart library) -->
            <div class="builder-nutrition-bars">
              <div style="display:flex; justify-content:space-between; font-weight:800; font-size:0.85rem; margin-bottom:0.6rem; color:var(--deep-green);">
                <span>Total Energy</span>
                <span id="summary-calories">580 kcal</span>
              </div>
              
              <div class="macro-bar-row">
                <div class="macro-info"><span>Protein</span><span id="summary-p-val">42g</span></div>
                <div class="macro-progress"><div class="macro-fill macro-fill-protein" id="summary-p-bar" style="width: 80%;"></div></div>
              </div>
              <div class="macro-bar-row">
                <div class="macro-info"><span>Carbs</span><span id="summary-c-val">46g</span></div>
                <div class="macro-progress"><div class="macro-fill macro-fill-carbs" id="summary-c-bar" style="width: 65%;"></div></div>
              </div>
              <div class="macro-bar-row">
                <div class="macro-info"><span>Fats</span><span id="summary-f-val">22g</span></div>
                <div class="macro-progress"><div class="macro-fill macro-fill-fats" id="summary-f-bar" style="width: 50%;"></div></div>
              </div>
            </div>

            <!-- Total Price Row -->
            <div class="builder-total-row">
              <span style="font-weight:700; color:var(--deep-green); font-size:1.1rem;">Calculated Price:</span>
              <span class="builder-total-price" id="summary-total-price">$14.00</span>
            </div>

            <!-- Actions -->
            <div style="display:flex; flex-direction:column; gap:0.75rem;">
              <button type="button" class="btn btn-primary btn-lg" id="add-custom-bowl-btn" style="width:100%;">Add Bowl to Weekly Tray</button>
              <button type="button" class="btn btn-outline btn-sm" id="reset-builder-btn" style="width:100%;">Reset to Defaults</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>

  <!-- Section 5: Weekly Subscription Benefits -->
  <section class="section-white">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Membership Perks</span>
        <h2 class="section-title">WHY SUBSCRIBING TRANSFORMS YOUR HEALTH</h2>
        <p class="section-subtitle">When nutritious, vibrant lunches are waiting in your fridge, healthy living becomes your effortless default.</p>
      </div>
      <div class="grid-3">
        <div class="dash-panel" style="margin:0;">
          <div class="badge-icon" style="margin-bottom:1rem;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
          <h4>Zero Lunch Decision Fatigue</h4>
          <p style="color:var(--muted-text); font-size:0.92rem; margin-top:0.5rem;">Skip the delivery apps and afternoon food rush. Delicious chef-crafted meals are prepped and ready.</p>
        </div>
        <div class="dash-panel" style="margin:0;">
          <div class="badge-icon" style="margin-bottom:1rem;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          <h4>Save Up to $180 Monthly</h4>
          <p style="color:var(--muted-text); font-size:0.92rem; margin-top:0.5rem;">Subscribers receive wholesale club pricing of just $10.50/bowl compared to standard $14+ dine-in rates.</p>
        </div>
        <div class="dash-panel" style="margin:0;">
          <div class="badge-icon" style="margin-bottom:1rem;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg></div>
          <h4>Chilled Eco-Tote Delivery</h4>
          <p style="color:var(--muted-text); font-size:0.92rem; margin-top:0.5rem;">Delivered in insulated thermal cold-packs. Our drivers swap your previous bag weekly with zero waste.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Customer Testimonials -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Community Voices</span>
        <h2 class="section-title">LOVED BY WELLNESS LOVERS &amp; BUSY MINDS</h2>
        <p class="section-subtitle">Real experiences from subscribers who made Bowl'd part of their daily lifestyle.</p>
      </div>
      <div class="grid-3">
        <div class="testimonial-card">
          <div class="quote-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg></div>
          <p class="testimonial-text">"Bowl'd completely saved my weekdays. As an architect working 10-hour days, having five fresh, crisp salads waiting in my fridge keeps my energy clean without greasy takeout fog."</p>
          <div class="testimonial-author">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Elena Rostova" class="author-avatar">
            <div>
              <div class="author-name">Elena Rostova</div>
              <div class="author-role">Architect &bull; Balanced Plan Subscriber</div>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="quote-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg></div>
          <p class="testimonial-text">"The protein numbers are genuine. The chicken is juicy, the grains are seasoned properly, and the dressings taste like a high-end restaurant, not bottled preservatives."</p>
          <div class="testimonial-author">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Marcus Chen" class="author-avatar">
            <div>
              <div class="author-name">Marcus Chen</div>
              <div class="author-role">Personal Trainer &bull; Full Fresh Plan</div>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="quote-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg></div>
          <p class="testimonial-text">"I love that dressings are packaged separately so greens never get soggy. Even on Friday, the bowls taste just as fresh as Wednesday delivery."</p>
          <div class="testimonial-author">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" alt="Clara Bennett" class="author-avatar">
            <div>
              <div class="author-name">Clara Bennett</div>
              <div class="author-role">Software Engineer &bull; Starter Plan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Subscription CTA -->
  <section class="section-white" style="text-align:center; padding: 5.5rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Join the Club</span>
      <h2 class="section-title" style="margin-bottom:1rem;">REVOLUTIONIZE YOUR LUNCH HOUR.</h2>
      <p class="section-subtitle" style="font-size:1.1rem; margin-bottom:2rem; color:var(--muted-text);">Try our 5-Bowl Balanced Week plan with zero risk. You can pause or cancel anytime before your next cycle.</p>
      <a href="meal-plans.html" class="btn btn-primary btn-lg">Explore Weekly Plans</a>
    </div>
  </section>

  <!-- Modal: Custom Bowl Success Celebration -->
  <div class="modal-overlay" id="bowl-success-modal" role="dialog" aria-modal="true" aria-label="Bowl Added Confirmation">
    <div class="modal-card" style="text-align:center;">
      <button type="button" class="modal-close-btn" aria-label="Close modal">&times;</button>
      <div style="font-size:3rem; margin-bottom:1rem;">🥗✨</div>
      <h3 style="margin-bottom:0.5rem; color:var(--deep-green);">YOUR CUSTOM BOWL IS READY!</h3>
      <p style="color:var(--muted-text); font-size:0.95rem; margin-bottom:1.5rem;">
        Your customized bowl has been assembled and added to your weekly selection box tray.
      </p>
      <div class="btn-group" style="justify-content:center;">
        <a href="weekly-bowl-selection.html" class="btn btn-primary">Review Weekly Tray</a>
        <button type="button" class="btn btn-outline modal-close-btn">Build Another Bowl</button>
      </div>
    </div>
  </div>
</main>
<script src="assets/js/builder.js"></script>
${getFooter()}`;

// 3. about.html (About Us - Matching Reference Architecture Exactly)
const aboutHtml = `${getHead("Our Purpose & Philosophy", "Learn how Bowl'd started, our commitment to regional organic farming, zero-waste packaging, and honest nutrition.")}
${getNavbar('about')}
<main>
  <!-- Section 1: Hero Banner -->
  <section class="page-hero-banner hero-bg-kale">
    <div class="container">
      <div class="about-hero-grid">
        <div>
          <div class="hero-tag">
            <span>🥗</span> The Story of Bowl'd
          </div>
          <h1 class="hero-title">
            Born in Organic Soil, <span class="highlight-accent">Handcrafted</span> for Vibrant Living
          </h1>
          <p class="hero-subtitle">
            Bowl'd started with a simple conviction: clean eating should never mean dull compromise. No wilted commercial greens, no synthetic pesticides, and no inflammatory seed oils. Just honest regenerative produce, slow-steamed grains, and scratch dressings that nourish mind and body.
          </p>
          <div class="btn-group" style="gap:1rem;">
            <a href="menu.html" class="btn btn-primary btn-lg">Explore Menu</a>
            <a href="home-2.html#build-bowl" class="btn btn-outline btn-lg">Build Custom Bowl</a>
          </div>
        </div>
        <div>
          <div class="hero-main-img-box">
            <img src="assets/images/about/hero.jpg" alt="Chef Crafting Organic Salad Bowl">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Who We Are (Redesigned Editorial Showcase) -->
  <section class="section-who-we-are" id="who-we-are">
    <div class="container">
      <div class="about-who-grid">
        <!-- Left: Narrative & 3 Core Farm Pillars & Stats Strip -->
        <div>
          <div class="section-pill-tag">
            <span>🌱</span> Who We Are
          </div>
          <h2 class="section-heading">Rooted in Clean Soil, <span class="highlight-accent">Crafted for Pure Vitality</span></h2>
          <p class="who-lead-paragraph">
            Founded in 2021 at 124 Harvest Green Way, Bowl'd was born from a radical conviction: nourishing food should never feel like a chore, and quick dining should never compromise on ingredient purity. We bridge regional organic family farms directly to your busy workday routine.
          </p>

          <!-- 3 Feature Pillars -->
          <div class="who-pillars-list">
            <div class="who-pillar-item">
              <div class="who-pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <div>
                <h4 class="who-pillar-title">4-Hour Sunrise Harvest Chain</h4>
                <p class="who-pillar-desc">Contracted with 12 vetted zero-pesticide family growers within 40 miles. Hand-picked at dawn, cold-crated, and prepped in our kitchen before lunch.</p>
              </div>
            </div>

            <div class="who-pillar-item">
              <div class="who-pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
              <div>
                <h4 class="who-pillar-title">Zero Industrial Seed Oils Ever</h4>
                <p class="who-pillar-desc">Every warm grain sauté and scratch dressing uses 100% cold-pressed extra virgin olive oil or avocado oil. No canola, soy, preservatives, or synthetic gums.</p>
              </div>
            </div>

            <div class="who-pillar-item">
              <div class="who-pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
              </div>
              <div>
                <h4 class="who-pillar-title">Functional Macronutrient Calibration</h4>
                <p class="who-pillar-desc">Co-designed by clinical sports nutritionists to balance low-glycemic ancient grains with bioavailable lean proteins for lasting mental stamina.</p>
              </div>
            </div>
          </div>

          <!-- Unified Stats Strip -->
          <div class="who-stats-strip">
            <div class="who-stat-col">
              <span class="who-stat-num">1,500+</span>
              <span class="who-stat-lbl">Handcrafted Daily</span>
            </div>
            <div class="who-stat-divider"></div>
            <div class="who-stat-col">
              <span class="who-stat-num">&lt; 40 mi</span>
              <span class="who-stat-lbl">Max Farm Distance</span>
            </div>
            <div class="who-stat-divider"></div>
            <div class="who-stat-col">
              <span class="who-stat-num">100%</span>
              <span class="who-stat-lbl">Pesticide &amp; Seed-Oil Free</span>
            </div>
          </div>
        </div>

        <!-- Right: Layered Editorial Visual Stage -->
        <div>
          <div class="who-visual-stage">
            <!-- Top Live Farm Batch Tag -->
            <div class="who-float-batch">
              <span class="who-batch-dot"></span>
              <span>Morning Harvest Batch #084 &bull; Sourced 5:30 AM</span>
            </div>

            <!-- Main Feature Frame -->
            <div class="who-main-frame">
              <img src="assets/images/about/who-we-are.jpg" alt="Chef Assembling Organic Farm-Fresh Bowl" loading="lazy">
            </div>

            <!-- Bottom Floating Experience Pill Card -->
            <div class="who-float-card">
              <div class="who-float-icon-box">🥗</div>
              <div>
                <div class="who-float-card-title">Farm-Direct Certified</div>
                <div class="who-float-card-sub">Handcrafted Daily Since 2021 &bull; 100% Earth-Grown</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Clean Milestones / Our 5-Year Journey -->
  <section class="section-spacing" id="journey">
    <div class="container">
      <div class="section-title-wrap">
        <div class="section-pill-tag">Clean Milestones</div>
        <h2 class="section-heading">Our 5-Year Journey</h2>
        <p class="section-subtitle">
          How a humble weekend farmers market pop-up grew into the city's favorite clean-eating ritual.
        </p>
      </div>

      <div class="timeline-stepper">
        <!-- Step 1 -->
        <div class="timeline-step-item">
          <div class="timeline-marker-dot">1</div>
          <span class="timeline-step-date">Spring 2021</span>
          <h3 class="timeline-step-title">The Farmers Market Pop-Up</h3>
          <p class="timeline-step-desc">
            Started with a modest wooden booth at the Downtown Saturday Green Market, serving just two signature grain bowls and stone-ground lemon herb vinaigrette in glass mason jars.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="timeline-step-item">
          <div class="timeline-marker-dot">2</div>
          <span class="timeline-step-date">Summer 2023</span>
          <h3 class="timeline-step-title">The Cold-Chain Harvest Network</h3>
          <p class="timeline-step-desc">
            Established direct sourcing cooperatives with 12 organic family farms within a 40-mile radius, guaranteeing sunrise harvest-to-counter transit in under 4 hours.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="timeline-step-item">
          <div class="timeline-marker-dot">3</div>
          <span class="timeline-step-date">Autumn 2024</span>
          <h3 class="timeline-step-title">Kitchen Studio #14 &amp; Compostable Lab</h3>
          <p class="timeline-step-desc">
            Opened our permanent modernized kitchen at 124 Harvest Green Way, eliminating 100% of single-use petroleum plastics and introducing compostable sugarcane fiber containers.
          </p>
        </div>

        <!-- Step 4 -->
        <div class="timeline-step-item">
          <div class="timeline-marker-dot">4</div>
          <span class="timeline-step-date">Today (2026)</span>
          <h3 class="timeline-step-title">650,000+ Clean Bowls Delivered</h3>
          <p class="timeline-step-desc">
            Proudly nourishing mindful commuters, fitness athletes, and health-conscious families with 30+ farm-fresh ingredients and flexible weekly meal subscriptions.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Meet the Founders -->
  <section class="section-spacing section-spacing-alt" id="founders">
    <div class="container">
      <div class="section-title-wrap">
        <div class="section-pill-tag">The People Behind the Harvest</div>
        <h2 class="section-heading">Meet Our Co-Founders</h2>
        <p class="section-subtitle">
          The master culinary artist and clinical nutritionist whose passion, standards, and care shape every bowl we craft.
        </p>
      </div>

      <div class="founders-grid">
        <!-- Founder 1 -->
        <div class="founder-card">
          <div class="founder-header">
            <div class="founder-avatar-box">
              <img src="assets/images/about/chef-maya.jpg" alt="Chef Maya Lin, Co-Founder &amp; Executive Chef">
            </div>
            <div>
              <span class="founder-role-badge">Co-Founder &amp; Executive Chef</span>
              <h3 class="founder-name">Chef Maya Lin</h3>
              <small class="founder-tenure">14 Years Botanical Culinary Mastery</small>
            </div>
          </div>
          <p class="founder-bio">
            Trained in Michelin-starred farm-to-table kitchens across Northern California and Tokyo, Chef Maya orchestrates ingredient flavor pairings, seasonal microgreens, and scratch cold-pressed vinaigrettes. She believes wholesome nutrition must be as vibrant, craveable, and artful as fine dining.
          </p>
          <div class="founder-quote">
            "If a bowl doesn't celebrate the natural crunch of morning soil and the vibrant brightness of fresh citrus, it doesn't leave our prep line."
          </div>
          <div class="founder-signature">
            🥗 Master Specialty: <span>Crisp Supergreens &amp; Scratch Citrus Emulsions</span>
          </div>
        </div>

        <!-- Founder 2 -->
        <div class="founder-card">
          <div class="founder-header">
            <div class="founder-avatar-box">
              <img src="assets/images/about/chef-julian.jpg" alt="Chef Julian Diaz, MS, Co-Founder &amp; Head of Clinical Nutrition">
            </div>
            <div>
              <span class="founder-role-badge founder-role-badge-alt">Co-Founder &amp; Head of Nutrition</span>
              <h3 class="founder-name">Chef Julian Diaz, MS</h3>
              <small class="founder-tenure">12 Years Functional Micronutrient Science</small>
            </div>
          </div>
          <p class="founder-bio">
            Holding a Master's in Nutritional Biochemistry from Cornell, Julian designs macro-balanced meal systems optimized for sustained cognitive clarity, digestive ease, and steady glucose curves. He ensures every bowl delivers clean plant and lean poultry proteins without synthetic additives.
          </p>
          <div class="founder-quote">
            "Food is biologically active fuel. When whole foods remain unadulterated by industrial processing, the human body thrives in its peak natural state."
          </div>
          <div class="founder-signature">
            🥑 Master Specialty: <span>Ancient Grain Ferments &amp; High-Protein Macro Bowls</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Culinary Ethics & Speciality Values -->
  <section class="section-spacing" id="values">
    <div class="container">
      <div class="section-title-wrap">
        <div class="section-pill-tag">Culinary Ethics</div>
        <h2 class="section-heading">Our Speciality &amp; Kitchen Values</h2>
        <p class="section-subtitle">
          What makes every bowl at Bowl'd distinctly cleaner, fresher, and more nourishing than conventional restaurant takeout.
        </p>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <div class="value-card-icon">🥗</div>
          <h3 class="value-card-title">100% Organic Soil Produce</h3>
          <p class="value-card-desc">
            Harvested at peak soil ripeness and cold-rinsed within hours. Zero synthetic pesticides, chemical waxes, or genetically modified seeds.
          </p>
        </div>

        <div class="value-card">
          <div class="value-card-icon">🌿</div>
          <h3 class="value-card-title">Zero Seed Oils Ever</h3>
          <p class="value-card-desc">
            Every dressing, warm saute, and roasted topping uses 100% pure cold-pressed extra virgin olive oil or avocado oil. No canola, soy, or palm oils.
          </p>
        </div>

        <div class="value-card">
          <div class="value-card-icon">🌱</div>
          <h3 class="value-card-title">Absolute Diet &amp; Allergen Purity</h3>
          <p class="value-card-desc">
            Dedicated plant-only prep stations, separate cold storage, distinct color-coded utensils, and isolated cutting boards for uncompromising dietary peace of mind.
          </p>
        </div>

        <div class="value-card">
          <div class="value-card-icon">🌶️</div>
          <h3 class="value-card-title">Daily Scratch Dressing Lab</h3>
          <p class="value-card-desc">
            Our signature dressings—from zesty lemon-herb to creamy golden tahini—are blended fresh every dawn. Zero bottled vinegar preservatives or emulsifier gums.
          </p>
        </div>

        <div class="value-card">
          <div class="value-card-icon">💧</div>
          <h3 class="value-card-title">Triple-Stage UV Filtration</h3>
          <p class="value-card-desc">
            All produce cold-washing, ancient grain steaming, and house dressing preparation utilizes certified multi-stage UV and carbon block micro-filtered water.
          </p>
        </div>

        <div class="value-card">
          <div class="value-card-icon">📦</div>
          <h3 class="value-card-title">Eco Compostable Packaging</h3>
          <p class="value-card-desc">
            Tree-free unbleached sugarcane fiber bowls and plant-resin lids that naturally breathe and return completely to soil within 90 days.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Testimonials -->
  <section class="section-spacing section-spacing-alt" id="testimonials">
    <div class="container">
      <div class="section-title-wrap">
        <div class="section-pill-tag">Community Verdicts</div>
        <h2 class="section-heading">Loved by Everyday Health Seekers &amp; Athletes</h2>
        <p class="section-subtitle">
          Hear what regular subscribers and daily visitors say about our crisp bowls and scratch dressings.
        </p>
      </div>

      <div class="reviews-grid">
        <!-- Testimonial 1 -->
        <div class="review-card">
          <div>
            <div class="review-card-header">
              <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <span class="review-badge-verified">✓ Verified Subscriber</span>
            </div>
            <p class="review-text">
              "Bowl'd completely transformed my workday lunches. Before Bowl'd, I was getting sluggish takeout or skipping lunch. Now I have crisp, chef-grade bowls delivered twice a week that keep my energy steady through late afternoon meetings."
            </p>
          </div>
          <div class="reviewer-meta">
            <div class="reviewer-avatar">
              <img src="assets/images/about/customer-1.jpg" alt="Sarah Jenkins" class="reviewer-avatar-img">
            </div>
            <div class="reviewer-info">
              <h4>Sarah Jenkins</h4>
              <span>Product Manager &bull; 5-Day Balanced Plan</span>
            </div>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="review-card">
          <div>
            <div class="review-card-header">
              <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <span class="review-badge-verified">✓ Verified Subscriber</span>
            </div>
            <p class="review-text">
              "As a marathon runner, finding ready-to-eat meals that have genuine whole food macros without sketchy fillers is nearly impossible. The Green Goddess and Harissa Chicken bowls are absolute perfection."
            </p>
          </div>
          <div class="reviewer-meta">
            <div class="reviewer-avatar">
              <img src="assets/images/about/customer-2.jpg" alt="David Chen" class="reviewer-avatar-img">
            </div>
            <div class="reviewer-info">
              <h4>David Chen</h4>
              <span>Marathon Runner &bull; 7-Day Performance Plan</span>
            </div>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="review-card">
          <div>
            <div class="review-card-header">
              <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <span class="review-badge-verified">✓ Verified Subscriber</span>
            </div>
            <p class="review-text">
              "The compostable sugarcane packaging and the dressing on the side means everything stays crisp until I'm ready to eat. Plus, the scratch lemon-herb vinaigrette is addictive. Highly recommend to everyone!"
            </p>
          </div>
          <div class="reviewer-meta">
            <div class="reviewer-avatar">
              <img src="assets/images/about/customer-3.jpg" alt="Dr. Rachel Vance" class="reviewer-avatar-img">
            </div>
            <div class="reviewer-info">
              <h4>Dr. Rachel Vance</h4>
              <span>Clinical Psychologist &bull; 3-Day Starter Plan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Visit Banner Box / Experience Our Craft -->
  <section class="section-spacing" id="visit-cta">
    <div class="container">
      <div class="visit-banner-box">
        <div>
          <div class="stall-timing-pill">
            <span>🥗</span> Experience Our Craft
          </div>
          <h2>Come Say Hi to Our Chefs at Kitchen Studio #14</h2>
          <p>
            Located at 124 Harvest Green Way, Suite 100. Build your custom grain bowl live at our counter or grab a refrigerated weekly meal box on your way home.
          </p>
          <div class="visit-perks-row">
            <span>✓ Open Daily 8:00 AM – 9:00 PM</span>
            <span>✓ Rapid Order Pickup</span>
            <span>✓ 100% Compostable Packaging</span>
          </div>
        </div>
        <div class="visit-banner-actions">
          <a href="menu.html" class="btn btn-primary btn-lg w-100">Browse Full Menu</a>
          <a href="home-2.html#build-bowl" class="btn btn-outline btn-lg w-100 visit-btn-secondary">Craft Custom Bowl</a>
        </div>
      </div>
    </div>
  </section>
</main>
${getFooter()}`;

// 4. menu.html (Complete Menu - 7 Sections with interactive filters)
const menuHtml = `${getHead("Our Complete Menu", "Explore our full menu of signature bowls, fresh grain bases, lean proteins, dressings, and immunity juices. Interactive filters.")}
${getNavbar('menu')}
<main>
  <!-- Section 1: Menu Editorial Hero & Interactive Filters -->
  <section class="menu-editorial-hero hero-bg-avocado" id="menu-hero">
    <div class="container">
      <div class="menu-hero-grid">
        <!-- Left Content -->
        <div>
          <div class="hero-tag">
            <span>🥗</span> Peak Season 2026 Menu
          </div>
          <h1 class="hero-title">
            CHEF-CRAFTED HARVEST, <span class="highlight-accent">PURE WHOLE INGREDIENTS.</span>
          </h1>
          <p class="hero-subtitle">
            Explore our antioxidant signature bowls, slow-steamed whole grain bases, clean poultry &amp; plant proteins, and scratch cold-pressed dressings. Prepared to order with 100% soil-grown transparency.
          </p>
          <div class="menu-hero-perks">
            <span class="menu-perk-badge"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> 100% Seed-Oil Free</span>
            <span class="menu-perk-badge"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Sourced &lt; 40 Miles</span>
            <span class="menu-perk-badge"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Detailed Macros on Every Bowl</span>
          </div>
        </div>

        <!-- Right Visual Card (Featured Chef Special) -->
        <div>
          <div class="menu-hero-card">
            <div class="menu-hero-card-img-wrap">
              <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80" alt="Green Goddess Harvest Bowl" loading="lazy">
              <span class="menu-card-tag">⭐ Chef's Special of the Week</span>
            </div>
            <div class="menu-hero-card-body">
              <div class="menu-hero-card-row">
                <h3 class="menu-hero-card-title">Green Goddess Superbowl</h3>
                <span class="menu-hero-card-price">$12.50</span>
              </div>
              <p class="menu-hero-card-desc">Baby spinach, crisp edamame, Hass avocado, pumpkin seeds &amp; lemon-herb emulsion.</p>
              <div class="menu-hero-card-footer">
                <span class="menu-hero-macro">480 kcal &bull; 18g Protein &bull; 12g Fiber</span>
                <a href="#signature-bowls" class="menu-hero-jump-btn">View Below &darr;</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Interactive Filter Bar -->
      <div class="filter-bar" style="margin-top: 3rem;">
        <div class="filter-pills" role="tablist">
          <button type="button" class="filter-pill active" data-category="all">All Items</button>
          <button type="button" class="filter-pill" data-category="bowls">Signature Bowls</button>
          <button type="button" class="filter-pill" data-category="bases">Salad Bases</button>
          <button type="button" class="filter-pill" data-category="proteins">Protein Choices</button>
          <button type="button" class="filter-pill" data-category="toppings">Toppings &amp; Dressings</button>
          <button type="button" class="filter-pill" data-category="sides">Sides &amp; Drinks</button>
        </div>
        <div class="search-input-wrap">
          <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" id="menu-search-input" class="search-input" placeholder="Search ingredients or bowls..." aria-label="Search menu">
        </div>
      </div>
      <div id="menu-count-display" style="font-size:0.88rem; color:var(--muted-text); margin-top:-1.2rem; margin-bottom:1rem; text-align:start;">Showing all 20+ fresh options</div>
    </div>
  </section>

  <!-- Section 2: Signature Bowls -->
  <section class="section-white">
    <div class="container">
      <div class="section-header text-start">
        <span class="badge-tag">Category 01</span>
        <h2 class="section-title">SIGNATURE BOWLS</h2>
        <p class="section-subtitle">Complete, balanced meals crafted by our executive culinary team.</p>
      </div>
      <div class="grid-3">
        <!-- Item 1 -->
        <article class="bowl-card menu-grid-item" data-category="bowls">
          <div class="bowl-card-media">
            <span class="bowl-card-badge diet-badge diet-vegan">Vegan</span>
            <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80" alt="Green Goddess Bowl">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title"><a href="menu-details.html">Green Goddess Bowl</a></h3>
              <div class="bowl-card-price">$12.50</div>
            </div>
            <p class="bowl-card-ingredients">Baby spinach, steamed edamame, cucumber, Hass avocado, pumpkin seeds, and green goddess herb dressing.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">480 kcal &bull; 18g P</span>
              <button type="button" class="btn btn-primary btn-sm btn-add-bowl" data-name="Green Goddess Bowl">Add to Tray</button>
            </div>
          </div>
        </article>

        <!-- Item 2 -->
        <article class="bowl-card menu-grid-item" data-category="bowls">
          <div class="bowl-card-media">
            <span class="bowl-card-badge diet-badge diet-protein">High Protein</span>
            <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80" alt="Protein Power Bowl">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title"><a href="menu-details.html">Protein Power Bowl</a></h3>
              <div class="bowl-card-price">$14.00</div>
            </div>
            <p class="bowl-card-ingredients">Flame-grilled chicken, tricolor quinoa, roasted broccoli, spiced chickpeas, soft egg, and lemon herb dressing.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">560 kcal &bull; 42g P</span>
              <button type="button" class="btn btn-primary btn-sm btn-add-bowl" data-name="Protein Power Bowl">Add to Tray</button>
            </div>
          </div>
        </article>

        <!-- Item 3 -->
        <article class="bowl-card menu-grid-item" data-category="bowls">
          <div class="bowl-card-media">
            <span class="bowl-card-badge diet-badge diet-gf">Gluten Free</span>
            <img src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80" alt="Mediterranean Bowl">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title"><a href="menu-details.html">Mediterranean Bowl</a></h3>
              <div class="bowl-card-price">$13.25</div>
            </div>
            <p class="bowl-card-ingredients">Crisp romaine, vine tomatoes, Kalamata olives, creamy feta, shaved onion, and Greek herb vinaigrette.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">510 kcal &bull; 20g P</span>
              <button type="button" class="btn btn-primary btn-sm btn-add-bowl" data-name="Mediterranean Bowl">Add to Tray</button>
            </div>
          </div>
        </article>

        <!-- Item 4 -->
        <article class="bowl-card menu-grid-item" data-category="bowls">
          <div class="bowl-card-media">
            <span class="bowl-card-badge diet-badge diet-vegan">Plant Fuel</span>
            <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80" alt="Rainbow Crunch Bowl">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title"><a href="menu-details.html">Rainbow Crunch Bowl</a></h3>
              <div class="bowl-card-price">$13.00</div>
            </div>
            <p class="bowl-card-ingredients">Red cabbage, carrots, organic tofu, sesame seeds, edamame, and ginger miso vinaigrette.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">490 kcal &bull; 21g P</span>
              <button type="button" class="btn btn-primary btn-sm btn-add-bowl" data-name="Rainbow Crunch Bowl">Add to Tray</button>
            </div>
          </div>
        </article>

        <!-- Item 5 -->
        <article class="bowl-card menu-grid-item" data-category="bowls">
          <div class="bowl-card-media">
            <span class="bowl-card-badge diet-badge diet-protein">Chef's Warm Pick</span>
            <img src="https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80" alt="Spicy Paneer Bowl">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title"><a href="menu-details.html">Spicy Paneer Bowl</a></h3>
              <div class="bowl-card-price">$13.75</div>
            </div>
            <p class="bowl-card-ingredients">Grilled cottage paneer, brown rice, roasted sweet peppers, baby spinach, cilantro lime dressing.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">540 kcal &bull; 26g P</span>
              <button type="button" class="btn btn-primary btn-sm btn-add-bowl" data-name="Spicy Paneer Bowl">Add to Tray</button>
            </div>
          </div>
        </article>

        <!-- Item 6 -->
        <article class="bowl-card menu-grid-item" data-category="bowls">
          <div class="bowl-card-media">
            <span class="bowl-card-badge diet-badge diet-calorie">Classic</span>
            <img src="https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80" alt="Classic Caesar Bowl">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title"><a href="menu-details.html">Classic Caesar Bowl</a></h3>
              <div class="bowl-card-price">$12.50</div>
            </div>
            <p class="bowl-card-ingredients">Crisp romaine, sourdough croutons, parmesan shards, herb chicken, and lighter yogurt Caesar dressing.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">460 kcal &bull; 34g P</span>
              <button type="button" class="btn btn-primary btn-sm btn-add-bowl" data-name="Classic Caesar Bowl">Add to Tray</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Section 3: Salad Bases -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header text-start">
        <span class="badge-tag">Category 02</span>
        <h2 class="section-title">SALAD BASES &amp; GRAINS</h2>
        <p class="section-subtitle">Available individually as side bowls or as the canvas for your custom creations.</p>
      </div>
      <div class="grid-3">
        <div class="dash-panel menu-grid-item" data-category="bases" style="margin:0;">
          <h4>Tricolor Quinoa Base</h4>
          <div class="bowl-card-price" style="margin:0.4rem 0;">$4.50</div>
          <p style="font-size:0.88rem; color:var(--muted-text);">Cooked in vegetable broth with sea salt and cold-pressed olive oil.</p>
          <span class="diet-badge diet-calorie">180 kcal &bull; 6g Protein</span>
        </div>
        <div class="dash-panel menu-grid-item" data-category="bases" style="margin:0;">
          <h4>Nutty Brown Rice Base</h4>
          <div class="bowl-card-price" style="margin:0.4rem 0;">$4.00</div>
          <p style="font-size:0.88rem; color:var(--muted-text);">Steamed organic long-grain brown rice with a delicate nuttiness.</p>
          <span class="diet-badge diet-calorie">190 kcal &bull; 4g Protein</span>
        </div>
        <div class="dash-panel menu-grid-item" data-category="bases" style="margin:0;">
          <h4>Farm Greens Blend</h4>
          <div class="bowl-card-price" style="margin:0.4rem 0;">$4.00</div>
          <p style="font-size:0.88rem; color:var(--muted-text);">Baby spinach, crisp romaine, and wild arugula with lemon spritz.</p>
          <span class="diet-badge diet-calorie">35 kcal &bull; 3g Protein</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Protein Choices -->
  <section class="section-white">
    <div class="container">
      <div class="section-header text-start">
        <span class="badge-tag">Category 03</span>
        <h2 class="section-title">PROTEIN CHOICES (ADD-ONS)</h2>
        <p class="section-subtitle">Double up your protein portion or add clean fuel to any base.</p>
      </div>
      <div class="grid-4" style="grid-template-columns: repeat(5, 1fr);">
        <div class="dash-panel menu-grid-item" data-category="proteins" style="text-align:center; padding:1.4rem; margin:0;">
          <h4>Grilled Chicken</h4>
          <div class="bowl-card-price" style="margin:0.3rem 0;">+$3.50</div>
          <span class="diet-badge diet-protein">32g Protein</span>
          <p style="font-size:0.82rem; margin-top:0.5rem; color:var(--muted-text);">Flame-grilled herb chicken breast.</p>
        </div>
        <div class="dash-panel menu-grid-item" data-category="proteins" style="text-align:center; padding:1.4rem; margin:0;">
          <h4>Cottage Paneer</h4>
          <div class="bowl-card-price" style="margin:0.3rem 0;">+$3.00</div>
          <span class="diet-badge diet-protein">18g Protein</span>
          <p style="font-size:0.82rem; margin-top:0.5rem; color:var(--muted-text);">Spiced and lightly seared.</p>
        </div>
        <div class="dash-panel menu-grid-item" data-category="proteins" style="text-align:center; padding:1.4rem; margin:0;">
          <h4>Organic Tofu</h4>
          <div class="bowl-card-price" style="margin:0.3rem 0;">+$2.50</div>
          <span class="diet-badge diet-vegan">14g Protein</span>
          <p style="font-size:0.82rem; margin-top:0.5rem; color:var(--muted-text);">Sesame marinated crispy cubes.</p>
        </div>
        <div class="dash-panel menu-grid-item" data-category="proteins" style="text-align:center; padding:1.4rem; margin:0;">
          <h4>Spiced Chickpeas</h4>
          <div class="bowl-card-price" style="margin:0.3rem 0;">+$2.00</div>
          <span class="diet-badge diet-gf">8g Protein</span>
          <p style="font-size:0.82rem; margin-top:0.5rem; color:var(--muted-text);">Roasted with paprika and cumin.</p>
        </div>
        <div class="dash-panel menu-grid-item" data-category="proteins" style="text-align:center; padding:1.4rem; margin:0;">
          <h4>Free-Range Eggs</h4>
          <div class="bowl-card-price" style="margin:0.3rem 0;">+$2.00</div>
          <span class="diet-badge diet-keto">12g Protein</span>
          <p style="font-size:0.82rem; margin-top:0.5rem; color:var(--muted-text);">Two jammy soft-boiled eggs.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Toppings and Dressings -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header text-start">
        <span class="badge-tag">Category 04</span>
        <h2 class="section-title">TOPPINGS &amp; SCRATCH DRESSINGS</h2>
        <p class="section-subtitle">Crafted in our kitchen every single morning in small 2-liter batches.</p>
      </div>
      <div class="grid-3">
        <div class="dash-panel menu-grid-item" data-category="toppings" style="margin:0;">
          <h4>Lemon Herb Vinaigrette</h4>
          <div class="bowl-card-price" style="margin:0.3rem 0;">$1.25 / 2oz</div>
          <p style="font-size:0.88rem; color:var(--muted-text);">Cold-pressed olive oil, fresh oregano, thyme, and lemon.</p>
        </div>
        <div class="dash-panel menu-grid-item" data-category="toppings" style="margin:0;">
          <h4>Creamy Sesame Tahini</h4>
          <div class="bowl-card-price" style="margin:0.3rem 0;">$1.25 / 2oz</div>
          <p style="font-size:0.88rem; color:var(--muted-text);">Roasted sesame paste, garlic clove, lemon, and sea salt.</p>
        </div>
        <div class="dash-panel menu-grid-item" data-category="toppings" style="margin:0;">
          <h4>Aged Balsamic Reduction</h4>
          <div class="bowl-card-price" style="margin:0.3rem 0;">$1.25 / 2oz</div>
          <p style="font-size:0.88rem; color:var(--muted-text);">Modena balsamic vinegar simmered with shallots and olive oil.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Sides and Beverages -->
  <section class="section-white">
    <div class="container">
      <div class="section-header text-start">
        <span class="badge-tag">Category 05</span>
        <h2 class="section-title">SIDES &amp; COLD DRINKS</h2>
        <p class="section-subtitle">Pair your meal with a nutrient-rich cold-pressed juice or artisan crisp side.</p>
      </div>
      <div class="grid-3">
        <article class="bowl-card menu-grid-item" data-category="sides">
          <div class="bowl-card-media" style="aspect-ratio:16/9;">
            <img src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80" alt="Green Immunity Juice">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title">Green Immunity Juice</h3>
              <div class="bowl-card-price">$6.50</div>
            </div>
            <p class="bowl-card-ingredients">Cucumber, celery, green apple, kale, ginger, and lemon. Cold-pressed raw.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">110 kcal &bull; 0g Fat</span>
              <button type="button" class="btn btn-outline btn-sm btn-add-bowl" data-name="Green Immunity Juice">Add Drink</button>
            </div>
          </div>
        </article>

        <article class="bowl-card menu-grid-item" data-category="sides">
          <div class="bowl-card-media" style="aspect-ratio:16/9;">
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" alt="Citrus Kombucha">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title">Citrus Ginger Kombucha</h3>
              <div class="bowl-card-price">$5.75</div>
            </div>
            <p class="bowl-card-ingredients">Live probiotic fermented black tea infused with cold-pressed grapefruit and ginger root.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">45 kcal &bull; Probiotic</span>
              <button type="button" class="btn btn-outline btn-sm btn-add-bowl" data-name="Citrus Ginger Kombucha">Add Drink</button>
            </div>
          </div>
        </article>

        <article class="bowl-card menu-grid-item" data-category="sides">
          <div class="bowl-card-media" style="aspect-ratio:16/9;">
            <img src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80" alt="Herb Pita Crisps">
          </div>
          <div class="bowl-card-body">
            <div class="bowl-card-header">
              <h3 class="bowl-card-title">Baked Herb Pita Crisps</h3>
              <div class="bowl-card-price">$3.50</div>
            </div>
            <p class="bowl-card-ingredients">Crispy whole-wheat pita chips seasoned with za'atar spices and extra virgin olive oil.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">140 kcal &bull; 4g P</span>
              <button type="button" class="btn btn-outline btn-sm btn-add-bowl" data-name="Baked Herb Pita Crisps">Add Side</button>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Section 7: Nutrition & Customization CTA -->
  <section class="section-tint" style="text-align:center; padding: 5rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Custom Creations</span>
      <h2 class="section-title" style="margin-bottom:1rem;">CAN'T FIND YOUR EXACT CRAVING?</h2>
      <p class="section-subtitle" style="font-size:1.1rem; margin-bottom:2rem; color:var(--muted-text);">Use our step-by-step bowl builder to customize bases, proteins, and crunch toppings with live nutrition calculation.</p>
      <div class="btn-group" style="justify-content:center;">
        <a href="home-2.html#build-bowl" class="btn btn-primary btn-lg">Launch Custom Bowl Builder</a>
        <a href="nutrition.html" class="btn btn-outline btn-lg">Check Nutrition Facts</a>
      </div>
    </div>
  </section>
</main>
<script src="assets/js/menu.js"></script>
${getFooter()}`;

// Write files
fs.writeFileSync('index.html', indexHtml);
fs.writeFileSync('home-2.html', home2Html);
fs.writeFileSync('about.html', aboutHtml);
fs.writeFileSync('menu.html', menuHtml);
console.log('Successfully generated index.html, home-2.html, about.html, menu.html');


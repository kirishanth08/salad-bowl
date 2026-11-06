const fs = require('fs');
const { getHead, getNavbar, getFooter } = require('./generator_base');

// 9. nutrition.html (Nutrition & Ingredients - 7 Sections)
const nutritionHtml = `${getHead("Nutrition Facts & Ingredient Library", "Understand balanced bowl macros, explore our complete ingredient library, protein comparisons, and kitchen allergen safety.")}
${getNavbar('nutrition')}
<main>
  <!-- Section 1: Hero -->
  <section class="hero-section page-hero-banner hero-bg-broccoli" style="padding:4rem 0 3rem;">
    <div class="container text-center">
      <span class="badge-tag badge-tag-lime">Clean Transparency</span>
      <h1 class="hero-title">FOOD YOU CAN FEEL GOOD ABOUT</h1>
      <p class="hero-desc" style="margin-inline:auto; max-width:680px;">
        Every calorie, gram of protein, and whole-food fiber count is transparently accounted for. Learn how our certified dietitians formulate nutrient-dense bowls.
      </p>
      <div style="display:inline-block; background:var(--light-green-bg); padding:0.5rem 1.2rem; border-radius:var(--radius-full); font-size:0.85rem; color:var(--deep-green); font-weight:700;">
        ⚠️ Nutrition values represent approximate sample figures for demonstration purposes.
      </div>
    </div>
  </section>

  <!-- Section 2: Understanding Balanced Bowls -->
  <section class="section-white">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">The Macro Equation</span>
        <h2 class="section-title">UNDERSTANDING THE BALANCED BOWL RATIO</h2>
        <p class="section-subtitle">We balance each bowl using the 40-30-20-10 nutritional blueprint:</p>
      </div>
      <div class="grid-4">
        <div class="dash-panel" style="text-align:center; padding:1.8rem; margin:0;">
          <div style="font-size:2.5rem; font-weight:900; color:var(--primary-green);">40%</div>
          <h4>Crisp Leafy Greens &amp; Veggies</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.4rem;">High volume, micronutrient density, and prebiotic fiber for gut health.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.8rem; margin:0;">
          <div style="font-size:2.5rem; font-weight:900; color:var(--deep-green);">30%</div>
          <h4>Complex Grains &amp; Legumes</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.4rem;">Slow-burning complex carbohydrates that stabilize blood sugar levels.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.8rem; margin:0;">
          <div style="font-size:2.5rem; font-weight:900; color:#E65100;">20%</div>
          <h4>Clean Lean Proteins</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.4rem;">Free-range chicken, paneer, tofu, or chickpeas to fuel muscle recovery.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.8rem; margin:0;">
          <div style="font-size:2.5rem; font-weight:900; color:var(--lime-yellow); color:#8ECA3C;">10%</div>
          <h4>Healthy Fats &amp; Dressing</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.4rem;">Cold-pressed olive oil and avocado assist fat-soluble vitamin absorption.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Ingredient Library -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header text-start">
        <span class="badge-tag">Ingredient Catalog</span>
        <h2 class="section-title">THE COMPLETE INGREDIENT LIBRARY</h2>
        <p class="section-subtitle">A quick reference to the vitamins, minerals, and calories in our raw components.</p>
      </div>
      <div class="dash-panel">
        <div class="dash-table-wrap">
          <table class="dash-table">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Category</th>
                <th>Calories / 100g</th>
                <th>Protein</th>
                <th>Key Vitamins &amp; Micronutrients</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Organic Baby Spinach</strong></td>
                <td>Leafy Base</td>
                <td>23 kcal</td>
                <td>2.9g</td>
                <td>Vitamin K (483% DV), Folate, Iron, Lutein</td>
              </tr>
              <tr>
                <td><strong>Tricolor Quinoa</strong></td>
                <td>Ancient Grain</td>
                <td>120 kcal</td>
                <td>4.4g</td>
                <td>Complete amino acid profile, Magnesium, Phosphorus</td>
              </tr>
              <tr>
                <td><strong>Flame-Grilled Chicken</strong></td>
                <td>Lean Poultry</td>
                <td>165 kcal</td>
                <td>31.0g</td>
                <td>Niacin, Vitamin B6, Selenium, Phosphorus</td>
              </tr>
              <tr>
                <td><strong>California Hass Avocado</strong></td>
                <td>Topping</td>
                <td>160 kcal</td>
                <td>2.0g</td>
                <td>Oleic acid, Potassium (higher than bananas), Folate</td>
              </tr>
              <tr>
                <td><strong>Organic Firm Tofu</strong></td>
                <td>Plant Protein</td>
                <td>83 kcal</td>
                <td>10.0g</td>
                <td>Calcium, Isoflavones, Manganese, Iron</td>
              </tr>
              <tr>
                <td><strong>Spiced Chickpeas</strong></td>
                <td>Legume</td>
                <td>164 kcal</td>
                <td>8.9g</td>
                <td>Dietary Fiber (8g), Resistant Starch, Copper</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Protein Options Deep-Dive -->
  <section class="section-white">
    <div class="container">
      <div class="section-header text-start">
        <span class="badge-tag">Protein Matrix</span>
        <h2 class="section-title">PROTEIN DEEP DIVE: PLANT VS POULTRY</h2>
        <p class="section-subtitle">Whether plant-exclusive or omnivore, our protein options are clean and unprocessed.</p>
      </div>
      <div class="grid-3">
        <div class="dash-panel" style="margin:0;">
          <h4>Flame-Grilled Herb Chicken</h4>
          <span class="diet-badge diet-protein">32g Protein &bull; 190 kcal</span>
          <p style="font-size:0.88rem; color:var(--muted-text); margin-top:0.8rem;">Marinated in cold-pressed olive oil, crushed garlic, and garden herbs. High biological availability and zero trans-fat.</p>
        </div>
        <div class="dash-panel" style="margin:0;">
          <h4>Artisanal Cottage Paneer</h4>
          <span class="diet-badge diet-protein">18g Protein &bull; 210 kcal</span>
          <p style="font-size:0.88rem; color:var(--muted-text); margin-top:0.8rem;">Crafted from local grass-fed organic milk. Seared on the plancha for a delightful golden crust and creamy interior.</p>
        </div>
        <div class="dash-panel" style="margin:0;">
          <h4>Sesame-Crusted Organic Tofu</h4>
          <span class="diet-badge diet-vegan">14g Protein &bull; 130 kcal</span>
          <p style="font-size:0.88rem; color:var(--muted-text); margin-top:0.8rem;">Non-GMO soybeans pressed, cubed, and baked with toasted sesame seeds and tamari for savory umami flavor.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Dietary Preference Curation -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Catering to You</span>
        <h2 class="section-title">CURATED FOR YOUR DIETARY LIFESTYLE</h2>
        <p class="section-subtitle">How Bowl'd easily accommodates popular nutritional preferences:</p>
      </div>
      <div class="grid-4">
        <div class="dash-panel" style="text-align:center; padding:1.5rem; margin:0;">
          <span class="diet-badge diet-vegan">100% Plant-Based</span>
          <h4 style="margin:0.8rem 0 0.4rem;">Vegan Friendly</h4>
          <p style="font-size:0.82rem; color:var(--muted-text);">Over 65% of our menu is certified plant-based, from dressings to bases.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.5rem; margin:0;">
          <span class="diet-badge diet-gf">Gluten Sensitive</span>
          <h4 style="margin:0.8rem 0 0.4rem;">Gluten-Free</h4>
          <p style="font-size:0.82rem; color:var(--muted-text);">Quinoa and brown rice naturally contain zero gluten. Sourdough croutons kept separated.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.5rem; margin:0;">
          <span class="diet-badge diet-keto">Low Carb / Keto</span>
          <h4 style="margin:0.8rem 0 0.4rem;">Keto &amp; Low Carb</h4>
          <p style="font-size:0.82rem; color:var(--muted-text);">Double greens, grilled chicken, Haas avocado, and herbed olive oil dressings.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.5rem; margin:0;">
          <span class="diet-badge diet-calorie">Low Sodium</span>
          <h4 style="margin:0.8rem 0 0.4rem;">Heart Healthy</h4>
          <p style="font-size:0.82rem; color:var(--muted-text);">Seasoned with zesty citrus, crushed peppercorn, and fresh herbs instead of salt.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Allergen & Kitchen Protocols -->
  <section class="section-white">
    <div class="container">
      <div class="grid-2" style="align-items:center;">
        <div>
          <span class="badge-tag">Safety Standards</span>
          <h2 class="section-title">ALLERGEN MANAGEMENT &amp; KITCHEN SAFETY</h2>
          <p>We treat food sensitivities with utmost care. Our kitchen maintains strict sanitation protocols, separate color-coded cutting boards, and dedicated prep stations.</p>
          <p>Please note that while we practice strict segregation, our facility handles sesame, tree nuts, and dairy. If you have an anaphylactic allergy, please alert our team via the contact form.</p>
          <div style="margin-top:1.5rem;">
            <a href="contact.html" class="btn btn-outline">Contact Dietary Team</a>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" alt="Kitchen Safety" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-md);">
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Explore Menu CTA -->
  <section class="section-tint" style="text-align:center; padding: 5rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Custom Nutrition</span>
      <h2 class="section-title" style="margin-bottom:1rem;">BUILD A BOWL THAT FITS YOUR EXACT NUTRITIONAL GOALS.</h2>
      <p class="section-subtitle" style="font-size:1.1rem; margin-bottom:2rem; color:var(--muted-text);">Watch calories and protein calculate live with our interactive bowl builder.</p>
      <a href="home-2.html#build-bowl" class="btn btn-primary btn-lg">Launch Custom Bowl Builder</a>
    </div>
  </section>
</main>
${getFooter()}`;

// 10. blog.html (Redesigned Editorial Journal - 3 Curated Blogs)
const blogHtml = `${getHead("The Fresh Journal & Recipes", "Healthy eating guides, homemade dressing recipes, nutritional science, and meal prep insights from the Bowl'd culinary team.")}
${getNavbar('blog')}
<main>
  <!-- Section 1: Editorial Journal Hero -->
  <section class="blog-hero-section hero-bg-microgreens">
    <div class="container text-center">
      <span class="badge-tag badge-tag-lime">✦ The Fresh Journal &bull; 2026 Edition</span>
      <h1 class="hero-title" style="margin-bottom:1rem;">MINDFUL EATING. HONEST NUTRITION.</h1>
      <p class="hero-desc" style="margin-inline:auto; max-width:680px; font-size:1.15rem;">
        Culinary deep dives, scratch dressing formulas, and clinical nutritional science written directly by our executive chefs and registered dietitians.
      </p>
      
      <!-- Live Search Bar -->
      <div class="blog-search-bar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="color:var(--primary-green); flex-shrink:0;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input type="text" id="blog-search" class="blog-search-input" placeholder="Search culinary articles, formulas, or ingredients..." aria-label="Search articles">
      </div>
    </div>
  </section>

  <!-- Section 2: Interactive Category Filter Bar -->
  <section class="section-white" style="padding: 1.8rem 0; border-bottom: 1px solid var(--border-subtle);">
    <div class="container text-center">
      <div class="blog-filter-nav">
        <button type="button" class="blog-filter-btn active" data-category="all">All Articles (3)</button>
        <button type="button" class="blog-filter-btn" data-category="nutrition">Nutrition Science</button>
        <button type="button" class="blog-filter-btn" data-category="recipes">Chef Recipes</button>
        <button type="button" class="blog-filter-btn" data-category="sustainability">Eco Sustainability</button>
      </div>
    </div>
  </section>

  <!-- Section 3: The 3 Curated Articles (Uniform Grid) -->
  <section class="section-tint" style="padding: 4.5rem 0;">
    <div class="container">
      <div class="section-header text-center" style="margin-bottom:3rem;">
        <span class="badge-tag">Curated Reads</span>
        <h2 class="section-title">FEATURED CULINARY EDITORIALS</h2>
        <p class="section-subtitle">Three deep-dive guides to fuel your body, refine your kitchen skills, and support regenerative farming.</p>
      </div>

      <div class="curated-blog-grid">
        <!-- Blog 1: Nutrition Science -->
        <article class="curated-blog-card" data-category="nutrition">
          <div class="curated-blog-media">
            <span class="curated-blog-category">Nutrition Science</span>
            <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80" alt="Fresh Organic Greens" class="curated-blog-img" loading="lazy">
          </div>
          <div class="curated-blog-body">
            <div class="curated-blog-meta">
              <span>Nov 4, 2026</span> &bull; <span>6 Min Read</span> &bull; <span>Science</span>
            </div>
            <h3 class="curated-blog-title">
              <a href="blog-details.html?id=1">10 Seasonal Greens That Eliminate Brain Fog and Boost Focus</a>
            </h3>
            <p class="curated-blog-snippet">
              Why bitter brassicas and tender pea shoots contain bioavailable folates and lutein that sustain neurological energy without caffeine crashes.
            </p>
            <div class="curated-blog-footer">
              <div class="curated-blog-author">
                <img src="assets/images/about/chef-maya.jpg" alt="Chef Maya Lin" class="curated-author-avatar">
                <span>Chef Maya Lin</span>
              </div>
              <a href="blog-details.html?id=1" class="curated-read-link">Read Deep Dive &rarr;</a>
            </div>
          </div>
        </article>

        <!-- Blog 2: Chef Recipes -->
        <article class="curated-blog-card" data-category="recipes">
          <div class="curated-blog-media">
            <span class="curated-blog-category">Chef Recipes</span>
            <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" alt="Citrus and Tahini Dressing" class="curated-blog-img" loading="lazy">
          </div>
          <div class="curated-blog-body">
            <div class="curated-blog-meta">
              <span>Nov 2, 2026</span> &bull; <span>4 Min Read</span> &bull; <span>Technique</span>
            </div>
            <h3 class="curated-blog-title">
              <a href="blog-details.html?id=2">The Golden Ratio: How to Make Creamy Meyer Lemon Tahini</a>
            </h3>
            <p class="curated-blog-snippet">
              Master the ice-water emulsification that turns raw stone-ground sesame paste into a velvet, naturally thick dressing with zero seed oils or gums.
            </p>
            <div class="curated-blog-footer">
              <div class="curated-blog-author">
                <img src="assets/images/about/chef-julian.jpg" alt="Chef Julian Diaz" class="curated-author-avatar">
                <span>Chef Julian Diaz</span>
              </div>
              <a href="blog-details.html?id=2" class="curated-read-link">Read Formula &rarr;</a>
            </div>
          </div>
        </article>

        <!-- Blog 3: Eco Sustainability -->
        <article class="curated-blog-card" data-category="sustainability">
          <div class="curated-blog-media">
            <span class="curated-blog-category">Eco Sustainability</span>
            <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80" alt="Regenerative Farm Harvest" class="curated-blog-img" loading="lazy">
          </div>
          <div class="curated-blog-body">
            <div class="curated-blog-meta">
              <span>Oct 28, 2026</span> &bull; <span>5 Min Read</span> &bull; <span>Eco Report</span>
            </div>
            <h3 class="curated-blog-title">
              <a href="blog-details.html?id=3">From Soil to Doorstep: The Truth Behind Sugarcane Packaging</a>
            </h3>
            <p class="curated-blog-snippet">
              How agricultural sugarcane bagasse fibers are transformed into sturdy food-grade containers that naturally break down in home compost within 90 days.
            </p>
            <div class="curated-blog-footer">
              <div class="curated-blog-author">
                <img src="assets/images/about/chef-maya.jpg" alt="Chef Maya Lin" class="curated-author-avatar">
                <span>Chef Maya Lin</span>
              </div>
              <a href="blog-details.html?id=3" class="curated-read-link">Read Eco Story &rarr;</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Section 4: Editorial Leadership & Contributors -->
  <section class="section-white" style="padding: 4.5rem 0;">
    <div class="container">
      <div class="section-header text-center">
        <span class="badge-tag">The Authors</span>
        <h2 class="section-title">WRITTEN BY OUR CULINARY ARCHITECTS</h2>
        <p class="section-subtitle">Zero sponsored promotions. 100% kitchen-tested culinary formulas and peer-reviewed nutrient guidance.</p>
      </div>
      <div class="grid-2" style="max-width: 860px; margin: 2.5rem auto 0; gap: 2.5rem;">
        <div class="dash-panel" style="margin:0; display:flex; gap:1.2rem; align-items:center;">
          <img src="assets/images/about/chef-maya.jpg" alt="Chef Maya Lin" style="width:72px; height:72px; border-radius:50%; object-fit:cover; border:2px solid var(--primary-green); flex-shrink:0;">
          <div>
            <h4 style="margin-bottom:0.2rem; color:var(--deep-green);">Chef Maya Lin</h4>
            <span style="font-size:0.8rem; font-weight:700; color:var(--primary-green); text-transform:uppercase;">Co-Founder &bull; Executive Chef</span>
            <p style="font-size:0.86rem; color:var(--muted-text); margin-top:0.4rem; line-height:1.5;">Specializes in whole-food flavor architecture, cold-pressed emulsions, and acid-fat balancing.</p>
          </div>
        </div>
        <div class="dash-panel" style="margin:0; display:flex; gap:1.2rem; align-items:center;">
          <img src="assets/images/about/chef-julian.jpg" alt="Chef Julian Diaz" style="width:72px; height:72px; border-radius:50%; object-fit:cover; border:2px solid var(--primary-green); flex-shrink:0;">
          <div>
            <h4 style="margin-bottom:0.2rem; color:var(--deep-green);">Chef Julian Diaz, MS</h4>
            <span style="font-size:0.8rem; font-weight:700; color:var(--primary-green); text-transform:uppercase;">Head of Nutritional Science</span>
            <p style="font-size:0.86rem; color:var(--muted-text); margin-top:0.4rem; line-height:1.5;">Researches metabolic satiety curves, blood glucose regulation, and sports endurance fueling.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Golden Rules of Salad Meal Prep -->
  <section class="section-tint" style="padding: 4.5rem 0;">
    <div class="container">
      <div class="section-header text-center">
        <span class="badge-tag">Prep Mastery</span>
        <h2 class="section-title">3 GOLDEN RULES OF FRESH MEAL PREP</h2>
        <p class="section-subtitle">How our scratch kitchen ensures every vegetable stays crispy, vibrant, and delicious for days.</p>
      </div>
      <div class="grid-3" style="gap:2rem; margin-top:2.5rem;">
        <div class="dash-panel" style="margin:0; text-align:center; padding:2rem 1.4rem;">
          <div style="font-size:2.2rem; margin-bottom:0.8rem;">💧</div>
          <h4 style="color:var(--deep-green); margin-bottom:0.6rem;">1. Separate Wet &amp; Crisp</h4>
          <p style="font-size:0.88rem; color:var(--muted-text); line-height:1.55;">Always package acidic dressings and juicy diced tomatoes in separate leakproof cups until the moment you eat.</p>
        </div>
        <div class="dash-panel" style="margin:0; text-align:center; padding:2rem 1.4rem;">
          <div style="font-size:2.2rem; margin-bottom:0.8rem;">🌾</div>
          <h4 style="color:var(--deep-green); margin-bottom:0.6rem;">2. Heavy Grains At Base</h4>
          <p style="font-size:0.88rem; color:var(--muted-text); line-height:1.55;">Place whole grain carbs (quinoa, brown rice, roasted sweet potato) at the bottom so delicate leafy greens stay airy.</p>
        </div>
        <div class="dash-panel" style="margin:0; text-align:center; padding:2rem 1.4rem;">
          <div style="font-size:2.2rem; margin-bottom:0.8rem;">✨</div>
          <h4 style="color:var(--deep-green); margin-bottom:0.6rem;">3. Finish With Crunch</h4>
          <p style="font-size:0.88rem; color:var(--muted-text); line-height:1.55;">Add toasted pepitas, sourdough croutons, or walnut halves only right before eating to preserve maximum texture contrast.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Subscriber Spotlight Narrative -->
  <section class="section-white" style="padding: 4.5rem 0;">
    <div class="container">
      <div class="grid-2" style="align-items:center; gap:3.5rem;">
        <div>
          <span class="badge-tag">Community Journey</span>
          <h2 class="section-title">"HOW FRESH BOWLS RECLAIMED MY SUNDAY AFTERNOONS"</h2>
          <p style="font-size:1.05rem; line-height:1.6; color:var(--muted-text); margin-bottom:1.2rem;">
            Before discovering Bowl'd, pediatric specialist Sarah Jenkins spent 4 hours every Sunday batch-prepping salads that invariably ended up soggy by Wednesday.
          </p>
          <p style="font-size:1.05rem; line-height:1.6; color:var(--muted-text); margin-bottom:1.8rem;">
            <em>"Switching to Bowl'd's weekly subscription replaced frantic grocery chopping with crisp, ready-to-eat chef bowls waiting in my fridge. My midday energy has never been this consistent."</em>
          </p>
          <a href="meal-plans.html" class="btn btn-outline">Explore Weekly Plans</a>
        </div>
        <div>
          <img src="assets/images/about/hero.jpg" alt="Fresh Prepared Bowls" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg); width:100%; object-fit:cover; max-height:360px;">
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Free Download & Newsletter CTA -->
  <section class="section-tint" style="text-align:center; padding: 5rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Free Printable Ebook</span>
      <h2 class="section-title" style="margin-bottom:1rem;">GET OUR "15 SCRATCH DRESSINGS" RECIPE BOOK</h2>
      <p class="section-subtitle" style="font-size:1.1rem; margin-bottom:2rem; color:var(--muted-text);">
        Join 14,000+ healthy eaters receiving our weekly chef formulas, dressing ratios, and seasonal harvest drops directly in their inbox.
      </p>
      <form class="newsletter-form" style="max-width:500px; margin:0 auto;">
        <input type="email" class="newsletter-input" placeholder="Enter your email" required aria-label="Email address">
        <button type="submit" class="btn btn-primary">Send Free Ebook</button>
      </form>
    </div>
  </section>
</main>
${getFooter()}`;

// 11. blog-details.html (Dynamic Blog Details with Bound Image Height & Deep-Dive Articles)
const blogDetailsHtml = `${getHead("Culinary Journal & Recipe Guide", "In-depth culinary formulas, nutrition science, and sustainable food systems from the Bowl'd culinary team.")}
${getNavbar('blog')}
<main>
  <!-- Section 1: Dynamic Article Hero -->
  <section class="hero-section page-hero-banner hero-bg-chard" style="padding:4rem 0 3rem;">
    <div class="container container-sm text-center">
      <a href="blog.html" style="display:inline-flex; align-items:center; gap:0.4rem; font-weight:700; margin-bottom:1rem; font-size:0.9rem;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg> Back to Journal
      </a>
      <span class="badge-tag badge-tag-lime" id="article-badge">Nutrition &amp; Culinary Science</span>
      <h1 class="hero-title" id="article-title" style="font-size:clamp(2rem, 3.8vw, 3rem); line-height:1.2; margin:0.8rem 0;">10 SEASONAL GREENS THAT ELIMINATE BRAIN FOG AND BOOST FOCUS</h1>
      <div id="article-meta" style="display:flex; justify-content:center; align-items:center; gap:1.2rem; font-size:0.92rem; color:var(--muted-text); margin-top:1rem;">
        <span id="article-author-name">By Chef Maya Lin</span> &bull; <span id="article-read-time">6 Min Read</span> &bull; <span id="article-pub-date">November 4, 2026</span>
      </div>
    </div>
  </section>

  <!-- Section 2: Hero Media & Article Narrative -->
  <section class="section-white" style="padding-top:2.5rem;">
    <div class="container container-sm">
      <img id="article-hero-img" class="blog-article-hero-img" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80" alt="Vibrant Salad Ingredients" loading="lazy">
      
      <div id="article-intro-block">
        <h2 style="font-size:1.8rem; margin-bottom:1rem;" id="article-intro-title">Why Most Ordinary Salads Leave You Hungry in an Hour</h2>
        <p id="article-intro-p1">We have all experienced it: you order a salad with good intentions, finish a plate of watery iceberg lettuce with two cucumber slices, and find yourself reaching for pastries sixty minutes later. Ordinary restaurant salads frequently fail because they treat greens as an exercise in calorie deprivation rather than nutrient abundance.</p>
        <p id="article-intro-p2">At Bowl'd, our culinary team approaches bowl design from the science of gastric emptying and satiety signaling. To keep you satisfied and energized for 4 to 5 hours, a salad bowl requires four foundational structural pillars.</p>
      </div>
    </div>
  </section>

  <!-- Section 3: In-Depth Editorial Pillars -->
  <section class="section-tint" id="article-pillars-section">
    <div class="container container-sm">
      <h2 style="font-size:1.8rem; margin-bottom:1.5rem;" id="article-pillars-title">The Four Structural Pillars of a Satisfying Bowl</h2>
      
      <div id="article-pillars-grid" style="display:flex; flex-direction:column; gap:1.8rem;">
        <div class="dash-panel" style="margin:0;">
          <h3 style="color:var(--primary-green); margin-bottom:0.4rem;">Pillar 1: Mixed Texture Bases</h3>
          <p style="color:var(--muted-text); font-size:0.95rem;">Combine dark leafy greens (like baby spinach or wild arugula) with a warm complex grain (such as tricolor quinoa or brown rice). The grain provides resistant starch and sustained glucose release, while greens supply crucial enzymes and magnesium.</p>
        </div>

        <div class="dash-panel" style="margin:0;">
          <h3 style="color:var(--primary-green); margin-bottom:0.4rem;">Pillar 2: High Biological-Value Protein (25g+)</h3>
          <p style="color:var(--muted-text); font-size:0.95rem;">Protein triggers the release of peptide YY and cholecystokinin (CCK)—hormones that signal fullness directly to your brain. Aim for at least 25 grams of clean poultry, artisanal paneer, organic tofu, or roasted legumes.</p>
        </div>

        <div class="dash-panel" style="margin:0;">
          <h3 style="color:var(--primary-green); margin-bottom:0.4rem;">Pillar 3: Colorful Micronutrient Density</h3>
          <p style="color:var(--muted-text); font-size:0.95rem;">Eat across the color spectrum. Red tomatoes deliver lycopene; purple cabbage supplies anthocyanins; orange carrots offer beta-carotene. Different colors correspond to distinct cellular antioxidants.</p>
        </div>

        <div class="dash-panel" style="margin:0;">
          <h3 style="color:var(--primary-green); margin-bottom:0.4rem;">Pillar 4: Emulsified Monounsaturated Fats</h3>
          <p style="color:var(--muted-text); font-size:0.95rem;">Fat is not the enemy; oxidized seed oil is. Pure cold-pressed extra virgin olive oil, toasted sesame tahini, or fresh avocado are mandatory to assimilate fat-soluble vitamins (A, D, E, and K).</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Key Takeaways Callout -->
  <section class="section-white">
    <div class="container container-sm">
      <div id="article-takeaways-card" style="background:var(--light-green-bg); border-left:5px solid var(--primary-green); padding:2rem; border-radius:var(--radius-lg); box-shadow:var(--shadow-sm);">
        <h3 style="color:var(--deep-green); margin-bottom:1rem;" id="article-takeaways-title">KEY TAKEAWAYS FOR YOUR NEXT BOWL</h3>
        <ol id="article-takeaways-list" style="margin-left:1.2rem; list-style:decimal; display:flex; flex-direction:column; gap:0.8rem; color:var(--muted-text); font-size:0.95rem;">
          <li>Never skip the grain foundation if you need 4+ hours of sustained mental concentration.</li>
          <li>Ensure at least 25g of protein per serving to prevent mid-afternoon sugar cravings.</li>
          <li>Incorporate healthy fats to unlock fat-soluble micronutrient assimilation.</li>
          <li>Add raw seeds or nuts for crunch and vital zinc/magnesium trace minerals.</li>
          <li>Dress at the table, not on the prep counter!</li>
        </ol>
      </div>
    </div>
  </section>

  <!-- Section 5: Author Bio & Community Discussion -->
  <section class="section-tint">
    <div class="container container-sm">
      <div class="user-mini-card" id="article-author-card" style="padding:1.8rem; background:var(--card-bg); border-radius:var(--radius-lg); margin-bottom:3rem; border:1px solid var(--border-subtle); display:flex; align-items:center;">
        <img id="article-author-avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Author Avatar" style="width:72px; height:72px; border-radius:var(--radius-full); object-fit:cover; border:3px solid var(--primary-green); flex-shrink:0;">
        <div style="margin-left:1.2rem;">
          <h4 style="margin-bottom:0.25rem; color:var(--deep-green);" id="article-author-fullname">Chef Maya Lin</h4>
          <p style="font-size:0.88rem; color:var(--muted-text); margin:0;" id="article-author-bio">Executive Culinary Director at Bowl'd. Trained at the French Culinary Institute with a Master's in Nutritional Biochemistry.</p>
        </div>
      </div>

      <!-- Demo Comment Section -->
      <h3 style="margin-bottom:1.5rem;">Comments &amp; Discussion (2)</h3>
      <div style="display:flex; flex-direction:column; gap:1.2rem; margin-bottom:2rem;">
        <div class="dash-panel" style="margin:0; padding:1.2rem;">
          <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
            <strong>David Vance</strong>
            <span style="font-size:0.8rem; color:var(--muted-text);">2 days ago</span>
          </div>
          <p style="font-size:0.9rem; color:var(--muted-text); margin:0;">"The tip about the 3:1 dressing ratio changed my lunch completely! No more soggy greens."</p>
        </div>
        <div class="dash-panel" style="margin:0; padding:1.2rem;">
          <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
            <strong>Jessica Miller</strong>
            <span style="font-size:0.8rem; color:var(--muted-text);">Yesterday</span>
          </div>
          <p style="font-size:0.9rem; color:var(--muted-text); margin:0;">"I've been on the Balanced Week plan for 3 weeks now and my energy around 3pm has never been better."</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Related Articles & Newsletter CTA -->
  <section class="section-white" style="text-align:center; padding: 5rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Community</span>
      <h2 class="section-title" style="margin-bottom:1rem;">ENJOY FRESH ARTICLES &amp; WEEKLY RECIPES</h2>
      <p class="section-subtitle" style="font-size:1.1rem; margin-bottom:2rem; color:var(--muted-text);">Join our email circle to receive new culinary guides and seasonal menu announcements.</p>
      <a href="blog.html" class="btn btn-primary btn-lg">Browse More Articles</a>
    </div>
  </section>
</main>

<script>
// Client-Side Dynamic Blog Article Switcher based on ?id= query param
(function() {
  const articlesData = {
    '1': {
      badge: 'Nutrition Science',
      title: '10 SEASONAL GREENS THAT ELIMINATE BRAIN FOG AND BOOST FOCUS',
      author: 'Chef Maya Lin',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      bio: 'Executive Culinary Director at Bowl\\'d. Trained at the French Culinary Institute with a Master\\'s in Nutritional Biochemistry.',
      readTime: '6 Min Read',
      pubDate: 'November 4, 2026',
      heroImg: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
      introTitle: 'Why Ordinary Greens Fail to Fuel Cognitive Stamina',
      introP1: 'When professionals talk about afternoon brain fog, the culprit is almost always postprandial glucose swings caused by refined carbohydrates, combined with micro-deficiencies in cellular folate and lutein. Deeply colored dark leafy greens are among the richest dietary sources of bioavailable chlorophyll and plant nitrates, which dilate micro-capillaries in the brain.',
      introP2: 'At Bowl\\'d, we harvest our organic greens within 24 hours of delivery. This preserves the delicate water-soluble enzymes that degrade when commercial greens sit on grocery store shelves for weeks under artificial light.',
      pillarsTitle: 'The 4 Bio-Active Compound Families in Fresh Greens',
      pillars: [
        { title: '1. Folate & Methylation Support', text: 'Baby spinach and watercress deliver natural l-methylfolate, the crucial cofactor required for dopamine and serotonin synthesis in neural pathways.' },
        { title: '2. Macular Carotenoids (Lutein & Zeaxanthin)', text: 'Kale and wild arugula concentrate protective pigments that shield retinal tissue from blue-screen strain while accelerating visual processing speed.' },
        { title: '3. Plant Glucosinolates', text: 'Cruciferous brassicas trigger nuclear factor erythroid 2-related factor 2 (Nrf2), our body\\'s premier endogenous antioxidant detox pathway.' },
        { title: '4. Magnesium-Bound Chlorophyll', text: 'Central to the chlorophyll molecule is elemental magnesium, essential for ATP mitochondrial energy production and nervous system calmness.' }
      ],
      takeawaysTitle: 'PRACTICAL TIPS FOR MAXIMUM COGNITIVE BENEFIT',
      takeaways: [
        'Pair raw dark greens with healthy fats (like cold-pressed olive oil or avocado) to boost carotenoid absorption by 400%.',
        'Rotate your greens weekly: combine bitter brassicas like chicory with mild sweet spinach.',
        'Never cook your greens to death: gentle raw massaged leaves retain 90% more active vitamin C and live enzymes.',
        'Drink plenty of spring water: fiber requires hydration to facilitate smooth gastric digestion.',
        'Enjoy your main nutrient bowl before 2:00 PM for sustained afternoon alertness.'
      ]
    },
    '2': {
      badge: 'Chef Recipes & Technique',
      title: 'THE GOLDEN RATIO: HOW TO MAKE CREAMY MEYER LEMON TAHINI',
      author: 'Chef Julian Diaz',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      bio: 'Master Dressing Crafter and Executive Chef of Recipe Development at Bowl\\'d. Specializing in emulsion chemistry and whole-food dressings.',
      readTime: '4 Min Read',
      pubDate: 'November 2, 2026',
      heroImg: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
      introTitle: 'The Culinary Physics of Whole-Food Emulsions',
      introP1: 'Store-bought salad dressings are notorious for containing cheap oxidized soybean oil, high fructose corn syrup, and synthetic gums like xanthan gum. A real scratch-made dressing requires no chemical stabilizers—only the right balance of whole seed fats, bright citrus acid, and cold-water suspension.',
      introP2: 'Meyer lemons bring a naturally fragrant, floral acidity that pairs magnificently with the earthy richness of stoneground sesame tahini. Here is our secret restaurant technique for achieving a velvet consistency every single time.',
      pillarsTitle: 'The 4 Steps to Dressing Perfection',
      pillars: [
        { title: '1. Sourcing Stone-Ground Single-Origin Sesame', text: 'Always use runny, 100% hulled sesame seed tahini without added palm oil or salt. The jar should smell lightly toasted and nutty.' },
        { title: '2. The Magic Ice-Water Whisk', text: 'When you first mix lemon juice into tahini, it will seize up into a dry paste. Do not panic! Whisking in 3 tablespoons of ice-cold water forces the proteins to emulsify into silky velvet.' },
        { title: '3. Fresh Microplaned Aromatics', text: 'Microplane one small clove of fresh purple garlic and a teaspoon of raw wildflower honey to balance the natural sesame bitterness.' },
        { title: '4. Emulsified Extra Virgin Olive Oil Finish', text: 'Slowly drizzle cold-pressed extra virgin olive oil while continuously whisking until a glossy, spoon-coating emulsion forms.' }
      ],
      takeawaysTitle: 'CHEF JULIAN\\'S DRESSING SECRETS',
      takeaways: [
        'Always use Meyer lemons or Eureka lemons freshly squeezed that morning.',
        'Ice water is essential: warm water will cause the sesame oils to separate prematurely.',
        'Store in a sealed glass Mason jar in your refrigerator for up to 10 days.',
        'If the dressing thickens in the fridge, simply whisk in one teaspoon of warm water before serving.',
        'Ideal pairings: Roasted sweet potatoes, grilled chicken tenders, and massaged Tuscan kale.'
      ]
    },
    '3': {
      badge: 'Eco Sustainability',
      title: 'FROM SOIL TO DOORSTEP: THE TRUTH BEHIND SUGARCANE PACKAGING',
      author: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      bio: 'Head of Regenerative Sourcing and Environmental Lifecycle Assessment at Bowl\\'d. Former UN Global Food Council fellow.',
      readTime: '5 Min Read',
      pubDate: 'October 28, 2026',
      heroImg: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
      introTitle: 'Breaking the Disposable Plastic Paradigm in Food Delivery',
      introP1: 'The takeout and meal subscription industry generates billions of single-use petroleum plastic containers annually. Even containers labeled recyclable frequently end up in landfills or incinerators due to food oil contamination that renders them unrecyclable at municipal processing centers.',
      introP2: 'At Bowl\\'d, our mission extends beyond human health to soil health. That is why 100% of our bowls and lids are engineered from bagasse—the fibrous agricultural residue left over after sugarcane stalks are crushed for juice.',
      pillarsTitle: 'The Closed-Loop Lifecycle of Bagasse Fiber',
      pillars: [
        { title: '1. Upcycling an Agricultural Byproduct', text: 'Instead of burning sugarcane stalks after harvest (which causes air pollution), the leftover fibers are washed, pulped, and press-molded without toxic chemical bleach.' },
        { title: '2. Zero PFAs or Toxic Plastic Linings', text: 'Unlike typical paper coffee cups that hide a thin polyethylene or fluorinated barrier, our bowls use a natural plant-wax seal that resists oils while remaining 100% compostable.' },
        { title: '3. 90-Day Backyard Soil Degradation', text: 'Our containers meet ASTM D6400 and EN 13432 compostability standards. They fully break down in backyard soil within 60 to 90 days, returning carbon to your garden.' },
        { title: '4. Clean Fleet Delivery Offsets', text: 'Our refrigerated delivery vans run on 100% renewable electric power, cutting last-mile delivery emissions by 82% across Portland.' }
      ],
      takeawaysTitle: 'HOW TO PROPERLY DISPOSE OF YOUR BOWL\\'D CONTAINERS',
      takeaways: [
        'Rinse away any leftover dressing or seeds before tossing into your green municipal compost bin.',
        'Backyard composters can tear the container into 1-inch strips to accelerate microbial breakdown.',
        'Never place bagasse containers into blue plastic recycling bins: plant fiber belongs in compost.',
        'Re-use our insulated cold delivery totes: leave them on your porch for our courier to sanitize and refill!',
        'Every week you subscribe with Bowl\\'d saves an estimated 1.2 pounds of petroleum plastic from landfills.'
      ]
    }
  };

  const params = new URLSearchParams(window.location.search);
  const articleId = params.get('id') || '1';
  const data = articlesData[articleId] || articlesData['1'];

  // Update DOM elements
  const badgeEl = document.getElementById('article-badge');
  const titleEl = document.getElementById('article-title');
  const authorNameEl = document.getElementById('article-author-name');
  const readTimeEl = document.getElementById('article-read-time');
  const pubDateEl = document.getElementById('article-pub-date');
  const heroImgEl = document.getElementById('article-hero-img');
  const introTitleEl = document.getElementById('article-intro-title');
  const introP1El = document.getElementById('article-intro-p1');
  const introP2El = document.getElementById('article-intro-p2');
  const pillarsTitleEl = document.getElementById('article-pillars-title');
  const pillarsGridEl = document.getElementById('article-pillars-grid');
  const takeawaysTitleEl = document.getElementById('article-takeaways-title');
  const takeawaysListEl = document.getElementById('article-takeaways-list');
  const authorAvatarEl = document.getElementById('article-author-avatar');
  const authorFullnameEl = document.getElementById('article-author-fullname');
  const authorBioEl = document.getElementById('article-author-bio');

  if (badgeEl) badgeEl.textContent = data.badge;
  if (titleEl) titleEl.textContent = data.title;
  if (authorNameEl) authorNameEl.textContent = 'By ' + data.author;
  if (readTimeEl) readTimeEl.textContent = data.readTime;
  if (pubDateEl) pubDateEl.textContent = data.pubDate;
  if (heroImgEl) {
    heroImgEl.src = data.heroImg;
    heroImgEl.alt = data.title;
  }
  if (introTitleEl) introTitleEl.textContent = data.introTitle;
  if (introP1El) introP1El.textContent = data.introP1;
  if (introP2El) introP2El.textContent = data.introP2;
  if (pillarsTitleEl) pillarsTitleEl.textContent = data.pillarsTitle;

  if (pillarsGridEl && data.pillars) {
    pillarsGridEl.innerHTML = data.pillars.map(p => \`
      <div class="dash-panel" style="margin:0;">
        <h3 style="color:var(--primary-green); margin-bottom:0.4rem;">\${p.title}</h3>
        <p style="color:var(--muted-text); font-size:0.95rem;">\${p.text}</p>
      </div>
    \`).join('');
  }

  if (takeawaysTitleEl) takeawaysTitleEl.textContent = data.takeawaysTitle;
  if (takeawaysListEl && data.takeaways) {
    takeawaysListEl.innerHTML = data.takeaways.map(t => \`
      <li>\${t}</li>
    \`).join('');
  }

  if (authorAvatarEl) authorAvatarEl.src = data.avatar;
  if (authorFullnameEl) authorFullnameEl.textContent = data.author;
  if (authorBioEl) authorBioEl.textContent = data.bio;
})();
</script>
${getFooter()}`;

// 12. contact.html (Contact Us - 7 Sections with Interactive Form)
const contactHtml = `${getHead("Contact Us & Cafe Locations", "Get in touch with Bowl'd Cafe. Downtown location, opening hours, subscriber concierge line, and inquiry form.")}
${getNavbar('contact')}
<main>
  <!-- Section 1: Contact Editorial Hero -->
  <section class="contact-editorial-hero hero-bg-corn" id="contact-hero">
    <div class="container">
      <div class="contact-hero-grid">
        <!-- Left Content -->
        <div>
          <div class="hero-tag">
            <span>💬</span> Guest Care &amp; Subscriber Concierge
          </div>
          <h1 class="hero-title">
            WE'RE HERE TO SUPPORT YOUR <span class="highlight-accent">HEALTHY JOURNEY.</span>
          </h1>
          <p class="hero-subtitle">
            Have a question about our weekly delivery schedule, seasonal farm ingredients, dietary allergies, or corporate event catering? Our friendly hospitality team is ready to assist.
          </p>

          <!-- Live Status Capsule -->
          <div class="contact-status-capsule">
            <div class="contact-status-dot-wrap">
              <span class="contact-pulse-dot"></span>
              <span class="contact-status-title">Downtown Kitchen Open Today: 8:00 AM – 9:00 PM</span>
            </div>
            <div class="contact-status-sub">Average Concierge Response: &lt; 15 Minutes</div>
          </div>
        </div>

        <!-- Right Visual Card -->
        <div>
          <div class="contact-hero-card">
            <div class="contact-hero-img-wrap">
              <img src="assets/images/contact-cafe-hero.jpg" alt="Bowl'd Cafe Downtown Kitchen" loading="lazy">
              <span class="contact-card-badge">📍 Flagship Kitchen &amp; Studio</span>
            </div>
            <div class="contact-hero-quicklinks">
              <div class="contact-quick-item">
                <div class="contact-quick-icon">📞</div>
                <div>
                  <span class="contact-quick-label">Phone Support</span>
                  <a href="tel:5553452695" class="contact-quick-val">(555) 345-BOWL</a>
                </div>
              </div>
              <div class="contact-quick-item">
                <div class="contact-quick-icon">✉️</div>
                <div>
                  <span class="contact-quick-label">Email Concierge</span>
                  <a href="mailto:hello@bowldcafe.com" class="contact-quick-val">hello@bowldcafe.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Contact Info Cards -->
  <section class="section-white">
    <div class="container">
      <div class="grid-4">
        <div class="dash-panel" style="text-align:center; padding:1.8rem; margin:0;">
          <div class="badge-icon" style="margin:0 auto 1rem;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
          <h4>Phone Support</h4>
          <p style="font-size:0.9rem; color:var(--deep-green); font-weight:700; margin:0.3rem 0;">(555) 345-BOWL</p>
          <span style="font-size:0.8rem; color:var(--muted-text);">Mon – Fri: 8am – 7pm</span>
        </div>

        <div class="dash-panel" style="text-align:center; padding:1.8rem; margin:0;">
          <div class="badge-icon" style="margin:0 auto 1rem;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
          <h4>Email Us</h4>
          <p style="font-size:0.9rem; color:var(--deep-green); font-weight:700; margin:0.3rem 0;">hello@bowldcafe.com</p>
          <span style="font-size:0.8rem; color:var(--muted-text);">General &amp; Subscriber inquiries</span>
        </div>

        <div class="dash-panel" style="text-align:center; padding:1.8rem; margin:0;">
          <div class="badge-icon" style="margin:0 auto 1rem;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
          <h4>Cafe Address</h4>
          <p style="font-size:0.9rem; color:var(--deep-green); font-weight:700; margin:0.3rem 0;">124 Harvest Green Way</p>
          <span style="font-size:0.8rem; color:var(--muted-text);">Downtown Healthy Quarter</span>
        </div>

        <div class="dash-panel" style="text-align:center; padding:1.8rem; margin:0;">
          <div class="badge-icon" style="margin:0 auto 1rem;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg></div>
          <h4>Subscriber Concierge</h4>
          <p style="font-size:0.9rem; color:var(--deep-green); font-weight:700; margin:0.3rem 0;">subscribers@bowldcafe.com</p>
          <span style="font-size:0.8rem; color:var(--muted-text);">Priority weekly support</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Interactive Contact Form & Location -->
  <section class="section-tint">
    <div class="container">
      <div class="grid-2" style="align-items:start;">
        <!-- Form -->
        <div class="dash-panel" style="margin:0; padding:2.5rem;">
          <h2 style="font-size:1.8rem; margin-bottom:0.5rem;">SEND A MESSAGE</h2>
          <p style="color:var(--muted-text); font-size:0.95rem; margin-bottom:1.8rem;">Fill out the form below and we will get back to you swiftly.</p>
          
          <form id="contact-form">
            <div class="form-group">
              <label class="form-label" for="contact-name">Full Name *</label>
              <input type="text" id="contact-name" class="form-control" placeholder="Alex Morgan" required>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="contact-email">Email Address *</label>
              <input type="email" id="contact-email" class="form-control" placeholder="alex@example.com" required>
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-phone">Phone Number (Optional)</label>
              <input type="tel" id="contact-phone" class="form-control" placeholder="(555) 000-0000">
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-type">Enquiry Type</label>
              <select id="contact-type" class="form-control">
                <option>Meal Subscription Questions</option>
                <option>Custom Dietary Request</option>
                <option>Corporate Catering &amp; Events</option>
                <option>Cafe Dine-In Feedback</option>
                <option>Press &amp; Farm Partnerships</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="contact-message">Message *</label>
              <textarea id="contact-message" class="form-control" placeholder="How can we assist you today?" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">Send Message</button>
          </form>
        </div>

        <!-- Location & Directions -->
        <div>
          <div class="dash-panel" style="margin:0 0 1.5rem; padding:2rem;">
            <h3 style="margin-bottom:0.6rem;">LOCATION &amp; DIRECTIONS</h3>
            <p style="color:var(--muted-text); font-size:0.95rem; margin-bottom:1.2rem;">Our flagship cafe is situated at the corner of Harvest Green Way &amp; 4th Avenue, featuring an open scratch kitchen, outdoor garden patio, and curbside subscriber pickup lane.</p>
            
            <div class="contact-map-frame-box">
              <iframe class="contact-map-iframe" 
                src="https://maps.google.com/maps?q=124+Harvest+Green+Way,+San+Francisco,+CA+94105&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                width="100%" 
                height="250" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade" 
                title="Flagship Cafe Location Map">
              </iframe>
              <div class="contact-map-badge-bar">
                <div class="contact-map-badge-status">
                  <span class="contact-map-pulse-dot"></span>
                  <span>124 Harvest Green Way, SF</span>
                </div>
                <a href="https://maps.google.com/?q=124+Harvest+Green+Way,+San+Francisco,+CA" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div class="dash-panel" style="margin:0; padding:1.8rem;">
            <h4 style="margin-bottom:0.5rem;">Public Transit &amp; Parking</h4>
            <p style="font-size:0.88rem; color:var(--muted-text); line-height:1.5;">2 blocks east of Central Green Metro Station (Green Line). Free 90-minute underground parking available with validated cafe receipt.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Real Interactive Map Section -->
  <section class="contact-map-section">
    <div class="container">
      <div class="section-header text-center" style="margin-bottom:2.5rem;">
        <span class="badge-tag">Interactive Map</span>
        <h2 class="section-title">FIND OUR FLAGSHIP KITCHEN &amp; PICKUP BAY</h2>
        <p class="section-subtitle">Drop by for made-to-order bowls, pick up weekly prep subscriptions, or visit our greenhouse patio.</p>
      </div>

      <div class="contact-map-container">
        <iframe class="contact-map-iframe" 
          src="https://maps.google.com/maps?q=124+Harvest+Green+Way,+San+Francisco,+CA+94105&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
          width="100%" 
          height="480" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade" 
          title="Bowl'd Cafe Flagship Kitchen &amp; Studio Map">
        </iframe>

        <div class="contact-map-overlay-card">
          <div class="contact-map-overlay-status">
            <span class="contact-map-pulse-dot"></span>
            <span>Open Today &bull; 8:00 AM – 9:00 PM</span>
          </div>
          <h3 class="contact-map-overlay-title">Bowl'd Flagship Kitchen</h3>
          <p class="contact-map-overlay-address">
            📍 124 Harvest Green Way, Suite 100<br>
            Downtown Quarter, San Francisco, CA 94105
          </p>
          <div class="contact-map-amenities">
            <span class="contact-map-amenity-tag">🌿 Outdoor Patio</span>
            <span class="contact-map-amenity-tag">🚗 Curbside Pickup Bay</span>
            <span class="contact-map-amenity-tag">⚡ 90-min Validated Parking</span>
            <span class="contact-map-amenity-tag">🚇 2 Min to Metro</span>
          </div>
          <div style="display:flex; gap:0.6rem; flex-wrap:wrap;">
            <a href="https://maps.google.com/?q=124+Harvest+Green+Way,+San+Francisco,+CA" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:4px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Google Maps
            </a>
            <a href="tel:5553452695" class="btn btn-outline btn-sm">
              📞 (555) 345-BOWL
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Opening & Pickup Hours -->
  <section class="section-white">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">When to Visit</span>
        <h2 class="section-title">CAFE &amp; DISPATCH HOURS</h2>
        <p class="section-subtitle">Dine-in, takeaway, and subscriber delivery windows:</p>
      </div>
      <div class="dash-panel" style="max-width:740px; margin:0 auto;">
        <div class="dash-table-wrap">
          <table class="dash-table">
            <thead>
              <tr>
                <th>Day of Week</th>
                <th>Cafe Dine-In &amp; Takeaway</th>
                <th>Subscriber Delivery Dispatches</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Monday</strong></td>
                <td>8:00 AM – 9:00 PM</td>
                <td>Order cutoff for Wednesday drop (11:59 PM)</td>
              </tr>
              <tr>
                <td><strong>Tuesday</strong></td>
                <td>8:00 AM – 9:00 PM</td>
                <td>Kitchen prep &amp; cold packaging</td>
              </tr>
              <tr>
                <td><strong>Wednesday</strong></td>
                <td>8:00 AM – 9:00 PM</td>
                <td><strong style="color:var(--primary-green);">Doorstep Delivery (8:00 AM – 11:30 AM)</strong></td>
              </tr>
              <tr>
                <td><strong>Thursday</strong></td>
                <td>8:00 AM – 9:00 PM</td>
                <td>Cafe dining open</td>
              </tr>
              <tr>
                <td><strong>Friday</strong></td>
                <td>8:00 AM – 9:00 PM</td>
                <td>Cafe dining open</td>
              </tr>
              <tr>
                <td><strong>Saturday &amp; Sunday</strong></td>
                <td>9:00 AM – 8:00 PM</td>
                <td>Weekend brunch bowls</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: FAQs -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Quick Answers</span>
        <h2 class="section-title">COMMON QUESTIONS</h2>
      </div>
      <div class="accordion">
        <div class="accordion-item active">
          <div class="accordion-header">
            <span>Do you offer corporate lunch deliveries or team catering?</span>
            <span class="accordion-icon">&#9660;</span>
          </div>
          <div class="accordion-content">
            <p>Yes! We cater corporate meetings and wellness events for 10 to 250 people. Select "Corporate Catering" in the form above for custom pricing.</p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <span>Can I pick up my weekly subscription box in-store?</span>
            <span class="accordion-icon">&#9660;</span>
          </div>
          <div class="accordion-content">
            <p>Yes, you can set your delivery preference to "Cafe Curbside Pickup" inside your subscriber dashboard and save an additional $5 per week.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Emergency Support Line -->
  <section class="section-white">
    <div class="container text-center">
      <div style="background:var(--light-green-bg); padding:2.5rem 2rem; border-radius:var(--radius-xl); max-width:700px; margin:0 auto; border:1px solid var(--border-subtle); text-align:center;">
        <h3 style="color:var(--deep-green); margin-bottom:0.5rem;">Urgent Delivery Modification?</h3>
        <p style="color:var(--muted-text); font-size:0.95rem; margin-bottom:1.5rem; max-width:540px; margin-inline:auto;">If you need immediate assistance with a delivery arriving today, call our direct courier dispatch line.</p>
        <div style="display:flex; justify-content:center;">
          <a href="tel:5553452695" class="btn btn-primary btn-sm">Call Dispatch: (555) 345-BOWL</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 8: Final CTA -->
  <section class="section-tint" style="text-align:center; padding: 5rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Visit or Order</span>
      <h2 class="section-title" style="margin-bottom:1rem;">VISIT OUR CAFE OR SUBSCRIBE ONLINE.</h2>
      <p class="section-subtitle" style="font-size:1.1rem; margin-bottom:2rem; color:var(--muted-text);">Start your healthy eating journey with Bowl'd today.</p>
      <a href="meal-plans.html" class="btn btn-primary btn-lg">Explore Weekly Plans</a>
    </div>
  </section>
</main>

<!-- Contact Form Success Script -->
<script>
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value;
      showToast(\`Thank you, \${name}! Your message has been received. We will reply within 2 hours.\`, 'success');
      form.reset();
    });
  }
});
</script>
${getFooter()}`;

fs.writeFileSync('nutrition.html', nutritionHtml);
fs.writeFileSync('blog.html', blogHtml);
fs.writeFileSync('blog-details.html', blogDetailsHtml);
fs.writeFileSync('contact.html', contactHtml);
console.log('Successfully generated nutrition.html, blog.html, blog-details.html, contact.html');


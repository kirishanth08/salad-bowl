const fs = require('fs');
const { getHead, getNavbar, getFooter } = require('./generator_base');

// 5. menu-details.html (7 Sections)
const menuDetailsHtml = `${getHead("Green Goddess Super Bowl Details", "In-depth ingredient breakdown, nutrition facts, and customization options for the Green Goddess Super Bowl.")}
${getNavbar('menu')}
<main>
  <!-- Section 1: Bowl Hero -->
  <section class="hero-section page-hero-banner hero-bg-tomato" style="padding:4rem 0 3rem;">
    <div class="container">
      <div class="grid-2" style="align-items:center;">
        <div>
          <a href="menu.html" style="display:inline-flex; align-items:center; gap:0.4rem; font-weight:700; margin-bottom:1rem; font-size:0.9rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg> Back to Full Menu
          </a>
          <span class="badge-tag badge-tag-lime">Chef's Signature Recipe</span>
          <h1 style="font-size:clamp(2.2rem, 4vw, 3.2rem); margin-bottom:1rem;">GREEN GODDESS SUPER BOWL</h1>
          <p style="font-size:1.15rem; color:var(--muted-text); margin-bottom:1.5rem;">
            A nutrient-dense celebration of vibrant greens. Tender baby spinach and crisp cucumbers tossed with steamed edamame, sliced California Hass avocado, and our housemade avocado herb goddess dressing.
          </p>
          <div style="display:flex; align-items:center; gap:1.5rem; margin-bottom:2rem;">
            <span style="font-family:var(--font-heading); font-size:2.4rem; font-weight:900; color:var(--deep-green);">$12.50</span>
            <span class="diet-badge diet-vegan" style="font-size:0.9rem; padding:0.4rem 0.9rem;">100% Plant-Based</span>
            <span class="diet-badge diet-calorie" style="font-size:0.9rem; padding:0.4rem 0.9rem;">480 Calories</span>
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-primary btn-lg btn-add-bowl" data-name="Green Goddess Bowl">Add to Weekly Selection</button>
            <a href="home-2.html#build-bowl" class="btn btn-outline btn-lg">Customize From Scratch</a>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80" alt="Green Goddess Super Bowl" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg); width:100%;">
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Ingredient Breakdown -->
  <section class="section-white">
    <div class="container">
      <div class="section-header text-start">
        <span class="badge-tag">Transparency</span>
        <h2 class="section-title">WHAT'S INSIDE THE BOWL</h2>
        <p class="section-subtitle">Every single component is prepared fresh without preservatives or refined oils.</p>
      </div>
      <div class="grid-4">
        <div class="dash-panel" style="margin:0;">
          <h4>Baby Spinach</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.4rem;">Organic morning-harvested leaves, rich in folate, iron, and carotenoids.</p>
        </div>
        <div class="dash-panel" style="margin:0;">
          <h4>Steamed Edamame</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.4rem;">Young soybeans providing 12g of clean, complete plant protein.</p>
        </div>
        <div class="dash-panel" style="margin:0;">
          <h4>Haas Avocado</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.4rem;">Rich in heart-healthy monounsaturated oleic acid and potassium.</p>
        </div>
        <div class="dash-panel" style="margin:0;">
          <h4>Toasted Pepitas</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-top:0.4rem;">Roasted pumpkin seeds delivering zinc, magnesium, and crunch.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Nutrition Information Breakdown -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header text-start">
        <span class="badge-tag">Sample Nutrition Facts</span>
        <h2 class="section-title">CALORIC &amp; MACRO PROFILE</h2>
        <p class="section-subtitle">Nutrition values are sample estimates based on standard recipe specifications.</p>
      </div>
      <div class="dash-panel" style="max-width:800px; margin:0 auto;">
        <div class="dash-table-wrap">
          <table class="dash-table">
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Amount per Bowl</th>
                <th>Daily Value %</th>
                <th>Primary Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Calories</strong></td>
                <td>480 kcal</td>
                <td>24%</td>
                <td>Avocado, Edamame, Grains</td>
              </tr>
              <tr>
                <td><strong>Total Protein</strong></td>
                <td>18 grams</td>
                <td>36%</td>
                <td>Shelled Edamame &amp; Pepita Seeds</td>
              </tr>
              <tr>
                <td><strong>Dietary Fiber</strong></td>
                <td>14 grams</td>
                <td>50%</td>
                <td>Spinach, Avocado &amp; Edamame</td>
              </tr>
              <tr>
                <td><strong>Total Carbohydrates</strong></td>
                <td>38 grams</td>
                <td>14%</td>
                <td>Complex Plant Carbs</td>
              </tr>
              <tr>
                <td><strong>Healthy Fats</strong></td>
                <td>28 grams</td>
                <td>35%</td>
                <td>Cold-Pressed Olive Oil &amp; Avocado</td>
              </tr>
              <tr>
                <td><strong>Sodium</strong></td>
                <td>380 mg</td>
                <td>16%</td>
                <td>Natural Pink Himalayan Salt</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Customization Options -->
  <section class="section-white">
    <div class="container">
      <div class="section-header text-start">
        <span class="badge-tag">Make It Yours</span>
        <h2 class="section-title">BOWL CUSTOMIZATION OPTIONS</h2>
        <p class="section-subtitle">Tailor the Green Goddess bowl to your exact tastes.</p>
      </div>
      <div class="grid-3">
        <div class="dash-panel" style="margin:0;">
          <h4>1. Swap Dressing</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-bottom:1rem;">Prefer more citrus or light sesame?</p>
          <select class="form-control" aria-label="Select dressing">
            <option>Avocado Herb Goddess (Default)</option>
            <option>Lemon Herb Vinaigrette</option>
            <option>Creamy Sesame Tahini</option>
            <option>Dressing on the side</option>
          </select>
        </div>
        <div class="dash-panel" style="margin:0;">
          <h4>2. Add Extra Protein</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-bottom:1rem;">Power up for your post-workout meal.</p>
          <select class="form-control" aria-label="Add extra protein">
            <option>No Extra Protein</option>
            <option>Flame-Grilled Chicken (+$3.50)</option>
            <option>Organic Tofu Cubes (+$2.50)</option>
            <option>Spiced Paneer (+$3.00)</option>
          </select>
        </div>
        <div class="dash-panel" style="margin:0;">
          <h4>3. Dietary Exclusions</h4>
          <p style="font-size:0.85rem; color:var(--muted-text); margin-bottom:1rem;">Select items to omit cleanly.</p>
          <div style="display:flex; flex-direction:column; gap:0.5rem; font-size:0.9rem;">
            <label><input type="checkbox"> No Cucumbers</label>
            <label><input type="checkbox"> No Seeds / Toppings</label>
            <label><input type="checkbox"> Light Dressing Only</label>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Chef's Notes & Dietary Advice -->
  <section class="section-tint">
    <div class="container">
      <div class="grid-2" style="align-items:center;">
        <div>
          <span class="badge-tag">From the Head Chef</span>
          <h2 class="section-title">CHEF'S TASTING NOTES</h2>
          <p><em>"The secret to the Green Goddess bowl is the dual temperature interplay: chilled crisp cucumbers meet warm blanched edamame. We blend fresh Italian parsley, tarragon, chives, and cold-pressed olive oil right into ripe avocado to replace standard heavy mayonnaise."</em></p>
          <div style="margin-top:1.5rem; background:var(--card-bg); padding:1.2rem; border-radius:var(--radius-md); border-left:4px solid var(--primary-green);">
            <strong>Allergen Notice:</strong> Contains Soy (Edamame). Prepared in a clean facility that also handles tree nuts, dairy, and sesame.
          </div>
        </div>
        <div>
          <div class="dash-panel" style="margin:0;">
            <h3>Perfect Drink Pairing</h3>
            <p style="margin:0.8rem 0; color:var(--muted-text);">Pairs harmoniously with our <strong>Green Immunity Juice</strong> (cucumber, ginger, celery) or a sparkling citrus kombucha.</p>
            <a href="menu.html" class="btn btn-outline btn-sm">Explore Beverages</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Related Bowls -->
  <section class="section-white">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">You Might Also Crave</span>
        <h2 class="section-title">COMPLEMENTARY BOWLS</h2>
        <p class="section-subtitle">Subscribers who love the Green Goddess also enjoy these chef favorites.</p>
      </div>
      <div class="grid-3">
        <article class="bowl-card">
          <div class="bowl-card-media">
            <img src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80" alt="Mediterranean Bowl">
          </div>
          <div class="bowl-card-body">
            <h3 class="bowl-card-title"><a href="menu-details.html">Mediterranean Bowl</a></h3>
            <div class="bowl-card-price">$13.25</div>
            <p class="bowl-card-ingredients">Crisp romaine, vine tomatoes, Kalamata olives, creamy feta, and Greek vinaigrette.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">510 kcal</span>
              <a href="menu-details.html" class="btn btn-outline btn-sm">Details</a>
            </div>
          </div>
        </article>

        <article class="bowl-card">
          <div class="bowl-card-media">
            <img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80" alt="Protein Power Bowl">
          </div>
          <div class="bowl-card-body">
            <h3 class="bowl-card-title"><a href="menu-details.html">Protein Power Bowl</a></h3>
            <div class="bowl-card-price">$14.00</div>
            <p class="bowl-card-ingredients">Grilled chicken, tricolor quinoa, roasted broccoli, spiced chickpeas, soft egg.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">560 kcal</span>
              <a href="menu-details.html" class="btn btn-outline btn-sm">Details</a>
            </div>
          </div>
        </article>

        <article class="bowl-card">
          <div class="bowl-card-media">
            <img src="assets/images/ingredients/tofu.jpg" alt="Rainbow Crunch Bowl">
          </div>
          <div class="bowl-card-body">
            <h3 class="bowl-card-title"><a href="menu-details.html">Rainbow Crunch Bowl</a></h3>
            <div class="bowl-card-price">$13.00</div>
            <p class="bowl-card-ingredients">Purple cabbage, carrot spirals, sesame seeds, organic tofu, ginger miso dressing.</p>
            <div class="bowl-card-meta">
              <span class="bowl-calories">490 kcal</span>
              <a href="menu-details.html" class="btn btn-outline btn-sm">Details</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Section 7: Add to Selection CTA -->
  <section class="section-tint" style="text-align:center; padding: 5rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Quick Action</span>
      <h2 class="section-title" style="margin-bottom:1rem;">READY TO ENJOY THE GREEN GODDESS?</h2>
      <p class="section-subtitle" style="font-size:1.1rem; margin-bottom:2rem; color:var(--muted-text);">Add it to your weekly subscriber tray or build a customized version from scratch.</p>
      <div class="btn-group" style="justify-content:center;">
        <button type="button" class="btn btn-primary btn-lg btn-add-bowl" data-name="Green Goddess Bowl">Add to Weekly Tray</button>
        <a href="meal-plans.html" class="btn btn-outline btn-lg">Explore Weekly Plans</a>
      </div>
    </div>
  </section>
</main>
${getFooter()}`;

// 6. build-your-bowl.html (7 Sections)
const buildYourBowlHtml = `${getHead("Build Your Own Bowl", "Interactive step-by-step custom salad & grain bowl builder. Choose bases, proteins, vegetables, toppings, and scratch dressings with live macro calculation.")}
${getNavbar('builder')}
<main>
  <!-- Section 1: Hero Section -->
  <section class="hero-section hero-bg-peppers" style="padding: 4rem 0 2.5rem;">
    <div class="container text-center">
      <span class="badge-tag badge-tag-lime">Now on Home Page 2</span>
      <h1 class="hero-title">INTERACTIVE BOWL BUILDER</h1>
      <p class="hero-desc" style="margin-inline:auto; max-width:680px;">
        The custom bowl builder is now integrated directly into Home Page 2! Redirecting you now...
      </p>
      <div style="margin-top:1.5rem;">
        <a href="home-2.html#build-bowl" class="btn btn-primary btn-lg">Launch Bowl Builder on Home 2 &rarr;</a>
      </div>
    </div>
  </section>
  <script>
    // Instant redirect to Home Page 2 Bowl Builder
    if (window.location.pathname.endsWith('build-your-bowl.html')) {
      window.location.replace("home-2.html#build-bowl");
    }
  </script>

  <div class="container" style="padding-top:2rem;">
    <div class="builder-layout">
      <!-- Left: 5 Interactive Sections for Steps 1-5 -->
      <div class="builder-steps-column">
        
        <!-- Section 2: Step 1 Choose Your Base -->
        <section class="builder-step-panel" id="step-base">
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
        </section>

        <!-- Section 3: Step 2 Choose Protein -->
        <section class="builder-step-panel" id="step-protein">
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
        </section>

        <!-- Section 4: Step 3 Choose Vegetables -->
        <section class="builder-step-panel" id="step-veggies">
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
            <div class="builder-card-option" data-category="vegetables" data-value="Corn">
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
        </section>

        <!-- Section 5: Step 4 Choose Toppings -->
        <section class="builder-step-panel" id="step-toppings">
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
        </section>

        <!-- Section 6: Step 5 Choose Dressing -->
        <section class="builder-step-panel" id="step-dressing">
          <div class="builder-step-header">
            <div class="builder-step-title">
              <span class="step-num">5</span>
              <div>
                <h3 style="margin-bottom:0.2rem;">Choose Handcrafted Dressing</h3>
                <div class="step-rule">1 dressing included on the side</div>
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
        </section>

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

          <!-- Macro Progress Visualizers (CSS only, no chart library) -->
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

  <!-- Section 7: Chef's Pro Customization Guidance -->
  <section class="section-tint" style="margin-top:4rem;">
    <div class="container container-sm text-center">
      <span class="badge-tag">Chef's Flavor Formula</span>
      <h2 class="section-title">PRO TIPS FOR BUILDING THE PERFECT BOWL</h2>
      <p class="section-subtitle">Balance hearty warm grains with cold crisp greens. For example, pair warm nutty brown rice with cold baby spinach and crunchy cucumber to create exciting texture contrast in every forkful.</p>
      <div style="margin-top:2rem;">
        <a href="meal-plans.html" class="btn btn-outline">Explore Weekly Meal Plans</a>
      </div>
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

// 7. meal-plans.html (7 Sections)
const mealPlansHtml = `${getHead("Weekly Meal Subscription Plans", "Save up to 20% with our flexible weekly fresh salad bowl plans. Free chilled tote delivery, pause or swap anytime.")}
${getNavbar('plans')}
<main>
  <!-- Section 1: Meal Plan Editorial Hero -->
  <section class="plan-editorial-hero hero-bg-cucumber" id="plans-hero">
    <div class="container">
      <div class="plan-hero-grid">
        <!-- Left Content -->
        <div>
          <div class="hero-tag">
            <span>🥗</span> Weekly Subscription Club &bull; Save up to 20%
          </div>
          <h1 class="hero-title">
            EFFORTLESS HEALTHY EATING, <span class="highlight-accent">DELIVERED TO YOUR DOOR.</span>
          </h1>
          <p class="hero-subtitle">
            Enjoy chef-prepared, organic salad bowls waiting in your fridge every Wednesday morning. Packed in thermal cooler totes that stay chilled for 6 hours. Zero cooking, zero dishwashing, and complete freedom to swap or pause anytime.
          </p>

          <div class="plan-hero-features">
            <div class="plan-hero-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Free insulated porch delivery &bull; 6h cold retention</span>
            </div>
            <div class="plan-hero-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Artisan dressings sealed on the side</span>
            </div>
            <div class="plan-hero-feature-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Cancel, pause, or swap weekly meals anytime</span>
            </div>
          </div>

          <div class="notice-pill">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>All plan prices shown are demo sample pricing for theme review</span>
          </div>
        </div>

        <!-- Right Visual Preview -->
        <div>
          <div class="plan-hero-visual-wrap">
            <div class="plan-hero-img-box">
              <img src="assets/images/meal-prep-hero.jpg" alt="Bowl'd Weekly Meal Subscription Boxes" loading="lazy">
            </div>
            <div class="plan-hero-float-badge">
              <span class="plan-float-icon">📦</span>
              <div>
                <div class="plan-float-title">Fresh Chilled Drop</div>
                <small class="plan-float-sub">Wednesdays &bull; 6h Cold-Safe</small>
              </div>
            </div>
            <div class="plan-hero-social-pill">
              <div class="plan-avatars-group">
                <img src="assets/images/about/customer-1.jpg" alt="Subscriber">
                <img src="assets/images/about/customer-2.jpg" alt="Subscriber">
                <img src="assets/images/about/customer-3.jpg" alt="Subscriber">
              </div>
              <span class="plan-social-text"><strong>10,000+</strong> weekly bowls delivered</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Subscription Plan Comparison Cards -->
  <section class="section-white">
    <div class="container">
      <div class="grid-3" style="align-items:stretch;">
        <!-- Plan 1 -->
        <div class="plan-card">
          <div class="plan-header">
            <h3 class="plan-name">Starter Bowl</h3>
            <span class="plan-bowls-count">3 Bowls Per Week</span>
            <div class="plan-price">
              <span class="plan-price-currency">$</span>34<span style="font-size:1.5rem;">.50</span>
              <span class="plan-price-period">/week</span>
            </div>
            <span class="plan-demo-tag">$11.50 per bowl &bull; Billed weekly</span>
          </div>
          <div class="plan-features">
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 3 Chef Bowls or Custom Builds</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 1 Chilled delivery per week</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Pause or cancel anytime</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Dressings packaged on side</div>
          </div>
          <a href="plan-details.html" class="btn btn-outline" style="width:100%;">Choose Starter Plan</a>
        </div>

        <!-- Plan 2 -->
        <div class="plan-card featured">
          <span class="plan-ribbon">Most Popular &bull; Save 20%</span>
          <div class="plan-header">
            <h3 class="plan-name">Balanced Week</h3>
            <span class="plan-bowls-count">5 Bowls Per Week</span>
            <div class="plan-price">
              <span class="plan-price-currency">$</span>52<span style="font-size:1.5rem;">.50</span>
              <span class="plan-price-period">/week</span>
            </div>
            <span class="plan-demo-tag">$10.50 per bowl &bull; Ideal for full workweek</span>
          </div>
          <div class="plan-features">
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 5 Fresh Bowls (Monday to Friday)</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Full access to Custom Bowl Builder</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Free insulated thermal tote exchange</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 15% discount on extra cafe drinks</div>
          </div>
          <a href="plan-details.html" class="btn btn-primary" style="width:100%;">Select Balanced Plan</a>
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
            <span class="plan-demo-tag">$9.71 per bowl &bull; Max nutrition value</span>
          </div>
          <div class="plan-features">
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 7 Complete Chef or Custom Bowls</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Split delivery: 2 drops per week</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Free 16oz Cold-Pressed Juice weekly</div>
            <div class="plan-feature-item"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> VIP Concierge SMS support</div>
          </div>
          <a href="plan-details.html" class="btn btn-outline" style="width:100%;">Choose Full Fresh</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Subscriber Guarantees (Modern Redesigned Showcase) -->
  <section class="guarantee-section" id="subscriber-guarantees">
    <div class="container">
      <div class="section-header text-center" style="max-width: 780px; margin: 0 auto 3.5rem;">
        <span class="badge-tag badge-tag-lime">
          <span>🛡️</span> Subscriber Guarantees
        </span>
        <h2 class="section-title">BUILT FOR MAXIMUM FRESHNESS &amp; REAL-LIFE FREEDOM</h2>
        <p class="section-subtitle">We engineered our weekly bowl subscription around uncompromised farm crispness, zero single-use plastics, and complete flexibility.</p>
      </div>

      <!-- 4 Modern Guarantee Feature Cards -->
      <div class="guarantee-grid">
        <!-- Card 1 -->
        <div class="guarantee-card">
          <div class="guarantee-card-top">
            <div class="guarantee-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                <path d="M4 12h16M7 7l10 10M17 7L7 17"/>
              </svg>
            </div>
            <span class="guarantee-pill-badge">6h Porch Safe</span>
          </div>
          <h3 class="guarantee-title">Insulated Cold Totes</h3>
          <p class="guarantee-desc">Delivered in heavy-duty thermal cooler totes packed with non-toxic gel ice. Food stays safely below 4°C for up to 6 hours on your doorstep.</p>
          <div class="guarantee-footer-perk">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Temperature-logged delivery</span>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="guarantee-card">
          <div class="guarantee-card-top">
            <div class="guarantee-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <circle cx="12" cy="11" r="3"/>
              </svg>
            </div>
            <span class="guarantee-pill-badge">Crisp to Friday</span>
          </div>
          <h3 class="guarantee-title">Sealed Dressing Separation</h3>
          <p class="guarantee-desc">Never a soggy green or diluted emulsion. All scratch vinaigrettes and tahinis are hermetically sealed in separate plant pods until you're ready to toss.</p>
          <div class="guarantee-footer-perk">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Guaranteed crunch retention</span>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="guarantee-card">
          <div class="guarantee-card-top">
            <div class="guarantee-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <span class="guarantee-pill-badge">Zero Fees</span>
          </div>
          <h3 class="guarantee-title">Frictionless 1-Tap Pause</h3>
          <p class="guarantee-desc">Heading out of town, working remotely, or dining out? Pause, skip, or change your delivery drop with a single tap in your dashboard with zero penalty.</p>
          <div class="guarantee-footer-perk">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Cancel or pause anytime</span>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="guarantee-card">
          <div class="guarantee-card-top">
            <div class="guarantee-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <span class="guarantee-pill-badge">100% Plant-Based</span>
          </div>
          <h3 class="guarantee-title">100% Bagasse Compostable</h3>
          <p class="guarantee-desc">Zero single-use virgin petroleum plastics. Every bowl and clear lid is pressed from post-harvest sugarcane pulp that naturally breaks down into garden soil.</p>
          <div class="guarantee-footer-perk">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            <span>90-Day home compostable</span>
          </div>
        </div>
      </div>

      <!-- Trust Reassurance Ribbon -->
      <div class="guarantee-trust-ribbon">
        <div class="trust-ribbon-item">
          <div class="trust-ribbon-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <div>
            <div class="trust-ribbon-heading">Contactless Porch Delivery</div>
            <p class="trust-ribbon-text">Dropped off Wednesdays or Fridays in sanitized, insulated returnable totes.</p>
          </div>
        </div>

        <div class="trust-ribbon-item">
          <div class="trust-ribbon-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
          </div>
          <div>
            <div class="trust-ribbon-heading">100% Freshness Guarantee</div>
            <p class="trust-ribbon-text">If any bowl isn't peak-crisp and delicious, we credit your account immediately.</p>
          </div>
        </div>

        <div class="trust-ribbon-item">
          <div class="trust-ribbon-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          </div>
          <div>
            <div class="trust-ribbon-heading">No Long-Term Contracts</div>
            <p class="trust-ribbon-text">Swap bowls, change frequencies, or cancel with zero cancellation lock-in.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: How Subscriptions Work -->
  <section class="section-white">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Simple 3-Step Routine</span>
        <h2 class="section-title">HOW BOWL'D SUBSCRIPTIONS WORK</h2>
        <p class="section-subtitle">Set your preferences once, then tweak your meals every Sunday or let our chefs surprise you.</p>
      </div>
      <div class="grid-3">
        <div class="builder-step-panel" style="text-align:center; margin:0;">
          <div class="step-num" style="margin:0 auto 1rem;">1</div>
          <h3 style="margin-bottom:0.5rem;">Pick Your Frequency</h3>
          <p style="color:var(--muted-text); font-size:0.92rem;">Select 3, 5, or 7 bowls per week based on your lunch routines. You can change your plan anytime.</p>
        </div>
        <div class="builder-step-panel" style="text-align:center; margin:0;">
          <div class="step-num" style="margin:0 auto 1rem;">2</div>
          <h3 style="margin-bottom:0.5rem;">Choose Weekly Bowls</h3>
          <p style="color:var(--muted-text); font-size:0.92rem;">Use your Subscriber Portal before Monday midnight to pick your exact 5 bowls or build custom recipes.</p>
        </div>
        <div class="builder-step-panel" style="text-align:center; margin:0;">
          <div class="step-num" style="margin:0 auto 1rem;">3</div>
          <h3 style="margin-bottom:0.5rem;">Enjoy Chilled Delivery</h3>
          <p style="color:var(--muted-text); font-size:0.92rem;">Your driver drops your cold tote on Wednesday morning. Swap your previous week's empty tote on the porch.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Delivery Flexibility -->
  <section class="section-tint">
    <div class="container">
      <div class="grid-2" style="align-items:center;">
        <div>
          <span class="badge-tag">Zero Stress Policy</span>
          <h2 class="section-title">PAUSE, SKIP, OR CANCEL WITH ZERO RESTRICTIONS</h2>
          <p>We know life changes fast. You never have to worry about unwanted deliveries stacking up while you travel.</p>
          <p>Inside your Subscriber Dashboard, our Pause Delivery tool lets you pick your exact pause dates and resumption day with a single click. Your billing automatically holds until you return.</p>
          <div style="margin-top:1.5rem;">
            <a href="dashboard.html" class="btn btn-primary">Preview Subscriber Dashboard</a>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80" alt="Chilled Delivery Box" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-md);">
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: FAQs -->
  <section class="section-white">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Got Questions?</span>
        <h2 class="section-title">FREQUENTLY ASKED QUESTIONS</h2>
        <p class="section-subtitle">Everything you need to know about deliveries, freshness, and billing.</p>
      </div>
      <div class="accordion">
        <div class="accordion-item active">
          <div class="accordion-header">
            <span>How long do the salad bowls stay fresh in my fridge?</span>
            <span class="accordion-icon">&#9660;</span>
          </div>
          <div class="accordion-content">
            <p>Because all dressings are packaged separately and greens are triple-washed and spun dry, our bowls remain crisp and vibrant for 5 full days from delivery day.</p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <span>What if I am not home during the delivery window?</span>
            <span class="accordion-icon">&#9660;</span>
          </div>
          <div class="accordion-content">
            <p>No problem! Our insulated thermal tote bags and ice packs maintain refrigeration safe temperatures for up to 6 hours on your doorstep.</p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <span>Can I customize every bowl in my weekly subscription?</span>
            <span class="accordion-icon">&#9660;</span>
          </div>
          <div class="accordion-content">
            <p>Yes! Balanced and Full Fresh plan members can either choose our chef signature bowls or build completely custom bowls in their subscriber portal.</p>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header">
            <span>When is the weekly cutoff to modify my bowl choices?</span>
            <span class="accordion-icon">&#9660;</span>
          </div>
          <div class="accordion-content">
            <p>You can modify your bowls, add extras, or pause delivery up until Monday at 11:59 PM before Wednesday's scheduled delivery.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Subscribe CTA -->
  <section class="section-tint" style="text-align:center; padding: 5rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Get Started</span>
      <h2 class="section-title" style="margin-bottom:1rem;">START YOUR HEALTHIER ROUTINE THIS WEDNESDAY.</h2>
      <p class="section-subtitle" style="font-size:1.1rem; margin-bottom:2rem; color:var(--muted-text);">Join hundreds of happy subscribers enjoying delicious everyday nourishment.</p>
      <a href="register.html" class="btn btn-primary btn-lg">Create Subscriber Account</a>
    </div>
  </section>
</main>
${getFooter()}`;

// 8. plan-details.html (7 Sections)
const planDetailsHtml = `${getHead("Balanced Week Plan Details", "Detailed overview of our most popular 5-bowl subscription. Included meals, delivery times, nutrition targets, and subscriber savings.")}
${getNavbar('plans')}
<main>
  <!-- Section 1: Plan Hero -->
  <section class="hero-section page-hero-banner hero-bg-beetroot" style="padding:4rem 0 3rem;">
    <div class="container">
      <div class="grid-2" style="align-items:center;">
        <div>
          <span class="badge-tag badge-tag-lime">Most Popular Tier</span>
          <h1 style="font-size:clamp(2.4rem, 4.5vw, 3.4rem); margin-bottom:1rem;">BALANCED WEEK PLAN</h1>
          <p style="font-size:1.15rem; color:var(--muted-text); margin-bottom:1.5rem;">
            5 wholesome salad &amp; grain bowls delivered every Wednesday morning. Complete weekday lunch coverage with zero cooking or grocery shopping.
          </p>
          <div style="display:flex; align-items:baseline; gap:0.5rem; margin-bottom:1.8rem;">
            <span style="font-family:var(--font-heading); font-size:3rem; font-weight:900; color:var(--deep-green);">$52.50</span>
            <span style="color:var(--muted-text); font-size:1.1rem;">/ week ($10.50 per bowl)</span>
          </div>
          <div class="btn-group">
            <a href="register.html" class="btn btn-primary btn-lg">Subscribe to Balanced Week</a>
            <a href="home-2.html#build-bowl" class="btn btn-outline btn-lg">Test Custom Bowl</a>
          </div>
        </div>
        <div>
          <img src="assets/images/ingredients/supergreens.jpg" alt="Balanced Plan Box" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-lg);">
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Weekly Bowl Allowance -->
  <section class="section-white">
    <div class="container">
      <div class="section-header text-start">
        <span class="badge-tag">Five Meals Covered</span>
        <h2 class="section-title">YOUR WEEKLY 5-BOWL ALLOWANCE</h2>
        <p class="section-subtitle">How subscribers typically structure their Monday-to-Friday box:</p>
      </div>
      <div class="grid-4" style="grid-template-columns: repeat(5, 1fr);">
        <div class="dash-panel" style="text-align:center; padding:1.4rem; margin:0;">
          <div style="font-size:0.8rem; font-weight:800; color:var(--primary-green);">MONDAY</div>
          <h4 style="margin:0.4rem 0;">Green Goddess</h4>
          <p style="font-size:0.8rem; color:var(--muted-text);">Crisp restart after the weekend with light healthy greens.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.4rem; margin:0;">
          <div style="font-size:0.8rem; font-weight:800; color:var(--primary-green);">TUESDAY</div>
          <h4 style="margin:0.4rem 0;">Protein Power</h4>
          <p style="font-size:0.8rem; color:var(--muted-text);">Grilled chicken &amp; quinoa fuel for your heavy meetings.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.4rem; margin:0;">
          <div style="font-size:0.8rem; font-weight:800; color:var(--primary-green);">WEDNESDAY</div>
          <h4 style="margin:0.4rem 0;">Mediterranean</h4>
          <p style="font-size:0.8rem; color:var(--muted-text);">Midweek sunshine with olives, feta, and tomatoes.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.4rem; margin:0;">
          <div style="font-size:0.8rem; font-weight:800; color:var(--primary-green);">THURSDAY</div>
          <h4 style="margin:0.4rem 0;">Rainbow Crunch</h4>
          <p style="font-size:0.8rem; color:var(--muted-text);">Sesame tofu and purple cabbage crunch boost.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.4rem; margin:0;">
          <div style="font-size:0.8rem; font-weight:800; color:var(--primary-green);">FRIDAY</div>
          <h4 style="margin:0.4rem 0;">Spicy Paneer</h4>
          <p style="font-size:0.8rem; color:var(--muted-text);">Warm comfort grain bowl to kick off the weekend.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Available Choices & Customization -->
  <section class="section-tint">
    <div class="container">
      <div class="grid-2" style="align-items:center;">
        <div>
          <span class="badge-tag">Zero Limitations</span>
          <h2 class="section-title">SWAP ANY BOWL OR BUILD FROM SCRATCH</h2>
          <p>Don't want our standard 5-bowl rotation? Every week inside your Subscriber Portal, you have full freedom to:</p>
          <ul style="margin:1.5rem 0; display:flex; flex-direction:column; gap:0.8rem;">
            <li style="display:flex; align-items:center; gap:0.6rem; font-weight:600; color:var(--deep-green);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Select 5 of the exact same bowl if you have an absolute favorite
            </li>
            <li style="display:flex; align-items:center; gap:0.6rem; font-weight:600; color:var(--deep-green);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Build customized bowls with specific calorie and protein targets
            </li>
            <li style="display:flex; align-items:center; gap:0.6rem; font-weight:600; color:var(--deep-green);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Double up on protein portions at subsidized subscriber add-on rates
            </li>
          </ul>
          <a href="weekly-bowl-selection.html" class="btn btn-outline">Preview Bowl Selection Tool</a>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" alt="Multiple Bowls" style="border-radius:var(--radius-xl); box-shadow:var(--shadow-md);">
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Delivery Schedule & Packaging -->
  <section class="section-white">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Reliable Logistics</span>
        <h2 class="section-title">DELIVERY SPECIFICATIONS</h2>
        <p class="section-subtitle">Delivered every Wednesday morning between 8:00 AM and 11:30 AM.</p>
      </div>
      <div class="grid-3">
        <div class="dash-panel" style="margin:0;">
          <h4>Insulated Thermal Bag</h4>
          <p style="color:var(--muted-text); font-size:0.9rem; margin-top:0.4rem;">Waterproof, food-grade insulated tote bag keeps your meals crisp and cold for up to 6 hours.</p>
        </div>
        <div class="dash-panel" style="margin:0;">
          <h4>Bag Exchange Program</h4>
          <p style="color:var(--muted-text); font-size:0.9rem; margin-top:0.4rem;">Simply leave previous week's empty tote on your porch for our driver to sanitize and reuse.</p>
        </div>
        <div class="dash-panel" style="margin:0;">
          <h4>Live SMS Tracking</h4>
          <p style="color:var(--muted-text); font-size:0.9rem; margin-top:0.4rem;">Receive an automated text message when your courier is 2 stops away and once delivered.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Nutrition Information & Dietitian Standards -->
  <section class="section-tint">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Certified Nutrition</span>
        <h2 class="section-title">NUTRITIONAL BENCHMARKS</h2>
        <p class="section-subtitle">The Balanced Week plan guarantees balanced weekday fuel with no sugar crashes.</p>
      </div>
      <div class="grid-4">
        <div class="dash-panel" style="text-align:center; padding:1.5rem; margin:0;">
          <div style="font-size:2rem; font-weight:900; color:var(--deep-green);">25g - 42g</div>
          <div style="font-weight:700; margin-top:0.3rem;">Protein Per Bowl</div>
          <p style="font-size:0.8rem; color:var(--muted-text); margin-top:0.4rem;">Maintains lean muscle and satiety.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.5rem; margin:0;">
          <div style="font-size:2rem; font-weight:900; color:var(--deep-green);">12g+</div>
          <div style="font-weight:700; margin-top:0.3rem;">Fiber Per Bowl</div>
          <p style="font-size:0.8rem; color:var(--muted-text); margin-top:0.4rem;">Supports optimal gut microbiome.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.5rem; margin:0;">
          <div style="font-size:2rem; font-weight:900; color:var(--deep-green);">&lt; 400mg</div>
          <div style="font-weight:700; margin-top:0.3rem;">Controlled Sodium</div>
          <p style="font-size:0.8rem; color:var(--muted-text); margin-top:0.4rem;">Seasoned with herbs, not heavy salts.</p>
        </div>
        <div class="dash-panel" style="text-align:center; padding:1.5rem; margin:0;">
          <div style="font-size:2rem; font-weight:900; color:var(--deep-green);">0g</div>
          <div style="font-weight:700; margin-top:0.3rem;">Refined Sugars</div>
          <p style="font-size:0.8rem; color:var(--muted-text); margin-top:0.4rem;">Sweetened only with fruit or raw honey.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Subscription Benefits Comparison -->
  <section class="section-white">
    <div class="container">
      <div class="section-header">
        <span class="badge-tag">Subscriber vs Dine-In</span>
        <h2 class="section-title">SUBSCRIBER EXCLUSIVE SAVINGS</h2>
        <p class="section-subtitle">How subscribing to the Balanced Week compares to ordering daily takeout:</p>
      </div>
      <div class="dash-panel" style="max-width:820px; margin:0 auto;">
        <div class="dash-table-wrap">
          <table class="dash-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Standard Delivery Apps</th>
                <th>Bowl'd Balanced Week Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Average Price Per Meal</td>
                <td>$16.50 + delivery fees</td>
                <td><strong style="color:var(--primary-green);">$10.50 all inclusive</strong></td>
              </tr>
              <tr>
                <td>Delivery Charges</td>
                <td>$4.99 per order ($25/wk)</td>
                <td><strong style="color:var(--primary-green);">100% Free Weekly Delivery</strong></td>
              </tr>
              <tr>
                <td>Packaging Quality</td>
                <td>Mixed single-use plastic</td>
                <td><strong style="color:var(--primary-green);">100% Sugarcane Compostable</strong></td>
              </tr>
              <tr>
                <td>Freshness Assurance</td>
                <td>Dressed hot/soggy</td>
                <td><strong style="color:var(--primary-green);">Sealed Cold &bull; Dressings on side</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Subscribe CTA -->
  <section class="section-tint" style="text-align:center; padding: 5rem 0;">
    <div class="container container-sm">
      <span class="badge-tag">Membership Guarantee</span>
      <h2 class="section-title" style="margin-bottom:1rem;">READY FOR A STRESS-FREE HEALTHY WEEK?</h2>
      <p class="section-subtitle" style="font-size:1.1rem; margin-bottom:2rem; color:var(--muted-text);">Sign up for the Balanced Week plan. Swap your bowls or pause anytime.</p>
      <div class="btn-group" style="justify-content:center;">
        <a href="register.html" class="btn btn-primary btn-lg">Subscribe for $52.50/Week</a>
        <a href="meal-plans.html" class="btn btn-outline btn-lg">Compare All Plans</a>
      </div>
    </div>
  </section>
</main>
${getFooter()}`;

fs.writeFileSync('menu-details.html', menuDetailsHtml);
fs.writeFileSync('build-your-bowl.html', buildYourBowlHtml);
fs.writeFileSync('meal-plans.html', mealPlansHtml);
fs.writeFileSync('plan-details.html', planDetailsHtml);
console.log('Re-generated menu-details.html, build-your-bowl.html, meal-plans.html, plan-details.html with explicit sections.');

const fs = require('fs');
const { getHead, getDashboardLayout } = require('./generator_base');

// 16. dashboard.html (7 Sections)
const dashOverviewContent = `
  <!-- Section 1: Top Notification Banner -->
  <section class="dash-section">
    <div class="dash-hero-banner">
      <div style="display:flex; align-items:center; gap:0.85rem;">
        <span style="font-size:1.6rem;">🥑</span>
        <div>
          <strong>Wednesday Delivery Locked In!</strong>
          <span class="dash-banner-sub">Your 5 chef-crafted bowls are scheduled for delivery on Wednesday, Nov 11 between 10:00 AM – 12:00 PM.</span>
        </div>
      </div>
      <a href="weekly-bowl-selection.html" class="btn btn-primary btn-sm">Review Selections</a>
    </div>
  </section>

  <!-- Section 2: 4 Summary Metric Cards -->
  <section class="dash-section">
    <div class="dash-stat-grid">
      <a href="my-meal-plan.html" class="dash-stat-card">
        <div class="stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
        <div>
          <div class="stat-title">Active Plan</div>
          <div class="stat-value">Balanced Week</div>
          <div class="stat-note">5 Bowls / Week &bull; $52.50</div>
        </div>
      </a>

      <a href="weekly-bowl-selection.html" class="dash-stat-card">
        <div class="stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg></div>
        <div>
          <div class="stat-title">Bowls Remaining</div>
          <div class="stat-value">2 of 5 Left</div>
          <div class="stat-note">In fridge this week</div>
        </div>
      </a>

      <a href="delivery-schedule.html" class="dash-stat-card">
        <div class="stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
        <div>
          <div class="stat-title">Next Delivery</div>
          <div class="stat-value">Wednesday</div>
          <div class="stat-note">Nov 11 &bull; 10:00 AM</div>
        </div>
      </a>

      <a href="manage-subscription.html" class="dash-stat-card">
        <div class="stat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
        <div>
          <div class="stat-title">Subscription</div>
          <div class="stat-value"><span class="status-pill status-active">Active</span></div>
          <div class="stat-note">Auto-renews Monday</div>
        </div>
      </a>
    </div>
  </section>

  <!-- Section 3: Next Delivery Showcase & Driver Notes -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          Next Scheduled Drop
        </div>
        <a href="delivery-schedule.html" class="btn btn-outline btn-sm">Delivery Preferences</a>
      </div>
      <div class="grid-3" style="align-items:center;">
        <div>
          <div style="font-size:0.8rem; font-weight:700; color:var(--muted-text); text-transform:uppercase;">Arrival Window</div>
          <div style="font-size:1.3rem; font-weight:800; color:var(--deep-green); margin-top:0.2rem;">Wednesday, 10:00 AM – 12:00 PM</div>
          <div style="font-size:0.85rem; color:var(--primary-green); margin-top:0.3rem;">Courier: Marcus D. (Eco-Van #4)</div>
        </div>
        <div>
          <div style="font-size:0.8rem; font-weight:700; color:var(--muted-text); text-transform:uppercase;">Drop-Off Location</div>
          <div style="font-size:1rem; font-weight:700; color:var(--main-text); margin-top:0.2rem;" class="customer-address-display" id="dash-customer-address">742 Evergreen Terrace, Apt 4B</div>
          <div style="font-size:0.82rem; color:var(--muted-text);">"Leave with front desk concierge"</div>
        </div>
        <div style="text-align:end;">
          <a href="pause-delivery.html" class="btn btn-outline btn-sm">Pause This Drop</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Selected Bowls for this Week -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/></svg>
          Selected Bowls in Next Delivery Tray (5 of 5)
        </div>
        <a href="weekly-bowl-selection.html" class="btn btn-primary btn-sm">Modify Tray</a>
      </div>
      <div class="grid-3">
        <div class="dash-panel" style="margin:0; padding:1.2rem; background:var(--bg-surface-alt);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <strong>1. Green Goddess Super Bowl</strong>
            <span class="diet-badge diet-vegan">Vegan</span>
          </div>
          <p style="font-size:0.82rem; color:var(--muted-text); margin:0;">Baby spinach, edamame, cucumber ribbons, avocado, herb goddess dressing.</p>
        </div>

        <div class="dash-panel" style="margin:0; padding:1.2rem; background:var(--bg-surface-alt);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <strong>2. Protein Power Bowl</strong>
            <span class="diet-badge diet-protein">42g Protein</span>
          </div>
          <p style="font-size:0.82rem; color:var(--muted-text); margin:0;">Flame-grilled chicken, tricolor quinoa, roasted broccoli, spiced chickpeas.</p>
        </div>

        <div class="dash-panel" style="margin:0; padding:1.2rem; background:var(--bg-surface-alt);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <strong>3. Mediterranean Sunshine Bowl</strong>
            <span class="diet-badge diet-gf">Gluten Free</span>
          </div>
          <p style="font-size:0.82rem; color:var(--muted-text); margin:0;">Crisp romaine, vine tomatoes, Kalamata olives, creamy feta, Greek vinaigrette.</p>
        </div>

        <div class="dash-panel" style="margin:0; padding:1.2rem; background:var(--bg-surface-alt);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <strong>4. Rainbow Crunch Bowl</strong>
            <span class="diet-badge diet-vegan">Plant Fuel</span>
          </div>
          <p style="font-size:0.82rem; color:var(--muted-text); margin:0;">Purple cabbage, carrot ribbons, organic tofu, sesame seeds, ginger miso dressing.</p>
        </div>

        <div class="dash-panel" style="margin:0; padding:1.2rem; background:var(--bg-surface-alt);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <strong>5. Custom Builder Bowl</strong>
            <span class="diet-badge diet-calorie">Custom Build</span>
          </div>
          <p style="font-size:0.82rem; color:var(--muted-text); margin:0;">Quinoa, Grilled Chicken, Cucumber, Tomato, Avocado, Lemon Herb dressing.</p>
        </div>

        <div class="dash-panel" style="margin:0; padding:1.2rem; display:flex; flex-direction:column; align-items:center; justify-content:center; border:2px dashed var(--fresh-green); text-align:center;">
          <span style="font-size:1.5rem; margin-bottom:0.3rem;">➕</span>
          <strong style="color:var(--deep-green);">Add Juice or Side</strong>
          <span style="font-size:0.75rem; color:var(--muted-text); margin-bottom:0.6rem;">Cold-pressed juice from $4.50</span>
          <a href="menu.html" class="btn btn-outline btn-sm">Add Extras</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Quick Actions Hub -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Quick Actions Hub</div>
      </div>
      <div class="grid-4">
        <a href="pause-delivery.html" class="dash-panel" style="margin:0; text-align:center; padding:1.2rem; text-decoration:none;">
          <div style="font-size:1.8rem; margin-bottom:0.4rem;">⏸️</div>
          <h4>Pause Next Week</h4>
          <span style="font-size:0.78rem; color:var(--muted-text);">Going out of town?</span>
        </a>
        <a href="my-meal-plan.html" class="dash-panel" style="margin:0; text-align:center; padding:1.2rem; text-decoration:none;">
          <div style="font-size:1.8rem; margin-bottom:0.4rem;">📈</div>
          <h4>Upgrade to 7 Bowls</h4>
          <span style="font-size:0.78rem; color:var(--muted-text);">Save more per meal</span>
        </a>
        <a href="profile.html" class="dash-panel" style="margin:0; text-align:center; padding:1.2rem; text-decoration:none;">
          <div style="font-size:1.8rem; margin-bottom:0.4rem;">📍</div>
          <h4>Update Drop Address</h4>
          <span style="font-size:0.78rem; color:var(--muted-text);">Change delivery location</span>
        </a>
        <a href="nutrition-history.html" class="dash-panel" style="margin:0; text-align:center; padding:1.2rem; text-decoration:none;">
          <div style="font-size:1.8rem; margin-bottom:0.4rem;">📊</div>
          <h4>Nutrition Summary</h4>
          <span style="font-size:0.78rem; color:var(--muted-text);">Review weekly macros</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Section 6: Weekly Nutrition Summary Visualizer -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Weekly Nutrition Dashboard (5 Bowls Total)</div>
        <span style="font-size:0.8rem; color:var(--muted-text);">Sample estimate data</span>
      </div>
      <div class="grid-4" style="text-align:center;">
        <div style="background:var(--light-green-bg); padding:1.2rem; border-radius:var(--radius-md);">
          <div style="font-family:var(--font-heading); font-size:1.8rem; font-weight:900; color:var(--deep-green);">2,450</div>
          <div style="font-size:0.8rem; font-weight:700; color:var(--muted-text); text-transform:uppercase;">Total Calories</div>
          <span style="font-size:0.74rem; color:var(--primary-green);">~490 kcal / bowl</span>
        </div>
        <div style="background:var(--light-green-bg); padding:1.2rem; border-radius:var(--radius-md);">
          <div style="font-family:var(--font-heading); font-size:1.8rem; font-weight:900; color:#E65100;">145g</div>
          <div style="font-size:0.8rem; font-weight:700; color:var(--muted-text); text-transform:uppercase;">Total Protein</div>
          <span style="font-size:0.74rem; color:var(--primary-green);">High protein balance</span>
        </div>
        <div style="background:var(--light-green-bg); padding:1.2rem; border-radius:var(--radius-md);">
          <div style="font-family:var(--font-heading); font-size:1.8rem; font-weight:900; color:var(--primary-green);">210g</div>
          <div style="font-size:0.8rem; font-weight:700; color:var(--muted-text); text-transform:uppercase;">Complex Carbs</div>
          <span style="font-size:0.74rem; color:var(--primary-green);">Ancient whole grains</span>
        </div>
        <div style="background:var(--light-green-bg); padding:1.2rem; border-radius:var(--radius-md);">
          <div style="font-family:var(--font-heading); font-size:1.8rem; font-weight:900; color:#8ECA3C;">68g</div>
          <div style="font-size:0.8rem; font-weight:700; color:var(--muted-text); text-transform:uppercase;">Healthy Fats</div>
          <span style="font-size:0.74rem; color:var(--primary-green);">Avocado &amp; olive oil</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 7: Subscriber Referral Perk -->
  <section class="dash-section">
    <div style="background:linear-gradient(135deg, var(--deep-green) 0%, var(--primary-green) 100%); color:#FFFFFF; padding:2rem; border-radius:var(--radius-xl); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1.5rem;">
      <div>
        <h3 style="color:#FFFFFF; margin-bottom:0.3rem;">GIVE $10, GET $10 IN FRESH BOWLS</h3>
        <p style="color:rgba(255,255,255,0.85); font-size:0.92rem; margin:0;">Share your personal referral link with coworkers or friends. They get $10 off, and you get $10 credit.</p>
      </div>
      <div style="display:flex; gap:0.5rem;">
        <input type="text" value="bowldcafe.com/r/alexmorgan" readonly style="padding:0.6rem 1rem; border-radius:var(--radius-full); border:none; font-size:0.88rem; width:220px;">
        <button type="button" class="btn btn-lime btn-sm btn-copy-referral" id="copy-referral-btn">Copy Link</button>
      </div>
    </div>
  </section>
`;

// 17. my-meal-plan.html (7 Sections)
const myMealPlanContent = `
  <!-- Section 1: Current Plan Specs -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header" style="margin-bottom:1.2rem;">
        <div>
          <div class="dash-panel-title">Current Active Subscription</div>
          <span style="font-size:0.85rem; color:var(--muted-text);">Billed weekly &bull; Free contact-free cooler delivery</span>
        </div>
        <span class="status-pill status-active">Active</span>
      </div>
      <div style="background:var(--bg-surface-alt); border-radius:var(--radius-lg); padding:1.8rem; margin-bottom:1.5rem; border:1px solid var(--border-subtle);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1.2rem;">
          <div>
            <h2 style="font-size:1.85rem; margin-bottom:0.4rem; color:var(--deep-green);" id="current-plan-name-display">Balanced Week Plan (5 Bowls / Week)</h2>
            <p style="color:var(--muted-text); font-size:0.98rem; margin:0; max-width:680px;">5 chef-crafted or custom bowls delivered weekly on Wednesday mornings. Farm-to-table Pacific Northwest organic produce.</p>
          </div>
          <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
            <a href="weekly-bowl-selection.html" class="btn btn-primary btn-sm">Select Bowls</a>
            <a href="manage-subscription.html" class="btn btn-outline btn-sm">Manage Tier</a>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:1.5rem; margin-top:1.8rem; padding-top:1.5rem; border-top:1px solid var(--border-subtle);">
          <div>
            <div style="font-size:0.8rem; color:var(--muted-text); font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">Weekly Rate</div>
            <div style="font-size:1.6rem; font-weight:900; color:var(--deep-green); margin-top:0.2rem;" id="current-plan-rate-display">$52.50 / week</div>
            <div style="font-size:0.75rem; color:var(--muted-text); margin-top:0.2rem;">Automatic weekly billing</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--muted-text); font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">Per Bowl Cost</div>
            <div style="font-size:1.6rem; font-weight:900; color:var(--primary-green); margin-top:0.2rem;">$10.50 / bowl</div>
            <div style="font-size:0.75rem; color:var(--muted-text); margin-top:0.2rem;">Save $3.00 vs cafe retail</div>
          </div>
          <div>
            <div style="font-size:0.8rem; color:var(--muted-text); font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">Next Delivery Drop</div>
            <div style="font-size:1.6rem; font-weight:900; color:var(--main-text); margin-top:0.2rem;">Wednesday, Nov 11</div>
            <div style="font-size:0.75rem; color:var(--muted-text); margin-top:0.2rem;">10:00 AM – 12:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Included Plan Benefits -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">What's Included in Your Tier</div>
      </div>
      <div class="grid-3">
        <div class="dash-panel" style="margin:0; text-align:center;">
          <h4>Free Chilled Delivery</h4>
          <p style="font-size:0.82rem; color:var(--muted-text); margin-top:0.3rem;">Temperature controlled cold tote.</p>
        </div>
        <div class="dash-panel" style="margin:0; text-align:center;">
          <h4>Unlimited Swaps</h4>
          <p style="font-size:0.82rem; color:var(--muted-text); margin-top:0.3rem;">Customize your 5 bowls weekly.</p>
        </div>
        <div class="dash-panel" style="margin:0; text-align:center;">
          <h4>15% Drinks Discount</h4>
          <p style="font-size:0.82rem; color:var(--muted-text); margin-top:0.3rem;">Save on immunity juices.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Switch Plan Selector -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Switch Your Plan Tier</div>
      </div>
      <div class="grid-3">
        <label class="dash-panel plan-tier-card" id="plan-card-starter" style="margin:0; cursor:pointer; border:2px solid var(--border-subtle); display:block;">
          <input type="radio" name="plan_tier" value="Starter Bowl" class="plan-select-radio" style="float:right;">
          <h4>Starter Bowl (3/Wk)</h4>
          <div style="font-size:1.3rem; font-weight:800; color:var(--deep-green); margin:0.3rem 0;">$34.50/wk</div>
          <p style="font-size:0.82rem; color:var(--muted-text); margin:0;">3 bowls per week. Great for light lunch routines.</p>
        </label>

        <label class="dash-panel plan-tier-card" id="plan-card-balanced" style="margin:0; cursor:pointer; border:2px solid var(--primary-green); background:var(--light-green-bg); display:block;">
          <input type="radio" name="plan_tier" value="Balanced Week" checked class="plan-select-radio" style="float:right;">
          <h4>Balanced Week (5/Wk)</h4>
          <div style="font-size:1.3rem; font-weight:800; color:var(--deep-green); margin:0.3rem 0;">$52.50/wk (Current)</div>
          <p style="font-size:0.82rem; color:var(--muted-text); margin:0;">5 bowls per week. Covers full workweek lunches.</p>
        </label>

        <label class="dash-panel plan-tier-card" id="plan-card-full" style="margin:0; cursor:pointer; border:2px solid var(--border-subtle); display:block;">
          <input type="radio" name="plan_tier" value="Full Fresh" class="plan-select-radio" style="float:right;">
          <h4>Full Fresh (7/Wk)</h4>
          <div style="font-size:1.3rem; font-weight:800; color:var(--deep-green); margin:0.3rem 0;">$68.00/wk</div>
          <p style="font-size:0.82rem; color:var(--muted-text); margin:0;">7 bowls per week with split 2-day delivery.</p>
        </label>
      </div>
      <div style="margin-top:1.2rem; display:flex; justify-content:flex-end;">
        <button type="button" class="btn btn-primary" id="save-plan-tier-btn">Confirm Plan Tier Change</button>
      </div>
    </div>
  </section>

  <!-- Section 4: Delivery Frequency Selector -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Delivery Frequency</div>
      </div>
      <div class="grid-2">
        <label class="dash-panel" style="margin:0; display:flex; align-items:center; gap:0.75rem; cursor:pointer;">
          <input type="radio" name="freq" checked onchange="showToast('Weekly delivery active');">
          <div>
            <strong>Weekly Delivery (Standard)</strong>
            <span style="font-size:0.8rem; color:var(--muted-text); display:block;">Delivered every Wednesday morning</span>
          </div>
        </label>
        <label class="dash-panel" style="margin:0; display:flex; align-items:center; gap:0.75rem; cursor:pointer;">
          <input type="radio" name="freq" onchange="showToast('Bi-Weekly delivery selected');">
          <div>
            <strong>Bi-Weekly Delivery (Every 2 Weeks)</strong>
            <span style="font-size:0.8rem; color:var(--muted-text); display:block;">Delivered every other Wednesday</span>
          </div>
        </label>
      </div>
    </div>
  </section>

  <!-- Section 5: Add-On Subscriptions -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Weekly Add-On Subscriptions</div>
      </div>
      <div class="grid-2">
        <div style="display:flex; justify-content:space-between; align-items:center; padding:1rem; background:var(--bg-surface-alt); border-radius:var(--radius-md);">
          <div>
            <strong>Cold-Pressed Juice 4-Pack</strong>
            <span style="display:block; font-size:0.8rem; color:var(--muted-text);">Green immunity &amp; citrus ginger (+$14.00/wk)</span>
          </div>
          <button type="button" class="btn btn-outline btn-sm addon-toggle-btn" data-addon="Cold-Pressed Juice 4-Pack">Add to Plan</button>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; padding:1rem; background:var(--bg-surface-alt); border-radius:var(--radius-md);">
          <div>
            <strong>Artisan Herb Crisps 3-Pack</strong>
            <span style="display:block; font-size:0.8rem; color:var(--muted-text);">Crunchy baked za'atar pita crisps (+$6.00/wk)</span>
          </div>
          <button type="button" class="btn btn-outline btn-sm addon-toggle-btn" data-addon="Artisan Herb Crisps 3-Pack">Add to Plan</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6: Invoicing Quick Link -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Payment &amp; Invoices</div>
        <a href="payment-history.html" class="btn btn-outline btn-sm">View All Invoices</a>
      </div>
      <p style="color:var(--muted-text); font-size:0.92rem; margin:0;">
        Currently billed to Visa ending in 4242. Next automatic renewal is scheduled for Monday, Nov 9 for $52.50.
      </p>
    </div>
  </section>

  <!-- Section 7: FAQs -->
  <section class="dash-section">
    <div class="dash-panel">
      <h4>Plan FAQs</h4>
      <p style="color:var(--muted-text); font-size:0.88rem; margin:0.4rem 0 0;">
        Changes made to your plan tier before Monday 11:59 PM take effect on your very next Wednesday delivery.
      </p>
    </div>
  </section>
`;

// 18. weekly-bowl-selection.html (7 Sections)
const weeklyBowlContent = `
  <!-- Section 1: Tray Tracker Bar -->
  <section class="dash-section">
    <div class="selection-tracker" data-max="5">
      <div>
        <div class="tracker-text">Weekly Bowl Tray: <span id="selected-bowls-count">3</span> of 5 Bowls Selected</div>
        <div style="font-size:0.82rem; color:var(--muted-text); margin-top:0.2rem;">Select <span id="remaining-bowls-count">2</span> more bowls to complete your delivery tray for Wednesday.</div>
      </div>
      <div class="tracker-pills">
        <div class="tracker-dot filled">1</div>
        <div class="tracker-dot filled">2</div>
        <div class="tracker-dot filled">3</div>
        <div class="tracker-dot">4</div>
        <div class="tracker-dot">5</div>
      </div>
    </div>
  </section>

  <!-- Section 2: Category Filter Pills -->
  <section class="dash-section">
    <div class="filter-pills">
      <button type="button" class="filter-pill active" data-filter="all">All Available</button>
      <button type="button" class="filter-pill" data-filter="protein">High Protein</button>
      <button type="button" class="filter-pill" data-filter="vegan">Vegan</button>
      <button type="button" class="filter-pill" data-filter="gf">Gluten Free</button>
    </div>
  </section>

  <!-- Section 3: Signature Bowl Catalog -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Choose from Signature Bowls</div>
        <button type="button" class="btn btn-primary btn-sm" id="save-selection-btn">Save Weekly Selection</button>
      </div>
      <div class="grid-3">
        <div class="bowl-card" data-category="vegan gf">
          <div class="bowl-card-media"><img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80" alt="Green Goddess"></div>
          <div class="bowl-card-body">
            <h4>Green Goddess Bowl</h4>
            <p style="font-size:0.82rem; color:var(--muted-text);">Baby spinach, edamame, cucumber, avocado, pumpkin seeds.</p>
            <div style="margin-top:auto; padding-top:1rem;">
              <button type="button" class="btn btn-outline btn-sm dash-bowl-select-btn" data-bowl="Green Goddess Bowl" style="width:100%;">Remove Bowl</button>
            </div>
          </div>
        </div>

        <div class="bowl-card" data-category="protein">
          <div class="bowl-card-media"><img src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80" alt="Protein Power"></div>
          <div class="bowl-card-body">
            <h4>Protein Power Bowl</h4>
            <p style="font-size:0.82rem; color:var(--muted-text);">Flame-grilled chicken, quinoa, roasted broccoli, spiced chickpeas.</p>
            <div style="margin-top:auto; padding-top:1rem;">
              <button type="button" class="btn btn-outline btn-sm dash-bowl-select-btn" data-bowl="Protein Power Bowl" style="width:100%;">Remove Bowl</button>
            </div>
          </div>
        </div>

        <div class="bowl-card" data-category="gf">
          <div class="bowl-card-media"><img src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80" alt="Mediterranean"></div>
          <div class="bowl-card-body">
            <h4>Mediterranean Bowl</h4>
            <p style="font-size:0.82rem; color:var(--muted-text);">Crisp romaine, vine tomatoes, olives, feta, Greek herb dressing.</p>
            <div style="margin-top:auto; padding-top:1rem;">
              <button type="button" class="btn btn-outline btn-sm dash-bowl-select-btn" data-bowl="Mediterranean Bowl" style="width:100%;">Remove Bowl</button>
            </div>
          </div>
        </div>

        <div class="bowl-card" data-category="vegan">
          <div class="bowl-card-media"><img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=800&q=80" alt="Rainbow Crunch"></div>
          <div class="bowl-card-body">
            <h4>Rainbow Crunch Bowl</h4>
            <p style="font-size:0.82rem; color:var(--muted-text);">Red cabbage, carrots, organic tofu, sesame seeds, ginger miso.</p>
            <div style="margin-top:auto; padding-top:1rem;">
              <button type="button" class="btn btn-primary btn-sm dash-bowl-select-btn" data-bowl="Rainbow Crunch Bowl" style="width:100%;">Add to Week</button>
            </div>
          </div>
        </div>

        <div class="bowl-card" data-category="protein">
          <div class="bowl-card-media"><img src="https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=80" alt="Spicy Paneer"></div>
          <div class="bowl-card-body">
            <h4>Spicy Paneer Warm Bowl</h4>
            <p style="font-size:0.82rem; color:var(--muted-text);">Grilled paneer cubes, brown rice, sweet peppers, cilantro yogurt.</p>
            <div style="margin-top:auto; padding-top:1rem;">
              <button type="button" class="btn btn-primary btn-sm dash-bowl-select-btn" data-bowl="Spicy Paneer Bowl" style="width:100%;">Add to Week</button>
            </div>
          </div>
        </div>

        <div class="bowl-card" data-category="protein">
          <div class="bowl-card-media"><img src="https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80" alt="Modern Caesar"></div>
          <div class="bowl-card-body">
            <h4>Modern Caesar Bowl</h4>
            <p style="font-size:0.82rem; color:var(--muted-text);">Romaine, herb chicken, croutons, parmesan crisps, light Caesar.</p>
            <div style="margin-top:auto; padding-top:1rem;">
              <button type="button" class="btn btn-primary btn-sm dash-bowl-select-btn" data-bowl="Modern Caesar Bowl" style="width:100%;">Add to Week</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Custom Bowl Integration -->
  <section class="dash-section">
    <div class="dash-panel" style="background:var(--light-green-bg); text-align:center; padding:1.8rem;">
      <h3>Want a 100% Custom Build in Your Box?</h3>
      <p style="color:var(--muted-text); font-size:0.92rem; margin:0.5rem auto 1.2rem; max-width:540px;">Use our custom bowl builder to choose your specific base, proteins, and dressing. It plugs directly into your weekly tray.</p>
      <a href="home-2.html#build-bowl" class="btn btn-primary">Open Custom Bowl Builder</a>
    </div>
  </section>

  <!-- Section 5: Current Tray Drawer Summary -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Current Tray Summary</div>
      </div>
      <p id="tray-summary-text" style="font-size:0.9rem; color:var(--muted-text); margin:0;">
        Slot 1: Green Goddess Bowl &bull; Slot 2: Protein Power Bowl &bull; Slot 3: Mediterranean Bowl &bull; Slot 4: [Empty] &bull; Slot 5: [Empty]
      </p>
    </div>
  </section>

  <!-- Section 6: Weekly Nutritional Balance Target -->
  <section class="dash-section">
    <div class="dash-panel">
      <h4>Tray Nutritional Target</h4>
      <p style="font-size:0.85rem; color:var(--muted-text); margin:0.3rem 0 0;">
        Your currently selected bowls provide an estimated average of 34g protein and 14g fiber per meal.
      </p>
    </div>
  </section>

  <!-- Section 7: Final Save & Lock-in Bar -->
  <section class="dash-section">
    <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-surface); border:1px solid var(--border-subtle); padding:1.2rem 1.8rem; border-radius:var(--radius-lg);">
      <div>
        <strong>Ready to lock in this week's meals?</strong>
        <span style="display:block; font-size:0.82rem; color:var(--muted-text);">Cutoff: Monday at 11:59 PM</span>
      </div>
      <button type="button" class="btn btn-primary" id="lock-in-selections-btn">Lock In Selections</button>
    </div>
  </section>
`;

// 19. delivery-schedule.html (7 Sections)
const deliveryScheduleContent = `
  <!-- Section 1: Next Drop Highlight -->
  <section class="dash-section">
    <div class="dash-panel">
      <div style="font-size:0.8rem; font-weight:800; color:var(--deep-green); text-transform:uppercase;">Next Upcoming Delivery</div>
      <h2 style="margin:0.3rem 0; font-size:1.6rem;">Wednesday, November 11</h2>
      <div style="font-size:0.9rem; color:var(--muted-text);">Estimated Arrival: 10:00 AM – 12:00 PM &bull; 5 Salad Bowls in Chilled Tote #204</div>
    </div>
  </section>

  <!-- Section 2: 4-Week Delivery Timeline -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Upcoming Deliveries Timeline</div>
        <a href="pause-delivery.html" class="btn btn-outline btn-sm">Pause a Delivery</a>
      </div>
      <div class="delivery-timeline">
        <div class="timeline-item">
          <div class="timeline-date-box">
            <div class="date-day">11</div>
            <div class="date-month">Nov (Wed)</div>
          </div>
          <div class="timeline-details">
            <h4>Next Delivery: 5 Salad Bowls</h4>
            <div class="timeline-bowls">Green Goddess, Protein Power, Mediterranean, Rainbow Crunch, Custom Bowl</div>
            <span style="font-size:0.8rem; color:var(--primary-green); font-weight:700;">Window: 10:00 AM – 12:00 PM &bull; Status: Confirmed</span>
          </div>
          <div><span class="status-pill status-active">Confirmed</span></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date-box">
            <div class="date-day">18</div>
            <div class="date-month">Nov (Wed)</div>
          </div>
          <div class="timeline-details">
            <h4>Scheduled Drop: 5 Salad Bowls</h4>
            <div class="timeline-bowls">Selections open until Monday, Nov 16 at 11:59 PM</div>
            <span style="font-size:0.8rem; color:var(--muted-text);">Window: 10:00 AM – 12:00 PM</span>
          </div>
          <div><span class="status-pill status-pending">Scheduled</span></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date-box">
            <div class="date-day">25</div>
            <div class="date-month">Nov (Wed)</div>
          </div>
          <div class="timeline-details">
            <h4>Scheduled Drop: 5 Salad Bowls</h4>
            <div class="timeline-bowls">Holiday Week &bull; Delivery confirmed as usual</div>
            <span style="font-size:0.8rem; color:var(--muted-text);">Window: 10:00 AM – 12:00 PM</span>
          </div>
          <div><span class="status-pill status-pending">Scheduled</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Delivery Window Preference -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Delivery Window Preference</div>
      </div>
      <select class="form-control" id="delivery-window-select">
        <option>Morning (8:00 AM – 11:30 AM) — Active</option>
        <option>Midday (11:30 AM – 2:30 PM)</option>
        <option>Late Afternoon (2:30 PM – 5:30 PM)</option>
      </select>
    </div>
  </section>

  <!-- Section 4: Address & Gate Instructions -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Address &amp; Drop Instructions</div>
        <a href="profile.html" class="btn btn-outline btn-sm">Edit Address</a>
      </div>
      <p style="font-weight:700; color:var(--deep-green); margin:0 0 0.4rem;" class="customer-address-display" id="delivery-customer-address">742 Evergreen Terrace, Apt 4B, Portland OR 97201</p>
      <input type="text" id="drop-instructions-input" class="form-control" value="Leave with front desk concierge (Apt 4B)">
      <button type="button" class="btn btn-primary btn-sm" id="save-delivery-prefs-btn" style="margin-top:0.8rem;">Save Preferences</button>
    </div>
  </section>

  <!-- Section 5: Eco-Tote Bag Return Protocol -->
  <section class="dash-section">
    <div class="dash-panel">
      <h4>Eco-Tote Bag Return Protocol</h4>
      <p style="color:var(--muted-text); font-size:0.88rem; margin:0.4rem 0 0;">
        Leave last week's insulated tote and ice bricks on your front doorstep on Wednesday morning. Your courier will swap it for your fresh tote.
      </p>
    </div>
  </section>

  <!-- Section 6: SMS Notification Settings -->
  <section class="dash-section">
    <div class="dash-panel">
      <h4>Courier SMS Notifications</h4>
      <p style="color:var(--muted-text); font-size:0.88rem; margin:0.4rem 0 0;">
        Automated text messages are currently active for <strong>(555) 234-5678</strong>. You will receive an alert when the van is 2 stops away.
      </p>
    </div>
  </section>

  <!-- Section 7: Emergency Dispatch Contact -->
  <section class="dash-section">
    <div style="background:var(--bg-surface); padding:1.2rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
      <span>Need to modify today's delivery route?</span>
      <a href="tel:5553452695" class="btn btn-outline btn-sm">Call Dispatch (555) 345-BOWL</a>
    </div>
  </section>
`;

// 20. pause-delivery.html (7 Sections)
const pauseDeliveryContent = `
  <!-- Section 1: Pause Hero -->
  <section class="dash-section">
    <div class="dash-panel" style="max-width:700px; margin:0 auto;">
      <span class="badge-tag">Flexible Subscriptions</span>
      <h2 style="font-size:1.8rem; margin:0.4rem 0;">TAKING A BREAK? PAUSE YOUR DELIVERIES</h2>
      <p style="color:var(--muted-text); font-size:0.95rem;">
        Whether you're traveling, taking vacation, or simply have leftover meals, pause your deliveries anytime with zero penalties or rate increases.
      </p>
    </div>
  </section>

  <!-- Section 2: Pause Form Dates -->
  <section class="dash-section">
    <div class="dash-panel" style="max-width:700px; margin:0 auto;">
      <form id="pause-delivery-form">
        <div class="grid-2">
          <div class="form-group">
            <label class="form-label" for="pause-start-date">Pause Start Date *</label>
            <input type="date" id="pause-start-date" class="form-control" value="2026-11-18" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="pause-resume-date">Auto-Resume Date *</label>
            <input type="date" id="pause-resume-date" class="form-control" value="2026-12-02" required>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="pause-reason">Reason for Pause (Optional)</label>
          <select id="pause-reason" class="form-control">
            <option>Vacation / Holiday Travel</option>
            <option>Work Trip / Away from Home</option>
            <option>Still have meals in fridge</option>
            <option>Dietary change / Cleansing</option>
            <option>Other reason</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">Review &amp; Pause Subscription</button>
      </form>
    </div>
  </section>

  <!-- Section 3: Billing Protection Summary -->
  <section class="dash-section">
    <div class="dash-panel" style="max-width:700px; margin:0 auto; background:var(--light-green-bg);">
      <h4 style="color:var(--deep-green); margin-bottom:0.4rem;">Billing Protection Guarantee</h4>
      <p style="color:var(--muted-text); font-size:0.88rem; margin:0;">
        During your selected pause duration, you will not be charged. Your $10.50/bowl subscriber discount remains permanently locked.
      </p>
    </div>
  </section>

  <!-- Section 4: Resume Early Option -->
  <section class="dash-section">
    <div class="dash-panel" style="max-width:700px; margin:0 auto;">
      <h4>Returning Earlier Than Expected?</h4>
      <p style="color:var(--muted-text); font-size:0.88rem; margin:0.3rem 0 0.8rem;">
        You can unpause your subscription anytime with one click before Monday at 11:59 PM to receive that week's Wednesday box.
      </p>
      <div style="display:flex; align-items:center; gap:0.75rem;">
        <button type="button" class="btn btn-outline btn-sm" onclick="showToast('Your subscription is currently active!');">Check Status</button>
        <span class="status-pill status-active pause-status-pill">Active</span>
      </div>
    </div>
  </section>

  <!-- Section 5: Past Paused History Log -->
  <section class="dash-section">
    <div class="dash-panel" style="max-width:700px; margin:0 auto;">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Previous Pause History</div>
      </div>
      <div class="dash-table-wrap">
        <table class="dash-table">
          <thead>
            <tr>
              <th>Start Date</th>
              <th>Resumed Date</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aug 12, 2026</td>
              <td>Aug 26, 2026</td>
              <td>Summer Vacation</td>
              <td><span class="status-pill status-confirmed">Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Section 6: Vacation Produce Waste Prevention -->
  <section class="dash-section">
    <div class="dash-panel" style="max-width:700px; margin:0 auto; background:var(--bg-surface-alt);">
      <h4>Zero Food Waste Commitment</h4>
      <p style="font-size:0.88rem; color:var(--muted-text); margin:0.3rem 0 0;">
        When you pause in advance, our culinary team adjusts our farm harvest quantities directly, preventing organic greens from ever going to waste.
      </p>
    </div>
  </section>

  <!-- Section 7: Need Help With Delivery -->
  <section class="dash-section">
    <div class="dash-panel" style="max-width:700px; margin:0 auto; text-align:center;">
      <p style="font-size:0.88rem; color:var(--muted-text); margin:0;">
        Have a question about scheduling or custom dates? <a href="contact.html">Contact Customer Care</a>
      </p>
    </div>
  </section>

  <!-- Confirmation Modal -->
  <div class="modal-overlay" id="pause-confirmation-modal" role="dialog" aria-modal="true" aria-label="Confirm Pause">
    <div class="modal-card" style="text-align:center;">
      <button type="button" class="modal-close-btn" aria-label="Close modal">&times;</button>
      <div style="font-size:3rem; margin-bottom:0.5rem;">⏸️</div>
      <h3 style="color:var(--deep-green); margin-bottom:0.5rem;">CONFIRM DELIVERY PAUSE</h3>
      <div class="pause-modal-summary" style="margin:1rem 0; font-size:0.95rem; color:var(--muted-text);">
        Deliveries will pause as scheduled.
      </div>
      <div class="btn-group" style="justify-content:center; margin-top:1.5rem; gap:1rem;">
        <button type="button" class="btn btn-primary" id="confirm-pause-btn">Confirm Pause</button>
        <button type="button" class="btn btn-outline" data-modal-close>Keep Active</button>
      </div>
    </div>
  </div>
`;

// 21. nutrition-history.html (7 Sections)
const nutritionHistoryContent = `
  <!-- Section 1: Nutrition Header -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Your Nutrition Journey with Bowl'd</div>
        <span style="font-size:0.8rem; color:var(--muted-text);">Demo calculation data</span>
      </div>
      <p style="color:var(--muted-text); font-size:0.92rem; margin:0;">
        Tracking macronutrients and micronutrients delivered through your weekly bowl trays.
      </p>
    </div>
  </section>

  <!-- Section 2: 4-Week Calorie Intake CSS Bar Visualizer -->
  <section class="dash-section">
    <div class="dash-panel">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; flex-wrap:wrap; gap:0.75rem;">
        <div>
          <h4 style="margin:0; font-size:1.15rem; color:var(--deep-green);">4-Week Calorie Intake</h4>
          <p style="margin:0.25rem 0 0; font-size:0.85rem; color:var(--muted-text);">Pure CSS Visualizer &bull; Click any bar to inspect daily macros</p>
        </div>
        <span class="badge-tag">Target: 2,400 kcal/wk</span>
      </div>

      <div class="nutrition-chart-card">
        <div class="nutrition-chart-track">
          <div class="nutrition-bar-col" data-week="Week 1" data-kcal="2,380 kcal" data-protein="136g">
            <div class="nutrition-bar" style="width:44px; height:105px; background:var(--fresh-green); border-radius:6px 6px 0 0; margin:0 auto; box-shadow:var(--shadow-sm);"></div>
          </div>
          <div class="nutrition-bar-col" data-week="Week 2" data-kcal="2,520 kcal" data-protein="148g">
            <div class="nutrition-bar" style="width:44px; height:120px; background:var(--fresh-green); border-radius:6px 6px 0 0; margin:0 auto; box-shadow:var(--shadow-sm);"></div>
          </div>
          <div class="nutrition-bar-col" data-week="Week 3" data-kcal="2,290 kcal" data-protein="128g">
            <div class="nutrition-bar" style="width:44px; height:95px; background:var(--fresh-green); border-radius:6px 6px 0 0; margin:0 auto; box-shadow:var(--shadow-sm);"></div>
          </div>
          <div class="nutrition-bar-col" data-week="This Week (Confirmed)" data-kcal="2,450 kcal" data-protein="145g">
            <div class="nutrition-bar" style="width:44px; height:114px; background:var(--primary-green); border-radius:6px 6px 0 0; margin:0 auto; box-shadow:0 0 14px rgba(46,125,31,0.35);"></div>
          </div>
        </div>
        <div class="nutrition-chart-labels">
          <div class="chart-label-col">
            <div style="font-size:0.85rem; font-weight:700;">Week 1</div>
            <span style="font-size:0.75rem; color:var(--muted-text);">2,380 kcal</span>
          </div>
          <div class="chart-label-col">
            <div style="font-size:0.85rem; font-weight:700;">Week 2</div>
            <span style="font-size:0.75rem; color:var(--muted-text);">2,520 kcal</span>
          </div>
          <div class="chart-label-col">
            <div style="font-size:0.85rem; font-weight:700;">Week 3</div>
            <span style="font-size:0.75rem; color:var(--muted-text);">2,290 kcal</span>
          </div>
          <div class="chart-label-col">
            <div style="font-size:0.85rem; font-weight:700; color:var(--primary-green);">This Week</div>
            <span style="font-size:0.75rem; color:var(--primary-green); font-weight:700;">2,450 kcal</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 3: Macro Distribution Breakdown -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Average Macronutrient Ratio</div>
      </div>
      <div class="grid-3">
        <div class="dash-panel" style="margin:0; text-align:center;">
          <div style="font-size:1.8rem; font-weight:900; color:#E65100;">32%</div>
          <h4>Protein Average</h4>
          <p style="font-size:0.8rem; color:var(--muted-text); margin-top:0.2rem;">29g per bowl average</p>
        </div>
        <div class="dash-panel" style="margin:0; text-align:center;">
          <div style="font-size:1.8rem; font-weight:900; color:var(--deep-green);">44%</div>
          <h4>Complex Carbs</h4>
          <p style="font-size:0.8rem; color:var(--muted-text); margin-top:0.2rem;">High resistant fiber from grains</p>
        </div>
        <div class="dash-panel" style="margin:0; text-align:center;">
          <div style="font-size:1.8rem; font-weight:900; color:#8ECA3C;">24%</div>
          <h4>Healthy Fats</h4>
          <p style="font-size:0.8rem; color:var(--muted-text); margin-top:0.2rem;">Mono &amp; polyunsaturated oils</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 4: Top 4 Consumed Ingredients This Month -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Top 4 Ingredients Consumed this Month</div>
      </div>
      <div class="grid-4" style="text-align:center;">
        <div style="padding:1rem; background:var(--bg-surface-alt); border-radius:var(--radius-md);">
          <div style="font-size:1.8rem;">🌾</div>
          <strong>Tricolor Quinoa</strong>
          <div style="font-size:0.78rem; color:var(--muted-text);">In 8 bowls</div>
        </div>
        <div style="padding:1rem; background:var(--bg-surface-alt); border-radius:var(--radius-md);">
          <div style="font-size:1.8rem;">🍃</div>
          <strong>Baby Spinach</strong>
          <div style="font-size:0.78rem; color:var(--muted-text);">In 11 bowls</div>
        </div>
        <div style="padding:1rem; background:var(--bg-surface-alt); border-radius:var(--radius-md);">
          <div style="font-size:1.8rem;">🍗</div>
          <strong>Grilled Chicken</strong>
          <div style="font-size:0.78rem; color:var(--muted-text);">In 7 bowls</div>
        </div>
        <div style="padding:1rem; background:var(--bg-surface-alt); border-radius:var(--radius-md);">
          <div style="font-size:1.8rem;">🥑</div>
          <strong>Hass Avocado</strong>
          <div style="font-size:0.78rem; color:var(--muted-text);">In 6 bowls</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 5: Dietary Preference Target Scores -->
  <section class="dash-section">
    <div class="dash-panel">
      <h4>Dietary Scorecard</h4>
      <div style="margin-top:0.8rem; display:flex; flex-direction:column; gap:0.6rem;">
        <div>Fiber Goal (35g/day target): <strong>92% Met</strong></div>
        <div>Sodium Reduction: <strong>Optimal (&lt; 400mg/meal)</strong></div>
      </div>
    </div>
  </section>

  <!-- Section 6: Dietitian Nutrition Advice -->
  <section class="dash-section">
    <div class="dash-panel" style="background:var(--light-green-bg);">
      <h4 style="color:var(--deep-green);">Registered Dietitian Note for Alex:</h4>
      <p style="color:var(--muted-text); font-size:0.88rem; margin:0.3rem 0 0;">
        "Great job maintaining high lean protein intake! Consider adding steamed broccoli or edamame to slot #4 next week to boost dietary folate."
      </p>
    </div>
  </section>

  <!-- Section 7: Sample Data Disclaimer -->
  <section class="dash-section">
    <p style="font-size:0.78rem; color:var(--muted-text); text-align:center; margin:0;">
      All nutrition values are calculated approximations based on standard ingredient weights and recipes.
    </p>
  </section>
`;

// 22. payment-history.html (7 Sections)
const paymentHistoryContent = `
  <!-- Section 1: Active Payment Card -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Billing &amp; Payment Methods</div>
      </div>
      <div class="grid-2">
        <div style="background:var(--bg-surface-alt); padding:1.5rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
          <div style="font-size:0.8rem; font-weight:700; color:var(--muted-text); text-transform:uppercase;">Primary Payment Method</div>
          <div class="card-display-digits" style="font-size:1.2rem; font-weight:800; color:var(--deep-green); margin:0.3rem 0;">Visa ending in &bull;&bull;&bull;&bull; 4242</div>
          <div style="font-size:0.82rem; color:var(--muted-text);">Expires 08/2028 &bull; Default for weekly subscription</div>
          <button type="button" class="btn btn-outline btn-sm" id="open-update-card-btn" style="margin-top:1rem;">Update Card</button>
        </div>

        <div style="background:var(--bg-surface-alt); padding:1.5rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
          <div style="font-size:0.8rem; font-weight:700; color:var(--muted-text); text-transform:uppercase;">Billing Schedule</div>
          <div style="font-size:1.2rem; font-weight:800; color:var(--deep-green); margin:0.3rem 0;">Next Charge: $52.50</div>
          <div style="font-size:0.82rem; color:var(--muted-text);">Scheduled for Monday, Nov 9, 2026 &bull; Automatic renewal</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Next Billing Cycle Projected Total -->
  <section class="dash-section">
    <div class="dash-panel" style="background:var(--light-green-bg);">
      <h4>Upcoming Cycle Projection: $52.50</h4>
      <p style="font-size:0.85rem; color:var(--muted-text); margin:0.2rem 0 0;">
        Includes 5 salad bowls and free contactless tote courier delivery.
      </p>
    </div>
  </section>

  <!-- Section 3: Invoices & Transactions Table -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Transaction &amp; Receipt History</div>
      </div>
      <div class="dash-table-wrap">
        <table class="dash-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Invoice ID</th>
              <th>Plan Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nov 2, 2026</td>
              <td><strong>INV-2026-1102</strong></td>
              <td>Balanced Week (5 Bowls)</td>
              <td>$52.50</td>
              <td><span class="status-pill status-active">Paid</span></td>
              <td><button class="btn btn-outline btn-sm btn-download-invoice" data-invoice="INV-2026-1102">Download PDF</button></td>
            </tr>
            <tr>
              <td>Oct 26, 2026</td>
              <td><strong>INV-2026-1026</strong></td>
              <td>Balanced Week (5 Bowls)</td>
              <td>$52.50</td>
              <td><span class="status-pill status-active">Paid</span></td>
              <td><button class="btn btn-outline btn-sm btn-download-invoice" data-invoice="INV-2026-1026">Download PDF</button></td>
            </tr>
            <tr>
              <td>Oct 19, 2026</td>
              <td><strong>INV-2026-1019</strong></td>
              <td>Balanced Week (5 Bowls)</td>
              <td>$52.50</td>
              <td><span class="status-pill status-active">Paid</span></td>
              <td><button class="btn btn-outline btn-sm btn-download-invoice" data-invoice="INV-2026-1019">Download PDF</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Section 4: PDF Receipt Generator Demo -->
  <section class="dash-section">
    <div class="dash-panel">
      <h4>Need an Expense Receipt for Work?</h4>
      <p style="font-size:0.88rem; color:var(--muted-text); margin:0.3rem 0 0.8rem;">
        Generate consolidated monthly PDF invoices for company health &amp; wellness stipends.
      </p>
      <button type="button" class="btn btn-outline btn-sm" id="export-statement-btn">Export Monthly Statement</button>
    </div>
  </section>

  <!-- Section 5: Billing & Tax Address Info -->
  <section class="dash-section">
    <div class="dash-panel">
      <h4>Registered Billing Address</h4>
      <p style="font-size:0.88rem; color:var(--muted-text); margin:0.2rem 0 0;" class="customer-address-display" id="invoice-customer-address">
        742 Evergreen Terrace, Apt 4B, Portland OR 97201
      </p>
    </div>
  </section>

  <!-- Section 6: Payment Security Guarantee -->
  <section class="dash-section">
    <div class="dash-panel">
      <h4>Payment Security Guarantee</h4>
      <p style="font-size:0.85rem; color:var(--muted-text); margin:0.2rem 0 0;">
        Payments are tokenized and protected using PCI-DSS level 1 simulated standards.
      </p>
    </div>
  </section>

  <!-- Section 7: Switch to Annual Billing Discount Offer -->
  <section class="dash-section">
    <div style="background:var(--deep-green); color:#FFFFFF; padding:1.5rem; border-radius:var(--radius-lg); display:flex; justify-content:space-between; align-items:center;">
      <div>
        <h4 style="color:var(--lime-yellow); margin-bottom:0.2rem;">Save an Additional 15% with Annual Billing</h4>
        <span style="font-size:0.85rem; color:rgba(255,255,255,0.85);">Lock in your bowls at just $8.92/meal.</span>
      </div>
      <button type="button" class="btn btn-lime btn-sm" onclick="showToast('Annual plan proposal sent to your email!');">View Annual Plan</button>
    </div>
  </section>

  <!-- Update Payment Card Modal -->
  <div class="modal-overlay" id="update-card-modal" role="dialog" aria-modal="true" aria-label="Update Payment Method">
    <div class="modal-card">
      <button type="button" class="modal-close-btn" aria-label="Close modal">&times;</button>
      <div style="font-size:2.4rem; margin-bottom:0.5rem; text-align:center;">💳</div>
      <h3 style="color:var(--deep-green); margin-bottom:0.4rem; text-align:center;">UPDATE PAYMENT CARD</h3>
      <p style="color:var(--muted-text); font-size:0.88rem; margin-bottom:1.2rem; text-align:center;">
        Update your default billing card for automatic weekly renewals.
      </p>
      <form id="update-card-form">
        <div class="form-group">
          <label class="form-label" for="cardholder-name">Name on Card *</label>
          <input type="text" id="cardholder-name" class="form-control" value="Alex Morgan" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="card-number">Card Number *</label>
          <input type="text" id="card-number" class="form-control" placeholder="•••• •••• •••• 4242" maxlength="19" required>
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label class="form-label" for="card-expiry">Expiry Date *</label>
            <input type="text" id="card-expiry" class="form-control" placeholder="MM/YY" maxlength="5" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="card-cvc">CVC *</label>
            <input type="password" id="card-cvc" class="form-control" placeholder="•••" maxlength="4" required>
          </div>
        </div>
        <div class="btn-group" style="justify-content:flex-end; margin-top:1.2rem;">
          <button type="button" class="btn btn-outline" data-modal-close>Cancel</button>
          <button type="submit" class="btn btn-primary">Save New Card</button>
        </div>
      </form>
    </div>
  </div>
`;

// 23. manage-subscription.html (7 Sections)
const manageSubContent = `
  <!-- Section 1: Current Status Header -->
  <section class="dash-section">
    <div class="dash-panel">
      <div class="dash-panel-header">
        <div class="dash-panel-title">Subscription Overview</div>
        <span class="status-pill status-active">Active Subscriber</span>
      </div>
      <div class="grid-2">
        <div>
          <h4>Balanced Week Plan</h4>
          <p style="color:var(--muted-text); font-size:0.92rem;">5 chef-crafted bowls delivered weekly to 742 Evergreen Terrace.</p>
          <div style="margin:1.2rem 0;">
            <a href="my-meal-plan.html" class="btn btn-outline btn-sm">Change Plan Tier</a>
            <a href="pause-delivery.html" class="btn btn-outline btn-sm">Pause Deliveries</a>
          </div>
        </div>
        <div style="background:var(--light-green-bg); padding:1.2rem; border-radius:var(--radius-md); font-size:0.85rem; color:var(--deep-green);">
          <strong>Weekly Modification Cutoff:</strong> You can modify your bowl selections, change drop addresses, or pause anytime before <strong>Monday at 11:59 PM</strong>.
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2: Quick Plan Tier Switcher -->
  <section class="dash-section">
    <div class="dash-panel">
      <h4>Plan Tier Adjustments</h4>
      <p style="font-size:0.88rem; color:var(--muted-text); margin:0.3rem 0 1rem;">Upgrade to 7 bowls or downscale to 3 bowls based on your lifestyle.</p>
      <a href="my-meal-plan.html" class="btn btn-outline btn-sm">Manage Tiers</a>
    </div>
  </section>

  <!-- Section 3: Preferred Weekly Delivery Day -->
  <section class="dash-section">
    <div class="dash-panel">
      <h4>Preferred Weekly Delivery Day</h4>
      <p style="font-size:0.88rem; color:var(--muted-text); margin:0.3rem 0 0.8rem;">Currently: <strong>Wednesday Morning</strong></p>
      <select class="form-control" style="max-width:300px;" onchange="showToast('Delivery day preference updated');">
        <option>Wednesday Drop (Active)</option>
        <option>Monday Drop</option>
      </select>
    </div>
  </section>

  <!-- Section 4: Cutoff Explanation -->
  <section class="dash-section">
    <div class="dash-panel">
      <h4>How Weekly Renewals Work</h4>
      <p style="font-size:0.85rem; color:var(--muted-text); margin:0.3rem 0 0;">
        Subscriptions renew automatically every Monday at midnight. Your fresh tote is prepped on Tuesday and delivered Wednesday.
      </p>
    </div>
  </section>

  <!-- Section 5: Pause Subscription Shortcut -->
  <section class="dash-section">
    <div class="dash-panel">
      <h4>Going Away? Pause with Zero Penalty</h4>
      <p style="font-size:0.85rem; color:var(--muted-text); margin:0.3rem 0 0.8rem;">Keep your discount rate active while holding deliveries.</p>
      <a href="pause-delivery.html" class="btn btn-primary btn-sm">Pause Subscription</a>
    </div>
  </section>

  <!-- Section 6: Cancellation Request -->
  <section class="dash-section">
    <div class="dash-panel" style="border-color:rgba(229, 57, 53, 0.3);">
      <div class="dash-panel-header">
        <div class="dash-panel-title" style="color:var(--danger);">Cancel Subscription</div>
      </div>
      <p style="color:var(--muted-text); font-size:0.92rem; margin-bottom:1rem;">
        Need to cancel permanently? Remember you can pause deliveries for up to 3 months without losing your grandfathered rate.
      </p>
      <button type="button" class="btn btn-outline btn-sm" id="request-cancel-btn" style="color:var(--danger); border-color:var(--danger);">Request Cancellation</button>
    </div>
  </section>

  <!-- Section 7: Concierge Help Banner -->
  <section class="dash-section">
    <div style="background:var(--bg-surface); padding:1.2rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
      <span>Need personalized support with your subscription?</span>
      <a href="contact.html" class="btn btn-outline btn-sm">Contact Concierge</a>
    </div>
  </section>

  <!-- Cancellation Modal -->
  <div class="modal-overlay" id="cancel-sub-modal" role="dialog" aria-modal="true" aria-label="Cancel Subscription">
    <div class="modal-card" style="text-align:center;">
      <button type="button" class="modal-close-btn" aria-label="Close modal">&times;</button>
      <div style="font-size:3rem; margin-bottom:0.5rem;">🥗💔</div>
      <h3 style="color:var(--deep-green); margin-bottom:0.5rem;">ARE YOU SURE, ALEX?</h3>
      <p style="color:var(--muted-text); font-size:0.92rem; margin-bottom:1.5rem;">
        If you cancel, you will lose your 20% subscriber discount. Consider pausing your deliveries instead!
      </p>
      <div class="btn-group" style="justify-content:center;">
        <a href="pause-delivery.html" class="btn btn-primary">Pause Instead (Recommended)</a>
        <button type="button" class="btn btn-outline-danger" id="confirm-cancellation-btn">Confirm Cancel</button>
      </div>
    </div>
  </div>
`;

// 24. profile.html (7 Sections)
const profileContent = `
  <!-- Section 1: Profile Header & Avatar -->
  <section class="dash-section">
    <div class="dash-panel">
      <div style="display:flex; align-items:center; gap:1.5rem;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Alex Morgan" style="width:70px; height:70px; border-radius:var(--radius-full); object-fit:cover; border:3px solid var(--primary-green);">
        <div>
          <h2 style="font-size:1.5rem; margin-bottom:0.2rem;">Alex Morgan</h2>
          <span class="subscriber-pill">Balanced Plan Member</span>
        </div>
      </div>
    </div>
  </section>

  <form id="subscriber-profile-form">
    <!-- Section 2: Personal Information Form -->
    <section class="dash-section">
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">Personal Information</div>
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label class="form-label" for="prof-fname">First Name</label>
            <input type="text" id="prof-fname" class="form-control" value="Alex" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="prof-lname">Last Name</label>
            <input type="text" id="prof-lname" class="form-control" value="Morgan" required>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Contact Details -->
    <section class="dash-section">
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">Contact &amp; Delivery SMS</div>
        </div>
        <div class="grid-2">
          <div class="form-group">
            <label class="form-label" for="prof-email">Email Address</label>
            <input type="email" id="prof-email" class="form-control" value="alex@bowldcafe.com" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="prof-phone">Mobile Phone (Delivery SMS)</label>
            <input type="tel" id="prof-phone" class="form-control" value="(555) 234-5678" required>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Delivery Street Address -->
    <section class="dash-section">
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">Default Drop-off Address</div>
        </div>
        <div class="form-group">
          <label class="form-label" for="prof-address">Street Address</label>
          <input type="text" id="prof-address" class="form-control" value="742 Evergreen Terrace, Apt 4B" required>
        </div>
        <div class="grid-3">
          <div class="form-group">
            <label class="form-label" for="prof-city">City</label>
            <input type="text" id="prof-city" class="form-control" value="Portland" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="prof-state">State</label>
            <input type="text" id="prof-state" class="form-control" value="OR" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="prof-zip">ZIP Code</label>
            <input type="text" id="prof-zip" class="form-control" value="97201" required>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Dietary Preferences -->
    <section class="dash-section">
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">Dietary Preferences &amp; Allergies</div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:0.5rem; font-size:0.88rem;">
          <label><input type="checkbox"> No Tree Nuts</label>
          <label><input type="checkbox"> Extra Dressing Preferred</label>
          <label><input type="checkbox"> Cilantro Dislike</label>
          <label><input type="checkbox" checked> High Protein Priority</label>
        </div>
      </div>
    </section>

    <!-- Section 6: Notification Preferences -->
    <section class="dash-section">
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">Notification Preferences</div>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.6rem; font-size:0.9rem;">
          <label><input type="checkbox" checked> Courier out-for-delivery SMS text alerts</label>
          <label><input type="checkbox" checked> Sunday evening weekly bowl selection reminder</label>
          <label><input type="checkbox"> Seasonal culinary journal &amp; recipes email</label>
        </div>
      </div>
    </section>

    <!-- Section 7: Account Security & Save -->
    <section class="dash-section">
      <div class="dash-panel">
        <div class="dash-panel-header">
          <div class="dash-panel-title">Security &amp; Save</div>
        </div>
        <div class="grid-2" style="margin-bottom:1.5rem;">
          <div class="form-group">
            <label class="form-label">New Password</label>
            <input type="password" class="form-control" placeholder="Leave blank to keep current">
          </div>
          <div class="form-group">
            <label class="form-label">Confirm Password</label>
            <input type="password" class="form-control" placeholder="Re-type new password">
          </div>
        </div>
        <button type="submit" class="btn btn-primary btn-lg">Save Profile Changes</button>
      </div>
    </section>
  </form>
`;

// Write all Dashboard Pages (16 to 24)
const pages = [
  { file: 'dashboard.html', id: 'overview', title: 'Dashboard Overview', content: dashOverviewContent },
  { file: 'my-meal-plan.html', id: 'plan', title: 'My Meal Plan', content: myMealPlanContent },
  { file: 'weekly-bowl-selection.html', id: 'selection', title: 'Weekly Bowl Selection', content: weeklyBowlContent },
  { file: 'delivery-schedule.html', id: 'schedule', title: 'Delivery Schedule', content: deliveryScheduleContent },
  { file: 'pause-delivery.html', id: 'pause', title: 'Pause Delivery', content: pauseDeliveryContent },
  { file: 'nutrition-history.html', id: 'nutrition', title: 'Nutrition History', content: nutritionHistoryContent },
  { file: 'payment-history.html', id: 'payment', title: 'Payment History', content: paymentHistoryContent },
  { file: 'manage-subscription.html', id: 'manage', title: 'Manage Subscription', content: manageSubContent },
  { file: 'profile.html', id: 'profile', title: 'Subscriber Profile', content: profileContent }
];

pages.forEach(p => {
  const fullHtml = `${getHead(p.title, "Manage your Bowl'd healthy salad subscription.", true)}
${getDashboardLayout(p.id, p.title, p.content)}`;
  fs.writeFileSync(p.file, fullHtml);
});

console.log('Re-generated all 9 dashboard pages with explicit sections.');

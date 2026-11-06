# BOWL'D — Fresh Salad & Healthy Bowl Cafe
### Premium Multi-Page Website & Subscription Template

> **Tagline:** Fresh Choices. Full of Life.  
> **Architecture:** Pure HTML5, CSS3, and Vanilla JavaScript (Zero Frameworks, Zero Dependencies)

---

## 🎨 Brand Identity & Exact Color Palette

| Token | HEX | Purpose |
|---|---|---|
| **Primary Green** | `#499A13` | Main buttons, brand highlights, active states |
| **Lime Yellow** | `#BBDC12` | Accents, badges, highlights, floating tags |
| **Fresh Green** | `#8ECA3C` | Secondary accents, borders, cards |
| **Deep Green** | `#276F27` | Headings, footers, dark backgrounds |
| **Warm Off-White**| `#F8FAF3` | Page background, card tints |
| **Light Green BG** | `#EFF6E8` | Section backgrounds, badges |
| **Main Text** | `#263321` | High-contrast body typography |

---

## 📂 Project Structure & 27 Included Pages

```
├── index.html                   # Home 1 (Signature Hero, 7 Sections)
├── home-2.html                  # Home 2 (Editorial Asymmetric Layout, 7 Sections)
├── about.html                   # About Us (Story, Philosophy, Sourcing, 7 Sections)
├── menu.html                    # Complete Menu (Category filters & Live Search, 7 Sections)
├── menu-details.html            # Individual Bowl Details (Customization & Macros, 7 Sections)
├── build-your-bowl.html         # Custom Bowl Builder (Live Preview & Macro Calculator, 7 Sections)
├── meal-plans.html              # Subscription Plans (Pricing & FAQs, 7 Sections)
├── plan-details.html            # Plan Details (Balanced Week In-depth, 7 Sections)
├── nutrition.html               # Nutrition Facts & Ingredient Library (7 Sections)
├── blog.html                    # The Fresh Journal (Recipe Articles & Guides, 7 Sections)
├── blog-details.html            # Blog Article Details (7 Sections)
├── contact.html                 # Contact Us & Cafe Location (Interactive Form, 7 Sections)
│
├── login.html                   # Subscriber Sign In (Show/Hide Password, 7 Sections)
├── register.html                # Subscriber Registration (Dietary Preferences, 7 Sections)
├── forgot-password.html         # Password Reset (Recovery Workflow, 7 Sections)
│
├── dashboard.html               # "MY BOWL'D" Overview (Stats, Deliveries, 7 Sections)
├── my-meal-plan.html            # My Meal Plan (Tier Switcher & Add-ons, 7 Sections)
├── weekly-bowl-selection.html   # Weekly Bowl Selection (5-Slot Tray & Counter, 7 Sections)
├── delivery-schedule.html       # Delivery Schedule (Timeline & Drop Window, 7 Sections)
├── pause-delivery.html          # Pause Delivery (Date Range & Modal, 7 Sections)
├── nutrition-history.html       # Nutrition History (Pure CSS Visualizer Bars, 7 Sections)
├── payment-history.html         # Payment History (Receipts & PDF demo, 7 Sections)
├── manage-subscription.html     # Manage Subscription (Change Plan/Cancel, 7 Sections)
├── profile.html                 # Profile & Dietary Preferences (7 Sections)
│
├── 404.html                     # 404 Error ("This Bowl Isn't On The Menu", 7 Sections)
├── coming-soon.html             # Coming Soon (Live JS Countdown Timer, 7 Sections)
├── maintenance.html             # Scheduled Maintenance (Kitchen Update, 7 Sections)
│
└── assets/
    ├── css/
    │   ├── style.css            # Master styles, reset, components, dark mode, RTL
    │   └── dashboard.css        # Subscriber portal sidebar, widgets, tables, schedules
    ├── js/
    │   ├── main.js              # Theme (Dark/Light), Direction (LTR/RTL), Modals, Toast
    │   ├── builder.js           # Interactive Bowl Builder engine
    │   ├── menu.js              # Category filter & real-time search
    │   ├── dashboard.js         # Tray counter, pause confirmation, invoice downloads
    │   └── auth.js              # Password visibility, validation, demo redirects
    └── images/
        ├── logo.svg             # Custom vector logo (Bowl + Leaf + Wordmark)
        └── favicon.svg          # Matching favicon vector mark
```

---

## ⚡ Key Interactive Features

1. **Dark Mode Engine:**
   - One-click toggle in the navbar and dashboard.
   - Dedicated dark theme palette (`[data-theme="dark"]`) using rich deep green surfaces and charcoal contrast.
   - Persisted via `localStorage`.

2. **Full LTR / RTL Bi-Directional Layout:**
   - Dedicated toggle button (`LTR | RTL`).
   - Mirrors navbar, sidebar, form elements, tables, and badge alignments using CSS logical properties and direction overrides.
   - Persisted via `localStorage`.

3. **Step-by-Step Bowl Builder (`build-your-bowl.html`):**
   - Step 1: Base (Quinoa, Brown Rice, Romaine, Spinach, Supergreens)
   - Step 2: Protein (Grilled Chicken, Paneer, Tofu, Chickpeas, Eggs)
   - Step 3: Vegetables (Cucumber, Tomato, Carrot, Corn, Broccoli)
   - Step 4: Toppings & Crunch (Seeds, Walnuts, Croutons, Avocado)
   - Step 5: Scratch Dressings (Lemon Herb, Tahini, Ranch, Honey Mustard, Balsamic)
   - Dynamic real-time calculation: Base $9.00 + protein/upgrades.
   - Pure CSS macro progress bars (Protein, Carbs, Fats) and calorie estimates.
   - Live visual bowl preview showing selected ingredient badges.

4. **Live Filter & Search Menu (`menu.html`):**
   - Real-time text search.
   - Category filtering: Signature Bowls, Bases, Proteins, Toppings & Dressings, Sides & Drinks.

5. **Subscriber Portal ("MY BOWL'D"):**
   - Weekly bowl selection tracker (5-slot counter with interactive add/remove).
   - Delivery pause form with date pickers and confirmation modal.
   - Pure CSS calorie & macro visualization (zero third-party chart libraries).
   - Demo PDF invoice generation with toast notifications.
   - Plan tier switching and profile preference persistence.


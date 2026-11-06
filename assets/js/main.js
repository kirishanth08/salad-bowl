/**
 * BOWL'D — Main Global Scripts
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initDirection();
  initDropdowns();
  initMobileNav();
  initAccordions();
  initNewsletter();
  initModals();
  initBlogFilters();
  initStrictInputValidation();
});

/* --- 1. Theme Management (Dark Mode) --- */
function initTheme() {
  const savedTheme = localStorage.getItem('bowld_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);
  updateLogos(savedTheme);

  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('bowld_theme', next);
      updateThemeIcons(next);
      updateLogos(next);
    });
  });
}

function updateLogos(theme) {
  const isDark = theme === 'dark' || document.documentElement.getAttribute('data-theme') === 'dark';
  document.querySelectorAll('.site-header .navbar-brand img, .auth-brand img, .auth-logo img').forEach(img => {
    img.src = isDark ? 'assets/images/logo-light.svg' : 'assets/images/logo.svg';
  });
}

function updateThemeIcons(theme) {
  const themeBtns = document.querySelectorAll('.theme-toggle-btn');
  themeBtns.forEach(btn => {
    btn.innerHTML = theme === 'dark' 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>` 
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    btn.setAttribute('aria-label', `Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`);
  });
}

/* --- 2. Text Direction (LTR / RTL) --- */
function initDirection() {
  const savedDir = localStorage.getItem('bowld_dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);
  updateDirButtons(savedDir);

  const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('dir') || 'ltr';
      const next = current === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', next);
      localStorage.setItem('bowld_dir', next);
      updateDirButtons(next);
      showToast(`Layout switched to ${next.toUpperCase()}`);
    });
  });
}

function updateDirButtons(dir) {
  const rtlBtns = document.querySelectorAll('.rtl-toggle-btn');
  rtlBtns.forEach(btn => {
    btn.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
    btn.setAttribute('aria-label', `Switch to ${dir === 'rtl' ? 'LTR' : 'RTL'}`);
  });
}

/* --- 2b. Navigation Dropdowns --- */
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(dd => {
    const toggle = dd.querySelector('.dropdown-toggle') || dd.querySelector('.nav-link');
    const menu = dd.querySelector('.dropdown-menu');
    if (!toggle || !menu) return;

    // Direct click/tap support
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = dd.classList.contains('show');
      document.querySelectorAll('.nav-dropdown.show').forEach(el => {
        if (el !== dd) el.classList.remove('show');
      });
      dd.classList.toggle('show', !isOpen);
      toggle.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });

    // Keyboard navigation
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        dd.classList.add('show');
        const first = menu.querySelector('a');
        if (first) first.focus();
      }
    });

    dd.addEventListener('mouseleave', () => {
      dd.classList.remove('show');
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.show').forEach(dd => dd.classList.remove('show'));
    }
  });
}

/* --- 3. Mobile Navigation Dropdown --- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.site-header .mobile-nav-toggle');
  const dropdown = document.querySelector('.mobile-nav-dropdown');

  if (toggleBtn && dropdown) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
      const isExpanded = dropdown.classList.contains('active');
      toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && !toggleBtn.contains(e.target)) {
        dropdown.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on dropdown link click
    dropdown.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        dropdown.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* --- 4. Accordions --- */
function initAccordions() {
  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close peers if in same accordion group
      const parentAccordion = item.closest('.accordion');
      if (parentAccordion) {
        parentAccordion.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('active'));
      }

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --- 5. Newsletter Form --- */
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      if (input && input.value.trim()) {
        showToast(`Thank you! Fresh recipes & offers sent to ${input.value.trim()}`);
        input.value = '';
      }
    });
  });
}

/* --- 6. Generic Modals --- */
function initModals() {
  document.querySelectorAll('[data-modal-target]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-modal-target');
      const modal = document.getElementById(targetId);
      if (modal) modal.classList.add('active');
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.closest('.modal-close-btn') || e.target.closest('.modal-dismiss-btn') || e.target.closest('[data-modal-close]')) {
        modal.classList.remove('active');
      }
    });
  });
}

/* --- 7. Toast Notification Utility --- */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

window.showToast = showToast;

/* --- 8. Blog Filter & Search --- */
function initBlogFilters() {
  const searchInput = document.getElementById('blog-search');
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  const blogCards = document.querySelectorAll('.curated-blog-card');

  if (!blogCards.length) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function filterArticles() {
    blogCards.forEach(card => {
      const category = (card.dataset.category || '').toLowerCase();
      const text = card.textContent.toLowerCase();
      const matchCategory = currentCategory === 'all' || category.includes(currentCategory);
      const matchSearch = !searchQuery || text.includes(searchQuery);

      if (matchCategory && matchSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = (btn.dataset.category || 'all').toLowerCase();
      filterArticles();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterArticles();
    });
  }
}

/* --- 9. Real-Time Strict Form Input Validation --- */
function initStrictInputValidation() {
  // Letters only for name fields
  const nameInputs = document.querySelectorAll('#contact-name, #reg-name, #prof-fname, #prof-lname, #cardholder-name, input[name="name"], input[name="fname"], input[name="lname"], input[data-type="letters"]');
  nameInputs.forEach(input => {
    input.setAttribute('pattern', "[A-Za-z\\s'\\-]+");
    input.addEventListener('input', function() {
      const sanitized = this.value.replace(/[^A-Za-z\s'\\-]/g, '');
      if (this.value !== sanitized) {
        this.value = sanitized;
      }
    });
  });

  // Numbers only for phone fields (allow standard phone characters)
  const phoneInputs = document.querySelectorAll('#prof-phone, #contact-phone, input[type="tel"], input[name="phone"]');
  phoneInputs.forEach(input => {
    input.addEventListener('input', function() {
      const sanitized = this.value.replace(/[^\d\s\+\-\(\)]/g, '');
      if (this.value !== sanitized) {
        this.value = sanitized;
      }
    });
  });

  // Strict digits only for zip codes, card numbers, CVC
  const digitInputs = document.querySelectorAll('#prof-zip, #card-number, #card-cvc, #card-exp, input[type="number"], input[data-type="digits"]');
  digitInputs.forEach(input => {
    input.addEventListener('input', function() {
      if (this.id === 'card-exp') {
        const sanitized = this.value.replace(/[^\d\/]/g, '');
        if (this.value !== sanitized) this.value = sanitized;
      } else {
        const sanitized = this.value.replace(/[^\d\s]/g, '');
        if (this.value !== sanitized) this.value = sanitized;
      }
    });
  });
}




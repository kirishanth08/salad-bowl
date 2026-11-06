/**
 * BOWL'D — Subscriber Dashboard JavaScript
 * Handles all clickables, buttons, weekly selection, pauses, subscription tiers,
 * payment card modal, invoice downloads, profile saving, and mobile navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  initDashboardSidebar();
  initWeeklySelection();
  initPlanTierSwitch();
  initAddOnSubscriptions();
  initDeliverySchedule();
  initPauseDelivery();
  initPaymentMethods();
  initManageSubscription();
  initProfileForm();
  initNutritionVisualizer();
  initModalsAndBackdrops();
  initSignOut();
  initReferralCopy();
  if (typeof initStrictInputValidation === 'function') {
    initStrictInputValidation();
  }
});

/* 1. Mobile Sidebar & Backdrop Toggle */
function initDashboardSidebar() {
  const toggleBtn = document.querySelector('.dash-mobile-sidebar-toggle');
  const sidebar = document.querySelector('.dashboard-sidebar');
  const backdrop = document.querySelector('.dash-sidebar-backdrop');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('mobile-open');
    if (backdrop) backdrop.classList.add('active');
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (backdrop) backdrop.classList.remove('active');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (sidebar && sidebar.classList.contains('mobile-open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeSidebar);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSidebar();
  });
}

/* 2. Weekly Bowl Selection & Live Filter */
function initWeeklySelection() {
  const tracker = document.querySelector('.selection-tracker');
  if (!tracker) return;

  const maxBowls = parseInt(tracker.dataset.max || '5', 10);
  let selectedBowls = [
    'Green Goddess Bowl',
    'Protein Power Bowl',
    'Mediterranean Bowl'
  ];

  const countDisplay = document.getElementById('selected-bowls-count');
  const remainingDisplay = document.getElementById('remaining-bowls-count');
  const dots = document.querySelectorAll('.tracker-dot');
  const saveBtn = document.getElementById('save-selection-btn');
  const lockInBtn = document.getElementById('lock-in-selections-btn');
  const traySummary = document.getElementById('tray-summary-text');
  const filterPills = document.querySelectorAll('.filter-pill');
  const bowlCards = document.querySelectorAll('.bowl-card');

  // Filter Pills (All Available, High Protein, Vegan, Gluten Free)
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.dataset.filter || 'all';
      let visibleCount = 0;

      bowlCards.forEach(card => {
        const category = card.dataset.category || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (typeof showToast === 'function') {
        showToast(`Showing ${pill.textContent.trim()} (${visibleCount} bowls)`);
      }
    });
  });

  // UI Sync Function
  function updateTrackerUI() {
    const count = selectedBowls.length;
    if (countDisplay) countDisplay.textContent = count;
    if (remainingDisplay) remainingDisplay.textContent = Math.max(0, maxBowls - count);

    // Update Tracker Dots
    dots.forEach((dot, index) => {
      dot.classList.toggle('filled', index < count);
    });

    // Update Bowl Card Action Buttons
    document.querySelectorAll('.dash-bowl-select-btn').forEach(btn => {
      const bowl = btn.dataset.bowl;
      const isSelected = selectedBowls.includes(bowl);
      btn.textContent = isSelected ? '✓ In Tray (Remove)' : 'Add to Week';
      btn.classList.toggle('btn-outline', isSelected);
      btn.classList.toggle('btn-primary', !isSelected);
    });

    // Update Section 5 Tray Summary
    if (traySummary) {
      const slots = [];
      for (let i = 0; i < maxBowls; i++) {
        if (selectedBowls[i]) {
          slots.push(`Slot ${i + 1}: ${selectedBowls[i]}`);
        } else {
          slots.push(`Slot ${i + 1}: [Empty]`);
        }
      }
      traySummary.innerHTML = slots.join(' &bull; ');
    }
  }

  // Handle Add/Remove Buttons
  document.querySelectorAll('.dash-bowl-select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const bowl = btn.dataset.bowl;
      const index = selectedBowls.indexOf(bowl);

      if (index > -1) {
        selectedBowls.splice(index, 1);
        if (typeof showToast === 'function') {
          showToast(`Removed "${bowl}" from this week's tray.`);
        }
      } else {
        if (selectedBowls.length >= maxBowls) {
          if (typeof showToast === 'function') {
            showToast(`Tray full! Your plan includes ${maxBowls} bowls. Remove one first or upgrade your tier.`, 'warning');
          }
          return;
        }
        selectedBowls.push(bowl);
        if (typeof showToast === 'function') {
          showToast(`Added "${bowl}" to your tray! (${selectedBowls.length}/${maxBowls})`, 'success');
        }
      }

      updateTrackerUI();
    });
  });

  // Save Selection Buttons
  function handleSave() {
    if (selectedBowls.length !== maxBowls) {
      if (typeof showToast === 'function') {
        showToast(`Please select exactly ${maxBowls} bowls before saving (Currently ${selectedBowls.length}/${maxBowls}).`, 'warning');
      }
      return;
    }
    if (typeof showToast === 'function') {
      showToast(`Success! Your 5 weekly bowls have been locked in for Wednesday delivery.`, 'success');
    }
  }

  if (saveBtn) saveBtn.addEventListener('click', handleSave);
  if (lockInBtn) lockInBtn.addEventListener('click', handleSave);

  updateTrackerUI();
}

/* 3. Plan Tier Switcher */
function initPlanTierSwitch() {
  const planRadios = document.querySelectorAll('.plan-select-radio');
  const planCards = document.querySelectorAll('.plan-tier-card');
  const savePlanBtn = document.getElementById('save-plan-tier-btn');
  const planRateDisplay = document.getElementById('current-plan-rate-display');
  const planNameDisplay = document.getElementById('current-plan-name-display');

  const planSpecs = {
    'Starter Bowl': { rate: '$34.50 / week', bowls: '3 Bowls / Week', cost: '$11.50 / bowl' },
    'Balanced Week': { rate: '$52.50 / week', bowls: '5 Bowls / Week', cost: '$10.50 / bowl' },
    'Full Fresh': { rate: '$68.00 / week', bowls: '7 Bowls / Week', cost: '$9.71 / bowl' }
  };

  planRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      planCards.forEach(c => {
        c.style.borderColor = 'var(--border-subtle)';
        c.style.background = 'var(--card-bg)';
      });

      const parentCard = radio.closest('.plan-tier-card');
      if (parentCard) {
        parentCard.style.borderColor = 'var(--primary-green)';
        parentCard.style.background = 'var(--light-green-bg)';
      }

      const spec = planSpecs[radio.value];
      if (spec && planRateDisplay) planRateDisplay.textContent = spec.rate;
      if (spec && planNameDisplay) planNameDisplay.textContent = `${radio.value} Plan (${spec.bowls})`;

      if (typeof showToast === 'function') {
        showToast(`Selected ${radio.value} (${spec ? spec.rate : ''}). Click "Confirm Plan Tier" to apply.`, 'info');
      }
    });
  });

  if (savePlanBtn) {
    savePlanBtn.addEventListener('click', () => {
      const selected = document.querySelector('.plan-select-radio:checked');
      const val = selected ? selected.value : 'Balanced Week';
      if (typeof showToast === 'function') {
        showToast(`Plan successfully updated to ${val}! Changes take effect on next renewal.`, 'success');
      }
    });
  }
}

/* 4. Weekly Add-On Subscriptions */
function initAddOnSubscriptions() {
  document.querySelectorAll('.addon-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const addon = btn.dataset.addon || 'Add-On Item';
      const isAdded = btn.classList.contains('btn-primary');

      if (isAdded) {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline');
        btn.textContent = 'Add to Plan';
        if (typeof showToast === 'function') {
          showToast(`Removed "${addon}" from weekly subscription.`, 'info');
        }
      } else {
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-primary');
        btn.textContent = '✓ Added to Plan';
        if (typeof showToast === 'function') {
          showToast(`Added "${addon}" to weekly subscription!`, 'success');
        }
      }
    });
  });
}

/* 5. Delivery Schedule Preferences */
function initDeliverySchedule() {
  const windowSelect = document.getElementById('delivery-window-select');
  const instructionsInput = document.getElementById('drop-instructions-input');
  const savePrefsBtn = document.getElementById('save-delivery-prefs-btn');

  if (windowSelect) {
    windowSelect.addEventListener('change', () => {
      if (typeof showToast === 'function') {
        showToast(`Delivery window preference updated to: ${windowSelect.value}`, 'success');
      }
    });
  }

  if (savePrefsBtn) {
    savePrefsBtn.addEventListener('click', () => {
      const windowVal = windowSelect ? windowSelect.value : 'Morning';
      const instrVal = instructionsInput ? instructionsInput.value : '';
      if (typeof showToast === 'function') {
        showToast(`Delivery preferences saved! Drop instructions: "${instrVal || 'None'}"`, 'success');
      }
    });
  }
}

/* 6. Pause Delivery Form & Modal */
function initPauseDelivery() {
  const pauseForm = document.getElementById('pause-delivery-form');
  if (!pauseForm) return;

  pauseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const startDate = document.getElementById('pause-start-date').value;
    const resumeDate = document.getElementById('pause-resume-date').value;
    const reason = document.getElementById('pause-reason').value;

    if (!startDate || !resumeDate) {
      if (typeof showToast === 'function') {
        showToast('Please select both pause start and resume dates.', 'warning');
      }
      return;
    }

    const modal = document.getElementById('pause-confirmation-modal');
    if (modal) {
      const summaryText = modal.querySelector('.pause-modal-summary');
      if (summaryText) {
        summaryText.innerHTML = `Deliveries paused from <strong>${startDate}</strong> until <strong>${resumeDate}</strong>.<br><small style="color:var(--muted-text);">Reason: ${reason}</small>`;
      }
      modal.classList.add('active');
    }
  });

  const confirmPauseBtn = document.getElementById('confirm-pause-btn');
  if (confirmPauseBtn) {
    confirmPauseBtn.addEventListener('click', () => {
      const modal = document.getElementById('pause-confirmation-modal');
      if (modal) modal.classList.remove('active');

      document.querySelectorAll('.pause-status-pill').forEach(pill => {
        pill.className = 'status-pill status-paused pause-status-pill';
        pill.textContent = 'Paused';
      });

      if (typeof showToast === 'function') {
        showToast('Subscription delivery successfully paused. You will not be billed during this period.', 'success');
      }
    });
  }
}

/* 7. Payment Methods & Modal */
function initPaymentMethods() {
  const openCardBtn = document.getElementById('open-update-card-btn');
  const cardModal = document.getElementById('update-card-modal');
  const cardForm = document.getElementById('update-card-form');
  const cardDisplay = document.querySelector('.card-display-digits');

  if (openCardBtn && cardModal) {
    openCardBtn.addEventListener('click', (e) => {
      e.preventDefault();
      cardModal.classList.add('active');
    });
  }

  if (cardForm) {
    cardForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cardNum = document.getElementById('card-number').value.replace(/\s+/g, '');
      const last4 = cardNum.length >= 4 ? cardNum.slice(-4) : '8821';

      if (cardDisplay) {
        cardDisplay.textContent = `Visa ending in •••• ${last4}`;
      }

      if (cardModal) cardModal.classList.remove('active');
      cardForm.reset();

      if (typeof showToast === 'function') {
        showToast(`Payment method successfully updated to Visa ending in •••• ${last4}!`, 'success');
      }
    });
  }

  // Download PDF Invoices
  document.querySelectorAll('.btn-download-invoice').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const invoiceId = btn.dataset.invoice || 'INV-2026-11';
      if (typeof showToast === 'function') {
        showToast(`Generating PDF invoice receipt for ${invoiceId}... Complete!`, 'success');
      }

      // Simulated file download
      const blob = new Blob([`BOWL'D HEALTHY SALADS - INVOICE ${invoiceId}\nDate: Nov 2026\nAmount: $52.50\nStatus: Paid`], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${invoiceId}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  });

  // Export Monthly Statement Button
  const exportBtn = document.getElementById('export-statement-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof showToast === 'function') {
        showToast('Exporting October 2026 Monthly Statement PDF... Download complete!', 'success');
      }
    });
  }
}

/* 8. Manage Subscription & Cancellation Modal */
function initManageSubscription() {
  const cancelBtn = document.getElementById('request-cancel-btn');
  const cancelModal = document.getElementById('cancel-sub-modal');
  const confirmCancelBtn = document.getElementById('confirm-cancellation-btn');

  if (cancelBtn && cancelModal) {
    cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      cancelModal.classList.add('active');
    });
  }

  if (confirmCancelBtn) {
    confirmCancelBtn.addEventListener('click', () => {
      if (cancelModal) cancelModal.classList.remove('active');
      document.querySelectorAll('.subscription-status-pill').forEach(pill => {
        pill.className = 'status-pill status-paused subscription-status-pill';
        pill.textContent = 'Cancellation Pending';
      });
      if (typeof showToast === 'function') {
        showToast('Cancellation request submitted. Your access remains active until the end of this billing week.', 'info');
      }
    });
  }
}

/* 9. Profile Form Save & Persistent Dashboard Sync (Name & Address) */
const DEFAULT_USER_PROFILE = {
  fname: 'Alex',
  lname: 'Morgan',
  email: 'alex@bowldcafe.com',
  phone: '(555) 234-5678',
  address: '742 Evergreen Terrace, Apt 4B',
  city: 'Portland',
  state: 'OR',
  zip: '97201'
};

function getStoredProfile() {
  try {
    const raw = localStorage.getItem('bowld_user_profile');
    if (raw) return { ...DEFAULT_USER_PROFILE, ...JSON.parse(raw) };
  } catch (e) {}
  return DEFAULT_USER_PROFILE;
}

function applyStoredProfile(profile) {
  const fullName = `${profile.fname} ${profile.lname}`.trim();
  const formattedAddress = `${profile.address}${profile.city ? `, ${profile.city} ${profile.state} ${profile.zip}` : ''}`;

  // Update sidebar name and avatar alt across all dashboard pages
  document.querySelectorAll('#sidebar-user-name, .user-name').forEach(el => {
    el.textContent = fullName;
  });

  // Update topbar greeting
  document.querySelectorAll('#topbar-user-greeting').forEach(el => {
    el.textContent = profile.fname.toUpperCase();
  });

  // Update customer name displays
  document.querySelectorAll('.customer-name-display, #profile-header-name').forEach(el => {
    el.textContent = fullName;
  });

  // Update customer address displays across dashboard, delivery-schedule, subscription, etc.
  document.querySelectorAll('.customer-address-display, #dash-customer-address, #delivery-customer-address, #sub-address-display').forEach(el => {
    el.textContent = formattedAddress;
  });

  // If on profile page, populate all input values
  const fnameInput = document.getElementById('prof-fname');
  const lnameInput = document.getElementById('prof-lname');
  const emailInput = document.getElementById('prof-email');
  const phoneInput = document.getElementById('prof-phone');
  const addressInput = document.getElementById('prof-address');
  const cityInput = document.getElementById('prof-city');
  const stateInput = document.getElementById('prof-state');
  const zipInput = document.getElementById('prof-zip');

  if (fnameInput) fnameInput.value = profile.fname;
  if (lnameInput) lnameInput.value = profile.lname;
  if (emailInput) emailInput.value = profile.email;
  if (phoneInput) phoneInput.value = profile.phone;
  if (addressInput) addressInput.value = profile.address;
  if (cityInput) cityInput.value = profile.city;
  if (stateInput) stateInput.value = profile.state;
  if (zipInput) zipInput.value = profile.zip;
}

function initProfileForm() {
  // Synchronize stored profile immediately on page load
  const profile = getStoredProfile();
  applyStoredProfile(profile);

  const form = document.getElementById('subscriber-profile-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fnameInput = document.getElementById('prof-fname');
    const lnameInput = document.getElementById('prof-lname');
    const emailInput = document.getElementById('prof-email');
    const phoneInput = document.getElementById('prof-phone');
    const addressInput = document.getElementById('prof-address');
    const cityInput = document.getElementById('prof-city');
    const stateInput = document.getElementById('prof-state');
    const zipInput = document.getElementById('prof-zip');

    const updatedProfile = {
      fname: fnameInput ? fnameInput.value.trim() : 'Alex',
      lname: lnameInput ? lnameInput.value.trim() : 'Morgan',
      email: emailInput ? emailInput.value.trim() : 'alex@bowldcafe.com',
      phone: phoneInput ? phoneInput.value.trim() : '(555) 234-5678',
      address: addressInput ? addressInput.value.trim() : '742 Evergreen Terrace, Apt 4B',
      city: cityInput ? cityInput.value.trim() : 'Portland',
      state: stateInput ? stateInput.value.trim() : 'OR',
      zip: zipInput ? zipInput.value.trim() : '97201'
    };

    localStorage.setItem('bowld_user_profile', JSON.stringify(updatedProfile));
    applyStoredProfile(updatedProfile);

    if (typeof showToast === 'function') {
      showToast(`Profile & delivery address updated across dashboard, ${updatedProfile.fname}!`, 'success');
    }
  });
}

/* 10. Nutrition History Bar Visualizer */
function initNutritionVisualizer() {
  const bars = document.querySelectorAll('.nutrition-bar-col');
  bars.forEach(bar => {
    bar.style.cursor = 'pointer';
    bar.addEventListener('click', () => {
      bars.forEach(b => b.style.opacity = '0.7');
      bar.style.opacity = '1';
      const week = bar.dataset.week || 'Selected Week';
      const kcal = bar.dataset.kcal || '2,400 kcal';
      const protein = bar.dataset.protein || '140g';
      if (typeof showToast === 'function') {
        showToast(`${week}: ${kcal} • ${protein} Protein • Balanced Fiber`, 'info');
      }
    });
  });
}

/* 11. Global Modals & Backdrops Closer */
function initModalsAndBackdrops() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });

    overlay.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('active');
      });
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        modal.classList.remove('active');
      });
    }
  });
}

/* 12. Sign Out Handler */
function initSignOut() {
  document.querySelectorAll('.dash-logout-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof showToast === 'function') {
        showToast('Signed out of Bowl\'d subscriber portal. Redirecting...', 'info');
      }
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 700);
    });
  });
}

/* 13. Referral Link Copy */
function initReferralCopy() {
  document.querySelectorAll('.btn-copy-referral').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const input = btn.parentElement ? btn.parentElement.querySelector('input') : null;
      const textToCopy = input ? input.value : 'bowldcafe.com/r/alexmorgan';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          if (typeof showToast === 'function') {
            showToast('Referral link copied to clipboard!', 'success');
          }
        }).catch(() => {
          if (typeof showToast === 'function') {
            showToast('Referral link: bowldcafe.com/r/alexmorgan', 'info');
          }
        });
      } else {
        if (typeof showToast === 'function') {
          showToast('Referral link copied to clipboard!', 'success');
        }
      }
    });
  });
}

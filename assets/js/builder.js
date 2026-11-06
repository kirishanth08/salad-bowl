/**
 * BOWL'D — Build Your Bowl Interactive Engine
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  const builderContainer = document.querySelector('.builder-layout');
  if (!builderContainer) return;

  const state = {
    base: 'Quinoa',
    basePrice: 9.00,
    protein: ['Grilled Chicken'],
    vegetables: ['Cucumber', 'Tomato', 'Carrot'],
    toppings: ['Avocado'],
    dressing: 'Lemon Herb'
  };

  const ingredientData = {
    bases: {
      'Quinoa': { price: 0, cal: 180, p: 6, c: 32, f: 3 },
      'Brown Rice': { price: 0, cal: 190, p: 4, c: 40, f: 2 },
      'Lettuce': { price: 0, cal: 30, p: 2, c: 5, f: 0 },
      'Spinach': { price: 0, cal: 40, p: 4, c: 6, f: 1 },
      'Mixed Greens': { price: 0, cal: 35, p: 3, c: 5, f: 0 }
    },
    proteins: {
      'Grilled Chicken': { price: 3.50, cal: 190, p: 32, c: 0, f: 6 },
      'Paneer': { price: 3.00, cal: 210, p: 18, c: 4, f: 14 },
      'Tofu': { price: 2.50, cal: 130, p: 14, c: 3, f: 7 },
      'Chickpeas': { price: 2.00, cal: 140, p: 8, c: 22, f: 2 },
      'Eggs': { price: 2.00, cal: 140, p: 12, c: 1, f: 10 }
    },
    veggies: {
      'Cucumber': { price: 0, cal: 16, p: 1, c: 3, f: 0 },
      'Tomato': { price: 0, cal: 22, p: 1, c: 5, f: 0 },
      'Carrot': { price: 0, cal: 25, p: 1, c: 6, f: 0 },
      'Corn': { price: 0, cal: 45, p: 2, c: 10, f: 1 },
      'Broccoli': { price: 0, cal: 35, p: 3, c: 6, f: 0 }
    },
    toppings: {
      'Seeds': { price: 0, cal: 70, p: 3, c: 3, f: 6 },
      'Nuts': { price: 0.50, cal: 90, p: 3, c: 4, f: 8 },
      'Croutons': { price: 0, cal: 60, p: 2, c: 11, f: 1 },
      'Avocado': { price: 1.50, cal: 120, p: 2, c: 6, f: 11 }
    },
    dressings: {
      'Lemon Herb': { price: 0, cal: 65, p: 0, c: 3, f: 6 },
      'Tahini': { price: 0, cal: 90, p: 3, c: 4, f: 8 },
      'Ranch': { price: 0, cal: 110, p: 1, c: 2, f: 11 },
      'Honey Mustard': { price: 0, cal: 85, p: 1, c: 9, f: 5 },
      'Balsamic': { price: 0, cal: 50, p: 0, c: 7, f: 3 }
    }
  };

  // Bind click handlers to option cards
  document.querySelectorAll('.builder-card-option').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      const value = card.dataset.value;

      if (category === 'base' || category === 'dressing') {
        // Single choice
        card.closest('.builder-options-grid').querySelectorAll('.builder-card-option').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        state[category] = value;
      } else {
        // Multi choice
        const list = state[category];
        const index = list.indexOf(value);
        if (index > -1) {
          if (list.length > 1) { // keep at least 1
            list.splice(index, 1);
            card.classList.remove('selected');
          } else {
            showToast('Please keep at least one selection!', 'warning');
            return;
          }
        } else {
          // Limit max choices
          if (category === 'protein' && list.length >= 2) {
            showToast('Maximum 2 proteins allowed. Deselect one first.', 'warning');
            return;
          }
          list.push(value);
          card.classList.add('selected');
        }
      }

      updateSummary();
    });
  });

  // Reset Builder
  const resetBtn = document.getElementById('reset-builder-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.base = 'Quinoa';
      state.protein = ['Grilled Chicken'];
      state.vegetables = ['Cucumber', 'Tomato'];
      state.toppings = ['Avocado'];
      state.dressing = 'Lemon Herb';

      // reset visual DOM selected states
      document.querySelectorAll('.builder-card-option').forEach(c => {
        const cat = c.dataset.category;
        const val = c.dataset.value;
        const isSelected = (cat === 'base' && val === state.base) ||
                           (cat === 'dressing' && val === state.dressing) ||
                           (cat === 'protein' && state.protein.includes(val)) ||
                           (cat === 'vegetables' && state.vegetables.includes(val)) ||
                           (cat === 'toppings' && state.toppings.includes(val));
        c.classList.toggle('selected', isSelected);
      });

      updateSummary();
      showToast('Bowl reset to fresh defaults!');
    });
  }

  // Add to order demo button
  const orderBtn = document.getElementById('add-custom-bowl-btn');
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      const summaryText = `${state.base} + ${state.protein.join(', ')} + ${state.dressing}`;
      showToast(`Custom Bowl added to weekly selection: "${summaryText}"!`, 'success');
      
      const modal = document.getElementById('bowl-success-modal');
      if (modal) {
        modal.classList.add('active');
      }
    });
  }

  function updateSummary() {
    let totalPrice = state.basePrice;
    let calories = 0;
    let proteinGrams = 0;
    let carbGrams = 0;
    let fatGrams = 0;

    // Base
    const baseInfo = ingredientData.bases[state.base] || { price: 0, cal: 0, p: 0, c: 0, f: 0 };
    totalPrice += baseInfo.price;
    calories += baseInfo.cal;
    proteinGrams += baseInfo.p;
    carbGrams += baseInfo.c;
    fatGrams += baseInfo.f;

    // Proteins
    state.protein.forEach(p => {
      const info = ingredientData.proteins[p] || { price: 0, cal: 0, p: 0, c: 0, f: 0 };
      totalPrice += info.price;
      calories += info.cal;
      proteinGrams += info.p;
      carbGrams += info.c;
      fatGrams += info.f;
    });

    // Vegetables
    state.vegetables.forEach((v, idx) => {
      const info = ingredientData.veggies[v] || { price: 0, cal: 0, p: 0, c: 0, f: 0 };
      if (idx >= 3) totalPrice += 0.75; // Extra veg charge
      calories += info.cal;
      proteinGrams += info.p;
      carbGrams += info.c;
      fatGrams += info.f;
    });

    // Toppings
    state.toppings.forEach(t => {
      const info = ingredientData.toppings[t] || { price: 0, cal: 0, p: 0, c: 0, f: 0 };
      totalPrice += info.price;
      calories += info.cal;
      proteinGrams += info.p;
      carbGrams += info.c;
      fatGrams += info.f;
    });

    // Dressing
    const dressingInfo = ingredientData.dressings[state.dressing] || { price: 0, cal: 0, p: 0, c: 0, f: 0 };
    totalPrice += dressingInfo.price;
    calories += dressingInfo.cal;
    proteinGrams += dressingInfo.p;
    carbGrams += dressingInfo.c;
    fatGrams += dressingInfo.f;

    // Update DOM
    const baseElem = document.getElementById('summary-base');
    if (baseElem) baseElem.textContent = state.base;

    const proteinElem = document.getElementById('summary-protein');
    if (proteinElem) proteinElem.textContent = state.protein.join(', ');

    const vegElem = document.getElementById('summary-veg');
    if (vegElem) vegElem.textContent = state.vegetables.join(', ');

    const topElem = document.getElementById('summary-toppings');
    if (topElem) topElem.textContent = state.toppings.join(', ');

    const dressElem = document.getElementById('summary-dressing');
    if (dressElem) dressElem.textContent = state.dressing;

    const priceElem = document.getElementById('summary-total-price');
    if (priceElem) priceElem.textContent = `$${totalPrice.toFixed(2)}`;

    const calElem = document.getElementById('summary-calories');
    if (calElem) calElem.textContent = `${calories} kcal`;

    const pBar = document.getElementById('summary-p-bar');
    const cBar = document.getElementById('summary-c-bar');
    const fBar = document.getElementById('summary-f-bar');
    const pVal = document.getElementById('summary-p-val');
    const cVal = document.getElementById('summary-c-val');
    const fVal = document.getElementById('summary-f-val');

    if (pBar) pBar.style.width = `${Math.min(proteinGrams * 2, 100)}%`;
    if (cBar) cBar.style.width = `${Math.min(carbGrams * 1.5, 100)}%`;
    if (fBar) fBar.style.width = `${Math.min(fatGrams * 2.5, 100)}%`;

    if (pVal) pVal.textContent = `${proteinGrams}g`;
    if (cVal) cVal.textContent = `${carbGrams}g`;
    if (fVal) fVal.textContent = `${fatGrams}g`;

    // Visual tags inside preview bowl
    const previewWrap = document.getElementById('bowl-live-preview-tags');
    if (previewWrap) {
      const allSelected = [
        state.base,
        ...state.protein,
        ...state.vegetables,
        ...state.toppings,
        state.dressing
      ];
      previewWrap.innerHTML = allSelected.map(item => `<span class="preview-tag">${item}</span>`).join('');
    }
  }

  // Run on initial load
  updateSummary();
});


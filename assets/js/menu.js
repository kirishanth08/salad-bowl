/**
 * BOWL'D — Menu Filter & Search Engine
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterPills = document.querySelectorAll('.filter-pill[data-category]');
  const searchInput = document.getElementById('menu-search-input');
  const items = document.querySelectorAll('.menu-grid-item');
  const countDisplay = document.getElementById('menu-count-display');

  if (!items.length) return;

  let activeCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    let visibleCount = 0;

    items.forEach(item => {
      const category = item.dataset.category || '';
      const text = item.textContent.toLowerCase();
      const matchesCategory = (activeCategory === 'all' || category === activeCategory);
      const matchesSearch = !searchQuery || text.includes(searchQuery);

      if (matchesCategory && matchesSearch) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (countDisplay) {
      countDisplay.textContent = `Showing ${visibleCount} fresh option${visibleCount === 1 ? '' : 's'}`;
    }
  }

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.category;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  // Quick Add Button handler
  document.querySelectorAll('.btn-add-bowl').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const bowlName = btn.dataset.name || 'Bowl';
      showToast(`Added "${bowlName}" to your weekly bowl tray!`, 'success');
    });
  });
});


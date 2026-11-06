/**
 * BOWL'D — Authentication Form Scripts
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initPasswordToggles();
  initLoginForm();
  initRegisterForm();
  initForgotForm();
});

function initPasswordToggles() {
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.closest('.password-input-wrap').querySelector('input');
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.innerHTML = isPassword
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    });
  });
}

function initLoginForm() {
  const form = document.getElementById('login-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (!email || !password) {
      if (typeof showToast === 'function') {
        showToast('Please enter both your email address and password.', 'warning');
      }
      return;
    }

    // Success message without redirecting
    if (typeof showToast === 'function') {
      showToast('Login successful!', 'success');
    }
    const alertBox = document.getElementById('login-alert');
    if (alertBox) {
      alertBox.style.display = 'flex';
    }
  });
}

function initRegisterForm() {
  const form = document.getElementById('register-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const pass = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;

    if (!name || !email || !pass) {
      if (typeof showToast === 'function') {
        showToast('Please complete all required fields.', 'warning');
      }
      return;
    }

    if (pass !== confirm) {
      if (typeof showToast === 'function') {
        showToast('Passwords do not match. Please re-check.', 'warning');
      }
      return;
    }

    if (typeof showToast === 'function') {
      showToast('Account created successfully! Redirecting to login...', 'success');
    }
    setTimeout(() => {
      window.location.href = 'login.html';
    }, 1000);
  });
}

function initForgotForm() {
  const form = document.getElementById('forgot-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('forgot-email').value.trim();
    if (!email) {
      showToast('Please enter your email address.', 'warning');
      return;
    }

    showToast(`Password reset link sent to ${email} (Frontend Demo).`, 'success');
    const msgBox = document.getElementById('forgot-success-msg');
    if (msgBox) {
      msgBox.style.display = 'block';
    }
  });
}


function handleSocialAuth(provider) {
  const isRegister = window.location.pathname.includes('register');
  if (typeof showToast === 'function') {
    showToast('Connecting with ' + provider + '...', 'info');
  }
  setTimeout(() => {
    if (isRegister) {
      if (typeof showToast === 'function') {
        showToast('Account created with ' + provider + '! Redirecting to login...', 'success');
      }
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1000);
    } else {
      if (typeof showToast === 'function') {
        showToast('Login successful!', 'success');
      }
      const alertBox = document.getElementById('login-alert');
      if (alertBox) {
        alertBox.style.display = 'flex';
      }
    }
  }, 600);
}
window.handleSocialAuth = handleSocialAuth;

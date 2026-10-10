// Keep the footer year current.
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Live form validation
const form = document.getElementById('contact-form');

if (form) {
  const status = document.getElementById('form-status');
  const fields = Array.from(form.querySelectorAll('input, textarea'));

  const validators = {
    name(value) {
      const text = value.trim();
      if (text === '') return 'Please enter your full name.';
      if (text.length < 2) return 'Your name must be at least 2 characters.';
      return '';
    },
    email(value) {
      const text = value.trim();
      if (text === '') return 'Please enter your email address.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)) {
        return 'Enter a valid email address, like name@example.com.';
      }
      return '';
    },
    message(value) {
      const text = value.trim();
      if (text === '') return 'Please tell us how we can help.';
      if (text.length < 10) return 'Your message must be at least 10 characters.';
      return '';
    }
  };

  const showError = (field, message) => {
    const errorEl = document.getElementById(`${field.id}-error`);
    // Only change the text when it differs, so screen readers do not repeat it.
    if (errorEl.textContent !== message) {
      errorEl.textContent = message;
    }
    if (message) {
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.removeAttribute('aria-invalid');
    }
  };

  const validateField = (field) => {
    const message = validators[field.name](field.value);
    showError(field, message);
    return message === '';
  };

  fields.forEach((field) => {
    field.addEventListener('blur', () => {
      field.dataset.touched = 'true';
      validateField(field);
    });
    field.addEventListener('input', () => {
      if (field.dataset.touched === 'true') {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = '';
    let firstInvalid = null;

    fields.forEach((field) => {
      field.dataset.touched = 'true';
      if (!validateField(field) && !firstInvalid) {
        firstInvalid = field;
      }
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    // Demo only: nothing is sent anywhere.
    status.textContent = 'Thank you! Your request has been received.';
    form.reset();
    fields.forEach((field) => {
      delete field.dataset.touched;
    });
  });
}
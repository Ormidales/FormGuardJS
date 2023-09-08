(function() {
  'use strict';

  class FormGuard {
    constructor(form) {
      this.form = form;
      this.rules = {};
      this.init();
    }

    setRules(rules) {
      this.rules = rules;
    }

    init() {
      const elements = this.form.querySelectorAll('input, textarea, select');
      elements.forEach((el) => {
        el.addEventListener('input', () => this.validateInput(el));
      });
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    validateInput(el) {
      const rule = this.rules[el.name];
      let errorMessage = '';

      if (rule.includes('required') && !el.value) {
        errorMessage = 'Ce champ est obligatoire.';
      }

      if (rule.includes('minlength')) {
        const matchResult = rule.match(/minlength:(\d+)/);
        if (matchResult && matchResult[1]) {
          const length = matchResult[1];
          if (el.value.length < parseInt(length, 10)) {
            errorMessage = `La longueur minimale est de ${length} caractères.`;
          }
        }
      }

      if (rule.includes('maxlength')) {
        const length = rule.match(/maxlength:(\d+)/)[1];
        if (el.value.length > parseInt(length, 10)) {
          errorMessage = `La longueur maximale est de ${length} caractères.`;
        }
      }

      if (rule === 'email') {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(el.value)) {
            errorMessage = 'Entrez une adresse e-mail valide.';
        }
      }

      if (rule === 'url') {
        const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        if (!urlRegex.test(el.value)) {
            errorMessage = 'Entrez une URL valide.';
        }
      }

      if (rule === 'numeric') {
        if (!/^[0-9]+$/.test(el.value)) {
            errorMessage = 'Entrez uniquement des chiffres.';
        }
      }

      if (rule === 'alpha') {
        if (!/^[a-zA-Z]+$/.test(el.value)) {
            errorMessage = 'Entrez uniquement des lettres.';
        }
      }

      if (rule === 'alphanumeric') {
        if (!/^[a-zA-Z0-9]+$/.test(el.value)) {
            errorMessage = 'Entrez uniquement des lettres et des chiffres.';
        }
      }

      if (rule.includes('number') && isNaN(el.value)) {
        errorMessage = 'Veuillez entrer un nombre valide.';
      }

      if (rule.includes('min')) {
        const matchResult = rule.match(/min:([+-]?(\d*\.)?\d+)/);
        if (matchResult && matchResult[1]) {
          const min = parseFloat(matchResult[1]);
          if (parseFloat(el.value) < min) {
            errorMessage = `La valeur doit être supérieure ou égale à ${min}.`;
          }
        }
      }

      if (rule.includes('max')) {
        const matchResult = rule.match(/max:([+-]?(\d*\.)?\d+)/);
        if (matchResult && matchResult[1]) {
          const max = parseFloat(matchResult[1]);
          if (parseFloat(el.value) > max) {
            errorMessage = `La valeur doit être inférieure ou égale à ${max}.`;
          }
        }
      }

      if (rule.includes('pattern')) {
        const matchResult = rule.match(/pattern:(\/.*?\/[gimsuy]*)/);
        if (matchResult && matchResult[1]) {
          const patternRegex = new RegExp(matchResult[1]);
          if (!patternRegex.test(el.value)) {
            errorMessage = `La valeur ne correspond pas au format requis.`;
          }
        }
      }

      const errorDiv = el.parentNode.querySelector('.error-message');
      if (errorMessage) {
        el.classList.add('formguard-invalid');
        errorDiv.textContent = errorMessage;
      } else {
        el.classList.remove('formguard-invalid');
        errorDiv.textContent = '';
      }
    }

    handleSubmit(e) {
      const elements = this.form.querySelectorAll('input, textarea, select');
      let isValid = true;

      elements.forEach((el) => {
        this.validateInput(el);
        if (el.classList.contains('formguard-invalid')) {
          isValid = false;
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert('Veuillez corriger les erreurs mises en évidence et réessayer.');
      }
    }
  }

  window.FormGuard = FormGuard;
})();

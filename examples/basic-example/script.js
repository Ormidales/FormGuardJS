// Initialise FormGuardJS sur le formulaire
const form = document.getElementById('basicForm');
const validator = new FormGuard(form);

// Définition des règles de validation
validator.setRules({
    age: 'required|number|min:18|max:150',
    postalCode: 'pattern:/^[0-9]{5}$/',
    username: 'required|minlength:5|maxlength:20',
    email: 'required|email'
});

// Écoute de l'événement de soumission
form.addEventListener('submit', function(e) {
    if (!validator.isValid()) {
        e.preventDefault();
        // Afficher des erreurs ou d'autres actions
    }
});

Commencer avec FormGuardJS
Bienvenue dans le guide de démarrage rapide de FormGuardJS, votre outil pour une validation simple et efficace des formulaires.

Prérequis
Un environnement de développement avec un éditeur de texte ou un IDE.
Une connaissance de base du HTML, CSS, et JavaScript.
Installation
Intégration Directe
Ajoutez simplement les fichiers formguard.js et formguard.css à votre projet et liez-les dans votre fichier HTML.

html
<link rel="stylesheet" href="path/to/formguard.css">
<script src="path/to/formguard.js"></script>
Utilisation
Initialisation
Après avoir intégré FormGuardJS, initialisez-le sur n'importe quel formulaire en utilisant le code suivant :

javascript
const myForm = document.querySelector('#myForm');
const validator = new FormGuard(myForm);
Définir des Règles
Définissez des règles pour chaque champ de votre formulaire. Par exemple :

javascript
validator.setRules({
  username: 'required|alpha|minlength:5|maxlength:20',
  email: 'required|email',
  website: 'url',
  age: 'numeric|min:18',
  bio: 'alpha'
});
Règles disponibles
required : Le champ doit être rempli.
email : Vérifie une adresse e-mail valide.
url : Vérifie une URL valide.
numeric : Accepte uniquement des valeurs numériques.
alpha : Accepte uniquement des caractères alphabétiques.
alphanumeric : Accepte uniquement des caractères alphanumériques.
minlength : Définit une longueur minimale pour la valeur.
maxlength : Définit une longueur maximale pour la valeur.
... et d'autres à venir !
Styles d'Erreur
Si un champ ne respecte pas la règle de validation, il recevra automatiquement une classe formguard-invalid. Utilisez le fichier formguard.css inclus ou définissez vos propres styles pour ces champs.

Support
Pour toute question ou problème, consultez la FAQ ou contactez-moi à hugodoueil@gmail.com.
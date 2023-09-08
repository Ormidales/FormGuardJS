# FormGuardJS
FormGuardJS est une bibliothèque de validation de formulaires simple et efficace pour le web. Assurez-vous que vos formulaires sont soumis correctement du premier coup avec notre système de règles de validation.

## Caractéristiques
1. Simple d'utilisation : Ajoutez simplement un script et un style à votre HTML.
2. Léger : Pas de dépendances, juste une bibliothèque pure JavaScript.
3. Extensible : Ajoutez vos propres règles de validation facilement.
4. Conception moderne : Des messages d'erreur visuellement attrayants pour une meilleure UX.

## Comment commencer
1. Inclure FormGuardJS dans votre projet
2. Ajoutez le script et le style à la fin de votre body :
```html
<link rel="stylesheet" href="path/to/formguard.css">
<script src="path/to/formguard.js"></script>
```
3. Initialiser FormGuardJS :
```javascript
const myForm = document.querySelector('#myForm');
const validator = new FormGuard(myForm);
```
4. Définir les règles :
```javascript
validator.setRules({
  username: 'required|alpha|minlength:5|maxlength:20',
  email: 'required|email',
  password: 'required|minlength:8',
  age: 'numeric|min:18',
  website: 'url',
  bio: 'alpha'
});
```

## Documentation
Pour des instructions détaillées et des exemples, consultez le guide Getting Started et notre liste de règles de validation.

## Exemples
Consultez le dossier /examples pour des implémentations concrètes de FormGuardJS.

## Contribuer
Nous sommes toujours heureux d'accueillir de nouvelles contributions ! Consultez CONTRIBUTING.md pour plus de détails.

## Licence
FormGuardJS est distribué sous la licence MIT. Consultez le fichier LICENCE pour plus de détails.


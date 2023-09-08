# Référence API de FormGuardJS
FormGuardJS est une bibliothèque simple et puissante pour la validation des formulaires en JavaScript. Cette page documente les méthodes et les propriétés disponibles dans la bibliothèque.

## Classe FormGuard
### constructor(form: HTMLFormElement)
Crée une nouvelle instance de validateur pour un formulaire donné.
- Paramètres :
  - form - L'élément de formulaire HTML à valider.

### setRules(rules: object)
Définit les règles de validation pour le formulaire.
- Paramètres :
  - rules - Un objet dont les clés sont les noms des champs du formulaire et les valeurs sont les règles de validation associées.

### init()
Initialise le validateur en attachant des écouteurs d'événements pour la validation.

### handleSubmit(event: Event)
Gère la soumission du formulaire.

### Paramètres :
- event - L'objet d'événement de la soumission du formulaire.

### validateInput(input: HTMLInputElement, rule: string)
Valide un élément d'entrée en fonction de la règle spécifiée.
- Paramètres :
  - input - L'élément d'entrée à valider.
  - rule - La règle de validation à appliquer.

## Règles de validation
FormGuardJS propose plusieurs règles de validation intégrées :

### required
Assure que le champ est rempli.

### minlength:value
Vérifie que la longueur de la valeur du champ est au moins value.

### maxlength:value
Vérifie que la longueur de la valeur du champ ne dépasse pas value.

### min:value
Vérifie que la valeur numérique du champ est au moins value.

### max:value
Vérifie que la valeur numérique du champ ne dépasse pas value.

### email
Vérifie que la valeur du champ est une adresse e-mail valide.

### url
Vérifie que la valeur du champ est une URL valide.

### numeric
Vérifie que la valeur du champ est uniquement numérique.

### alpha
Vérifie que la valeur du champ est uniquement alphabétique.

### alphanumeric
Vérifie que la valeur du champ est alphanumérique.

---

Pour des exemples d'utilisation et d'autres informations, consultez le guide de démarrage rapide et les autres documents disponibles dans notre section de documentation.

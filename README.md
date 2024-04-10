# TP WEB 

Elio Longuet - MIN2 P2025

# TP QUESTIONS:

1. What is the purpose of the `package-lock.json` file generated by the `npm install` command along with `package.json`?

Le package-lock.json contrairement au fichier package.json contient explicitement toutes les versions des dépendances installées dans le projet et des dépendances de dépendances. Il permet de garantir que toutes les machines travaillant sur un même projet utilisent les mêmes versions de dépendances. 

2. What is the convention for version numbers of NPM dependencies, using a 3-digit format? How is this convention referred to?

La convention de versionnement pour les dépendances NPM est est appelé le versionnement sémantique. Elle se présente sous la forme de 3 chiffres séparés par des points : X.Y.Z. 

3. What is a `devDependency` and how does it differ from a regular dependency?

Une dépendance de développement comparé à une dépendance classique n'est pas nécessaire pour le fonctionnement de l'application en production. Elle est utilisée pour faciliter le développement, les tests et le déploiement du projet ou de l'application.

4. Define closure/IIFE. What was its usage and what has replaced it?

Les termes closure/IIFE Immediately Invoked Function Expression font référence à des fonctions anonymes déclarés et invoqués immédiatement. Ces fonctions étaient utilisées pour isoler des variables (var) dans une fonction pour ne pas encombrer le scope globale. Elles ont été remplacés par les modules ES6 qui permettent de faire la même chose de manière plus propre.

5. Explain the difference between `import * as toto from './utils'` and `import { parseUrl } from './utils'`. What are the potential consequences of using one over the other?

L'avantage de la première manière d'importer est que l'on peut importer toutes les fonctions d'un fichier utils en une seule ligne. Cependant, cela peut être problématique si on importe plusieurs fichiers qui ont des fonctions avec le même nom.
La deuxième méthode d'import permet d'importer seulement les fonctions dont on a besoin, cela permet de ne pas surcharger le code et la mémoire avec des fonctions inutiles.

6. Can you name at least two things that are possible with Java classes but cannot be done with ES6 classes?

L'héritage est une propriété essentiels des classes Java qui n'est pas possible avec les classes ES6. De plus, l'overloading, le fait de définir plusieurs méthodes avec le même nom mais des paramètres différents, n'est pas possible en ES6 comparé à Java.

7. What are the differences between `var` and `let`?

La différence entre var et let concerne le scope des variables. Les variables déclaré avec le mot-clé var sont accessibles dans tout le scope de la fonction dans laquelle elles sont déclarées et globalement si elles sont déclarées en dehors d'une fonction contrairement aux variables déclarées avec let qui sont accessibles uniquement dans le bloc dans lequel elles sont déclarées.

8. What is the purpose of `.bind(this)`? What happens if it is omitted? Is it necessary when using an arrow function? Why or why not?

La fonction .bind(this) permet de lié le scope de la fonction à celui de l'objet dans lequel elle est appelée. Si cette fonction n'est pas appelé le scope sera global et non celui de l'objet. 

9. What does the `@` symbol mean in `@babel/***`?

Le @ permet de regrouper plusieurs plugins Babel en un seul. 

10. What are the advantages of Promises?

Les avantages des promises sont qu'elles permettent de contrôler plus facilement la potentielle completion ou l'échec d'une fonction asynchrone. Elles permettent de gérer plus facilement les erreurs et de rendre le code plus lisible.

11. In what version of ECMAScript were `async`/`await` introduced?

Async/await ont été introduit dans la version ES8 d'ECMAScript.

12. Why is component-oriented programming considered more maintainable for web development?

La programmation orienté composant est considéré comme plus maintenable car elle permet une meilleur séparation des préoccupations contrairement à une separation par technologies. Elle permet de réutiliser plus facilement des composants et de les modifier sans impacter le reste de l'application.

13. Define Functional programming.

La programmation fonctionelle est un paradigme de programmation où les programmes sont construits à partir de fonctions pures. Les fonctions sont toutes de première classe et peuvent être passées en paramètre à d'autres fonctions ce qui permet ainsi d'eviter tout effet secondaire (side-effect). Cela en fait un paradigme de programmation très robuste.

14. Explain the purpose of the `map()` function.

La fonction map permet de crée un nouveau tableau avec les resultats d'une fonction appliquée à chaque élément du tableau d'origine.

15. Explain the purpose of the `filter()` function.

La fonction filter permet de crée un nouveau tableau aen filtrant les éléments d'un tableau d'origine en fonction d'une condition donnée.

16. Explain the purpose of the `reduce()` function.

La fonction reduce utilise un accumulateur qui permet de réduire un tableau à une seule valeur.

17. What are the differences between `.then()` and `async`/`await` when handling asynchronous functions?

En utilisant les fonctions async Javascript va mettre en pause l'exécution du code jusqu'à ce que la promesse soit résolue. Alors qu'avec l'utilisation de .then() le code va continuer à s'exécuter et la fonction de callback sera appelée lorsque la promesse sera résolue.

18. What does the `_` prefix signify on a Sass file?

Le préfixe '_' utilisé dans les fichiers Sass signifie que le fichier est partiel et sera ensuite mergé avec d'autres fichiers Sass à la compilation.
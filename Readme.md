Objectif :
Développer une application web dynamique en utilisant Node.js pour le backend et React pour le frontend, le tout en typescript.
Le but de cette application est de fournir une plateforme permettant la gestion et la visualisation d’items et de catégorie.
Nous ne nous attarderons pas sur l’aspect visuel de l’application, mais nous attendons un design simple et fonctionnel.
L’application aura 2 sections distinctes. Une sections item et une section catégorie.
La section item permettera de visualiser les items existants, d’en ajouter, d’en modifier et d’en supprimer.
Exemple d'item : { label: 'Burger cheddar', description: 'Cheddar, bun, viande'}
La section categorie permettera de visualiser les catégories existantes, d’en ajouter, d’en modifier et d’en supprimer.
Exemple de categorie: { label: 'Burger', position: 0 }
Dans la section categorie, je dois pouvoir selectionner une categorie et voir les items associés à cette categorie.
Pour la persistance des données, vous pouvez utiliser les technologies et outils de votre choix.
Fonctionnalités à implémenter :

CRUD items:
Items = { label: stirng, prix: int, description: string, isAvailable : boolean, createdAt: data }
Création : Permettre aux utilisateurs d’ajouter de nouveaux items en spécifiant les détails nécessaires.
Lecture : Afficher une liste des items existants avec la possibilité de les filtrer par status (isAvailable) ou de les trier par date (createdAt).
Mise à jour : Offrir la possibilité de modifier les informations des items existants.
Suppression : Permettre la suppression d’items avec une confirmation pour éviter les suppressions accidentelles.

CRUD catégories :
Category = { label: string, position: int }
Création : Permettre l’ajout de nouvelles catégories en définissant un nom et une position.
Lecture : Afficher une liste des catégories existantes, triée par position, avec la possibilité de visualiser le nombre d’items associés à chaque catégorie.
Mise à jour : Offrir la possibilité de modifier les détails des catégories.
Suppression : Permettre la suppression de catégories, avec des vérifications pour éviter d’effacer des catégories contenant des items.

CRUD pour l’association d’items à une catégorie :
Association : Offrir une interface permettant de facilement associer des items à une catégorie et de changer ces associations si nécessaire. Il faut pouvoir associer une position.
Modification : Offrir la possibilité de modifier ou de retirer des associations.

Vue d’ensemble : Afficher une vue d’ensemble de toutes les catégories disponibles avec des statistiques sommaires (nombre d’items).
Détail d’une catégorie : En cliquant sur une catégorie, l’utilisateur devrait voir une liste détaillée des items associés, triés par position ou d’autres critères pertinents.
Interface utilisateur : L’interface doit être claire et intuitive, facilitant la navigation entre les différentes fonctionnalités.

Bonus:
Tout ce qui vous semble pertinent

Documentation et livraison :
Code source : Sur ce git
README : Inclure à la fin du fichier README la procédure d’installation, les exigences système, et comment exécuter l’application.
Cet exercice vise à évaluer vos compétences techniques, votre capacité à créer une application fonctionnelle et conviviale, ainsi que votre attention aux détails et à la qualité du code. Bonne réalisation !

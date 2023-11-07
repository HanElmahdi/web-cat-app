# WebCatApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Project détails

## Git Init

`git remote add origin https://github.com/HanElmahdi/web-cat-app.git`

## Create project Angular cli 15 locally 

`nvm list`
`nvm use v16.20.0 `
`npm install @angular/cli@15 –save-dev`
`ng v `
`ng new web-cat-app`

## Install concurrently
`npm install --save concurrently`

## Install json-server
`npm install --save json-server`
- Add db.json on Racine
```json
{
    "scripts": {
        "start": "concurrently \"ng serve\" \"json-server --watch db.json\"",
    }
}
```

## Data db.json
```json
{
    "products": [{
            "id": 1,
            "name": "computer",
            "price": 4300,
            "quantity": 600,
            "selected": true,
            "available": true
        },
        {
            "id": 2,
            "name": "Printer",
            "price": 300,
            "quantity": 100,
            "selected": true,
            "available": true
        },
        {
            "id": 3,
            "name": "Smartphone",
            "price": 1200,
            "quantity": 100,
            "selected": false,
            "available": true
        }
    ]
}
```

## Ajouter dans le fichier package json
```json
{
    "scripts": {
        "start": "concurrently \"ng serve\" \"json-server --watch db.json\"",
    }
}
```

## To run the application

`npm start` instead `ng serve`

## FIND ALL (json_serve)

http://localhost:3000/products

## FIND BY NAME (json_serve)

http://localhost:3000/products/name=computer

## FIND USING LIKE (json_serve)

http://localhost:3000/products/name_like=c

## CREATE PRODUCT (json_serve)

**POST**
http://localhost:3000/products

```json
{
    "name": "AAAA",
    "price": 9999,
    "quantity": 100,
    "selected": true,
    "available": true
}
```

## UPDATE PRODUCT (json_serve)

**PUT**
http://localhost:3000/products

```json
{
    "name": "AAAA",
    "price": 9999,
    "quantity": 100,
    "selected": false,
    "available": false
}
```

## PATCH PRODUCT (json_serve)

**PATCH**
http://localhost:3000/products

```json
{
    "name": "Test"
}
```

## DELETE PRODUCT (json_serve)

**DELETE**
http://localhost:3000/products/4

## install dependencies

npm install bootstrap --save-dev
npm install jquery --save-dev
npm install font-awesome --save-dev

ng generate component components/nav-bar
ng g c components/nav-bar
ng g c components/products
ng g c components/home

## Integrate css & js

- add this to angular.json
"styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]

## create services

ng g s services/product

ng g environments

ng generate interface model/product --type=model

## Fetch Data Method 1 :: Product[]

- **products.component.ts**
```ts
products:Product[]|null=null;
this.productsService.getAllProducts().subscribe(data=>{
    this.products=data
},err=>{
    console.log(err);
});
```
- **products.component.html**
<div *ngIf="products$">
    <div `*ngFor="let p of products">
    </div>
</div>

# Fetch Data Method 1 :: Observable pour un tableau de model Product[]

- **products.component.ts**
```ts
products$: Observable<Product[]> | null = null;
onGetAllProducts() {
    this.products$ = this.productsService.getAllProducts();
}
```
le dollard c'est pour dire que c'est un observable
`*ngFor="let p of products$|async`
<div *ngIf="products$">
    <div `*ngFor="let p of products$|async">
    </div>
</div>

## PIPE sur Observable for managing exception

startWith({dataState: DataStateEnum.LOADING}), // Retourn qlq au début de la requette
catchError(err=>of({errorMessage:err.message}))// pour l'erreur en ajoute of pour dire que c'est observable

## proxy pour fussionner l'url du backend (http://localhost:3000) dans le frontend angular (http://localhost:4200/)

http://localhost:3000/ > http://localhost:4200 
http://localhost:3000/api > contient la liste json

- src/proxy.conf.json
```json
{
    "/api": {
        "target": "http://localhost:3000",
        "secure": false
    }
}
```
- angular.json
```json
"serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "configurations": {
        "production": {
            "browserTarget": "web-cat-app:build:production"
        },
        "development": {
            "browserTarget": "web-cat-app:build:development",
            # "proxyConfig": "src/proxy.conf.json"
        }
    },
    "defaultConfiguration": "development"
}
```

## readonly property

readonly DataStateEnum=DataStateEnum // c'est pour rendre la class enum accessible avec des valeur dans le front Exemple DataStateEnum.LOADED va afficher 1

## ss

https://www.youtube.com/watch?v=f67pl7imX8k&list=PLlxnHhzx9q8B0USj0wSpPfwHEogCj3ZxV&index=4 >> youssfu angular 11
https://www.youtube.com/watch?v=rjyFuSb-JU0  >> tupac 
https://www.youtube.com/watch?v=RnLF3yzVOg8&list=PL7JmcZV0UQtUHQi7kWAI2t3JGWkKaAR9z&index=5 >> Angular CRUD | Local Storage | angular tutorial | angular tutorial for beginners

https://www.youtube.com/watch?v=sqldEbeDLh8 >> Kubernetes et Docker, c'est quoi la différence?

## Décomposition

ProductsComponent
    ProductNavBarComponent
    ProductsListComponent
        ProductItemComponent

# Steat Management
Ngrx est une librairie qui implément le désign du redux en utilisant la programmation réactive 
basée sur **rxjs**

Ngrx permet à une application Angular de **centraliser l'état** de l'application dans un unique **objet**

**RXJS = RéactifX** : Un standard de comment faire la programmation **réactive**

tout les composants de l'application peuvent accèder facilement à l'état de l'application d'une maniére réactive

chaque composant peut faire une **soubscription** aux donnée du state dont il a besoins en utilisant des **sélécteurs**

**sélécteurs** ::un composant il as besoin de souscrire un abonnement uniquement sur une partie de state 

A chaque fois que les données du state changent le composant est mis à jour d'une maniére réactive (Real Time)

Ce mécanisme de NgRx propose des mécanismes puissant alternatifs aux solutions classiques fournies 
par Angular tels que 
    * @Input et @Output : permetent de communiquer les web composant mais qui s'avère parfois 
    complexe pour une grande application
    * Les services qui peuvent être utiliser pour partager les données de l'application et aussi 
    les traitements pour l'ensembles de composants web de l'application

## fonctionnement state management
1
- quand il as un evenement qui se produit dans un **composant** ce dérnier emettre une **Action**
- store : gérer le state (contient les données) c'est un servce
- on demande au store de dispatcher une action à un autre composant
- **action** est recu par un composant **reducer**(écouteur d evenemtent)
- c'est le seul qui peut modifier le state
2
- **EffectS** ecouteur d'action pour gérer les services
- **EffectS** fais appel aux services
- **EffectS** recois les résultat de service
- **EffectS** ensuite il déclance une autre **action**
3
- component va faire une subscribe su state
exemple >>>>
une fois une action est émit depuis un composant 
le reduceur est decloncher il récupere les parametre de l'action
recupere le state actuel aprés il produit un nouveau state de l'application
automatiquement lorsque le state change 
le composant va le recevoir d'aprés

exemple 2 selecteur

--parfois en veut qu d'couter qu une parti en utilisant le selector
- le selector unu composant qui fais partie de ngrx, pour ecouter qu une partie du state

## #########################
ngrx est une implémentation du pattern Redux en utilisant la librairie rxjs

1-store objet javascript il contient l'état du (state) de l'application, le stet est un obj javascript 
**immutable** : quand peut pas modifier
!!!on peut que cloner le state dans un obj puis le modifier est le pulier aprés

2-web components : tout les composant web de l'app qui souhaite utiliser une partie de l'état  de l'app
soit souscrire un abonnement  dans le store

3-seleceteur permettre  à un composant d'observer des partie du state au lien d'oserver tout la state

4-Action ce sont des événement  émis par votre application au niveau des composants
il définit deux attributs:type : {type: d'événement en string,payload: contient les paramétre de l'action}

5 - reducer = on lui donne l acton+ current state il contact le store est retoure le nouveau state
reducer = ecouteur d'evenement (d'action) , il recoivent le state actuel et les action dispatcher par le store
en fonction de type et payload le reducer retourne n nouveau state

le state de l'app contient l'historique des différents changements du state

6 - effects un observateur d'un certain type d'actions aui faudrat intercepter pour faire appel
a des services qui sont souvent utiliser pour interagirent avec le backend entraine 
un evenement (success or error) ouis il dispatche une autre action vers l'intercepteur pou mettre ajour le state 

7 - entities : faciliter la gestion des collections d'entités du state, 
ngrx fournit un mécanisme qui permet d'ajouter et recherche mettre a jour et supprimer des entité du state
de l'appication en utilisant EntityFactory 





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
https://www.youtube.com/watch?v=WEY0e_cfpjQ
https://www.youtube.com/watch?v=RjKPKRm55J8
https://www.youtube.com/watch?v=rjyFuSb-JU0  >> tupac 
https://www.youtube.com/watch?v=RnLF3yzVOg8&list=PL7JmcZV0UQtUHQi7kWAI2t3JGWkKaAR9z&index=5 >> Angular CRUD | Local Storage | angular tutorial | angular tutorial for beginners

https://www.youtube.com/watch?v=sqldEbeDLh8 >> Kubernetes et Docker, c'est quoi la différence?




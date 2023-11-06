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
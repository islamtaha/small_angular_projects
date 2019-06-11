# FireBaseApp

Angular application that use firebase database for CRUD and User Authentication. [themoviedb.org](https://www.themoviedb.org/).

## Intsallation:

1 - install required dependencies: 

$ npm install

2 - run application:

$ ng serve 

## usage
1 - go to http://localhost:4200 in the browser

![Alt text](images/signin.png?raw=true "Title")

![Alt text](images/signup.png?raw=true "Title")

2 - signup in [firebase](https://firebase.google.com/) and go to console and create new project then go to project settings and in your apps section choose web and register your app

3 - copy the application configuration and paste it into /firebase-app/src/environments/environment.ts in firebase 

4 - you should be able to signup using email/password and signup and add, view and delete items.

![Alt text](images/home.png?raw=true "Title")

![Alt text](images/add-item.png?raw=true "Title")

![Alt text](images/validation.png?raw=true "Title")

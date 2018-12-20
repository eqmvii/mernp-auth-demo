# Heroku Deploy

https://arcane-caverns-22869.herokuapp.com/

# Build steps on top of boilerplate

0. git init and create remote repo

1. Add .gitignore to base repo, ignore node_modules/

2. yarn install

3. update this readme

4. push to heroku: `heroku create`, `git push heroku master`, `heroku open`

CHECKPOINT: First heroku deploy worked!

5. `yarn add mongoose` and prepare seed file

# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
yarn install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
yarn start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.

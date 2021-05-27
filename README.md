# EZ-Express

## About

EZ Express is a template for the [Express Framework](https://expressjs.com/)

## Why

I made EZ Express in the same spirit as [Flask CS](https://github.com/deXOR0/Flask-CS), this should serve as an easy, repeatable, and light-weight starting point for any Express-based project.

## How it works

I have included some essential node packages such as

- express _(duh)_
- nodemon
- ejs
- mysql2
- sequelize
- yup
- dotenv

In addition, this template is also equipped with Bootstrap 5

Some example files had been included as a cheat-sheet to further assist your project development.

## Prerequisites

- Node v15.0.1 +
- npm 7.0.3 +

## How to use

- Clone this repository
- Install the dependencies
  ```
  npm i
  ```
- Install [sequelize-cli](https://www.npmjs.com/package/sequelize-cli) to help setup migrations and models
  ```
  npm i -D -g sequelize-cli
  ```
- Change port and db settings on the .env file
- Start the project with this command
  ```
  npm run dev
  ```

## To-Do

- [x] Include validator (currently doing some limited testing on [yup](https://www.npmjs.com/package/yup))
- [ ] Include security packages (think [helmet](https://www.npmjs.com/package/helmet) etc)
- [ ] Setup cors (?)
- [ ] Provide support for mongodb or no sql in general (maybe something like [monk](https://www.npmjs.com/package/monk)?)

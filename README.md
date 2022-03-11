# ABC Prototype

Prototype of centralized account management for Burberry. This project should run alongside <https://github.com/amido/common-channel-ssr>

## Installation

Make sure you have NPM and Node installed. For reference we are currently using Node version 8.11.4.

You can install concurrent versions of Node using NVM:
https://github.com/nvm-sh/nvm/blob/master/README.md

After installing NVM, run ```nvm install 8.11.4``` and then ```nvm use 8```

Run ```npm install``` to install dependencies.

## Running and Development

Nodemon allows you to hot-reload node. To install nodemon, please run ```npm -g nodemon```

To run the code type ```npm run dev``` in the root folder of the project

Go to <https://localhost:3000> to see the node running. Because of CDC (Gigya) integration, you need to clone and run this repo <https://github.com/amido/common-channel-ssr> to demo the flow.

In order to login to CDC you can use any registered user with a verifyed email.
IE.: deleteThis620@putsbox.com | Passw0rd1234$

## Tests

Run tests with ```npm run test```

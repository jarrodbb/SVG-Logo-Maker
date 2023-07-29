# SVG-Logo-Maker

Logo Maker

## Description

Command-line application that takes the users inputs from specific prompts and returns a logo in a .svg format

The user will be prompted to

1. Enter text for the logo
2. Enter text color
3. Select a shape (Circle, Square or Triangle)
4. Enter shape color

The saved Logo will be saved as logo.svg

For any additional logos generated, the naming will be sequentially increase for e.g logo_2.svg, logo_3.svg

Logo size is 300x200

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [license](#license)

## Installation

### Ensure a package.json file exists

If there is no package.json install one by running npm init

### Install Inquirer and Jest

Install dependencies by running npm install **inquirer@8.2.4**

Install DevDependencies by running npm install **jest@24.9.0 --save-dev**

node_modules folder will be created. This folder contains all third-party packages that have been dowloaded

Add a .gitignore file and add node_modules to ensure the third-party packages are not committed to Github

#### JavaScript

[index.js](https://github.com/jarrodbb/SVG-Logo-Maker/blob/main/index.js)
[cli.js](https://github.com/jarrodbb/SVG-Logo-Maker/blob/main/lib/cli.js)
[shapes.js](https://github.com/jarrodbb/SVG-Logo-Maker/blob/main/lib/shapes.js)
[package.json](https://github.com/jarrodbb/SVG-Logo-Maker/blob/main/package.json)

#### Test file

[shape.test.js](https://github.com/jarrodbb/SVG-Logo-Maker/blob/main/lib/shape.test.js)

## Usage

#### run node index.js
![Screenshot 2023-07-29 at 6 36 30 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/674d0861-910c-4d13-b8c4-1d0f3eabdd1c)

#### Inquirer will run. The first question is "Enter text for the logo. (Must not be more than 3 characters)"
![Screenshot 2023-07-29 at 6 36 46 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/a2c0cca4-ceb3-4ae9-a011-5ff6af7af8dc)

#### If the user inputs more than 3 characters, a message will be consoled informing the user "please check your input. Max character is 3" amd the prompts will restart
![Screenshot 2023-07-29 at 7 11 36 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/37d64899-6491-45f8-8e26-4de8151a3166)

#### Second question, "Enter text color". The color input takes color keywords or a hexadecimal number
![Screenshot 2023-07-29 at 6 58 29 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/452f0e2c-ddaa-4614-a432-0e3fc59ab6c7)

#### Third question, "Select a shape" options are Circle, Triangle and Square
![Screenshot 2023-07-29 at 7 09 54 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/c66fa8c8-919b-479b-b1a7-ca4e8eff6197)

#### Fourth question, "Enter shape color". The color input takes color keywords or a hexadecimal number
![Screenshot 2023-07-29 at 6 58 48 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/efc28c0c-f90c-4d08-9fbc-b27f70aae92f)

#### Saves logo as logo.svg

#### Message appears "Generated logo.svg"
![Screenshot 2023-07-29 at 6 59 48 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/3483b81c-4ff6-4ab1-834b-497b08c13271)

### Testing

#### Run test

Run tests by running npm run test
![Screenshot 2023-07-29 at 7 13 04 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/50046254-e0be-44f6-b2c3-b3d30ae66072)

Test check each shape class (circle, triangle and square) to ensure variables are defined

Test check each shape class (circle, triangle and square) to ensure an error will be thrown if the user does not input a response for all prompts

![Screenshot 2023-07-29 at 7 13 55 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/6d534883-6867-4a05-98b5-b494a98341d1)

## License

Please refer to the licence in the repo.

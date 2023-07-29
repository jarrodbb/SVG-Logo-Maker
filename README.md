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

#### Inquirer will run. The first question is "Enter text for the logo. (Must not be more than 3 characters)"

#### If the user inputs more than 3 characters, a message will be consoled informing the user "please check your input. Max character is 3" amd the prompts will restart

#### Second question, "Enter text color". The color input takes color keywords or a hexadecimal number

#### Third question, "Select a shape" options are Circle, Triangle and Square

#### Fourth question, "Enter shape color". The color input takes color keywords or a hexadecimal number

#### Saves logo as logo.svg

#### Message appears "Generated logo.svg"

### Testing

#### Run test

Run tests by running npm run test

Test check each shape class (circle, triangle and square) to ensure variables are defined

Test check each shape class (circle, triangle and square) to ensure an error will be thrown if the user does not input a response for all prompts

## License

Please refer to the licence in the repo.

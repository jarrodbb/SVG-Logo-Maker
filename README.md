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

#### Video Demo
[google drive link](https://drive.google.com/file/d/1zxwn26wf5nJU2-Xw4QB4IsZfk9dAvjKx/view)
[YouTube](https://youtu.be/fXBvQUY57lw)

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

#### Message appears "Generated logo.svg"
![Screenshot 2023-07-29 at 6 59 48 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/3483b81c-4ff6-4ab1-834b-497b08c13271)

#### Saves logo as logo.svg
![Screenshot 2023-07-29 at 7 01 29 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/5a6cd54b-05b4-4806-b8b5-34a2f87dc050)
![Screenshot 2023-07-29 at 7 01 40 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/6d1caecb-0065-4031-90c2-32210cd75f4a)
![Screenshot 2023-07-29 at 7 01 46 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/573077f4-530f-4abf-aeb0-4e830319403d)

#### More logo examples
![Screenshot 2023-07-29 at 7 03 32 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/3ed3f436-52f1-4201-9841-9b3304ad4d5b)
![Screenshot 2023-07-29 at 7 03 40 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/212f5b9e-7e87-47e8-af4d-aac3e6b5ec80)
![Screenshot 2023-07-29 at 7 03 45 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/beb67cb0-181a-4e47-9e1e-63418d48a620)

![Screenshot 2023-07-29 at 7 05 16 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/f8ec1bba-e36b-4e28-88ac-c06eb03a5029)
![Screenshot 2023-07-29 at 7 05 20 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/daa85671-13bd-496a-bf4e-4502f1955395)

### Testing

#### Run test

Run tests by running npm run test
![Screenshot 2023-07-29 at 7 13 04 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/50046254-e0be-44f6-b2c3-b3d30ae66072)

Test check each shape class (circle, triangle and square) to ensure variables are defined

Test check each shape class (circle, triangle and square) to ensure an error will be thrown if the user does not input a response for all prompts

![Screenshot 2023-07-29 at 7 13 55 pm](https://github.com/jarrodbb/SVG-Logo-Maker/assets/132813348/6d534883-6867-4a05-98b5-b494a98341d1)

## License

Please refer to the licence in the repo.

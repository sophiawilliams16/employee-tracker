# 12 SQL: Employee Tracker

## Description

This command line interface-based CMS **content management system** application has an interface that allows non-developers to easily view and interact with information stored in the database. The application manages a company's employee database, using Node.js, Inquirer, and MySQL.

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Credits](#credits)
-   [License](#license)

## Installation

To install the project ...

-   Download the code from the GitHub link [HERE](https://github.com/sophiawilliams16/employee-tracker).

-   Open up a terminal from the `index.js` file and run `npm i` in your terminal to download required packages.

-   Run `mysql -u root -p` to initiate MySQL and enter your password. 

-   Run `source db/schema.sql` to establish the database. 

-   Run `source db/seed.js` to seed the database, then `exit` to exit MySQL. 

-   Finally, run `node index.js` to start the application. 


## Usage

The following video shows a demo of the application being used from the command line:

[GOOGLE DRIVE VIDEO LINK](https://drive.google.com/file/d/1G8R8Wkx4VMcEe5HjnfDRhx4k65OB-AdU/view)

## Sources

-   Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

-   Uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to a MySQL database.

-  [Building a CLI Application](https://medium.com/@manavshrivastava/lets-build-a-cli-command-line-interface-with-node-js-d3b5faacc5ea)

-  [Switch case statements](https://www.w3schools.com/js/js_switch.asp)


## License

MIT License

Copyright (c) 2023 Sophia Williams

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

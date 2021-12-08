# JonathanMendoza_7_23102021

# Project 7 : Openclassrooms

## Install NPM

### `npm install`

## Install the dataBase MySql

You can download a free MySQL database at https://www.mysql.com/downloads/.

## Run mySql

Start MySQL (example here on macOS):
`sudo /usr/local/mysql/support-files/mysql.server start`

Run MySQL on Terminal:
`/usr/local/mysql/bin/mysql -u root -p`
Password:

### Import the dataBase of Grupomania

To import a database, first create a new blank database in the MySQL shell to serve as a destination for your data:
`CREATE DATABASE newdatabase;`

Then log out of the MySQL shell and type the following on the command line:
`mysql -u root -p grupomania < grupomania.sql`

### Usethe Dbase

`USE grupomania;`
`SHOW tables;

## Run the BACKEND

In the project directory, you can run:

### `cd groupomania_backend`

### `npm start`

Runs the app and listen on port (http://localhost:8081) .

## Run the FRONTEND

In the project directory, you can run:

### `cd groupomania_frontend`

### `npm start`

Runs the app in (http://localhost:3000) to view it in the browser.

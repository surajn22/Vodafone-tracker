# Vodafone-tracker

- Vodafone-tracker is webapp developed using ReactJS,HTML,CSS, Json
- Compatible with all major browsers (IE8+);
- It reads the data.json file and displays the tickets and its activities.

## Important files from project
index.html :- HTML file contains the view logic of the project

-------------
index.js:- It contains ReactJS code which is linked with index.html

-------------
Login.js:- It is a dummy login page with username = d@d.com & pwd = 1234

-------------
App.js:- It loads the data.json and passes it to the Activities.js page

-------------
Activities.js:- It is a container for all the tickets

-------------
Activity.js:- It loads individual activities of a ticket

-------------
Header.js:- It contains the ticket header details like Ticket No, status etc.

-------------
data.json:- It contains the ticket data returned from backend in json format

## Common Folder

This folder contains all the reusable basic components

## Available Scripts

In the project directory, you can run:

### Add all dependencies

`npm install`
## How to run

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Creates the snapshot tests.
 

Your app is ready to be deployed!

### Sequence
                    
```seq
index.html 
index.js
Login.js
App.js 
data.json
Activities.js
Header.js
Activity.js
```
### End
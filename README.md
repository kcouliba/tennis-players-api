# Tennis Players API

This project was created for personal training purpose on endpoint API testing.

Application runs on port 3030. To change port, modify the line `const PORT = 3030` in the `main.js` file

## How to run

This project was built using:

- node 13.3.0
- npm 6.13.1

**Clone and move to the root of the project**

```sh
$> git clone git@github.com:kcouliba/tennis-players-api.git
$> cd tennis-players-api
```

**Start the server**

`$>npm start`

## How to test

### Automated tests

There are few tests to ensure API behaviour, run the following command to make sure everything works as planned `$>npm run test`

### Manually

You can run a `curl` command in a terminal.

Two routes are currently available:

- **/players**: which returns an array of json map of players ordered by id ascending

- **/players/:id**: which returns a json map of one player from its id, or a 404 response if no player could be found

`$> curl http://localhost:3030/players`

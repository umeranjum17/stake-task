# Sequelize + Express

This is an example of how to setup Sequelize and Express together in a project for NodeJS 10 and above.

Feel free to download this and use as a starting point for your new project!

This example uses SQLite as a database engine, since it works directly with the filesystem and does not require extra configuration. Feel free to use another database engine - you just have to change the connection URL in the `Sequelize` constructor. [Learn more in the Sequelize docs](https://sequelize.org).

## See it in action

* Install dependencies with `npm install` or `yarn install`
* Run the express server with `npm start`
* Open your browser in `localhost:8000` and try the example REST endpoints:
	* `localhost:8000/api/investment` (GET)
	* `localhost:8000/api/investment/1` (GET)
	* `localhost:8000/api/investment` (POST)
		* Body format: `{ username: 'john' }`
	* `localhost:8000/api/investment/1` (PUT)
		* Body format: 
		```
		{"propertyId":1,
    "amountInvested":6,
    "customerEmail":"umeranjum17@gmail.com"}
	```
	* `localhost:8000/api/investment/1` (DELETE)

## Run the file using Docker
* To run the file please install docker and run the command docker-compose up which will start the db instance do the migration and run the express server

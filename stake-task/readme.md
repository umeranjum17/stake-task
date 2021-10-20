# Run the file using Docker

To run the file please install docker and run the command "docker-compose up --build" which will start the db instance do the migration and run the express server

## See it in action

* Install dependencies with `npm install` or `yarn install`
* Run the express server with `npm start`
* Open your browser in `localhost:8000` and try the example REST endpoints:
	* `localhost:8000/api/investment` (GET)
	* `localhost:8000/api/investment/1` (GET)
	* `localhost:8000/api/investment` (POST)
	* Body format: 
	`{"propertyId":1,"amountInvested":6, "customerEmail":"umeranjum17@gmail.com"}`
    
	* `localhost:8000/api/investment/1` (PUT)
	* Body format: 
	`{"propertyId":1,"amountInvested":6, "customerEmail":"umeranjum17@gmail.com"}`
  
	* localhost:8000/api/investment/1` (DELETE)

## Docker Config
* The project is connected via docker and to run standalone would need configuration changes

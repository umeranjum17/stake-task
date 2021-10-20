const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize('stake', 'root', 'SomeRootPassword1!',{
	host: 'mysql',
	port: '3306',
	dialect: 'mysql',
	logQueryParameters: true,
	benchmark: true,
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	  },
});

const modelDefiners = [
	require('./models/property.model'),
	require('./models/investment.model'),
	
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// // We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;

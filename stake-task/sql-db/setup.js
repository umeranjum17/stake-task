const sequelize = require('../sequelize');
const {Sequelize}=require('sequelize')
// const { pickRandom, randomDate } = require('./helpers/random');
const db = new Sequelize('', 'root', 'SomeRootPassword1!',{
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

async function reset() {
	await db.query("CREATE DATABASE IF NOT EXISTS stake")
	console.log('Rewrite Dummy Data');

	await sequelize.sync({ force: true });

	await sequelize.models.property.bulkCreate([
		{ name: 'Studio in Marina',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:99,targetAmount:7_8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:3,investmentMultiple:3 },
		{ name: 'Studio in Some Place',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:19,targetAmount:8_8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:1,investmentMultiple:1 },
		{ name: 'Studio in That Place',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:93,targetAmount:9_8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:0,investmentMultiple:4 },
		{ name: 'Studio in Marina1',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:10,targetAmount:8_8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:0,investmentMultiple:3 },
		{ name: 'Studio in Marina 2',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:23,targetAmount:5_8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:0,investmentMultiple:1 },
		{ name: 'Studio in Marina 3',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:55,targetAmount:2_8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:0,investmentMultiple:6 },
		{ name: 'Studio in Marina 4',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:33,targetAmount:8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:1,investmentMultiple:3 },
		{ name: 'Studio in Marina 5',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:55,targetAmount:1_8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:13,investmentMultiple:3 },
		{ name: 'Studio in Marina 6',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:22,targetAmount:1_8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:3,investmentMultiple:3 },
		{ name: 'Studio in Marina 8',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:33,targetAmount:1_8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:4,investmentMultiple:3 },
		{ name: 'Studio in Marina 9',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:95,targetAmount:1_8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:1,investmentMultiple:0 },
		{ name: 'Studio in Marina 10',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:5,targetAmount:3_8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:4,investmentMultiple:2 },
		{ name: 'Studio in Marina 11',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:55,targetAmount:8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:1,investmentMultiple:10 },
		{ name: 'Studio in Marina 122',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:4,targetAmount:4_2_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:3,investmentMultiple:3 },
		{ name: 'Studio in Marina 12321',image:"https://stake-dev-env.s3.eu-west-1.amazonaws.com/public/properties/24/property_images/t6KMr76KSc9N8puA72JUheu7DjvboBOBiKdMrP5G.jpg",percentageRaised:69,targetAmount:3_8_00000000,cityArea:"Dubai Marina",countryArea:"Dubai",numberOfInvestors:1,investmentMultiple:3 },
	]);

	// Let's create random instruments for each orchestra
}

reset();
module.exports ={ reset}
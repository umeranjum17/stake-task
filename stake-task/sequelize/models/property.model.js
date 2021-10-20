const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('property', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name:{
			allowNull: false,
			type: DataTypes.STRING,
		},
		image: {
			allowNull: false,
			 type: DataTypes.STRING,
		},
		cityArea: {
			allowNull: false,
			type: DataTypes.STRING,
			
		},
		percentageRaised: {
			allowNull: false,
			type: DataTypes.DECIMAL
		},
		investmentMultiple:{
			allowNull: false,
		type: DataTypes.INTEGER
		},
		numberOfInvestors:{
			allowNull: false,
			type: DataTypes.INTEGER
		},
		targetAmount: {
			allowNull: false,
			type: DataTypes.DOUBLE,
		},
		// We also want it to have a 'orchestraId' field, but we don't have to define it here.
		// It will be defined automatically when Sequelize applies the associations.
	});
};

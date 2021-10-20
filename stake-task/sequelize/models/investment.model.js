const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
	sequelize.define('investment', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		// propertyID:{
		// 	allowNull: false,
		// 	type: DataTypes.INTEGER,
            
		// },
		customerEmail: {
			allowNull: false,
			 type: DataTypes.STRING,
		},
		amountInvested: {
			allowNull: false,
			type: DataTypes.DECIMAL,
			
		},
	});
};


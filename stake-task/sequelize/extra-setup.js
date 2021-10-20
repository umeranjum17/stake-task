function applyExtraSetup(sequelize) {
	const { property, investment } = sequelize.models;

	property.hasMany(investment);
	investment.belongsTo(property);
}

module.exports = { applyExtraSetup };

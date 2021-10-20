const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
	const page = 'page' in req.query&&req.query.page>0 ? req.query.page-1:null ;
	let where={};
	if(req.query.email){
	where['customerEmail']=req.query.email;
	}
	const limit=5;
	const investments = await models.investment.findAll({offset:page?page*limit:null,limit,where});
	res.status(200).json(investments);
};

async function getById(req, res) {
	const id = getIdParam(req);
	const investment = await models.investment.findById(id);findByPk(id);
	if (investment) {
		res.status(200).json(investment);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create(req, res) {
	let propertyData=await models.property.findByPk(req.body.propertyId);
	const{amountInvested}=req.body
	const remainingPercentAmount=(100-propertyData.dataValues.percentageRaised)*propertyData.dataValues.targetAmount/100
	console.log(remainingPercentAmount);
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`)
	} else if (amountInvested<0||!amountInvested){

		res.status(400).send(`Bad request: Wrong Amount.`)
	}else if(amountInvested>remainingPercentAmount){

		res.status(400).send(`Bad request: Maximum Amount for this property is ${remainingPercentAmount}.`)
	}else if(amountInvested%propertyData.dataValues.investmentMultiple!=0){

		res.status(400).send(`Bad request: Should be multiple of ${propertyData.dataValues.investmentMultiple}.`)
	}
	
	else{
		const amountPercentage=(amountInvested/propertyData.dataValues.targetAmount)*100
		await models.property.update({ percentageRaised:parseFloat(propertyData.dataValues.percentageRaised)+parseFloat(amountPercentage)},{where:{id:req.body.propertyId}})
		await models.investment.create(req.body);
		res.status(201).end();
	}
};

async function update(req, res) {
	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await models.investment.update(req.body, {
			where: {
				id: id
			}
		});
		res.status(200).end();
	} else {
		res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
	}
};

async function remove(req, res) {
	const id = getIdParam(req);
	await models.investment.destroy({
		where: {
			id: id
		}
	});
	res.status(200).end();
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
};

const { models } = require('../../sequelize');
const { getIdParam } = require('../helpers');

async function getAll(req, res) {
	const page = 'page' in req.query&&req.query.page>0 ? req.query.page-1:null ;
	const limit=5;
	const properties = 'includeInvestments' in req.query ?
		await models.property.findAll({ include: models.investment, offset:page?page*limit:null, limit }) :
		await models.property.findAll({ offset:page*limit, limit });
	res.status(200).json(properties);
};

async function getById(req, res) {
	const id = getIdParam(req);
	const property = 'includeInvestments' in req.query ?
		await models.property.findByPk(id, { include: models.investment }) :
		await models.property.findByPk(id);
	if (property) {
		res.status(200).json(property);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create(req, res) {
	if (req.body.id) {
		res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the system.`)
	} else {
		await models.property.create(req.body);
		res.status(201).end();
	}
};

async function update(req, res) {
	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await models.property.update(req.body, {
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
	await models.property.destroy({
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

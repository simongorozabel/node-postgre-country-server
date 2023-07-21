const catchError = require("../utils/catchError");
const Country = require("../models/Country");
const City = require("../models/City");
const Continent = require("../models/Continent");
const User = require("../models/User");

const getAll = catchError(async (req, res) => {
  const country = await Country.findAll({ include: [City, Continent, User] });
  return res.json(country);
});

const create = catchError(async (req, res) => {
  const country = await Country.create(req.body); //Se debe enviar un objeto por el req.body
  return res.status(201).json(country);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const country = await Country.findByPk(id, {
    include: [City, Continent, User],
  });
  if (!country) return res.status(404).json({ message: "No country found" });
  return res.json(country);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Country.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const country = await Country.update(req.body, {
    where: { id },
    returning: true,
  }); //Se debe enviar un objeto por el req.body
  if (country[0] === 0) return res.sendStatus(404);
  return res.json(country[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
};

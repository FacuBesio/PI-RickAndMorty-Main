require("dotenv").config();
const { DB_USER, DB_PASSWORD, HOST, PORT, DB_NAME } = process.env;
const { Sequelize } = require("sequelize");
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");


// dataBase es la Conexion con la BDD.
// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const dataBase = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${HOST}:${PORT}/${DB_NAME}`,
  { logging: false } // Oculta de la consola todos los procesos que Sequelize va haciendo
);

UserModel(dataBase);
FavoriteModel(dataBase);

// Desestructuramos los modelos para establecer las relaciones.
const { User, Favorite } = dataBase.models;

// Se indica la relacion, y en el caso que corresponda cual sera la tabla intermedia que represente esa relacion a traves de {through: "nombre_TablaIntermedia"}
User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });

// dataBase va a ser requerida desde el index.js para sincronizar la conexion a la BDD con nuestro Servidor.
module.exports = {
  dataBase,
  User,
  Favorite
};


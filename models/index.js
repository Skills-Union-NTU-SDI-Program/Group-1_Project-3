const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('makan_apa', 'postgres', 'password',{
    host: 'localhost',
    dialect: 'postgres',
});


const Location = require("./location")(sequelize);
const Cruisine = require("./cruisine")(sequelize);
const Price = require("./price")(sequelize);

// Location.belongsTo(Cruisine, {
//   foreignKey: "cruisine",
// });
// Location.belongsTo(Price, {
//   foreignKey: "price",
// });

module.exports  = {
  sequelize,
  Location,
  Cruisine,
  Price,
};

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    host: 'localhost',
    username:"root",
    password:"Str0ngP@ssw0rd!",
    database:'ecm2',
    dialect:'mysql',
    dialectModule:require('mysql2')
  });


// Synchronize the model with the database
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        // Synchronize all models
        await sequelize.sync({ alter: true }); // `alter: true` updates the table to match the model
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database or synchronize models:', error);
    }
})();

export default sequelize

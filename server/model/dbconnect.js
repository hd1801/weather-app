import Sequelize from "sequelize";
export const sequelize = new Sequelize('cityweather', 'postgres', 'postgres', {
    host: 'postgres',
    dialect: 'postgres'
  });
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  
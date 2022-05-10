import { sequelize } from "./dbconnect.js";
import { DataTypes, Model } from 'sequelize';

export class CityWeather extends Model {}
CityWeather.init({
  // Model attributes are defined here
  id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  weather: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  temprature:DataTypes.REAL,
  humidity: DataTypes.REAL,
  description:DataTypes.STRING
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'CityWeather' // We need to choose the model name
});

(async ()=>{
    await CityWeather.sync({alter:true});
})()

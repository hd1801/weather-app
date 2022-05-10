import  express  from "express";
import { fetchWeather } from "./Utils/fetchWeather.js";
import { CityWeather } from "./model/cityweather.js";
const app = express()

app.use(express.urlencoded({extended:true}))

app.post("/", async (req,res)=>{
    const city= req.body.city;
    const data = await fetchWeather(city);

    // check if api call is successful if yes add data to db.
    if (data.cod === "200"){
        for (let item of data.list){
            CityWeather.create({
                city,weather:item.weather.main,
                description:item.weather.description,
                temprature: item.main.temp,
                humidity:item.main.humidity
            })
        }
    }
    
    res.json(data);
})
app.get("/",(req,res)=>{
    res.send("get");
})
app.listen(3000,()=>{
    console.log("server running at port 3000");
})      
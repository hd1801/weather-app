export const fetchWeather= async (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=2&APPxID=75ea1ded95a8ae82ea9ebed3c6354484`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}


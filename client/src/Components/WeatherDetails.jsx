import { useEffect,useState } from "react";
import { useLocation } from "react-router"
import { Container } from "react-bootstrap";
import { WeatherCard } from "./WeatherCard";

export const WeatherDetails = ()=>{
    const [details,setDetails] = useState({})
    const city = useLocation().state;
    useEffect(()=>{
        const url =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=2&APPID=75ea1ded95a8ae82ea9ebed3c6354484`
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data);
            setDetails(data);
        });
    },[city])

    const renderDetails = ()=>{
        if(details.cod === '200')
        return <WeatherCard {...details}/>
        else{
          return  "cant fetch details."
        }
    }

    return <Container>{renderDetails()}</Container>
} 
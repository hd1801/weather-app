import { Container,Card } from "react-bootstrap"

const renderItems=(item)=>{
    const {temp,humidity} = item.main;
    const {main,description} = item.weather[0];
   return <Container key={item.dt} className="p-3 m-2">
       <Card.Text>Date: {item.dt_txt}</Card.Text>
       <Card.Text>Weather: {main} </Card.Text>
       <Card.Text>Temprature: {temp} </Card.Text>
       <Card.Text>Humidity:  {humidity}</Card.Text>
       <Card.Text>Description: {description}</Card.Text>
   </Container>
}

export const WeatherCard = (props)=>{
    return <Container className="m-5">
        <Card border="dark">
        <Card.Header >
        <Card.Title>{props.city.name}</Card.Title>
        </Card.Header>
        <Card.Body>
            {props.list.map(item => renderItems(item))}
        </Card.Body>

        </Card>
    </Container> 
}
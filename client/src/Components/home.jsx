import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router"

export const Home = ()=>{
    const [city,setCity] = useState("")
    const navigate = useNavigate();
    const handleClick= async ()=>{
        navigate("../weather",{state:city})
    }

    const handleChange= (event)=>{
        setCity(event.target.value);
    }

    return <>
    <Card>
    <Card.Header as="h5">Get Weather Details</Card.Header>
    <Card.Body>
        <Card.Title>Enter the city to get weather details:</Card.Title>
            <Form.Group className="mb-3" controlId="formCity">
            <Form.Label>Enter city</Form.Label>
                <Form.Control type="text" placeholder="Enter city" onChange={handleChange} name="city" value={city} />
            </Form.Group>
            <Button variant="dark" size="lg" onClick={handleClick}>Submit</Button>
        </Card.Body>
    </Card>
    </>
}
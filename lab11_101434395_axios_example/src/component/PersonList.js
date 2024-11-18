import React, { Component } from 'react'
import axios from "axios"
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

export default class PersonList extends Component {
    //Define state default values
    constructor(props) {
        super(props)
        this.state = {
            persons: []
        }
    }

    getPersons = async () => {
        const personUrl = "https://randomuser.me/api/?results=10"
        try {
            const response = await axios.get(personUrl)
            this.setState({ persons: response.data.results })
            console.log("result")
            console.log(response.data.results)
            return response.data.results
        } catch (error) {
            console.log(error)
        }
    }


    //Component Lifecycle Callback
    componentDidMount() {
        this.getPersons()
        // const personUrl = axios.get(`https://randomuser.me/api/?results=10`)
        // .then(res => {
        //     console.log(res.data);
        //     const persons = res.data.results;
        //     this.setState({ persons });
        // })
    }



    render() {
        return (
            <div>
                <Container>
                    <h2 className="text-center mt-4 mb-4" style={{ backgroundColor: 'green', color: 'white' }}>
                        User List
                    </h2>
                    <Row>
                        {
                            this.state.persons.map((person) => (
                                <Col md={6}>
                                    <Card className="mb-4" style={{ backgroundColor: '#00bcd4', color: 'white' }}>
                                        <Card.Body>
                                            <Card.Title>{person.name.title} {person.name.first} {person.name.last} {person.login.uuid}</Card.Title>
                                            <hr></hr>
                                            <Row>
                                                <Col md={4}>
                                                    <img style={{borderRadius: '50%'}} src={person.picture.large} alt="User picture" />
                                                </Col>
                                                <Col md={8}>

                                                    <Card.Text className="text-start">
                                                        <p>Username: <strong>{person.login.username}</strong></p>
                                                        <p>Gender: {person.gender}</p>
                                                        <p>Time Zone Description: {person.location.timezone.description}</p>
                                                        <p>Address: {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}</p>
                                                        <p>Email: {person.email}</p>
                                                        <p>Birth Date and Age: {person.dob.date} ({person.dob.age})</p>
                                                        <p>Register Date: {person.login.username}</p>
                                                        <p>Phone#: {person.phone}</p>
                                                        <p>Cell#: {person.cell}</p>
                                                    </Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

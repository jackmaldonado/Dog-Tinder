import React, { Component } from 'react'
import App from '../App'
import Header from '../components/Header'
import {
    Col,
    Container,
    Row,
    Button,
    Form
} from 'react-bootstrap'

import Dogs from '../pages/Dogs'
// import NewDog from './pages/NewDog'

class NewDog extends Component {

constructor(props){
    super(props)
    this.state = {
        form:{
            name:"",
            age: "",
            enjoys: ""
        }
    }
}

    handleChange = (event) => {
      let {form} = this.state
      form[event.target.name] = event.target.value
      this.setState({form: form})
    }

    buttonClick = () => {
        this.props.theDog(this.state.form)
    }

    render(){

        return (
            <div>
            <Container>

            <legend>About</legend>
            <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
                controlId="name"
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={this.handleChange}
                value={this.state.form.name}/>
            </Form.Group>


            <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
                controlId="age"
                type="number"
                name="age"
                placeholder="Enter Age"
                onChange={this.handleChange}
                value={this.state.form.age}/>
            </Form.Group>



            <Form.Group controlId="enjoys">
            <Form.Label>Enjoys</Form.Label>
            <Form.Control
                controlId="enjoys"
                type="text"
                name="enjoys"
                placeholder="What does your Good Boy/Girl like to do?"
                onChange={this.handleChange}
                value={this.state.form.enjoys}/>
            </Form.Group>
            <button id="submit" label="submit" type="submit" class="btn btn-primary"
            onClick={this.buttonClick}>Create Profile
            </button>

            </Container>
            </div>
        );
    }
}

export default NewDog;

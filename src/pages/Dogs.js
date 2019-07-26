import React, { Component } from 'react';
import Header from '../components/Header'
import App from '../App'
import NewDog from './NewDog'
import { deleteDog } from '../api'
import {
  Col, Container, Row, ListGroup
} from 'react-bootstrap'

class Dogs extends Component {

    handleDelete = (dog) => {
        console.log("hello");
        deleteDog(dog)
    }

  render() {
    return (
        <div>
          <Container>
              <Row>
                <Col xs={12}>
                    <ListGroup>
                    {this.props.dogs.map((dog, index) =>{
                        return (
                            <ListGroup.Item key={index}>
<button type='submit' onClick ={this.handleDelete}>Button </button>
                        <h4>
                            <span className='dog-name'>{dog.name}</span> - <small className='dog-age'>{dog.age} years old</small>
                            <button className="btn btn-primary"
                            onClick={() => this.handleDelete(dog)}>Delete
                            </button>

                        </h4>
                            <span className='dog-enjoys'>{dog.enjoys}</span>

                    </ListGroup.Item>

                        )
                    })}
                    </ListGroup>
                    </Col>
                </Row>
          </Container>
      </div>
    );
  }
}

export default Dogs;

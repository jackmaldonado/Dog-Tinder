import React, { Component } from 'react'
import App from '../App'
import {
    Col,
    Container,
    Row,
    Button,
    Nav
} from 'react-bootstrap'

import Dogs from '../pages/Dogs'
import NewDog from '../pages/NewDog'
// import NewDog from './pages/NewDog'





class Header extends Component {
    render(){
        return (
            <Container>

            <div>

            <Nav>

              <Nav.Item>
                <Nav.Link href="/newdog">Sign Up</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/dogs">Dogs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link target="_blank" href="https://tinder.com/">Don't Click!</Nav.Link>
              </Nav.Item>
            </Nav>

                <h1>Dog Tinder</h1>
            </div>
            </Container>
        );
    }
}

export default Header;

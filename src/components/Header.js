import React, { Component } from 'react'
import App from '../App'
import {
    Col,
    Container,
    Row,
    Button
} from 'react-bootstrap'

import Dogs from '../pages/Dogs'
import NewDog from '../pages/NewDog'
// import NewDog from './pages/NewDog'

class Header extends Component {
    render(){
        return (
            <Container>
            <div>
                <h1>Dog Tinder</h1>
            </div>
            </Container>
        );
    }
}

export default Header;

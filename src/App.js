import React, { Component } from 'react'
import Header from './components/Header'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Dogs from './pages/Dogs'
import NewDog from './pages/NewDog'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            dogs: [
                {
                    id:1,
                    name: "Peewee",
                    age: 8,
                    enjoys: "Snoozing"
                },
                {
                    id: 2,
                    name: "Dez",
                    age: 4,
                    enjoys: "Chillin"
                },
                {
                    id: 3,
                    name: "Barkley",
                    age: 8,
                    enjoys: "Sun Bathing"
                },
                {
                    id: 4,
                    name: "Royce",
                    age: 3,
                    enjoys: "Terrorizing"
                },
                {
                    id: 5,
                    name: "Emma",
                    age: 1,
                    enjoys: "Being Cute"
                }
            ]
        }
    }

    handleNewDog = (e) => {
        console.log(e)
    }

    // <Route exact path="/" render={( props) => <NewDog newdogs={this.state.dogs} />} />
    render(){
        return (
            <div>
                    <Header />
                    <Router>
                            <Switch>
                                    <Route exact path="/dogs" render={( props) => <Dogs dogs={this.state.dogs} /> } />
                                    <Route exact path="/newdog" render={(props) => <NewDog theDog={this.handleNewDog}/>}/>
                            </Switch>
                    </Router>

            </div>
        );
    }
}

export default App;

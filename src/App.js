import React, { Component } from 'react'
import Header from './components/Header'
import { getDogs } from './api'
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
            dogs: []
        }
    }

    handleNewDog = (e) => {
        console.log(e)
    }


    componentDidMount() {
  getDogs()
	.then(APIdogs => {
	  this.setState({
		dogs: APIdogs
	  })
	})
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

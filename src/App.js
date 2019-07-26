import React, { Component } from 'react'
import Header from './components/Header'
import { getDogs } from './api'
import { createDog } from './api'
import { deleteDog } from './api'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Carousel
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


    componentDidMount() {
      getDogs()
    	.then(APIdogs => {
    	  this.setState({
    		dogs: APIdogs
    	  })
    	})
    }

    handleNewDog(newDogInfo) {
        // console.log(newDogInfo)
       createDog(newDogInfo)
        .then(successDog => {
            console.log("SUCCESS! New dog: ", successDog);
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

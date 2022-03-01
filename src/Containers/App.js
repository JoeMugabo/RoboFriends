import React, { Component } from 'react';
import Cardlist from '../Components/Cardlist';
import Searching from '../Components/Searching';
import { Robos } from '../Components/Robos';
import Scroll from '../Components/Scroll' 
import './App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
            Robos: Robos, 
            // if you want to use the users from the site you got to
            // use the empty array on the Robos state above(Robos: [])
            searchField: ''
        }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({ Robos: users }))
    // }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const {Robos, searchField} = this.state
        const filteredRobots = Robos.filter(Robot => {
            return Robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return !Robos.length ?
            <h1> Loading...</h1> :
         (
                <div className="tc">
                    <h1 className='f1'>MY REAL GANG</h1>
                    <Searching searchChange={this.onSearchChange}/>
                    <Scroll>
                        <Cardlist Robos={filteredRobots} />
                    </Scroll>
                    
                </div>
            )
        
    }
}

export default App
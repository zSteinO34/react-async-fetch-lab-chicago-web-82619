import React, {Component} from 'react'

export default class App extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => 
            this.setState( {
                people: data.people
            } )
        );
    }

    
    render() {
        const people = this.state.people.map(person => {
            console.log(person)
            return <p>{person.name}</p>
        })
        return (
            <div>
                {people}
            </div>
        )
    }
}
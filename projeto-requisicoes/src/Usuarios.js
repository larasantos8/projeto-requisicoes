import React, { Component } from 'react'
import axios from 'axios'

export default class Usuarios extends Component{

    state = {
       usuarios: []
    }

    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/users/")
        .then(resp => {
            this.setState({ usuarios: resp.data})
        })
    }

    render(){

        return(
            <ul>
            {this.state.usuarios.map(item => (
              <li key={item.id}>
                {item.name} 
              </li>
            ))}
          </ul>
        )
    }
}

//Nome Email Telefone Albuns Posts Photos
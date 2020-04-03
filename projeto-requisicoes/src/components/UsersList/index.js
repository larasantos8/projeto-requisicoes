import React, { Component } from 'react'
import axios from 'axios'

export default class UsersList extends Component{

    state = {
       users: []
    }

    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/users/")
        .then(resp => {
            this.setState({ users: resp.data})
        })
    }

    render(){

        return(
        <tbody>
          {this.state.users.map(items => (
            <tr key={items.id}>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.phone}</td>
              <Quantidade idUser={items.id} classe="albums" />
              <Quantidade idUser={items.id} classe="posts" />
              <Quantidade idUser={items.id} classe="photos" />
            </tr>
          ))}
        </tbody>
        )
    }
}

//Nome Email Telefone Albuns Posts Photos
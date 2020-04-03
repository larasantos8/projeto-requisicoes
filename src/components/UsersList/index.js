import React, { Component } from "react";
import axios from "axios"
import Quantidade from "../Quantidade"

export default class UserList extends Component {
  state = {
    user: []
  };

  componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(resposta => {
        this.setState({ user: resposta.data });
      });
  };

  render() {
    return (
      <tbody>
        {this.state.user.map(items => (
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
import React, { Component } from "react";
import axios from "axios";

export default class Quantidade extends Component {
    constructor(props) {
        super(props);
        this.state = { idUser: props.idUser, classe: props.classe, totalItens: 0 }
    }

    componentDidMount = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.idUser}/${this.state.classe}`)
            .then(resposta => {
                this.setState({ totalItens: resposta.data.length });
            });
    };

    render() {
        return (
            <td>
                {this.state.totalItens}
            </td>
        )
    }
}

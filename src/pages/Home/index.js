import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };
    this.loadFilmes = this.loadFilmes.bind(this);
  }
  componentDidMount() {
    this.loadFilmes();
  }
  loadFilmes() {
    // URL da API https://sujeitoprogramador.com/r-api/?api=filmes/
  }
  render() {
    return <div></div>;
  }
}
export default Home;

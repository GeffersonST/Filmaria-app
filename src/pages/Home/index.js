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
  loadFilmes() {}
  render() {
    return <div></div>;
  }
}
export default Home;

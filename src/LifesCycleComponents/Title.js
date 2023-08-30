class Title extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}!!!</h1>;
    }
  }
  
  ReactDOM.render(<Title name="Mauro Ivan" />, document.getElementById("root"));


  
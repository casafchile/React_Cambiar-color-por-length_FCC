class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line
    let dangerInputStyle = {
      border:"3px solid red"                  //CSS Code
    }
    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={
            this.state.input.length < 16 ?
              inputStyle : dangerInputStyle    //ternario con el CSS Code
          }

          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};

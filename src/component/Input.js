import React from "react";
import Header from "./Header";
import Button from "./Button";
import Submit from "./Submit";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "None"
    };
  }
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleClick = e => {
    console.log(this.state.name);
    this.setState({ name: e.target.value });
    e.preventDefault();
  };
  render() {
    var list = this.props.list;
    var style = {
      width: 430,
      margin: "0 auto"
    };

    return (
      <div style={style}>
        <Header />
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="What're you about to do today ?"
              onChange={this.handleChange}
            />
            <Submit addStuff={this.props.addStuff} name={this.state.name}  type="btn-info" title="Add" />`{" "}
          </div>
        </form>
      </div>
    );
  }
}

export default Input;

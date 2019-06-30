import React from "react";
import Button from "./Button";
import TextBox from "./TextBox";
import Edit from "./Edit";
import EditField from "./EditField";
import Done from "./Done";

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: ""
    };
  }
  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      edit: e.target.value
    });
    e.preventDefault();
  };
  render() {
    var style = {
      width: 900,
      margin: "0 auto"
    };
    var a;
    return (
      <div style={style}>
        {this.props.list.items.map((item, index) => (
          <div className="input-group mb-4">
            <TextBox
              done={this.props.list.items[index].isDone}
              name={item.name || this.state.edit}
            />
            <Button
              onDel={this.props.onDel}
              index={index}
              type="btn-danger"
              title="Delete"
            />
            <Edit
              onEdit={this.props.onEdit}
              name={this.state.edit}
              index={index}
              type="btn-success"
              title="Edit"
            />
            <Done
              onDone={this.props.onDone}
              index={index}
              type="btn-dark"
              title="Done"
            />
            <EditField
              handleChange={() => this.handleChange}
              isEdit={item.isEdit}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Output;

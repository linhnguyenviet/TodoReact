import React from "react";

class Button extends React.Component {
  render() {
    var type = this.props.type;
    return (
      <div className="input-group-append">
        <button
          className={`btn ${type}`}
          onClick={() => {
              console.log(this.props.index)
            this.props.onDel(this.props.index);
          }}
          type="button"
        >
          {this.props.title}
        </button>
      </div>
    );
  }
}

export default Button;

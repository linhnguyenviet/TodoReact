import React from "react";

class Submit extends React.Component {
  render() {
    var type = this.props.type;
    return (
      <div className="input-group-append">
        <button
          className={`btn ${type}`}
          onClick={() => {
            this.props.addStuff(this.props.name);
          }}
          type="button"
        >
          {this.props.title}
        </button>
      </div>
    );
  }
}

export default Submit;

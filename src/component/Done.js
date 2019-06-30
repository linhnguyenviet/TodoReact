import React from "react";

class Done extends React.Component {
  render() {
    var type = this.props.type;
    return (
      <div className="input-group-append">
        <button
          className={`btn ${type}`}
            onClick={()=>this.props.onDone(this.props.index)}
          type="button"
        >
          {this.props.title}
        </button>
      </div>
    );
  }
}

export default Done;

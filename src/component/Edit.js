import React from "react";
import EditField from "./EditField";

class Edit extends React.Component {
  render() {
    var type = this.props.type;
    return (
      <div className="input-group-append">
        <button
          className={`btn ${type}`}
          onClick={() => {
              this.props.onEdit(this.props.name,this.props.index);
            //   this.props.change();
          }}
          type="button"
        >
          {this.props.title}
        </button>
        
      </div>

    
    );
  }
}

export default Edit;

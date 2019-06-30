import React from "react";
var classNames = require('classnames');

class EditField extends React.Component {
  render() {
      var style = {
          display:"none"
      }
      if(this.props.isEdit) {
        return (<div> <input onChange={this.props.handleChange()} type="text" className="form-control" placeholder="Edit Here" /> </div>
           ) 
      }
      else return ( <input style={style} type="text" className="form-control" placeholder="Edit Here" />)
  }
}

export default EditField;

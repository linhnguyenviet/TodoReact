import React from "react";

class TextBox extends React.Component {
  render() {
    var style = {
        width:600,
        border:"1px solid #bdc3c7",
        textAlign:"center",
        paddingLeft:10,
        paddingTop:5
        
    };
    var x = {
      backgroundColor:"#eaeaea",
      textDecoration:"line-through"
    }
    if(this.props.done)
    return (
        <div   style={{...style,...x}}  className="input-group-prepend">
        {this.props.name}
        
      </div>
    );
    else  return (
      <div   style={style}  className="input-group-prepend">
      {this.props.name}
      
    </div>
  );
  }
}

export default TextBox;

import React from "react";

class Header extends React.Component {
  render() {
    var style = {
      margin: "0 auto",
      textAlign:"center"
    };
    return (
      <div style={style}>
        <h1 class="display-1">Todo List</h1>
      </div>
    );
  }
}

export default Header;

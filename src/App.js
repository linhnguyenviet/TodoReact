import React from "react";
import "./App.css";
import Output from "./component/Output";
import Input from "./component/Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    var items =  [
      { name: "Ăn cơm", isEdit: false, isDone: false },
      { name: "ngủ", isEdit: false, isDone: false },
      { name: "Đi học", isEdit: false, isDone: false }
    ]
    const data = localStorage.getItem("items");
    const json = JSON.parse(data);
    this.state = {
      items : json
    };
  }

  render() {
    var style = {
      margin: "0 auto"
    };

    return (
      <div style={style}>
        <Input
          addStuff={value => {
            console.log(this.state.items);
            var update = [...this.state.items, { name: value, isEdit: false }];
            this.setState({ items: update });
            localStorage.setItem("items",JSON.stringify(update));

          }}
          
        />
        <br />

        <Output
          onDone={index => {
            var update = this.state.items
            .slice(0, index)
            .concat(
              { name: this.state.items[index].name, isEdit: this.state.items[index].isEdit,isDone:!this.state.items[index].isDone },
              this.state.items.slice(index + 1, this.state.items.length)
            )
            this.setState({
              items: update
            });
            localStorage.setItem("items",JSON.stringify(update));
          }}
          onEdit={(value, index) => {
            var update = this.state.items
            .slice(0, index)
            .concat(
              { name: value, isEdit: !this.state.items[index].isEdit },
              this.state.items.slice(index + 1, this.state.items.length)
            )
            this.setState({
              items: update
            });
            localStorage.setItem("items",JSON.stringify(update));

          }}
          onDel={index => {
            var update = this.state.items
            .slice(0, index)
            .concat(
              this.state.items.slice(index + 1, this.state.items.length)
            )
            this.setState({
              items: update
            });
            localStorage.setItem("items",JSON.stringify(update));
          }}
          list={this.state}
        />
      </div>
    );
  }
}

export default App;

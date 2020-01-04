import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    let name = 'yoshi';
    return (
      <div>
        <h1>Hello {name} !</h1>
        <p>1 + 1 = {this.get_result(1)}</p>
      </div>
    );
  }
  get_result(num) {
    return 1 + num;
  };
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);

import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  render() {
    let name = 'yoshi';
    return (
      <h1>Hello {name} !</h1>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);

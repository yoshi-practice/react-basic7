import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  constructor(){
    super();
    this.name = "yoshi"
  }

  render() {
    return (
      <div>
        <h1>Hello {this.name} !</h1>
        {/* コンストラクタから参照 */}
        <p>1 + 1 = {this.get_result(1)}</p>
        {/* 関数より参照 */}
      </div>
    );
  }

  get_result(num) {
    return 1 + num;
  };
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);

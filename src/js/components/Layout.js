import React from 'react';
import Footer from './Footer'; 
import Header from './Header';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "yoshi";
  }
  render() {
    const header = <Header />;
    const footer = <Footer />;
    const header_footer = [<Header />, <Footer />];
    return (
      <div>
        {header}
        <h1>It's {this.name}!</h1>
        {footer}
        {header_footer}
      </div>
    );
  }
}
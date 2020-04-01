import React from 'react';
import ReactDom from 'react-dom';

var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
}

class Message extends React.Component{
  render(){
    const {color, msg, minutes} = this.props;
    return(
      <div>
          <h1>Hello Everyone</h1>
          <p style={{color: color}}>{msg}</p>
          <p>I'll check back in {minutes} minutes</p>
      </div>
    )
  }
}

//const title = React.createElement('h1', {id:'title', className: 'header', style: style}, 'Hello World')

ReactDom.render(<Message msg="how are you?" color="red" minutes={50}/>, document.getElementById('root'));
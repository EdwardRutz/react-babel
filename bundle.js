'use strict';

// A React element with three arguements: element, properties, child content
// Refactored to use JSX and tags


var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
  'h1',
  { id: 'title',
    className: 'header',
    style: { backgroundColor: 'blue', color: 'white', fontFamily: 'verdana' } },
  'React & Babel'
), document.getElementById('react-container'));

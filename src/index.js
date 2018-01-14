// A React element with three arguements: element, properties, child content
// Refactored to use JSX and tags


const { render } = ReactDOM

render(
  <h1 id='title'
      className='header'
      style={{backgroundColor: 'blue', color: 'white', fontFamily: 'verdana'}}>
    React & Babel
  </h1>,
  document.getElementById('react-container')
)










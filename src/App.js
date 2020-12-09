import './App.css';
import React from 'react';

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const items = Array.from({ length: 100 }, (_, i) => `ITEM ${loremIpsum} #${i}`)

function App() {
  const [pos, setPos] = React.useState(0);
  React.useEffect(() => {
    document.getElementById("list").addEventListener('scroll', e => {
      e.preventDefault();
      setPos(e.target.scrollTop)
    })
  }, [])

  return (
    <div className="App">

      <div className="container">

        <div className="list" id="list">
          <div style={{ top: pos }} className="item header">HEADER</div>

          {items.map(item => <span key={item} className="item">{item}</span>)}
        </div>
      </div>

    </div>
  );
}

export default App

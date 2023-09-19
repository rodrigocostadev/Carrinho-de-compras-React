// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './Componentes/Header/Header';
import Products from './Componentes/Products/Products';

function App() {
  return (
    <div>
      <Header className="header" style={{background: "red"}} ></Header>
      <Products></Products>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

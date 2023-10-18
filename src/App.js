// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './Componentes/Header/Header';
import Products from './Componentes/Products/Products';
import Provider from './Context/Provider';
import Cart from './Componentes/Cart/Cart';

function App() {
  return (
    <Provider>
      <Header></Header>
      <Products></Products>
      <Cart></Cart>
    </Provider>
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

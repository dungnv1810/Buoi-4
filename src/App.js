import React from "react";
import Box from "./components/Box";
import './App.css';
function App() {
  const box1 = {
    id: 1,
    image: 'https://bootstrapmade.com/demo/templates/Siimple/assets/img/why-us-1.jpg',
    title: 'Our Mission',
    description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
  const box2 = {
    id: 2,
    image: 'https://bootstrapmade.com/demo/templates/Siimple/assets/img/why-us-2.jpg',
    title: 'Our Plan',
    description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
  const box3 = {
    id: 3,
    image: 'https://bootstrapmade.com/demo/templates/Siimple/assets/img/why-us-3.jpg',
    title: 'Our Vision',
    description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
  const box4 ={
    id: 4,
    image: 'https://bootstrapmade.com/demo/templates/Siimple/assets/img/about-img.jpg',
    title: 'Voluptatem',
    description: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  }
  return (
    <React.Fragment>
        <div className="app-wapper">
          <Box item={box1} item1={box4}/>
          <Box item={box2} item1={box4}/>
          <Box item={box3} item1={box4}/>
        </div>
    </React.Fragment>
  );
}
export default App;

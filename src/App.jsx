// import React, { Component } from "react";

// export default class App extends Component {
//   state = {
//     isVisible: true,
//   };

//   handleClick = () => {
//     this.setState({ isVisible: !this.state.isVisible });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Hilangkan dan munculkan</button>
//         {this.state.isVisible ? <Greeting name="world" /> : null}
//       </div>
//     );
//   }
// }

// class Greeting extends Component {
//   render() {
//     return <h1>Hello {this.props.name}</h1>;
//   }
// }

import React, { useState } from "react";
import Navbar from "./view/Navbar";
import Footer from "./view/Footer";
import About from "./About";
import Home from "./view/Home";
import Contact from "./view/Contact";
import Curicullum from "./view/Cv";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isVisible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!isVisible);
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Cv" element={<Curicullum />} />
      </Routes>
      {/* <button onClick={handleClick}>Hilangkan dan munculkan</button>
      {isVisible ? <Greeting name="Halo" /> : <></>} */}
      <Footer />
    </>
  );
};

// const Greeting = (props) => {
//   const { name } = props;

//   return <h1>{name}</h1>;
// };

export default App;

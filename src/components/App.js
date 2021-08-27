import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import WeatherApp from "./WeatherApp";
import Header from "./Header";
import Calculator from "./Calculator";
import Home from "./Home";


const App = () => {
  return (
     
    <BrowserRouter>
      <Header />
       <div className="margen">  
      <Route exact path="/WeatherApp" component={WeatherApp} />
      <Route exact path="/Calculator" component={Calculator} />  
      <Route exact path="/" component={Home} /> 
       </div>
    </BrowserRouter>
 );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Loading from './Loading/loading';
import Router from './routes/router';
import "react-datetime/css/react-datetime.css";
import axios from 'axios';
import { useEffect, useState } from 'react';




function App() {


   

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

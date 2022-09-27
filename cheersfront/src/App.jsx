import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import HomeTest from './HomeTest';
import TestComponentReact from './TestComponentReact';


function App() {
  return (
    <>
    <main id="main">
      {/* <TestComponentReact/> */}
      <HomeTest/>

    </main>
    </>
  );
}

export default App;

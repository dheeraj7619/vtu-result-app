import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreenComponent from './components/HomeScreenComponent';
import {Outlet} from "react-router-dom"
import {createBrowserRouter,createRoutesFromElements,Route,Routes,BrowserRouter} from "react-router-dom";
import ResultComponent from './components/ResultComponent';
import ResultPage from './components/ResultPage';
import { createContext, useContext, useState } from 'react';
import AboutComponent from './components/AboutComponent';
import ContextProvider  from './components/ContextProvider';


// export const contextt = () => useContext(Context);

function App() {
  return (
   <>
   <ContextProvider>
      <BrowserRouter>
      <Header/>
          <Routes>
              <Route path='/' element={<HomeScreenComponent/>}/>
              <Route path='/about' element={<AboutComponent/>}/>
              <Route path='/result' element={<ResultComponent/>}/>
              <Route path='/resultpage' element={<ResultPage/>}/>

          </Routes>
          {/* <Footer/> */}
      
      </BrowserRouter>
   </ContextProvider>
   </>
  );
}

export default App;

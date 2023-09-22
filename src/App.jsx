import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './Components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './Pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';
const App = () => {
  const { activeMenu } = useStateContext();


  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg ">


          {/* settings button */}
          <div className="fixed right-4 bottom-4 " style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top" >
              <button type="button" className="text-3xl text-white p-5 hover:drop-shadwo-2xl hover:bg-light-gray" style={{ background: 'blue', borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>



          {/* sidebar  */}
          {activeMenu ?
            (<div className='w-72 fixed dark:bg-secondary-dark-bg bg-white sidebar '><Sidebar /></div>)
            : (<div className='w-0 dark:bg-secondary-dark-bg'>sidebar hidden</div>)}
        </div>

        <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
        >


          {/* Navbar  */}
          <div className="bg-main-bg fixed navbar w-full dark:bg-secondary-dark-bg md:static  ">

            <Navbar />
          </div>


          {/* sidebar optians  */}
          <div>
            <Routes>
              <Route path="/" element={(<Ecommerce />)} />
              <Route path="/ecommerce" element={(<Ecommerce />)} />


              {/* Pages */}
              <Route path="/customers" element={(<Customers/>)} />
              <Route path="/employees" element={(<Employees/>)} />
              <Route path="/orders" element={(<Orders />)} />



              {/* Apps */}
              <Route path="/calendar" element={(<Calendar/>)} />
              <Route path="/kanban" element="Kanban" />
              <Route path="/color-picker" element="ColorPicker" />
              <Route path="/editor" element={(<Editor />)} />



              {/* Charts  */}
              <Route path="/line" element={(<Line />)} />
              <Route path="/area" element="Area" />
              <Route path="/bar" element="Bar" />
              <Route path="/pie" element="Pie" />
              <Route path="/financial" element="Financial" />
              <Route path="/color-mapping" element="ColorMapping" />
              <Route path="/pyramid" element="Pyramid" />
              <Route path="/stacked" element={(<Stacked />)} />
            </Routes>
          </div>
        </div>
        <Footer />

      </BrowserRouter >
    </div>

  )
}

export default App
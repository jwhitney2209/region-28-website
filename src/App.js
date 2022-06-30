import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Directory from './components/Directory';
import Calendar from './components/Calendar';
import HighSchool from './components/HighSchool';
import MiddleSchool from './components/MiddleSchool';
import Jobs from './components/Jobs';

function App() {
  return (
    <>
    <div className='container'>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/directory' element={<Directory />} />
          <Route path='/highschool' element={<HighSchool />} />
          <Route path='/middleschool' element={<MiddleSchool />} />
          <Route path='/jobs' element={<Jobs />} />
        </Routes>
      </div>
      <Footer />
    </div>

    </>
  );
}

export default App;

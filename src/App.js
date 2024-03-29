import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Directory from './pages/Directory';
import Calendar from './components/Calendar';
import HighSchool from './pages/HighSchool';
import MiddleSchool from './pages/MiddleSchool';
import Jobs from './pages/Jobs';
import AddDirector from './pages/AddDirector';

function App() {
  return (
    <>
    <div className='container'>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/directory' element={<Directory />} />
          <Route path='/highschool' element={<HighSchool />} />
          <Route path='/middleschool' element={<MiddleSchool />} />
          <Route path='/jobs' element={<Jobs />} />
          <Route path='/newdirector' element={<AddDirector />} />
        </Routes>
      </div>
      <Footer />
    </div>

    </>
  );
}

export default App;

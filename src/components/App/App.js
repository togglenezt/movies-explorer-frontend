//import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from "../Main/Main";
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

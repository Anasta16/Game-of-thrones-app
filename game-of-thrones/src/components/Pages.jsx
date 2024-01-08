import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Search from './Search';


const Pages = () => {

    return (
        <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/characters' element={<Main />} />
            <Route path='/characters/:search' element={<Search />} />
        </Routes>
    )
}

export default Pages;
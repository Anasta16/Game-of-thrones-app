import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Main from './Main';

const Pages = () => {

    return (
        <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/characters' element={<Main />} />
        </Routes>
    )
}

export default Pages;
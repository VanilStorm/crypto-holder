import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainBlockContainer from '../components/main/mainBlock/container/MainBlockContainer';

const RoutesPage = () => {
  return (
    <div>
      <Routes>
        <Route path={'*'} element={<MainBlockContainer/>}/>
      </Routes>
    </div>
  );
};

export default RoutesPage;

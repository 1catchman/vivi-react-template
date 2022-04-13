import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import MessagesPage from '../pages/MessagesPage';

export default function RoutesLayout() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
    </React.Fragment>
  );
}

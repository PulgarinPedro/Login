import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import { Container, Button } from '@mui/material';
import { NavBar } from './common/NavBar';
import {AppRouter} from "./Router"

function App() {
  return (
   <BrowserRouter>
   <AppRouter/>
   </BrowserRouter>
  );
}

export default App;

import React, { Component } from 'react'// import logo from './logo.svg';
import './App.css';
import '../list/list.js'
import ListI from '../list/list';
import PersonalList from '../personalList/personalList'
import SearchPanel from '../search/searchPanel'
import { BrowserRouter } from 'react-router-dom';
import Main from '../main/main'
// import { Provider } from 'react-redux';



export default class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <React.Fragment>
          <SearchPanel />
          <Main />
        </React.Fragment>
      </BrowserRouter>
    );
  }
};

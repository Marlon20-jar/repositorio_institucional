import React, { Component } from 'react'
//import Header from '../Header/Header'
import Navigation from '../Navigation'
import Loader from '../Loader/Loader'
import { Outlet } from 'react-router-dom'

export default class DocumentsList extends Component {
  render() {
    return (
      <main>
        <Navigation />
        <Loader/>
        <Outlet/>
      </main>
    )
  }
}

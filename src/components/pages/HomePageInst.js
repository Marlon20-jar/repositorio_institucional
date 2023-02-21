import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import { Outlet } from 'react-router-dom'
import NavigationHome from '../NavigationHome';

export default class HomePageInst extends Component {
  componentDidMount() {
    fetch("http://localhost:4000/api/data/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("jwt"),
      }),
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
      });
  }
  render() {
    return (
      <main>
        <NavigationHome/>
        <Loader/>
        <Outlet/>
      </main>
    )
  }
}


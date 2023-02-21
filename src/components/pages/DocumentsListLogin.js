import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from '../Loader/Loader';
import NavigationU from '../NavigationU';


export default class DocumentsListLogin extends Component {
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
                <NavigationU />
                <Loader />
                <Outlet />
            </main>
        )
    }
}



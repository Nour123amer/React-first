import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import Copyright from "../Copuright";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
        <Nav />
        <Outlet />
        <Footer />
        <Copyright />
        </>
    )
}
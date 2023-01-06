import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Link } from "react-router-dom";


export default function Home() {
    return (
            
            <div className="home">
                <Header />
                <Navbar />
                <br/>
                <br/>
                <br/>
                <div className="com">
                <Link to="TuPedido" className="compra">Comprar</Link>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer />
            </div>
            
    )
}
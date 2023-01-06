import React from "react";
import { useSelector } from "react-redux";
import "./List.scss";
import Buy from "../Buy/Buy";
import Footer from "../Footer/Footer";
import { Shopping } from "../Products/Store/Shopping";


export const List = () => {
    const productos = useSelector(state => state.cart.products);

    const totalConSolicitadas = product => product.valorUnidad * product.Solicitadas

    return (
        <section>
            <section className="ini">
                <h1>TU PEDIDO</h1>
                <Shopping />
                <section className="all">
                    <label><b>Total a Pagar </b> &nbsp; $ </label>
                    <div>
                    {productos.reduce((acumulador, product) => (acumulador + totalConSolicitadas(product)), 0)}
                    </div>
                </section>
                <Buy />
            </section>
            <Footer />
        </section>
    )
}


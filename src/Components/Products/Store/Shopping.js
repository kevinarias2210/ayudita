import { useSelector } from "react-redux";
import React from "react";
import eliminar from "./add/eliminar.png"

//Shopping Cart
function Shopping() {
    const products = useSelector(state => state.cart.products)

    console.log("Licores", products);
    
    return (
        <div className="sho">
            {products.map((item, index) => (
                <p key={`itemProduct-${index.toString()}`}>
                    <br />
                    <button className="del" >
                        <img src={eliminar} className="eli" />
                    </button>
                    &nbsp; &nbsp;| &nbsp; &nbsp;
                    <span>{item.Solicitadas} Und. Solicitadas</span> &nbsp; &nbsp; | &nbsp;
                    &nbsp; &nbsp;
                    <span>{item.nameProduct}</span> &nbsp;
                    <span>({item.cantidad})</span> &nbsp; &nbsp; &nbsp; &nbsp;| &nbsp; &nbsp;
                    <span> <br/>Sub-Total &nbsp; $ {item.Solicitadas * item.valorUnidad} &nbsp; &nbsp;|</span>
                </p>
            ))}
        </div>
    )
}
export { Shopping };
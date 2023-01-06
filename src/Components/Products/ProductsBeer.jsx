import { useDispatch } from "react-redux";
import React, { useState } from "react";
import "./Styles.scss";
import addCar from "./Store/add/add.png"
import { info } from "./Store/data";
import { add } from "./Store/carSlice";



export const Beers = () => {

    const { beer } = info;
    const Dispatch = useDispatch()

    const [productsLicors, setProductsLicors] = useState(beer);

    const cambiarSolicitadas = product => e => {
        const newProductsLicors = productsLicors.map(item => {
            if (product.id === item.id) {
                item.Solicitadas = parseInt(e.target.value);
            }
            return item
        });
        setProductsLicors(newProductsLicors)
    }
    return (
        <section className="products">
            {productsLicors.map(item => (
            <>
                <article key={item.id} className="cartProduct">
                    <img src={`../imgs/beer/${item.img}`
                        } alt={item.nameProduct} className="photo" />
                    <div className="qn">
                        <input type="number" id="l1" onChange={cambiarSolicitadas(item)}/>
                    </div>
                    <button onClick={() => { Dispatch(add(item));}} className="btn1">
                        <img alt="agregar" src={addCar} className="agre"/>
                    </button>
                    <div className="info">
                        <p>{item.nameProduct}
                        <br />
                        {item.cantidad}<br />
                        $ {item.valorUnidad} Und.</p>
                    </div>
                </article>
            </>
            ))}
            
        </section>
    )
}

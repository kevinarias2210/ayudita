import React, {useState} from "react";
import Buy from "./Buy.scss";
import davi from "./Img/davi.png";
import dinero from "./Img/dinero.png";
import nequi from "./Img/nequi.png";
import tarjetas from "./Img/tarjetas.png";
import List from "../List/List"
import Footer from "../Footer/Footer"

export default function Buys (){
    const [name, setName] = useState("");
    const [cel, setCel] = useState("");
    const [address, setAddress] = useState("");
    const [com, setCom] = useState("");
    const [medio, setMedio] = useState("");
    return(
        <section>
            <div className="msg">
            <p>Recuerda que puedes realizar el pago de tu pedido por diferentes medios de pago</p>
            </div>
            <section className="type">
                <img src={dinero} alt="" className="efectivo" />
                <span className="efec">Efectivo</span>
                <img src={nequi} alt="" className="nequi"/>
                <span className="neq">Nequi</span>
                <img src={tarjetas} alt="" className="tarjetas"/>
                <span className="tarj">Tarjeta</span>
                <img src={davi} alt="" className="daviplata" />
                <span className="davi">Daviplata</span>
            </section>
            <form>
                <label htmlFor="name">Nombre </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="name"  value={name} 
                onChange={(e) => setName(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="cel">Contacto </label> &nbsp;&nbsp;&nbsp;
                <input type="text" id="cel"  value={cel} 
                onChange={(e) => setCel(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="address">Dirección </label> &nbsp;&nbsp;
                <input type="text" id="ad" value={address} 
                onChange={(e) => setAddress(e.target.value)}/>
                <br/>
                <br/>
                <label htmlFor="">Cual medio de pago usaras? </label> 
                <br/>
                <br/>
                <input type="radio" id="efectivo" value="efectivo" name="medio" 
                onChange={(e) => setMedio(e.target.value)}/>&nbsp;<label htmlFor="efectivo">Efectivo </label> 
                <br/>
                <br/>
                <input type="radio" id="tarjeta" value="tarjeta" name="medio" 
                onChange={(e) => setMedio(e.target.value)}/>&nbsp;<label htmlFor="addr">Tarjeta</label>
                <br/>
                <br/>
                <input type="radio" id="nequi" value="nequi" name="medio" 
                onChange={(e) => setMedio(e.target.value)}/>&nbsp;
                <label htmlFor="nequi">Nequi</label> 
                <br/>
                <br/>
                <input type="radio" id="davi" value="davi" name="medio" 
                onChange={(e) => setMedio(e.target.value)}/>&nbsp;
                <label htmlFor="davi">Daviplata</label>
                <br/>
                <br/>
                <label htmlFor="comment">Comentario adicional </label> &nbsp;&nbsp;
                <br/>
                <br/>
                <textarea type="text" id="coment"  value={com} 
                onChange={(e) => setCom(e.target.value)}/>
            </form>
            <div className="conboton">
            <button className="confirmar">Confirmar Compra</button>
            </div>
        </section>
    )
}
import React, { useState } from "react";
import './sectionContacto.css';
import whatsapp from './img/whatsapp.png';
import nequi from './img/nequi.png';
import Modal from "./pop/Modal";

export function SectionContacto () {
    const [form, setForm] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    const sendWhatsapp = () => {
        if (form?.name && form?.text) {
            let numero = 573044457342;
            let url = `https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${form?.name}, mi tipo de problema con mi carro:%20${form?.text}`;
            window.open(url);   
        }
    }
    
    const changeText = e => setForm({ ...form, [e.target.name]: e.target.value });

    const openModal = () => {
        setIsOpen(true)
    }

    return(
        <section className="section2">
            <div className="section2__container">
                <h2 id="contact" className="aside__container--h2">Contactame</h2>
                <div className="section2__container--form">
                    <h2 className="section2__container--problem">Tipo de problema</h2>
                    <input name="name" className="section2__container--name" type="text" placeholder="Ingresa tu nombre" onChange={changeText} /> 
                    <input name="text" className="section2__container--problema" type="text" placeholder="Ingresa el tipo de problema de tu carro" onChange={changeText} /> 
                </div>
                <div className="section2__container--btns">
                    <button className="section2__container--bton" onClick={sendWhatsapp}>
                        <img src={whatsapp} alt="imagen de whatsapp" />
                        Envíalo por whatsapp
                    </button>
                </div>
                <h2 className="aside__container--h2">Puntos de pago</h2>
                <div className="section2__container--btns">
                    <button className="section2__container--pays" onClick={openModal}>
                        <img id="nequi" src={nequi} alt="imagen de nequi"/>
                        <p id="pagar">Paga con nequi</p>    
                    </button>
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
    )
}
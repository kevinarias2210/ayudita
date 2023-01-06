import { useSelector } from 'react-redux';
import React from 'react';
import eliminar from './add/eliminar.png';

//Shopping Cart
function Shopping() {
  const products = useSelector((state) => state.cart.products);

  console.log('Licores', products);

  return (
    <div>
      {products.map((item, index) => (
        <div  className="sho" key={`itemProduct-${index.toString()}`}>
          <button className="del">
            <figure>
              <img src={eliminar} className="eli" />
            </figure>
          </button>
          <span>{item.Solicitadas} Und. Solicitadas</span>
          <span>{item.nameProduct}</span>
          <span>({item.cantidad})</span>
          <span>
            Sub-Total $ {item.Solicitadas * item.valorUnidad}
          </span>
        </div>
      ))}
    </div>
  );
}
export { Shopping };

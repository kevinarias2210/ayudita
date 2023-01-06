import { useSelector } from 'react-redux';
import React from 'react';
import eliminar from './add/eliminar.png';

//Shopping Cart
function Shopping() {
  const products = useSelector((state) => state.cart.products);

  console.log('Licores', products);

  return (
    <div className="sho">
      {products.map((item, index) => (
        <p key={`itemProduct-${index.toString()}`}>
          <br />
          <button className="del">
            <img src={eliminar} className="eli" />
          </button>
          <span>{item.Solicitadas} Und. Solicitadas</span>
          <span>{item.nameProduct}</span>
          <span>({item.cantidad})</span>
          <span>
            {' '}
            <br />
            Sub-Total $ {item.Solicitadas * item.valorUnidad}
          </span>
        </p>
      ))}
    </div>
  );
}
export { Shopping };

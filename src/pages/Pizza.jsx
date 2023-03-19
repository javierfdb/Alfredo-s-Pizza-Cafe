import React, { Component } from 'react';

import { useContext } from 'react';
import { PizzaContext } from '../context/pizzaContext';

import Banner from "../components/Banner";

export default function pizza() {

    const {detallePizza, handleDetallito} = useContext(PizzaContext);
      
    return (
        <> 
            <Banner url="/banner.png" texto="Conoce tu Pizza"/> 
            <div className="container container-pizza mt-5">
                
                {detallePizza.map((item) => {
                    const {id, img, price,name,cantidad} = item;
                    return  <div key={id} className="row">
                                <div className="col-lg-4">
                                    <div className="box-imagen">
                                        <figure>
                                            <img className='w-100' src={img} alt="Alfredo's Pizza Cafe" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="texto">
                                        <h2>{name}</h2>
                                        <hr />
                                        <p>{item.desc}</p>
                                        <p className='ingre'>Ingredientes:</p>
                                        <ul>
                                            {
                                            item.ingredients.map((item, index) => { return <li key={index} >{item}</li> } )
                                            }   
                                        </ul>
                                        <div className="bajada-detalle">
                                            <h4 className='text-center'>Precio: ${price}</h4>
                                            <button onClick={() => handleDetallito(id, img, price,name,cantidad)} className='btn btn-primary bg-danger'>Añadir <i class="fas fa-cart-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
            })}
                
            </div>
        </>
    )
}
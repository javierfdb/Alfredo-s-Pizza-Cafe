import React, { Component } from 'react';
import { useContext } from 'react';
import { PizzaContext } from '../context/pizzaContext';

export default function Api() {
    
    const {pizza, handleDetalle, handleCarrito} = useContext(PizzaContext);
    return (
        <>
            <div className="row">
                {pizza.map((conPekzi) => {
                    const {id,name,img,price,ingredients,cantidad } = conPekzi;
                    return  <div key={id} className="col-lg-4">
                                <div className="card-pikza">
                                <figure>
                                    <img className='w-100' src={img} alt="Alfredo's Pizza Cafe" />
                                </figure>
                            
                                <div className="texto">
                                    <h2>{name}</h2>
                                    <hr />
                                    <p>Ingredientes:</p>
                                    <ul>
                                    {
                                    ingredients.map((item, index) => { return <li key={index} >{item}</li> } )
                                    }   
                                    </ul>
                                    <h4 className='text-center'>${price.toLocaleString()}</h4>
                                    <hr />
                                </div>
                                <div className="box-btns">
                                    <button onClick={() => handleDetalle(id)} className='btn btn-primary'>Ver más</button>
                                    <button onClick={() => handleCarrito(id, img, price,name,cantidad)} className='btn btn-primary bg-danger'>Añadir <i class="fas fa-cart-plus"></i></button>
                                </div>
                                </div>
                            </div>
                })}
            </div>
        </>
    )
    
}
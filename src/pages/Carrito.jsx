import React, { Component } from 'react';

import { useContext } from 'react';
import { PizzaContext } from '../context/pizzaContext';

import Banner from "../components/Banner";

export default function carrito() {

    const {cartItems, totalPrice, handleSumar,handleRestar,handleDelete} = useContext(PizzaContext);

    return (
        
        <> 
          
              <Banner url="/banner-2.png" texto="Carrito de Pizzas"/>
              <div className="container container-detalle mt-5">
              { cartItems.length === 0 ? <div className="row d-flex justify-content-center"><div className="col-lg-5"><h4 className='text-center mb-3'>Carrito vacío :(</h4> <figure> <img className='w-100' src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGU5NmQ4ODdhZmM1NjdkODIxZjg5YThiOGNlZTM4OWI3MmUxMzA3YSZjdD1n/hJoxCuF26YqkBeylkg/giphy.gif" alt="Alfredo's Pizza Cafe" /></figure> </div></div> : 
                    <div className="row">
                    {cartItems.map((item, index) => {
                        const {id,name,img,price, cantidad} = item;
                        return  <div key={id} className="card-pikza card-pikza-carro col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <figure className='mb-0'>
                                                <img className='w-100' src={img} alt="Alfredo's Pizza Cafe" />
                                            </figure>
                                        </div>
                                        <div className="col-lg-6 texto">
                                            <h4>{name}</h4>
                                        </div>
                                        <div className="col-lg-4 texto sumar-restar">
                                            <p className="price">
                                            ${price} 
                                            </p>

                                            { cantidad === 1 ? <button disabled className='mx-3 first bg-danger' onClick={() => handleRestar(id, img, price,name,cantidad)} ><i class="fas fa-minus"></i></button> : <button className='mx-3 first bg-danger' onClick={() => handleRestar(id, img, price,name,cantidad)} ><i class="fas fa-minus"></i></button> }

                                            <h4 className='mx-3'>{cantidad}</h4>

                                            <button className='mx-3 last bg-primary' onClick={() => handleSumar(id, img, price,name,cantidad)}><i class="fas fa-plus"></i></button>

                                            <button className='mx-3 bg-dark delete' onClick={() => handleDelete(id, img, price,name,cantidad)}><i class="fas fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                </div>
                    })}
                    <div className="box-bajada">
                        <p className='total'>Total: ${totalPrice.toLocaleString()}</p>
                        <button className='btn btn-primary pagar'>Ir a pagar</button>
                        </div>
                    </div>

                    
                    

                    }
                </div>

          

            


        </>
    )
}
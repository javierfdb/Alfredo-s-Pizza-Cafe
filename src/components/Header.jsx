import * as React from 'react';
import { useContext } from 'react';
import { PizzaContext } from '../context/pizzaContext';
import {NavLink} from 'react-router-dom'

export default function Header() {
    const {totalPrice} = useContext(PizzaContext);
    return (
        <header>
                <div className="container">
                <nav>
                    <ul>              
                        <li>
                            <NavLink to="/"><i class="fas fa-pizza-slice"></i> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/carrito"><span><i class="fas fa-shopping-cart"></i> ${totalPrice.toLocaleString()}</span></NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
        </header>
    )
};
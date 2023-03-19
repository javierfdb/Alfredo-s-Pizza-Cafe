
import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export const PizzaContext = createContext()

export default function PizzaContextProvider({children}) {

    // Logica

    const [pizza, setPizza] = useState([]);
    const [detallePizza, setdetallePizza] = useState([]);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('pikzaa')) || [] );

    const navigate = useNavigate();

    const getPizzas = async () => {
        const url = '/pizzas.json';
        const response = await fetch(url)
        const allPizzas = await response.json();
        setPizza(allPizzas);
    }

    useEffect(() => {
        getPizzas();
    }, [pizza]);

    useEffect(() => {
        localStorage.setItem('pikzaa', JSON.stringify(cartItems));
    }, [cartItems]);
    
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    
    const handleDetalle = (id) => {
        const newArray = pizza.filter((item) => id == item.id)
        setdetallePizza(newArray)
        navigate('/pizza/'+ id);
    };

    const handleCarrito = (id, img, price, name, cantidad) => {

        if (cartItems.some((item) => id == item.id)) {
            alert('Producto ya agregado');
        } else {
            setCartItems([...cartItems, { id, img, price, name,cantidad}]);  
            const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
            alert('Producto agregado con éxito');
        }

    }

    const handleDetallito = (id, name, img, price, cantidad) => {

        if (cartItems.some((item) => id == item.id)) {
            alert('Producto ya agregado');
        } else {
            // correccion error raro
            const newBuenoWorker = {
                cantidad: cantidad,
                id: id,
                img: name,
                name: price,
                price: img
               }
               setCartItems([...cartItems, newBuenoWorker]);
        
            const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
            alert('Producto agregado con éxito');
        }
    }

    const handleSumar = (id, price, cantidad) => {
        const nuevoCarrito = cartItems.map(producto => {
            if (producto.id === id) {
              return { ...producto, cantidad: producto.cantidad + 1, price: producto.price + price/cantidad};
            }
            return producto;
          });
          
          setCartItems(nuevoCarrito);
    }   

    const handleRestar = (id, price, cantidad) => {
        const nuevoCarrito = cartItems.map(producto => {
            if (producto.id === id) {
                const nuevaCantidad = producto.cantidad - 1 < 1 ? 1 : producto.cantidad - 1;
                return { ...producto, cantidad: nuevaCantidad, price: producto.price - price/cantidad};
            } 
            return producto;
          });
          
          setCartItems(nuevoCarrito);
    }
    
    const handleDelete = (id) => {
        const nuevoArray = cartItems.filter((item) => id !== item.id)  
        setCartItems(nuevoArray);
    }; 

    return (
        <PizzaContext.Provider value={{pizza:pizza, handleDetalle:handleDetalle, detallePizza: detallePizza, setdetallePizza:setdetallePizza, handleCarrito:handleCarrito, cartItems:cartItems, setCartItems:setCartItems, totalPrice:totalPrice, handleSumar:handleSumar, handleRestar:handleRestar,handleDelete:handleDelete, handleDetallito:handleDetallito}}>
            {children}
        </PizzaContext.Provider>
    )
}  

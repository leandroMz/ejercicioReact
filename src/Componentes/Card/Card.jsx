import { useState } from "react"

const Card = ({ relojes, cart, setCart }) => {
    const { image, marca, precio, stock } = relojes
    const [counter, setCounter] = useState(1)

    const sumar = () => {
        if (stock > counter) {
            setCounter(counter + 1)
        }
    }
    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    return (
        <div className="cardContein">
            <img src={image} alt={marca} />
            <ul>
                <li>{marca}</li>
                <li>${precio}USD</li>
                <li>({stock} disponibles)</li>
            </ul>
            <div className="counterOrder">
                <button className="restar" onClick={restar}>-</button>
                <p>{counter}</p>
                <button onClick={sumar}>+</button>
            </div>
            <button className="counterOrderAdd" onClick={() => setCart([...cart, marca])}>Agregar al carrito</button>

        </div>
    )
}

export default Card
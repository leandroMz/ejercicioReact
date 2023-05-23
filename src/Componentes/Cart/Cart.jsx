export const Cart = ( {cart} ) => {
  return (
    <div className="addCart">
    <h2>Agregados al Carrito</h2>
    <div>
        {cart.map(relojes=>
            <li> {relojes} </li>
        )}
    </div>
    </div>
  )
}
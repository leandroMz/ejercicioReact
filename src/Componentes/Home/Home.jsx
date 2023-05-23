import { useState } from "react"
import { CardConteiner } from "../CardConteiner/CardConteiner"
import { Cart } from "../Cart/Cart"

export const Home = (  ) => {
  const [cart, setCart] = useState([])
  return (
    <div>
        <CardConteiner setCart={setCart} cart={cart} />
        <Cart cart={cart} />

    </div>
  )
}
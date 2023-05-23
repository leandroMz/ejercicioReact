import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mfetch"
import Card from "../Card/Card"

export const CardConteiner = ({cart, setCart}) => {
  const [relojes, setRelojes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    mFetch()
      .then(resultado => {
        setRelojes(resultado)
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))
  }, [])
  return (
    <div className="orderMessage">
      <h2>Relojes</h2>
      <div className="orderCard">
        {isLoading ? (
          <h2>Cargando Relojes</h2>
        ) : (
          <div className="cardGrid">
            {relojes.map((reloj) => (
              <Card key={reloj.id} cart={cart} setCart={setCart} relojes={reloj} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
import React, { useContext } from "react";
import { Route, Link, } from "react-router-dom";
import { store } from "../appContext"

function Burgers({ burgerObj }) {
    const { setItem, clicked, deleteFromBasket, inBasket } = useContext(store)

    const p = burgerObj.ingredients.map((ing, i) =>
        i < burgerObj.ingredients.length - 1
            ? `${ing.split(": ")[1]}, `
            : `${ing.split(": ")[1]}.`)

    return (
        <div className="burger_card">
            <Link to="/burgerCard" id="link" onClick={() => setItem("SETBURGER", burgerObj)}>
                <div className="burger_card_img">
                    <img src={burgerObj.imageUrl} alt={burgerObj.name} />
                    <h3>{burgerObj.name}</h3>
                </div>
                <div className="burger_card_info">
                    <p>{p}</p>
                    <div>
                        <img src="/assets/clock.png" alt="clock" />
                        <h4>{burgerObj.prepTime}</h4>
                        <h4>£{burgerObj.price}</h4>
                    </div>
                    <div>
                        <button onClick={(e) => { clicked(e, burgerObj, 1) }}>{"Add to basket"}</button>
                        <h4>{inBasket(burgerObj.name)}</h4>
                        <button onClick={(e) => { deleteFromBasket(e, burgerObj) }}>{"X"}</button>
                    </div>
                </div>
            </Link>
            <Route path="/burgerCard" />
        </div>
    )
}

export default Burgers
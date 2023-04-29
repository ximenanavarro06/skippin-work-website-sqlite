import React from "react"


function BoatRentalCard({boatRental}) {
    const {name, hourly_price, boat_type, picture} = boatRental;




    return (
        <>
        <div>
            <p>{name}</p>
            <p>{hourly_price}</p>
            <p>{boat_type}</p>
            <p>{picture}</p>
        </div>
        </>
    )
}

export default BoatRentalCard;
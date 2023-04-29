import React from "react"
import BoatRentalCard from "./BoatRentalCard"

function BoatRentalList({boatRentals}) {

    const boatRentalList = boatRentals.map((boatRental) => (
        <BoatRentalCard
        key={boatRental.id}
        boatRental={boatRental}
        />
    ))

    return (
        <>
            <div>
                {boatRentalList}
            </div>
        </>
    )
}

export default BoatRentalList
import React from "react"


function HomeCard({home}) {
    const {address, hours, holiday_hours} = home;




    return (
        <>
        <div>
            <p>{address}</p>
            <p>{hours}</p>
            <p>{holiday_hours}</p>
        </div>
        </>
    )
}

export default HomeCard;
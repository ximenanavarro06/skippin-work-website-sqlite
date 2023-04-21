import React from "react"
import HomeCard from "./HomeCard"

function HomeList({homes}) {

    const homeList = homes.map((home) => (
        <HomeCard
        key={home.id}
        home={home}
        />
    ))

    return (
        <>
            <div>
                {homeList}
            </div>
        </>
    )
}

export default HomeList
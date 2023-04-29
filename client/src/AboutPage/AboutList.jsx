import React from "react"
import AboutCard from "./AboutCard"

function AboutList({abouts}) {

    const aboutList = abouts.map((about) => (
        <AboutCard
        key={about.id}
        about={about}
        />
    ))

    return (
        <>
            <div>
                {aboutList}
            </div>
        </>
    )
}

export default AboutList
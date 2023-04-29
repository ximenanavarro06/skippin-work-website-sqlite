import React from "react"


function AboutCard({about}) {
    const {about_us, who_we_are, purpose} = about;




    return (
        <>
        <div>
            <p>{about_us}</p>
            <p>{who_we_are}</p>
            <p>{purpose}</p>
        </div>
        </>
    )
}

export default AboutCard;
import React from "react"


function ContactCard({contact}) {
    const {email, phone_number} = contact;




    return (
        <>
        <div>
            <p>{email}</p>
            <p>{phone_number}</p>
        </div>
        </>
    )
}

export default ContactCard;
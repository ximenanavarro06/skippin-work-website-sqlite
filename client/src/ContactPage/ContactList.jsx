import React from "react"
import ContactCard from "./ContactCard"

function ContactList({contacts}) {

    const contactList = contacts.map((contact) => (
        <ContactCard
        key={contact.id}
        contact={contact}
        />
    ))

    return (
        <>
            <div>
                {contactList}
            </div>
        </>
    )
}

export default ContactList
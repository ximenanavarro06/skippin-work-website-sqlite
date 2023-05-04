import React, {useState} from "react"
import ContactCard from "./ContactCard"
import ContactForm from "./ContactForm"

function ContactList({contacts}) {
    const [contactForm, setContactForm] = useState([])
    const contactList = contacts.map((contact) => (
        <ContactCard
        key={contact.id}
        contact={contact}
        />
    ))

    //submit contact form
    function handleSubmitContactForm() {
    setContactForm()
    }

    return (
        <>
            <div>
                <ContactForm onSubmitContactForm={handleSubmitContactForm}/>
                {contactList}
                {contactForm}
            </div>
        </>
    )
}

export default ContactList
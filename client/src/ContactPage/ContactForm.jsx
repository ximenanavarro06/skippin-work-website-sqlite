import React, {useState} from "react";

function ContactForm({onSubmitContactForm}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        reason: ""
    })

function handleSubmit(event) {
    event.preventDefault();

    const newContact = {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        reason: formData.reason
    };

    fetch('http://localhost:4000/yourSales', {
        method: "POST",
        headers: {
        "Content-Type" : "application/json",
        },
        body: JSON.stringify(newContact),
    })
    .then ((r) => r.json())
    .then ((newContact) => onSubmitContactForm(newContact))
    setFormData({
        name: "",
        email: "",
        number: "",
        reason: ""
    })
}

function handleChange(event) {
    console.log(event.target.value);
    setFormData({...formData, [event.target.name]: event.target.value})
}

    return (
        <div className="new-shoe-form">
            <h2>Post Your Own Pair Of Air Jordan's to Sell</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    <input type="text" name="name" placeholder="Your name" onChange={handleChange} value={formData.name} />
                </ul>

                <ul>
                    <input type="text" name="email" placeholder="Your email" onChange={handleChange} value={formData.email} />
                </ul>

                <ul>
                    <input type="text" name="number" placeholder="Phone number" onChange={handleChange} value={formData.number} />
                </ul>

                <ul>
                    <input type="text" name="reason" placeholder="Reason" onChange={handleChange} value={formData.reason} />
                </ul>

                <ul>
                    <button type="submit">Submit Contact Form</button>
                </ul>

            </form>
        </div>

    );
}

export default ContactForm;
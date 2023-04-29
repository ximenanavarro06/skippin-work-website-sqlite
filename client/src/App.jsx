import { useState, useEffect } from 'react'
import {Route, Switch} from "react-router-dom";
import './App.css'
import ContactList from './ContactPage/ContactList'
import HomeList from './HomePage/HomeList'
import BoatRentalList from './BoatRentals/BoatRentalList'
import AboutList from './AboutPage/AboutList'
import NavBar from './NavBar'


function App() {
  const [homes, setHomes] = useState([])
  const [contacts, setContacts] = useState([])
  const [boatRentals, setBoatRentals] = useState([])
  const [abouts, setAbouts] = useState([])

  //fetch home page data
  useEffect(() => {
    fetch("http://localhost:3000/home_pages")
    .then((r) => r.json())
    .then(homesData => {
        setHomes(homesData)
    })
}, [])

  //fetch contact page data
  useEffect(() => {
    fetch("http://localhost:3000/contact_pages")
    .then((r) => r.json())
    .then(contactData => {
        setContacts(contactData)
    })
  }, [])

  //fetch boat rental data
  useEffect(() => {
    fetch("http://localhost:3000/boat_rentals")
    .then((r) => r.json())
    .then(boatData => {
        setBoatRentals(boatData)
    })
  }, [])

  //fetch about page data
  useEffect(() => {
    fetch("http://localhost:3000/about_pages")
    .then((r) => r.json())
    .then(aboutData => {
        setAbouts(aboutData)
    })
  }, [])

  return (
    <div className="App">
      <h1>Skippin Work</h1>
      <NavBar/>
        <Switch>

          <Route exact path="/Home">
            <HomeList homes={homes}/>
          </Route>

          <Route exact path="/Contact">
            <ContactList contacts={contacts}/>
          </Route>

          <Route exact path="/BoatRentals">
            <BoatRentalList boatRentals={boatRentals}/>
          </Route>

          <Route exact path="/About">
            <AboutList abouts={abouts}/>
          </Route>

        </Switch>
    </div>
  )
}

export default App

import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const ContactsView = () => {

  window.top.document.title = 'Contacts | Fixxo.'

  return (
    <>
    <MainMenuSection />
    <FooterSection />
    </>
  )
}

export default ContactsView
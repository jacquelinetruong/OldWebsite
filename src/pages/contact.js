import React from "react"

import Layout from "../components/layout"

const ContactPage = () => {

    return (
        <Layout>
                                                                                      {/* makes the link open in another tab */}
            <h1>Contact</h1>                                                                      {/*______________*/}
            <p>The best way to reach me is via <a href="https://www.instagram.com/jacquellinetruong/" target="_Blank">@jacquellinetruong</a> on Instagram!</p>
            <p>I am also on Twitter <a href= "https://twitter.com/jacquellinetr" target="_Blank"> @jacquellinetr</a>!</p>
            <p>Or, email me via itsjacquellinetruong@gmail.com</p>
        </Layout>
    )
}

export default ContactPage

/* Learned:

cannot comment inside a return() method

why? ->  React only works with block comments 

use:       {/*   */






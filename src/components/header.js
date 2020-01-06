import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

//import './header.module.scss'

import headerStyles from './header.module.scss'

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return(

        <div className= {headerStyles.header}>
            <h1>
                <Link className={headerStyles.title}to = "/">{data.site.siteMetadata.title}</Link>
            </h1>
            <div className={headerStyles.list}>
            <p><Link className = {headerStyles.item} activeClassName={headerStyles.activeItem} to ="/">Home</Link></p>
            <p><Link className = {headerStyles.item} activeClassName={headerStyles.activeItem} to ="/about">About</Link></p>
            <p><Link className = {headerStyles.item} activeClassName={headerStyles.activeItem} to = "/blog">Blog</Link></p>
            <p><Link className = {headerStyles.item} activeClassName={headerStyles.activeItem} to = "/contact">Contact</Link></p>
            </div>
        </div>

    )
}

export default Header
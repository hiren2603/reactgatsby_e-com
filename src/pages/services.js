import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reusable/HeroSection"
import Infoblock from "../components/Reusable/Infoblock"
import Dualinfoblock from "../components/Reusable/Dualinfoblock"
import Servicesphotosection from "../components/Services/Servicesphotosection"

const ServicesPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <HeroSection
            img={data.img.childImageSharp.fluid}
            title="Our Awsome Services"
            subtitle=""
            heroclass="services-background"
        />
        <Dualinfoblock
            heading="Service Categories"
            src="src" />
        <Infoblock heading="Our Services" />
        <Servicesphotosection />
    </Layout>
)

export const query = graphql`
         {
           img: file(relativePath: { eq: "about.png" }) {
             childImageSharp {
               fluid(maxWidth: 400, maxHeight: 250) {
                 ...GatsbyImageSharpFluid_tracedSVG
               }
             }
           }
         }
       `
export default ServicesPage

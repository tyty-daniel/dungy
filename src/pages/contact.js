import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Contact() {
    return (
        <Layout>
            <SEO title="contact" />
        <div>
            <h1>get in touch</h1>
            <p>get away from me you heathen</p>
            <p>email me at <a href="mailto:me@dungy.space">me@dungy.space</a></p>
        </div>
        </Layout>
    )
}
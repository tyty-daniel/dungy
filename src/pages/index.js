import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Kageyama from "../images/kageyama-22.jpg"

export default function Home() {
  return (
    <Layout>
      <SEO title="dungy's website" />
      <div className="mx-md bg-white mx-5 border-b border-blue-300 transition duration-300 hover:border-b-8">
          <h1 className="font-sans text-blue-900 text-4xl text-center">dungy</h1>
          <p className="text-blue-900 font-sans text-center p-1">AKA qxoez, daniel</p>
      </div>
      <div className="mx-auto flex flex-row my-2 py-2">
        <div className="w-1/2 bg-white mx-2 p- px-2 text-blue-900 border-b border-blue-300">
          <h2 className="font-sans text-center text-xl">links</h2>
          <ul className="font-sans text-center">
            <li>blog</li>
            <li>startpage</li>
            <li>rym</li>
            <li>mal</li>
            <li>twitter</li>
          </ul>
        </div>
        <div className="w-1/2 bg-white mx-2 p-1 px-2 text-blue-900 border-b border-blue-300">
          <h2 className="font-sans text-center text-xl">about me</h2>
            <p className="font-sans text-blue-900">
                Commie cokehead husbandoist and bara enthusiast
              </p>
            </div>
          </div>
          <div className="mx-md p-2 mx-2 border-b border-blue-300">
            <img src={Kageyama} className="max-w-sm mx-auto"/>
            </div>
   </Layout>
  )
}

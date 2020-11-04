import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
    <div className="p-5 mx-auto text-center">
    <h1 className="text-2xl">daniel! i love you!</h1>
   </div>
   <div className="px-2">
       <div className="flex -mx-2">
         <div className="w-1/3 px-2">
           <div className="bg-white border border-blue-300">
           <h2>chans</h2>
           <ul>
               <li>lainchan</li>
           </ul>
           </div>
           </div>
           <div className="w-1/3 px-2">
           <div className="bg-white border border-blue-300">
             <h2>politix</h2>
             <ul>
               <li>marxists</li>
             </ul>
             </div>
             </div>
       </div>
   </div>
   </Layout>
  )
}

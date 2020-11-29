import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Free from "../images/free-01.png"
import Dimitri from "../images/dimitri-02.jpg"
import Kagami from "../images/kagami-01.jpg"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="startpage" />
    <div className="p-5 mx-auto text-center">
    <h1 className="text-2xl">daniel! お茶はいかがですか</h1>
   </div>
   <div className="px-2">
       <div className="flex -mx-2">
         <div className="w-1/3 px-2">
           <div className="bg-white border border-blue-300 p-2">
           <h2 className="bg-purple-400 font-bold">chans</h2>
           <ul>
               <a href="https://lainchan.org/mega/index.html" target="_blank"><li>lainchan</li></a>
               <a href="https://boards.4channel.org/g/" target="_blank"><li>/g/</li></a>
               <a href="https://boards.4channel.org/his/" target="_blank"><li>/his/</li></a>
               <a href="https://boards.4channel.org/lit/" target="_blank"><li>/lit/</li></a>
               <a href="https://bunkerchan.xyz" target="_blank"><li>bunkerchan</li></a>
           </ul>
           </div>
           </div>
           <div className="w-1/3 px-2">
              <img src={Free} />
              </div>
             <div className="w-1/3 px-2">
           <div className="bg-white border border-blue-300 p-2">
             <h2 className="bg-purple-400 font-bold">soc</h2>
             <ul>
               <a href="https://twitter.com" target="_blank"><li>twitter</li></a>
               <a href="https://www.youtube.com" target="_blank"><li>youtube</li></a>
             </ul>
             </div>
             </div>
       </div>

   </div>
   <div className="p-5">
       <div className="flex -mx-2">
         <div className="w-1/3 px-2">
            <img src={Dimitri} />
           </div>
           <div className="w-1/3 px-2">
           <div className="bg-white border border-blue-300 p-2">
             <h2 className="bg-purple-400 font-bold">other</h2>
             <ul>
               <a href="https://marxists.org" target="_blank"><li>marxists</li></a>
               <a href="https://www.amazon.co.uk" target="_blank"><li>amazon</li></a>
               <a href="https://archiveofourown.org" target="_blank"><li>ao3</li></a>
             </ul>
             </div>
              </div>
              <div className="w-1/3 px-2">
            <img src={Kagami} />
           </div>
       </div>

   </div>
   </Layout>
  )
}

import React from "react"
import Layout from "../components/layout"
import Video from "../components/video"

export default function About() {
    return (
        <Layout>
            <SEO title="about" />
        <div className="mx-auto">
            <h1 className="text-2xl">dungy | qxoez | daniel</h1>
            <p>Welcome to my basic loser website smashed together in Gatsby. If you wanna reach out for whatever reason go to my contact page.</p>
            <p>My only plans with this website is to maybe post about anime, history and some other shit. Once COVID is over and my life becomes more exciting again I'll be sure to post more and generally expand this website a little! :D</p>
            <p>Husbando shitter</p>

            <h2 className="text-xl">current fav song:</h2>
            <Video className="mx-auto border border-blue-300"
                videoSrcURL="https://www.youtube.com/embed/-QbTnoDS9-0"
                videoTitle="Cui Tai Jing \/ 崔苔菁 - 夢摘星 (funk pop, Taiwan, 1978)"
                />

        </div>
        </Layout>
    )
}
import React from "react"
import Layout from "../components/layout"
import Video from "../components/video"

export default function About() {
    return (
        <Layout>
        <div>
            <h1 className="text-2xl">dungy | qxoez | daniel</h1>
            <p>laughing emoji</p>
            <Video className="mx-auto border border-blue-300"
                videoSrcURL="https://www.youtube.com/embed/-QbTnoDS9-0"
                videoTitle="Cui Tai Jing \/ 崔苔菁 - 夢摘星 (funk pop, Taiwan, 1978)"
                />

        </div>
        </Layout>
    )
}
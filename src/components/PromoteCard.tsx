'use client'
import { useState } from "react"
import { VideoPlayer } from "./VideoPlayer"
import { useWindowListener } from "@/hooks/useWindowListener"

export function PromoteCard() {

    const [playing, setPlaying] = useState(true)

    useWindowListener('contextmenu', (e) => {
        e.preventDefault()
    })

    return (
        <div className="mt-28 w-[80%] h-fit shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-sky-600 flex flex-row ">
            <VideoPlayer data-test-id="player" isPlaying={playing} videoSource="/video/getvaccine.mp4"/>
            <div className="ml-5 flex flex-col">
                <div className="h-5/6 text-2xl text-white">
                    Get your vaccine today.
                </div>
                <div className="h-1/6">
                    <button data-test-id="buttonVideoPlayer" className="bg-green-300 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full"
                    onClick={() => setPlaying(!playing)}> {playing ? 'Pause' : 'Play'} </button>
                </div>
            </div>
        </div>
    )
}
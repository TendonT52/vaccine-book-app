"use client"
import { useRef, useEffect } from "react"

export function VideoPlayer({videoSource, isPlaying}: {videoSource: string, isPlaying: boolean}) {
    const vdoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        if (isPlaying) {
            vdoRef.current?.play()
        } else {
            vdoRef.current?.pause()
        }
    }, [isPlaying])
    return (
        <video className="w-[40%]" src={videoSource} ref={vdoRef} muted loop controls/>
    )
}
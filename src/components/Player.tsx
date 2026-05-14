import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import song from "../assets/songs/afro-pop-music.mp3";
import albumCover from "../assets/images/afro-pop.jpg";
import { useEffect, useRef, useState } from "react";

const Player = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    const handlePlayPause = () => {
        setIsPlaying(prev => !prev);
    };

    return(
        <div className="w-[350px] bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl">

            {/* Audio Element */}
            <audio ref={audioRef} src={song} ></audio>

            {/* Album Image */}
            <img src={albumCover} alt="Album" className="w-full h-72 object-cover rounded-2xl" />

            {/* Song Info */}
            <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold">Water | Afro-pop Music</h2>
                <p className="text-zinc-400 mt-2">Kontraa</p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">

                <button className="hover:scale-110 transition cursor-pointer"><SkipBack size={30} /></button>

                <button onClick={handlePlayPause} className="bg-white text-black p-4 rounded-full hover:scale-110 transition cursor-pointer">{isPlaying ? (<Pause size={32} />) : (<Play size={32} fill="black" />)}</button>

                <button className="hover:scale-110 transition cursor-pointer"><SkipForward size={30} /></button>
            </div>

        </div>
    );

}

export default Player;
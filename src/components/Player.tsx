import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { songs } from "../data/songs";
import { useEffect, useRef, useState } from "react";

const Player = () => {

    const[currentSongIndex, setCurrentSongIndex] = useState(0);

    const [isPlaying, setIsPlaying] = useState(false);

    const [currentTime, setCurrentTime] = useState(0);

    const [duration, setDuration] = useState(0);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const currentSong = songs[currentSongIndex];    

    useEffect(() => {

        const audio = audioRef.current;
        
        if (!audio) return;

        const updateTime = () => {
            setCurrentTime(audio.currentTime);
        };

        const updateDuration = () => {
            setDuration(audio.duration);
        };

        audio.addEventListener("timeupdate", updateTime);

        audio.addEventListener("loadedmetadata", updateDuration);        

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }        

        return () => {
            audio.removeEventListener("timeupdate", updateTime);

            audio.removeEventListener("loadedmetadata", updateDuration);
        };

    }, [isPlaying, currentSongIndex]);

    useEffect(() => {
        const audio = audioRef.current;

        if(!audio) return;

        const handleEnded = () => {
            setCurrentSongIndex((prev) => prev === songs.length - 1 ? 0 : prev + 1);
        };

        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("ended", handleEnded);
        };
    }, []);

    const handlePlayPause = () => {
        setIsPlaying(prev => !prev);
    };

    const handleNext = () => {
        setCurrentSongIndex((prev) => prev === songs.length - 1 ? 0 : prev + 1);
        setCurrentTime(0);
    };

    const handlePrevious = () => {
        setCurrentSongIndex((prev) => prev === 0 ? songs.length - 1 : prev - 1);
        setCurrentTime(0);
    };

    const handleSelectSong = (index: number) => {
        setCurrentSongIndex(index);
        setIsPlaying(true);
    };

    const formatTime = (time: number) => {

            if(isNaN(time)) return "0:00";

            const minutes = Math.floor(time / 60);

            const seconds = Math.floor(time % 60);

            return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {

            const newTime = Number(e.target.value);

            const audio = audioRef.current;

            if(!audio) return;

            audio.currentTime = newTime;

            setCurrentTime(newTime);
        };

    return(
        <div className="w-87.5 bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl">

            {/* Audio Element */}
            <audio ref={audioRef} src={currentSong.audioSrc} ></audio>

            {/* Album Image */}
            <img src={currentSong.imageSrc} alt={currentSong.title} className="w-full h-72 object-cover rounded-2xl" />

            {/* Song Info */}
            <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold">{currentSong.title}</h2>
                <p className="text-zinc-400 mt-2">{currentSong.artist}</p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">

                <button onClick={handlePrevious} className="hover:scale-110 transition cursor-pointer"><SkipBack size={30} /></button>

                <button onClick={handlePlayPause} className="bg-white text-black p-4 rounded-full hover:scale-110 transition cursor-pointer">{isPlaying ? (<Pause size={32} />) : (<Play size={32} fill="black" />)}</button>

                <button onClick={handleNext} className="hover:scale-110 transition cursor-pointer"><SkipForward size={30} /></button>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">

                <input type="range" min="0" max={duration || 0} value={currentTime} onChange={handleSeek} className="w-full cursor-pointer" />

                <div className="flex justify-between text-sm text-zinc-300 mt-2">

                    <span>{formatTime(currentTime)}</span>

                    <span>{formatTime(duration)}</span>
        

                </div>


            </div>

            {/* Playlist */}
            <div className="mt-8 space-y-3">
                {songs.map((song, index) => (
                    <div key={index} onClick={() => handleSelectSong(index)} className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition
                        
                        ${currentSongIndex === index ? "bg-white text-black" : "bg-white/10 hover:bg-white/20"}
                    `}>

                        <img src={song.imageSrc} alt={song.title} className="w-14 h-14 rounded-lg object-cover" />

                        <div>
                            <h3 className="font-semibold">{song.title}</h3>

                            <p className={`text-sm ${currentSongIndex === index ? "text-zinc-700" : "text-zinc-300"}`}>{song.artist}</p>
                        </div>



                    </div>
                ))}
            </div>

        </div>
    );

}

export default Player;
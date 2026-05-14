import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

function Player(){

    const isPlaying = false;

    return(
        <div className="w-[350px] bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl">

            {/* Album Image */}
            <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f" alt="Album" className="w-full h-72 object-cover rounded-2xl" />

            {/* Song Info */}
            <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold">Blending Lights</h2>
                <p className="text-zinc-400 mt-2">The Weeknd</p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-8">

                <button className="hover:scale-110 transition cursor-pointer"><SkipBack size={30} /></button>

                <button className="bg-white text-black p-4 rounded-full hover:scale-110 transition cursor-pointer">{isPlaying ? (<Pause size={32} />) : (<Play size={32} fill="black" />)}</button>

                <button className="hover:scale-110 transition cursor-pointer"><SkipForward size={30} /></button>
            </div>

        </div>
    );

}

export default Player;
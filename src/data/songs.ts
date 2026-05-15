import type { Song } from "../types/song";

import song1 from "../assets/songs/afro-pop-music.mp3";
import song2 from "../assets/songs/dance-playful-night.mp3";
import song3 from "../assets/songs/gvidon-medicine.mp3";
import song4 from "../assets/songs/honey-kisses.mp3";
import song5 from "../assets/songs/upbeat-happy-corporate.mp3";

import cover1 from "../assets/images/afro-pop.jpg";
import cover2 from "../assets/images/dance-playful.jpg";
import cover3 from "../assets/images/gvidon.jpg";
import cover4 from "../assets/images/honey.jpg";
import cover5 from "../assets/images/upbeat.jpg";

export const songs: Song[] = [
    {
        title: "Water | Afro-pop Music",
        artist: "Kontraa",
        audioSrc: song1,
        imageSrc: cover1
    },
    {
        title: "Dance Playful Night",
        artist: "AleXZavesa",
        audioSrc: song2,
        imageSrc: cover2
    },
    {
        title: "Gvidon - Medicine",
        artist: "Gvidon",
        audioSrc: song3,
        imageSrc: cover3
    },
    {
        title: "Honey Kisses",
        artist: "DeltaX-Music",
        audioSrc: song4,
        imageSrc: cover4
    },
    {
        title: "Upbeat Happy Corporate",
        artist: "kornevmusic",
        audioSrc: song5,
        imageSrc: cover5
    }
];

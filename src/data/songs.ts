import type { Song } from "../types/song";

import cover1 from "../assets/images/afro-pop.jpg";
import cover2 from "../assets/images/dance-playful.jpg";
import cover3 from "../assets/images/gvidon.jpg";
import cover4 from "../assets/images/honey.jpg";
import cover5 from "../assets/images/upbeat.jpg";

export const songs: Song[] = [
    {
        title: "Water | Afro-pop Music",
        artist: "Kontraa",
        audioSrc: "https://res.cloudinary.com/dylitgp3e/video/upload/v1778825358/afro-pop-music_b3z9ly.mp3",
        imageSrc: cover1
    },
    {
        title: "Dance Playful Night",
        artist: "AleXZavesa",
        audioSrc: "https://res.cloudinary.com/dylitgp3e/video/upload/v1778825261/dance-playful-night_pej7gj.mp3",
        imageSrc: cover2
    },
    {
        title: "Gvidon - Medicine",
        artist: "Gvidon",
        audioSrc: "https://res.cloudinary.com/dylitgp3e/video/upload/v1778825311/gvidon-medicine_dljjvz.mp3",
        imageSrc: cover3
    },
    {
        title: "Honey Kisses",
        artist: "DeltaX-Music",
        audioSrc: "https://res.cloudinary.com/dylitgp3e/video/upload/v1778825333/honey-kisses_obgtam.mp3",
        imageSrc: cover4
    },
    {
        title: "Upbeat Happy Corporate",
        artist: "kornevmusic",
        audioSrc: "https://res.cloudinary.com/dylitgp3e/video/upload/v1778825312/upbeat-happy-corporate_oudd17.mp3",
        imageSrc: cover5
    }
];

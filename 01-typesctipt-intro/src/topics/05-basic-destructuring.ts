
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 50,
    songDuration: 30,
    song: "Welcome To The Jungle",
    details: {
        author: "Guns Roses",
        year: 1988
    }
}

//destructuring
const song = "new song"
const { song: anotherSong, details } = audioPlayer
const { author, year } = details

// console.log('Song ', anotherSong);
// console.log('Author ', author);
// console.log('Year ', year);

//Normal
// console.log('Song ', audioPlayer.song);
// console.log('Author ', audioPlayer.details.author);

// destructuring arrays
// Destructuring
const [, , trunks = 'Not found']: string[] = ['Goku', 'Gohan', 'Trunks'];

//Normal
// const dbz: string[] = ['Goku', 'Gohan', 'Trunks'];
console.log('Personaje: ', trunks);


export { };
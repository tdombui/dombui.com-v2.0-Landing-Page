import { useState, useEffect, useRef } from "react";
import NewsTicker from "./components/newsticker";
import Background from "./components/background";
import Timer from "./components/timer";
import YouTube from "react-youtube";
import { Dices, Play, Pause, SkipForward } from "lucide-react";
import { motion } from "framer-motion";
import "./App.css";

const songs = [
  {
    title: "Be Quiet and Drive (Far Away)",
    artist: "Deftones",
    youtubeId: "drLXI640EmE",
  },
  {
    title: "1979",
    artist: "Smashing Pumpkins",
    youtubeId: "Lr58WHo2ndM",
  },
  {
    title: "Faith in Strangers",
    artist: "Andy Stott",
    youtubeId: "X7JHDBCaR0w",
  },
  {
    title: "Gallowdance (Deflex Rave Edit)",
    artist: "Lebanon Hanover",
    youtubeId: "vbIy2X45ULo",
  },
  {
    title: "Calendar Girl (slowed)",
    artist: "Neil Sedaka",
    youtubeId: "kJuU9IHhWDE",
  },
  {
    title: "Windowlicker (Outro)",
    artist: "Aphex Twin",
    youtubeId: "jfHKKay0Hoo",
  },
  {
    title: "Virile",
    artist: "The Blaze",
    youtubeId: "8a9Cb08oJkM",
  },
  {
    title: "Nurse!",
    artist: "bar italia",
    youtubeId: "9dP8M3yvcl4",
  },
  {
    title: "Swims",
    artist: "Boddika & Joy Orbison",
    youtubeId: "ZFEXRK5o-TQ",
  },
  {
    title: "Habit",
    artist: "Cool Company",
    youtubeId: "e8uEdLCnrM4",
  },
  {
    title: "Die Reisen",
    artist: "Visonia Et Dopplereffekt",
    youtubeId: "r2CldbV6sRk",
  },
  {
    title: "24x33",
    artist: "Betonkust & Palmbomen II",
    youtubeId: "qG00JgL7TH8",
  },
  {
    title: "Moodswing",
    artist: "Casino Versus Japan",
    youtubeId: "2Tja9Vmfgzc",
  },
  {
    title: "Bbydhyonchord",
    artist: "Aphex Twin",
    youtubeId: "HCKzsxN0h50",
  },
  {
    title: "Smile Please",
    artist: "Dean Blunt",
    youtubeId: "LWrMe36Gl-4",
  },
  // Add more songs as needed
];

function App() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const audioRef = useRef(new Audio());
  useEffect(() => {
    audioRef.current.src = `https://www.youtube.com/watch?v=${songs[currentSongIndex].youtubeId}`;
  }, [currentSongIndex]);

  const changeBackground = () => {
    setBackgroundIndex((prevIndex) => (prevIndex + 1) % totalBackgrounds);
  };
  const totalBackgrounds = 20;

  const playPause = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
  };

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: 1,
    },
  };
  const videoContainerStyle = {
    bottom: "0",
    left: "0",
    padding: "12px",
    color: "white",
    fontSize: "14px",
    zIndex: "1000", // Ensure it appears above other elements
    height: isPlaying ? "auto" : "0", // Set the height to auto when playing, 0 when not playing
    overflow: "hidden",
    transition: "height 0.3s ease", // Add smooth transition
  };
  const handleVideoEnd = () => {
    playNextSong();
  };
  return (
    <>
      <NewsTicker />
      <Background backgroundIndex={backgroundIndex} />
      <Timer />
      <div className="place-items-center mt-8">
        <motion.button
          onClick={changeBackground}
          className="bg-emerald-300 text-emerald-50 py-2 px-7 rounded-full button mb-4"
          style={{ outline: "none" }}
          whileTap={{
            scale: 0.7,
          }}
          initial={{ opacity: 0, y: -400, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            duration: 1.25,
          }}
        >
          <Dices className="w-9 h-9 " />
        </motion.button>
      </div>
      <motion.button
        onClick={playPause}
        className="text-emerald-50 mt-4 mr-10 bg-transparent py-1 px-1 rounded-lg button"
        style={{ outline: "none" }}
        whileHover={{
          scale: 0.9,
        }}
        initial={{ opacity: 0, x: -400, scale: 0 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          type: "spring",
          duration: 1.25,
        }}
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4" />
        )}
      </motion.button>
      <motion.button
        onClick={playNextSong}
        className="text-emerald-50 mt-4 bg-transparent py-1 px-1 rounded-lg button"
        style={{ outline: "none" }}
        whileHover={{
          scale: 0.9,
        }}
        initial={{ opacity: 0, x: 400, scale: 0 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          type: "spring",
          duration: 1.25,
        }}
      >
        <SkipForward className="w-4 h-4" />
      </motion.button>
      {isPlaying && (
        <div
          className=" grid text-center text-white mt-4 fixed"
          style={videoContainerStyle}
        >
          <p>
            {songs[currentSongIndex].title} by {songs[currentSongIndex].artist}
          </p>
        </div>
      )}
      {isPlaying && (
        <YouTube
          videoId={songs[currentSongIndex].youtubeId}
          opts={opts}
          onEnd={handleVideoEnd}
        />
      )}
    </>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";
import { SoundOn, SoundOff } from "./Icons";

// Floating music button. Looks for /music.mp3 in the public folder.
// If no file is present it simply hides itself, so the site never breaks.
export default function MusicToggle({ playSignal }) {
  const audioRef = useRef(null);
  const [available, setAvailable] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Probe for a music file without blocking render. We require an audio
    // content-type so a dev-server SPA fallback (which returns HTML) doesn't
    // trip the check and show a button that plays nothing.
    fetch("/music.mp3", { method: "HEAD" })
      .then((r) => {
        const type = r.headers.get("content-type") || "";
        setAvailable(r.ok && type.includes("audio"));
      })
      .catch(() => setAvailable(false));
  }, []);

  // When the envelope opens, try to start playback (best effort).
  useEffect(() => {
    if (playSignal && available && audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [playSignal, available]);

  function toggle() {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
  }

  if (!available) return null;

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop preload="none" />
      <button className={`music-btn ${playing ? "spin" : ""}`} onClick={toggle} aria-label={playing ? "Pause music" : "Play music"}>
        {playing ? <SoundOn /> : <SoundOff />}
      </button>
    </>
  );
}

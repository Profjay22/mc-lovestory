import { useEffect, useState } from "react";
import Envelope from "./components/Envelope";
import Hero from "./components/Hero";
import ScratchReveal from "./components/ScratchReveal";
import Countdown from "./components/Countdown";
import Story from "./components/Story";
import Families from "./components/Families";
import Details from "./components/Details";
import Gallery from "./components/Gallery";
import Faq from "./components/Faq";
import Registry from "./components/Registry";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";
import MusicToggle from "./components/MusicToggle";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [dateRevealed, setDateRevealed] = useState(false);

  // Lock scrolling until the invitation is opened.
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
  }, [opened]);

  return (
    <>
      {/* Envelope stays mounted through its own opening animation, then
          removes itself. onOpen just reveals/unlocks the site behind it. */}
      <Envelope onOpen={() => setOpened(true)} />
      <MusicToggle playSignal={opened} />

      <main className={`site ${opened ? "revealed" : ""}`}>
        <Hero />
        <ScratchReveal onReveal={() => setDateRevealed(true)} />
        <Countdown revealed={dateRevealed} />
        <Story />
        <Families />
        <Details />
        <Gallery />
        <Faq />
        <Registry />
        <Rsvp />
        <Footer />
      </main>
    </>
  );
}

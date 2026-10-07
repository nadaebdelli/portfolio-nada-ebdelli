import Hero from './components/sections/Hero/Hero';
import Navbar from './components/layout/Navbar';
function App() {
  return (
    <>
    <Navbar />
      <main>
        <Hero />
        <section id="about">About me</section>
        <section id="skills">Skills</section>
        <section id="experience">Experience</section>
        <section id="projects">Projects</section>
        <section id="contact">Contact</section>
      </main>
    </>
  );
}

export default App;

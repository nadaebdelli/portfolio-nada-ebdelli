import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="hero__eyebrow">Welcome to my portfolio</p>

      <h1 className="hero__title">
        Hi, I&apos;m Nada.
      </h1>

      <p className="hero__description">
        I create thoughtful digital experiences with code and creativity.
      </p>

      <a className="hero__button" href="#projects">
        Explore my work
      </a>

      <div className="hero__orb" aria-hidden="true" />
    </section>
  )
}

export default Hero
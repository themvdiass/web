import React from "react";
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    const { day, dayNight } = this.props;
    return (
      <section className={`body-${day}`}>
        <input type="checkbox" name="scroll" id="scroll" className="scroll" />
        <section className="hd-pages" >
          <div className={`start-${day}`}>
            <Link className="back" to="/" >Home</Link>
            <h3 className={`current-page-${day}`}>{`/ About`}</h3>
          </div>
          <div className={`end-${day}`}>
            <Link className="back" to="/projects">Projects</Link>
            <Link className="back" to="/contact">Contact</Link>
            <button onClick={dayNight}>
              {day ? <i className="ri-moon-fill" /> : <i class="ri-sun-fill" />}
            </button>
          </div>
        </section>
        <aside className={`principal-${day}`}>
          <section className={`learn-${day}`}>
            <h1>Welcome</h1>
            <h3>I'm Vinícius Dias</h3>
            <p>I'm Brazilian and I'm 21 years old. I work with web development, and I use several tools, languages, libraries and frameworks.
              Since I was little I always liked the universe of technology, and that's why I graduated from an excellent specialized school (<a className="trybe" href="https://www.betrybe.com/" target="blank" >Trybe</a>), in order to develop my skills!
              In addition to learning to work and specialize in Hard Skills, I also learned more about Soft Skills, which I consider very important!
            </p>
          </section>
          <section className="images">
            <div className="box-img">
              <div className="image-1"></div>
            </div>
          </section>
        </aside>
        <div className={`header-mobile-${day}`}>
          <label htmlFor="scroll" className="menu ri-menu-4-fill"/>
          <p>About</p>
          <button onClick={dayNight}>
              {day ? <i className="ri-moon-fill" /> : <i class="ri-sun-fill" />}
            </button>
        </div>
        <div className={`div-menu-${day}`}>
          <Link to="/" className="case">Home</Link>
          <Link to="projects" className="case">Projects</Link>
          <Link to="contact" className="case">Contact</Link>
        </div>
      </section>
    )
  }
}

export default About;
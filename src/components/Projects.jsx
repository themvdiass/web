import React from "react";
import { Link } from "react-router-dom";

class Projects extends React.Component {
  render() {
    const { day, dayNight } = this.props;
    return (
      <section className={`body-${day}`}>
        <input type="checkbox" name="scroll" id="scroll" className="scroll" />
        <section className="hd-pages" >
          <div className={`start-${day}`}>
            <Link className="back" to="/" >Home</Link>
            <h3 className={`current-page-${day}`}>{`/ Projects`}</h3>
          </div>
          <div className={`end-${day}`}>
            <Link className="back" to="/about">About</Link>
            <Link className="back" to="/contact">Contact</Link>
            <button onClick={dayNight}>
              {day ? <i className="ri-moon-fill" /> : <i class="ri-sun-fill" />}
            </button>
          </div>
        </section>
        <aside className={`manu-${day}`}>
            <i className="settings fa-solid fa-gears" />
            <p>Working</p>
        </aside>
        <div className={`header-mobile-${day}`}>
          <label htmlFor="scroll" className="menu ri-menu-4-fill" />
          <p>Projects</p>
          <button onClick={dayNight}>
            {day ? <i className="ri-moon-fill" /> : <i class="ri-sun-fill" />}
          </button>
        </div>
        <div className={`div-menu-${day}`}>
          <Link to="/" className="case">Home</Link>
          <Link to="about" className="case">About</Link>
          <Link to="contact" className="case">Contact</Link>
        </div>
      </section>
    )
  }
}

export default Projects;

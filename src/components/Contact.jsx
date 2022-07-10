import React from "react";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    const { day, dayNight } = this.props;
    return (
      <section className={`body-${day}`}>
        <input type="checkbox" name="scroll" id="scroll" className="scroll" />
        <section className="hd-pages" >
          <div className={`start-${day}`}>
            <Link className="back" to="/" >Home</Link>
            <h3 className={`current-page-${day}`}>{`/ Contact`}</h3>
          </div>
          <div className={`end-${day}`}>
            <Link className="back" to="/about">About</Link>
            <Link className="back" to="/projects">Projects</Link>
            <button onClick={dayNight}>
              {day ? <i className="ri-moon-fill" /> : <i class="ri-sun-fill" />}
            </button>
          </div>
        </section>
        <aside className={`manu-${day}`}>
            <i className="settings fa-solid fa-gears" />
            <p>Em Manutenção</p>
        </aside>
        <div className={`header-mobile-${day}`}>
          <label htmlFor="scroll" className="menu ri-menu-4-fill"/>
          <p>Contact</p>
          <button onClick={dayNight}>
              {day ? <i className="ri-moon-fill" /> : <i class="ri-sun-fill" />}
            </button>
        </div>
        <div className={`div-menu-${day}`}>
          <Link to="/" className="case">Home</Link>
          <Link to="about" className="case">About</Link>
          <Link to="projects" className="case">Projects</Link>
        </div>
      </section>
    )
  }
}

export default Contact;

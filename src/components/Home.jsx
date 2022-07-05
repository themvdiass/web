import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      day: true,
      search: '',
    }
  }

  dayNight = () => {
    const { day } = this.state;
    this.setState({ day: !day })
  }

  onInputChange = ({ target }) => {
    this.setState({ search: target.value })
  }

  render() {
    const { day, search } = this.state;
    const { onInputChange } = this
    return (
      <section className={`body-home-${day}`}>
        <div className={`box-img-${day}`}>
          <article className="content">
            <div className="hd">
              <h1 className="id">{'<mv.diass />'}</h1>
              <button onClick={() => { this.dayNight() }}>
                {day ? <i className="ri-moon-fill" /> : <i class="ri-sun-fill" />}</button>
            </div>
            <div className="second">
              <span className="wlcm">Welcome!</span>
              <span className="call">Follow my projects developed in my trajectory as a WEB developer</span>
            </div>
          </article>
        </div>
        <section className="principal">
          <section className={`apresentation-${day}`}>
            <p>Hello, I'm</p>
            <h1>Vinícius Dias</h1>
          </section>
          <p className="explore">Feel free to explore the projects!</p>
          <section className={`inputX-${day}`}>
            <input value={search} onChange={onInputChange} className={`search-${day}`} type="text" placeholder="Project" />
            {search.length > 0 ? <button><i className="ri-search-2-line"></i></button> : ''}
          </section>
          <section className="links">
            <Link className={`link-${day}`} to="about">About</Link>
            <Link className={`link-${day}`} to="projects">Projects</Link>
          </section>
          <section className="little">
            <p className="">Since I was very young I have always been fascinated by virtual worlds and at the beginning of 2022 I joined a web development school. I learned to love programming and became very good at it...</p>
          </section>
          <section className="socials">
            <a className="insta" href="https://www.instagram.com/mv.diass/"><i className="ri-instagram-line"></i></a>
            <a className="linkedin" href="https://www.linkedin.com/in/vin%C3%ADcius-dias-3150b022b/"><i className="ri-linkedin-line"></i></a>
            <a className="git" href="https://github.com/themvdiass"><i className="ri-github-line"></i></a>
          </section>
        </section>
      </section>
    )
  }
}

export default Home;
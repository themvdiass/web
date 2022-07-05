import React from "react";
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <section className="body-home">
        <div className="box-img">
          <article className="content">
            <h1 className="id">{'<mv.diass />'}</h1>
            <div className="second">
              <span className="wlcm">Welcome!</span>
              <span className="call">Follow my projects developed in my trajectory as a WEB developer</span>
            </div>
          </article>
        </div>
        <section className="principal">
          <section className="apresentation">
            <p>Hello, my name is</p>
            <h1>Vinícius Dias</h1>
          </section>
          <section className="explore">
            <p className="free">Feel free to explore the projects!</p>
          </section>
          <section className="inputX">
            <input className="search" type="text" placeholder="Project" />
            <button><i class="ri-search-2-line"></i></button>
          </section>
          <section className="links">
            <Link className="link" to="about">About</Link>
            <Link className="link" to="projects">Projects</Link>
          </section>
          <section className="little">
            <p className="">Since I was very young I have always been fascinated by virtual worlds and at the beginning of 2022 I joined a web development school. I learned to love programming and became very good at it...</p>
          </section>
          <section className="socials">
            <a className="insta" href="https://www.instagram.com/mv.diass/"><i class="ri-instagram-line"></i></a>
            <a className="linkedin" href="https://www.linkedin.com/in/vin%C3%ADcius-dias-3150b022b/"><i class="ri-linkedin-line"></i></a>
            <a className="git" href="https://github.com/themvdiass"><i class="ri-github-line"></i></a>
          </section>
        </section>
      </section>
    )
  }
}

export default Home;
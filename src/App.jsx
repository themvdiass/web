import './App.css';
import './App-Mobile.css'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import React from 'react';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      day: true,
    }

  }

  dayNight = () => {
    const { day } = this.state;
    this.setState({ day: !day })
  }

  render() {
    const { dayNight } = this;
    const { day } = this.state;
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/"><Home dayNight={ dayNight } day={ day } /></Route>
          <Route exact path="/about"><About dayNight={ dayNight } day={ day }/></Route> 
          <Route exact path="/projects"><Projects dayNight={ dayNight } day={ day }/></Route> 
          <Route exact path="/contact"><Contact dayNight={ dayNight } day={ day }/></Route> 
          <Route path="*" component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

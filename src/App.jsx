import './App.css';
import './App-Mobile.css'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <HashRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </HashRouter>
  );
}

export default App;

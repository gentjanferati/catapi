import Nav from "./components/nav/nav";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Upload from './components/upload/upload';
import Home from './components/home/home';
import {useSelector} from 'react-redux';

function App() {
  const stat = useSelector(state => state.responseStatus.status)
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/upload" render={()=> stat ? (<Redirect to='/'/>) : (<Upload/>)}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

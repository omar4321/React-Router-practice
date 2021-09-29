import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
import Navber from './Component/Navber'
import Post from './Component/Post'
import Error from './Component/Error'




function App() {
  return (
    <div className="App">
    
    <Router>
      <Navber/>
   <Switch>
   <Route exact path="/Home" component={Home} />
   <Route exact path="/About" component={About} />
   <Route exact path="/Services" component={Services} />
   <Route exact path="/Navber" component={Navber} />
   <Route exact path="/Post/:catagory/:topic" component={Post} />
   <Route  component={Error} />

   </Switch>
   
  
   </Router>
       
    
    </div>
  );
}

export default App;

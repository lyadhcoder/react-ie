import React, {Fragment} from 'react';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import PageHome from './components/PageHome';
import PageService from './components/PageService';
import PageContact from './components/PageContact';
import Nomatch from './components/PageNomatch';
import PageComingSoon from './components/PageComingSoon';
import PagePayment from './components/PagePayment';
import './bootstrap.min.css';
import './style.css';
import './sstyle.css';
function App() {
  return (
    <div>
      <Router>
        <Fragment>
        <Switch>
        <Route exact path="/" component={PageHome}/>
        <Route path="/About/" component={PageService}/>
        <Route path="/Contact" component={PageContact}/>
        <Route path="/Gallery" component={PageComingSoon}/>
        <Route path="/Payment" component={PagePayment}/>
        <Route component={Nomatch} />
        </Switch>      
        </Fragment>
      </Router>
      
    </div>
  );
}

export default App;
import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import PersonalCard from './Components/PersonalCard.jsx';

// <Route exact path="/BadgesNew">
// <BadgeNew />
// </Route>

function App() {
  return(
      <BrowserRouter>
          <Switch>
           <Route exact path="/PersonalCard">
              <PersonalCard />
            </Route>

      
          
          </Switch>
      </BrowserRouter>

  )
}

export default App;

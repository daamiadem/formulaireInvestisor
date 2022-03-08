import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import LoginInvestisor from "./components/LoginInvetisor";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path='/loginInvestor'> <LoginInvestisor></LoginInvestisor> </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./Pages/Home";
import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
function App() {
  const [loggedIn, setloggedIn] = useState(false);
  return (
    <div className="App">
      <Router>
        <Switch>
          {!loggedIn ? (
            <>
              <Route exact path="/">
                <Home setloggedIn={setloggedIn} />
              </Route>

              <Route path="/SignUp">
                <SignUpPage setloggedIn={setloggedIn} />
              </Route>
            </>
          ) : (
            <Route path="/">
              <SignUpPage setloggedIn={setloggedIn} />
            </Route>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

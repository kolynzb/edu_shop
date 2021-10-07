import "./App.css";
import Home from "./Pages/Home";
import SignUpPage from "./Pages/SignUpPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import ProductDetails from "./Pages/ProductDetails";
import NotFoundPg from "./Pages/NotFoundPg";
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
              <Route exact path="/products-details/:id">
                <ProductDetails setloggedIn={setloggedIn} />
              </Route>

              <Route exact path="/SignUp">
                <SignUpPage setloggedIn={setloggedIn} />
              </Route>
              {/* <Route component={NotFoundPg} /> */}
            </>
          ) : (
            <>
              <Route path="/">
                <SignUpPage setloggedIn={setloggedIn} />
              </Route>
              {/* <Route component={NotFoundPg} /> */}
            </>
          )}
          <Route component={NotFoundPg} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoggedInRoute } from "./check_auth";
import Login from "./views/auth/login";
import Register from "./views/auth/register";
import Home from "./views/pages/home";
import ForgotPassword from "./views/auth/forgot_password";

function App() {
  return (
   <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" name="Home" component={Home} />
          <Route exact path="/home" name="Home" component={Home} />
          <LoggedInRoute exact path="/login" name="Login" component={Login} />
          <LoggedInRoute
            exact
            path="/fogotpassword"
            name="Login"
            component={ForgotPassword}
          />
          <LoggedInRoute
            exact
            path="/register"
            name="Register"
            component={Register}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

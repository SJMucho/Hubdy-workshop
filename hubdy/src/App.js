import "./styling/app.css";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import { Route, Link, Switch, useHistory } from "react-router-dom";

function App() {
  return (
    // <Switch>
    //   <Route path="/" component={Login} />
    // </Switch>
    <div>
      <Login />
      {/* <CreateAccount /> */}
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Alert } from "./components/Alert";
import { FirebaseState } from "./context/firebase/FirebaseState";
import { AlertState } from "./context/alert/AlertState";

/**
 * Route:exact = true -> гарантирует что компонент будет отрисован только в том случае, если маршрут точно совпадает.
 * В нашем случае /about никогда бы не отрисовался т.к Home начинается с корня / и совпадает со всеми маршрутами.
 */

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={"/"} exact component={Home} />
              <Route path={"/about"} component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;

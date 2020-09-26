import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";

/**
 * Route:exact = true -> гарантирует что компонент будет отрисован только в том случае, если маршрут точно совпадает.
 * В нашем случае /about никогда бы не отрисовался т.к Home начинается с корня / и совпадает со всеми маршрутами.
 */

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/about"} component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

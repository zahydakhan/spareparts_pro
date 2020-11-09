import React, { useState } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Register from "./login/register";
import Login from "./login/login";
import Logout from "./login/logout";
import CartPage from "./cart-page/cart-page.component";
import { useLocalStateCart } from "../hooks";
import Example from "./cart-page/print-pdf.component";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  //const [cartItems, setCartItems] = useState([]);
  const [value, setValue] = useState(0);
  const [cart, setCart] = useLocalStateCart("cart");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          noOfOrders={cart.length ? cart.length : 0}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <LandingPage cart={cart} setCart={setCart} />}
          />
          <Route
            exact
            path="/pdf"
            render={() => <Example cart={cart} setCart={setCart} />}
          />

          <Route
            exact
            path="/roller"
            component={() => (
              <div>
                Solutions
                {[...new Array(25)]
                  .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                  )
                  .join("\n")}
              </div>
            )}
          />

          <Route
            exact
            path="/spendanalytics"
            component={() => (
              <div>
                Spend Analytics
                {[...new Array(25)]
                  .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                  )
                  .join("\n")}
              </div>
            )}
          />
          <Route
            exact
            path="/saving"
            component={() => (
              <div>
                Saving Life Cycle
                {[...new Array(25)]
                  .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                  )
                  .join("\n")}
              </div>
            )}
          />
          <Route
            exact
            path="/analytics"
            component={() => (
              <div>
                Data Analytics
                {[...new Array(25)]
                  .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                  )
                  .join("\n")}
              </div>
            )}
          />
          <Route
            exact
            path="/addspare"
            component={() => (
              <div>
                Resources
                {[...new Array(25)]
                  .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                  )
                  .join("\n")}
              </div>
            )}
          />
          <Route
            exact
            path="/adduser"
            component={() => (
              <div>
                Company
                {[...new Array(25)]
                  .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                  )
                  .join("\n")}
              </div>
            )}
          />
          <Route
            exact
            path="/contact"
            component={() => (
              <div>
                Contact Us
                {[...new Array(45)]
                  .map(
                    () =>
                      `Contact UsContact UsContact UsContact UsContact UsContact UsContact UsContact UsContact Us.`
                  )
                  .join("\n")}
              </div>
            )}
          />
          <Route
            exact
            path="/book"
            component={() => (
              <div>
                Book
                {[...new Array(25)]
                  .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                  )
                  .join("\n")}
              </div>
            )}
          />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route
            exact
            path="/cart"
            render={() => <CartPage cart={cart} setCart={setCart} />}
          />
        </Switch>

        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

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
//Spare Parts Imports
import Admin from "../Admin";
import Create from "../components/admin/create";
import Edit from "../components/admin/edit";
import Delete from "../components/admin/delete";
import SparePartsUpload from "../components/uploads/spare-upload";
//Quary Imports
import AdminQuary from "../AdminQuary.js";
import CreateQuary from "../components/admin-quary/create-quary";
import EditQuary from "../components/admin-quary/edit-quary";
import DeleteQuary from "../components/admin-quary/delete-quary";
import QuaryTableContainer from "../components/QuaryTable/QuaryTableContainer";

//Roller imports
import RollerTableContainer from "./RollerTable/RollerTableContainer";
import AdminRoller from "../AdminRoller.js";
import CreateRoller from "../components/admin-roller/create-roller";
import EditRoller from "../components/admin-roller/edit-roller";
import DeleteRoller from "../components/admin-roller/delete-roller";
import RollerUpload from "../components/uploads/roller-uploads";
//import ExcelToJson from "../components/uploads/excelToJson";
import Uploads from "./uploads/uploads";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
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

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route
            exact
            path="/pdf"
            render={() => <CartPage cart={cart} setCart={setCart} />}
          />
          {/* Spare Parts Admin Routes */}
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/create" component={Create} />
          <Route exact path="/admin/edit/:id" component={Edit} />
          <Route exact path="/admin/delete/:id" component={Delete} />
          <Route exact path="/spare-upload" component={SparePartsUpload} />
          {/* Quary Admin Routes */}
          <Route exact path="/admin-quary" component={AdminQuary} />
          <Route
            exact
            path="/admin-quary/create-quary"
            component={CreateQuary}
          />
          <Route
            exact
            path="/admin-quary/edit-quary/:id"
            component={EditQuary}
          />
          <Route
            exact
            path="/admin-quary/delete-quary/:id"
            component={DeleteQuary}
          />
          <Route exact path="/sites" component={QuaryTableContainer} />
          {/* Roller Routes */}
          <Route
            exact
            path="/roller"
            render={() => (
              <RollerTableContainer cart={cart} setCart={setCart} />
            )}
          />
          <Route exact path="/admin-roller" component={AdminRoller} />
          <Route
            exact
            path="/admin-roller/create-roller"
            component={CreateRoller}
          />
          <Route
            exact
            path="/admin-roller/edit-roller/:id"
            component={EditRoller}
          />
          <Route
            exact
            path="/admin-roller/delete-roller/:id"
            component={DeleteRoller}
          />
          <Route exact path="/roller-upload" component={RollerUpload} />
          <Route exact path="/uploads" component={Uploads} />
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

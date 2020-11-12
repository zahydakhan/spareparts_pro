import React, { useState } from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <LandingPage cart={cart} setCart={setCart} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/pdf"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <Example cart={cart} setCart={setCart} />
              ) : (
                <Redirect to="/login" />
              )
            }
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
            path="/register"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <Register />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />

          {/* Spare Parts Admin Routes */}
          <Route
            exact
            path="/admin"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <Admin />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/admin/create"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <Create />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/admin/edit/:id"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <Edit />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/admin/delete/:id"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <Delete />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          {/* Quary Admin Routes */}
          <Route
            exact
            path="/admin-quary"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <AdminQuary />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/admin-quary/create-quary"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <CreateQuary />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/admin-quary/edit-quary/:id"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <EditQuary />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/admin-quary/delete-quary/:id"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <DeleteQuary />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/sites"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <QuaryTableContainer />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          {/* Roller Routes */}
          <Route
            exact
            path="/roller"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <RollerTableContainer cart={cart} setCart={setCart} />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/admin-roller"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <AdminRoller />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/admin-roller/create-roller"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <CreateRoller />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/admin-roller/edit-roller/:id"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <EditRoller />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            exact
            path="/admin-roller/delete-roller/:id"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <DeleteRoller />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          <Route
            exact
            path="/uploads"
            render={() =>
              JSON.parse(window.localStorage.getItem("user")) ? (
                <Uploads />
              ) : (
                <Redirect to="/login" />
              )
            }
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

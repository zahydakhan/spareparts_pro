import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/boral-logo.png";

// importing tabs & button
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

//importing menu
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
//import media query and responsive
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

//import Drawer and Icons for menu
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

//import List
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { NavLink } from "react-router-dom";
import Link1 from "@material-ui/core/Link";

import { useLocalState } from "../../hooks";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { connect } from "react-redux";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1.35em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.30em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.35em",
    },
  },
  logo: {
    margin: "0.5em",
    height: "5em",
    [theme.breakpoints.down("md")]: {
      height: "4em",
      margin: "0.2em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2.9em",
      margin: "0.1em",
    },
  },

  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  link: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    color: "#FFF",
    opacity: 0.7,
  },
  button: {
    ...theme.typography.demo,
    marginLeft: "20px",
    marginRight: "20px",
    height: "45px",
    backgroundColor: theme.palette.common.yellow,
  },
  logoContainer: {
    padding: 0,
  },
  menu: {
    backgroundColor: "#FFFFFF",
    color: "#2c2e2e",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
      backgroundColor: theme.palette.common.orange,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "40px",
    width: "40px",
  },
  drawer: {
    backgroundColor: "#FFFFFF",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "#2c2e2e",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    ...theme.typography.demo,
    backgroundColor: theme.palette.common.orange,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

function Header(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  //for detecting ios devices
  const iOS = process.browser && /iPad|iPhone|iPad/;

  const setValue = props.setValue;
  const value = props.value;
  const setSelectedIndex = props.setSelectedIndex;
  const selectedIndex = props.selectedIndex;

  const [loggedIn, setLoggedIn] = useLocalState("login");

  const handleChange = (e, newvalue) => {
    setValue(newvalue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);

    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);

    setOpenMenu(false);
  };

  const handleMenuItemClick = (event, i) => {
    setAnchorEl(null);

    setSelectedIndex(i);
    //setOpenMenu(false);
  };

  const menuOptions = [
    {
      name: "Data Management",
      link: "/datamanagement",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Spare Parts",
      link: "/admin",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: " Quaries",
      link: "/admin-quary",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: " Rollers",
      link: "/admin-roller",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    { name: "Spare Parts List", link: "/", activeIndex: 0 },
    {
      name: "Data Management",
      link: "/datamanagement",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "Upload Data", link: "/addspare", activeIndex: 2 },
    { name: "Quary List", link: "/company", activeIndex: 3 },
    { name: "Roller Spare List", link: "/roller", activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes, setSelectedIndex, setValue]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="secondary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Link1
        underline="none"
        color="textPrimary"
        href="#"
        className={classes.link}
        component={NavLink}
        to="/register"
      >
        Register
      </Link1>
      {localStorage.getItem("login") === "true" ? (
        <Button
          variant="contained"
          className={classes.button}
          component={Link}
          to="/logout"
          onClick={() => setLoggedIn(false)}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="contained"
          className={classes.button}
          component={Link}
          to="/login"
        >
          Login
        </Button>
      )}
      <Link to="/cart">
        <CartIcon noOfOrders={props.noOfOrders} />
      </Link>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        // disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              divider
              key={`${route}${route.activeIndex}`}
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            divider
            button
            component={Link}
            to=""
            classes={{ selected: classes.drawerItemSelected }}
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Register
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            divider
            button
            // disableTypography
            component={Link}
            to="/book"
            selected={value === 5}
          >
            <ListItemText disableTypography>Login</ListItemText>
          </ListItem>

          <Link to="/cart">
            <CartIcon noOfOrders={props.noOfOrders} />
          </Link>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
          <Toolbar position="fixed">
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
            >
              <img className={classes.logo} alt="Boral Logo" src={logo} />
            </Button>

            {matches ? drawer : tabs}

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
              style={{ zIndex: 1302 }}
              keepMounted
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={`${option}${i}`}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={(event) => {
                    handleMenuItemClick(event, i);
                    setValue(1);
                    handleClose();
                  }}
                  selected={i === selectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {props.hidden ? null : <CartDropdown />}
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});

export default connect(mapStateToProps)(Header);

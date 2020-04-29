import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { Switch, Route } from "react-router-dom";
import routes from "../Router";
import { Container } from "react-bootstrap";
let Layout = () => {
  let callForRouters = routes.map((route, key) => (
    <Route
      key={key}
      path={route.path}
      component={route.component}
      exact={route.exact}
    />
  ));
  return (
    <>
      <NavBar />
      <Container style={{ paddingTop: "50px" }}>
        <Switch>{callForRouters}</Switch>
      </Container>
    </>
  );
};
export default Layout;

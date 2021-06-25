import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import jwt_decode from "jwt-decode";
import Storage from "../utils/services/storage";
import decode from "jwt-decode";
import Alert from "../utils/notifications/Alert";

export const clearStorage = () => {
  Storage.remove("decoded-data");
  Storage.remove("user-access-token");
  Storage.remove("email-value");
  if (typeof window !== 'undefined') {
    window.location.href = "/";
}
};

const PrivateRoute = ({
  component: Component,
  currentUser,
  isAuthenticated,
  ...rest
}) => {
  const initialstate = {
    user: null,
  };

  if (Storage.get("user-access-token")) {
    const jwt_Token_decoded = jwt_decode(Storage.get("user-access-token"));

    if (jwt_Token_decoded.exp * 1000 < Date.now()) {
      Alert("error", "Session Expired!");
      clearStorage();
    } else {
      initialstate.user = jwt_Token_decoded;
    }
  }

  const userInstorage =
    Storage.get("user-access-token") &&
    decode(Storage.get("user-access-token"));

  if (!currentUser && !userInstorage) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container2">
      <Sidebar />
      <Navbar />
      <div className="container-body">
        <Route {...rest} component={Component} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);

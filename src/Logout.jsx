import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button  class="btn btn-warning lgs" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default Logout;
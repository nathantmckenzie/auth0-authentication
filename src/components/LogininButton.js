import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogininButton() {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>LOGIN</button>;
}

export default LogininButton;

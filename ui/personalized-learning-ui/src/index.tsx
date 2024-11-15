import { createRoot } from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <Auth0Provider
    domain="dev-en5ychwmohg0hxlc.us.auth0.com"
    clientId="rcPirOOhvYocG0t5fAZ6NeOt4UY3fN9F"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);

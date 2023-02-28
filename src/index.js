import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-i3r62eouvk1s60ht.us.auth0.com"
    clientId="G6of31aSXzuRIHSy1VuGUh2EuduDAZ4u"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </Auth0Provider>
);

reportWebVitals();

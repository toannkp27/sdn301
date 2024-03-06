import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import './index.css';
<<<<<<< HEAD
import store from "./redux/store";

=======
import reportWebVitals from './reportWebVitals';
>>>>>>> 72e031bc7fa8bbef817c040a7fe54aaac613c185
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'; // icons
import 'primereact/resources/primereact.min.css'; // core css
import 'primereact/resources/themes/saga-blue/theme.css'; // theme
// import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

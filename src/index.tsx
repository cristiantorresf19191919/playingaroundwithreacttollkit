import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import ReduxProvider from './store/ReduxProvider';
import CustomThemeProvider from './theme/CustomThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <CustomThemeProvider>
          <App />
        </CustomThemeProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

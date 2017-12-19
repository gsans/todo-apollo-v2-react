import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo';
import { client } from './client';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  indigo500, indigo700,
  cyan500,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
    primary2Color: indigo700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App client={client}/>
    </MuiThemeProvider>
  </ApolloProvider>, 
  document.getElementById('root')
);
registerServiceWorker();

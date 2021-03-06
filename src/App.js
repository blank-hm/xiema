import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { mainRoutes } from './routers';
import Frame from './components/Frame/index';
import 'react-quill/dist/quill.snow.css';
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Frame>
        <Switch>
          {
            mainRoutes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  render={routeProps => {
                    return <route.component {...routeProps} />
                  }}
                />
              )
            })
          }
          <Redirect to="/404" />
        </Switch>
      </Frame>
    </Provider>
  )

}

export default App;



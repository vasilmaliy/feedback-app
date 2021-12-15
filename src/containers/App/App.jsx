import './App.css';
import Feedback from '@components/Feedback';
import routesConfig from '@routes/routesConfig';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from '@components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="inner-content">
          <Header/>
          <Switch>
            {routesConfig.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

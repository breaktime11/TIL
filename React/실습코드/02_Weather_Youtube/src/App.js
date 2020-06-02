import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import NotFound from './NotFound';
import Youtube from './routes/Youtube';
import Weather from './routes/Weather';
import Blog from './routes/Blog';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route path="/youtube" component={Youtube} />
        <Route path="/weather" component={Weather} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
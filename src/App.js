import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header/Header';
import TrolleyScreen from './screens/TrolleyScreen';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <Toaster position='bottom-center' />
      <main>
        <Switch>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/trolley' component={TrolleyScreen} exact />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;

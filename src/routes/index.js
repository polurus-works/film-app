import React, { Component, Fragment } from 'react';
import { Switch, Route} from 'react-router-dom';
import MovieList from './../container/MovieList';
import MovieDetail from './../container/MovieDetail';
import Header from './../theme/header';
class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Header />
          <Switch>
            <Route path='/movie/:id' component={MovieDetail} />
            <Route path='/' component={MovieList} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
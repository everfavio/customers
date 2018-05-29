import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  renderHome = () => <h1>Home</h1>;
  renderCustomerContainer = () => <h1>Customer container</h1>;
  renderCustomerListContainer = () => <h1>Customer list container</h1>;
  renderCustomerNewContainer = () => <h1>Customer new container</h1>
  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route path="/customers/new" component={this.renderCustomerNewContainer} />
        <Route path="/customers" component={this.renderCustomerListContainer} />
        <Route path="/customers/:dni" component={this.renderCustomerContainer} />
        <Route path="/" component={HomeContainer} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;

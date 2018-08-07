import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
   return {
      // searchField: state.searchRobots.searchField
      searchField: state.searchField
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value))
   } 
}

class App extends Component {
   constructor() {
      super()
      this.state = {
         robots: []
         // searchfield: ''
      }
      // console.log('constructor');
   }

   componentDidMount() {
      // console.log(this.props.store)
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => this.setState({ robots: users }));
      // console.log('componentDidMount');
   }

/* onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
   }  
      //it's now coming down as props after incorporating Redux; so we don't need to declare onSearchChange as a method of App.js so get rid of it.
*/

   render() {
      // const { robots, searchfield } = this.state;
      const { robots } = this.state;
      const { searchField, onSearchChange } = this.props;
      const filteredRobots = robots.filter(robot => {
         return robot.name.toLowerCase().includes(searchField.toLowerCase());
      })
      // console.log('render');
      return !robots.length ?
         <h1>Loading your bots</h1> :
         (
            <div className='tc'>
               <h1 className='f1'>RoboFriends</h1>
               <SearchBox searchChange={onSearchChange} />
               <Scroll>
                  <ErrorBoundary>
                     <CardList robots={filteredRobots} />
                  </ErrorBoundary>
               </Scroll>
            </div>
         );
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
import React, { Component } from 'react';
import Header from './Header.jsx';
import Display from './Display.jsx';
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import RecipesDisplay from './RecipesDisplay.jsx';

const mapStateToProps = store => {
  return {
    // add pertinent state here
    recipes: store.recipes
      }
  };
  const mapDispatchToProps = (dispatch) => { return {
    addRating: (event) => dispatch(actions.addRating(event)),
    data:(event) => dispatch(actions.data(event))
  }};

class App extends Component{
 render() {
     return (
         <div>
            <Header />
            <Display addrating = {this.props.addRating} data ={this.props.data}/>
            <RecipesDisplay recipes = {this.props.recipes}/>
            </div>
     );
    }   
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);

connect(mapStateToProps)(App);

// export default App;
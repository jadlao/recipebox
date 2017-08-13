import React, { Component } from 'react';
import './App.css';

// Recipe component
var Recipe = React.createClass({
  render: function() {
    var recipeEntries = this.props.entries;

    function createRecipes(recipe){
      return <li key={recipe.key}>{recipe.name}</li>
    }

    var listItems = recipeEntries.map(createRecipes);

    return (
      <ul className="recipeList">
        {listItems}
      </ul>
    );
  }
});

// Recipe list component
var RecipeList = React.createClass({
  getInitialState: function(){
    return {
      recipes: []
    };
  },

  addRecipe: function(e){
    var recipeArray = this.state.recipes;

    recipeArray.push(
      {
        name: this._inputElement.value,
        ingredients: this._textareaElement.value,
        key: Date.now()
      }
    );

    this.setState({
      recipes: recipeArray
    });

    this._inputElement.value = ""
    this._textareaElement.value = ""
    e.preventDefault();
  },

  render: function(){
    return (
      <div className="recipeListMain">
        <div className="header">
          <form onSubmit={this.addRecipe}>
            <div className="form-group">
              <input className="form-control" type="text" 
              ref={(a) =>
              this._inputElement = a}
              placeholder="Enter Name of Recipe"></input>
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="3"
                ref={(a) =>
                this._textareaElement = a}
                placeholder="Enter Ingredients: E.g. Onions, Coriander, Lemon, Garlic.">
              </textarea>
            </div>
            <button className="btn btn-success" type="submit">Add Recipe</button>
          </form>
        </div>
        <Recipe entries={this.state.recipes}/>
      </div>
    );
  }
});

// App component
var App = React.createClass({
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Recipe Box</h2>
        </div>
        <p className="App-intro">
          Add and keep track of your favourite recipes below
        </p>
        <div className="recipeList container-fluid">
          <RecipeList/>
        </div>
      </div>
    );
  }
});

export default App;

// notes:
// add capability to add recipe name and ingredients
// can click on recipes and view it
// save recipes in browser local storage, refresh and still there
// add capability to edit and delete recipes
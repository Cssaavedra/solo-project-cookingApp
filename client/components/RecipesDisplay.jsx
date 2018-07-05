import React, { Component } from 'react';

class RecipesDisplay extends Component {
    
    render() {
        //grab array of results and display on this page
        console.log("in recipesDisplay",this.props.recipes.recipes);
        // this.props.recipes.recipes.forEach((element)=>{
        //     <div>element.title</div>
        // });
        let recipesArray = this.props.recipes.recipes.map((element, index) => {
            return <div key = {index + element.title}>
            <img src = {element.thumbnail}/>
                {element.title};<br/>
                <a href={element.href} >{element.href}</a><br/>
                Ingredients: {element.ingredients}<br/>
                <button> Love this Recipe!</button>
            </div>
         });
        return (
            <div>
                <h1>recipes Display</h1>
                {recipesArray}
            </div>
       );
    }
}
   
export default RecipesDisplay;
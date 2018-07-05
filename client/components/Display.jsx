import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ENETRESET } from 'constants';

class Display extends Component {
    // constructor(props) {
    //     super(props);
    //   }
    render(){
        function grabTheDetails(props){
            const detailsObject = {
                ingredients: document.getElementById('ingredient').value,
                dish: document.getElementById('dish').value
            }
         return props.data(detailsObject);
            
         //this.props.addrating(document.getElementById('ingredient').value+document.getElementById('dish').value);
        }
        return (
           <div >
               <form>
                    Ingredients:<br/>
                    <input type="text" name="ingredient" id='ingredient'/><br/>
                    Dish: <br/>
                    <input type="text" name="dish" id ='dish'/>
                </form>
                <button onClick={() =>grabTheDetails(this.props)}>Enter</button>
           </div>
       );
    }
   }
   
export default Display;
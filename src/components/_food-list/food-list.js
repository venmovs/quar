import React, {Component} from 'react';
import './food-list.css';

export default class FoodList extends Component {
    render() {
        return(
            <div className="food_wrapper">
                <div className="open__food_item">
                    <img src="Rectangle.jpg" alt="food" className="open_img"/>
                </div>
            </div>
        )
    }
};


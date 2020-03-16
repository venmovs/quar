import React, {Component} from 'react';
import './food-list.css';

export default class FoodList extends Component {
    state = {
      choose: false
    };

    OnButtonAddClick = () => {
        this.setState(({choose}) => {
            return{
                choose: !choose
            }
        })
    };

    render() {
        const {choose} = this.state;
        let classNames = "open__food_item";
        if(choose){
            classNames += ' choose';
        }
        return(
            <div className="food_wrapper">
                <div className={classNames}>
                    <img src={require('./shrimp.jpg')} alt="shrimp" className="open_img"/>
                    <div className="food_description_wrapper">
                        <div className="food_text">
                    <div className="food_tittle">Креветки на сковороде</div>
                    <div className="food_description">Креветки, томаты конкассе, соевый соус, чеснок</div>
                        </div>
                        <div className="food_digits">
                    <div className="food_weight">250 грамм</div>
                    <div className="food_cost">2400 руб</div>
                        </div>
                    </div>
                    <div className="food_add"
                    onClick={this.OnButtonAddClick}>
                        <div className="food_add_line"/>
                    </div>
                </div>
            </div>

        )
    }
};


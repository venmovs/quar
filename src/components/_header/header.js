import React, {Component} from 'react';
import './header.css';


export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="menu">
                    <div className="burger"/>
                </div>
                <div className="menu_list">Основное меню</div>
                <div className="menu_list__yellow_bg">
                    <div className="menu_item">Мезе</div>
                    <div className="menu_item">Мезе</div>
                </div>
                <form action="">
                    <label htmlFor="vol"/>
                    <input className="range_cost" type="range" id="vol" name="vol" min="0" max="50"/>
                </form>
            </div>
        );
    }
};


